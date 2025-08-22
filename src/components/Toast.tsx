import { useEffect } from "react";
export default function Toast({ msg, onDone }: { msg: string; onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1800);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <div
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        padding: ".8rem 1rem",
        background: "var(--surface)",
        border: "1px solid var(--line)",
        borderRadius: "10px",
        boxShadow: "var(--shadow)",
      }}
    >
      {msg}
    </div>
  );
}
