"use client";

import React from "react";
import { Language, GameConfig } from "../types/policy";

interface HeroProps {
  lang: Language;
  config: GameConfig;
  onOpenDeletionModal: () => void;
  onOpenConfig: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  config,
  onOpenDeletionModal,
  onOpenConfig,
}) => {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        {/* Compliance Badges */}
        <div className="hero-tag">
          <span className="badge badge-cyan badge-pulse">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            Google Play Console Ready
          </span>
          <span className="badge badge-purple" style={{ marginLeft: "0.5rem" }}>
            Data Safety & COPPA Compliant
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="hero-title" id="main-hero-title">
          {lang === "vi" ? (
            <>
              Chính Sách Quyền Riêng Tư <span className="gradient-text">{config.gameName}</span>
            </>
          ) : (
            <>
              Privacy Policy for <span className="gradient-text">{config.gameName}</span>
            </>
          )}
        </h1>

        {/* Hero Subtitle */}
        <p className="hero-desc">
          {lang === "vi"
            ? `Tài liệu pháp lý chính thức công bố minh bạch về quyền riêng tư, cách thức xử lý dữ liệu và cam kết an toàn thông tin người chơi của ${config.developerName} theo đúng tiêu chuẩn kiểm duyệt của Google Play Store.`
            : `Official transparency statement regarding user privacy, diagnostic data handling, and player security standards maintained by ${config.developerName} in full accordance with Google Play Store Developer Policies.`}
        </p>

        {/* Metadata Card Grid */}
        <div className="hero-meta-grid">
          <div className="meta-item">
            <div className="meta-label">{lang === "vi" ? "Tên Trò Chơi" : "Application"}</div>
            <div className="meta-value">{config.gameName}</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">{lang === "vi" ? "Nhà Phát Triển" : "Developer / Studio"}</div>
            <div className="meta-value">{config.developerName}</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">{lang === "vi" ? "Email Hỗ Trợ" : "Support Email"}</div>
            <div className="meta-value">{config.contactEmail}</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">{lang === "vi" ? "Cập Nhật Lần Cuối" : "Last Revised"}</div>
            <div className="meta-value">{config.lastUpdated}</div>
          </div>
        </div>

        {/* Hero CTA Buttons */}
        <div className="hero-cta-group">
          <a href="#policy-content" className="btn btn-primary" id="hero-read-policy-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>{lang === "vi" ? "Xem Toàn Bộ Chính Sách" : "Read Full Policy"}</span>
          </a>

          <button
            type="button"
            className="btn btn-purple"
            id="hero-data-deletion-btn"
            onClick={onOpenDeletionModal}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
            <span>{lang === "vi" ? "Yêu Cầu Xóa Dữ Liệu" : "Request Data Deletion"}</span>
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            id="hero-customize-btn"
            onClick={onOpenConfig}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
            <span>{lang === "vi" ? "Tùy Chỉnh Thông Tin" : "Customize Settings"}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
