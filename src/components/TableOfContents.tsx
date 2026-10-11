"use client";

import React, { useEffect, useState } from "react";
import { Language, GameConfig } from "../types/policy";
import { getPolicySections } from "../data/sections";

interface TOCProps {
  lang: Language;
  config: GameConfig;
}

export const TableOfContents: React.FC<TOCProps> = ({ lang, config }) => {
  const [activeId, setActiveId] = useState<string>("intro");
  const sections = getPolicySections(config);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 180;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveId(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <aside className="policy-sidebar" aria-label="Table of Contents">
      <div className="sidebar-heading">
        {lang === "vi" ? "Mục Lục Chính Sách" : "Table of Contents"}
      </div>
      <ul className="toc-list">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`toc-link ${activeId === section.id ? "active" : ""}`}
              onClick={() => setActiveId(section.id)}
            >
              <span className="toc-num">{section.number}</span>
              <span>{section.title[lang]}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
