import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import type { ReactNode } from "react";
import type { CartItem, Product } from "../types";

type State = { items: CartItem[] };
type Action =
  | { type: "ADD"; product: Product; qty?: number }
  | { type: "REMOVE"; id: string }
  | { type: "SET_QTY"; id: string; qty: number }
  | { type: "CLEAR" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD": {
      const qty = action.qty ?? 1;
      const idx = state.items.findIndex((i) => i.product.id === action.product.id);
      if (idx >= 0) {
        const copy = [...state.items];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
        return { items: copy };
      }
      return { items: [...state.items, { product: action.product, qty }] };
    }
    case "REMOVE":
      return { items: state.items.filter((i) => i.product.id !== action.id) };
    case "SET_QTY": {
      if (action.qty <= 0) return { items: state.items.filter((i) => i.product.id !== action.id) };
      return { items: state.items.map((i) => (i.product.id === action.id ? { ...i, qty: action.qty } : i)) };
    }
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

type Ctx = {
  items: CartItem[];
  add: (p: Product, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};
const CartCtx = createContext<Ctx | null>(null);

const STORAGE_KEY = "cart:v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as State) : { items: [] };
    } catch {
      return { items: [] };
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const { count, subtotal } = useMemo(() => {
    const count = state.items.reduce((n, i) => n + i.qty, 0);
    const subtotal = state.items.reduce((sum, i) => sum + i.qty * i.product.price, 0);
    return { count, subtotal };
  }, [state]);

  const value: Ctx = {
    items: state.items,
    add: (p, qty) => dispatch({ type: "ADD", product: p, qty }),
    remove: (id) => dispatch({ type: "REMOVE", id }),
    setQty: (id, qty) => dispatch({ type: "SET_QTY", id, qty }),
    clear: () => dispatch({ type: "CLEAR" }),
    count,
    subtotal,
  };
  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
