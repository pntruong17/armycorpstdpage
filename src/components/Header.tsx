"use client";

import React from "react";
import { Language, GameConfig } from "../types/policy";

interface HeaderProps {
  lang: Language;
  onToggleLang: (lang: Language) => void;
  config: GameConfig;
  onOpenConfig: () => void;
  onCopyLink: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  config,
  onOpenConfig,
  onCopyLink,
}) => {
  return (
    <header className="site-header" id="site-header">
      <div className="container">
        <div className="header-inner">
          <a href="#hero" className="brand-wrapper" id="header-brand-link">
            <div className="brand-icon">
              {/* Gamepad SVG icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="6" y1="12" x2="10" y2="12"></line>
                <line x1="8" y1="10" x2="8" y2="14"></line>
                <line x1="15" y1="13" x2="15.01" y2="13"></line>
                <line x1="18" y1="11" x2="18.01" y2="11"></line>
                <rect x="2" y="6" width="20" height="12" rx="6"></rect>
              </svg>
            </div>
            <div className="brand-title">
              <span>{config.gameName}</span>
              <span className="brand-sub">
                {lang === "vi" ? "Trung Tâm Quyền Riêng Tư & Pháp Lý" : "Privacy & Legal Center"}
              </span>
            </div>
          </a>

          <div className="nav-actions">
            {/* Language Switcher */}
            <div className="lang-toggle" role="group" aria-label="Language selector">
              <button
                type="button"
                id="lang-vi-btn"
                className={`lang-btn ${lang === "vi" ? "active" : ""}`}
                onClick={() => onToggleLang("vi")}
              >
                🇻🇳 VI
              </button>
              <button
                type="button"
                id="lang-en-btn"
                className={`lang-btn ${lang === "en" ? "active" : ""}`}
                onClick={() => onToggleLang("en")}
              >
                🌐 EN
              </button>
            </div>

            {/* Quick Config Drawer trigger */}
            <button
              type="button"
              id="header-config-btn"
              className="btn btn-secondary btn-sm"
              onClick={onOpenConfig}
              title={lang === "vi" ? "Chỉnh sửa thông tin game" : "Customize game info"}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
              <span>{lang === "vi" ? "Sửa thông tin" : "Edit Details"}</span>
            </button>

            {/* Copy Policy Link Button */}
            <button
              type="button"
              id="header-copy-link-btn"
              className="btn btn-primary btn-sm"
              onClick={onCopyLink}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>{lang === "vi" ? "Sao chép link" : "Copy Link"}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
