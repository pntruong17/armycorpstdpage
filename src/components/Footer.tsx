"use client";

import React from "react";
import { Language, GameConfig } from "../types/policy";

interface FooterProps {
  lang: Language;
  config: GameConfig;
  onOpenDeletionModal: () => void;
  onOpenConfig: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  config,
  onOpenDeletionModal,
  onOpenConfig,
}) => {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.85rem" }}>
              <div className="brand-icon" style={{ width: "2rem", height: "2rem" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="6" y1="12" x2="10" y2="12"></line>
                  <line x1="8" y1="10" x2="8" y2="14"></line>
                  <line x1="15" y1="13" x2="15.01" y2="13"></line>
                  <line x1="18" y1="11" x2="18.01" y2="11"></line>
                  <rect x="2" y="6" width="20" height="12" rx="6"></rect>
                </svg>
              </div>
              <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-main)" }}>
                {config.gameName}
              </span>
            </div>
            <p style={{ maxWidth: "420px", fontSize: "0.86rem", lineHeight: "1.6" }}>
              {lang === "vi"
                ? `Cổng thông tin pháp lý & bảo mật chính thức cho trò chơi ${config.gameName}, phát hành bởi ${config.developerName}. Tuân thủ tiêu chuẩn Google Play Developer Policy và bảo vệ quyền riêng tư toàn cầu.`
                : `Official privacy and compliance portal for ${config.gameName}, published by ${config.developerName}. Fully compliant with Google Play Developer Policy and international privacy standards.`}
            </p>
          </div>

          <div>
            <div className="footer-col-title">
              {lang === "vi" ? "Liên Kết Nhanh" : "Quick Links"}
            </div>
            <ul className="footer-links">
              <li>
                <a href="#hero" className="footer-link">
                  {lang === "vi" ? "Trang Chủ" : "Home"}
                </a>
              </li>
              <li>
                <a href="#intro" className="footer-link">
                  {lang === "vi" ? "Điều Khoản Riêng Tư" : "Privacy Policy"}
                </a>
              </li>
              <li>
                <a href="#third-party" className="footer-link">
                  {lang === "vi" ? "Danh Sách SDK Tích Hợp" : "Integrated SDKs"}
                </a>
              </li>
              <li>
                <a href="#opt-out-ads" className="footer-link">
                  {lang === "vi" ? "Tắt Quảng Cáo Trên Android" : "Android Ads Settings"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">
              {lang === "vi" ? "Hỗ Trợ & Pháp Lý" : "Support & Legal"}
            </div>
            <ul className="footer-links">
              <li>
                <button
                  type="button"
                  onClick={onOpenDeletionModal}
                  className="footer-link"
                  style={{ background: "none", border: "none", padding: 0, font: "inherit", cursor: "pointer" }}
                >
                  {lang === "vi" ? "Yêu Cầu Xóa Dữ Liệu" : "Data Deletion Request"}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenConfig}
                  className="footer-link"
                  style={{ background: "none", border: "none", padding: 0, font: "inherit", cursor: "pointer" }}
                >
                  {lang === "vi" ? "Tùy Chỉnh Thông Tin Game" : "Customize Game Details"}
                </button>
              </li>
              <li>
                <a href={`mailto:${config.contactEmail}`} className="footer-link">
                  {config.contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-row">
          <div>
            © {new Date().getFullYear()} {config.developerName}. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <span>Google Play™ is a trademark of Google LLC.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
