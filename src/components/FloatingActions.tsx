"use client";

import React from "react";
import { Language } from "../types/policy";

interface FloatingProps {
  lang: Language;
  onCopyLink: () => void;
  onOpenDeletionModal: () => void;
}

export const FloatingActions: React.FC<FloatingProps> = ({
  lang,
  onCopyLink,
  onOpenDeletionModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="floating-bar" id="floating-actions-bar" role="toolbar" aria-label="Quick actions">
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={onCopyLink}
        title={lang === "vi" ? "Sao chép link trang để dán vào Google Play Console" : "Copy policy URL for Google Play Console"}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <span>{lang === "vi" ? "Copy Link Play Console" : "Copy Console Link"}</span>
      </button>

      <button
        type="button"
        className="btn btn-purple btn-sm"
        onClick={onOpenDeletionModal}
        title={lang === "vi" ? "Yêu cầu xóa dữ liệu" : "Data deletion request"}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
        </svg>
        <span>{lang === "vi" ? "Xóa Dữ Liệu" : "Data Deletion"}</span>
      </button>

      <button
        type="button"
        className="btn btn-secondary btn-sm"
        onClick={scrollToTop}
        title={lang === "vi" ? "Lên đầu trang" : "Back to top"}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </div>
  );
};
