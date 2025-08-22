import { useEffect } from "react";

type Props = {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
};

export default function Head({ title, description, canonical, ogImage }: Props) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = description;
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    if (ogImage) {
      let og = document.querySelector('meta[property="og:image"]') as HTMLMetaElement | null;
      if (!og) {
        og = document.createElement("meta");
        og.setAttribute("property", "og:image");
        document.head.appendChild(og);
      }
      og.setAttribute("content", ogImage);
    }
  }, [title, description, canonical, ogImage]);

  return null; // nieko nerenderinam, tik meta tagus valdome
}
