"use client";

import React, { useState } from "react";
import { Language, GameConfig } from "../types/policy";
import { defaultGameConfig } from "../data/policyData";

interface ConfigDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  currentConfig: GameConfig;
  onSaveConfig: (newConfig: GameConfig) => void;
}

export const ConfigDrawer: React.FC<ConfigDrawerProps> = ({
  isOpen,
  onClose,
  lang,
  currentConfig,
  onSaveConfig,
}) => {
  const [formData, setFormData] = useState<GameConfig>(currentConfig);

  if (!isOpen) return null;

  const handleSdkToggle = (sdkId: string) => {
    setFormData((prev) => ({
      ...prev,
      sdks: prev.sdks.map((sdk) =>
        sdk.id === sdkId ? { ...sdk, enabled: !sdk.enabled } : sdk
      ),
    }));
  };

  const handleReset = () => {
    setFormData(defaultGameConfig);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig(formData);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "620px" }}>
        <div className="modal-header">
          <div>
            <h2 className="modal-title gradient-text" style={{ fontSize: "1.25rem" }}>
              {lang === "vi" ? "Tùy Chỉnh Thông Tin Game" : "Customize Game & Studio Details"}
            </h2>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
              {lang === "vi"
                ? "Dữ liệu được cập nhật trực tiếp trên trang chính sách của bạn."
                : "Real-time updates reflected across your entire policy page."}
            </p>
          </div>
          <button type="button" className="close-btn" onClick={onClose} aria-label="Close modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">{lang === "vi" ? "Tên Trò Chơi (Game Name)" : "Game Name"}</label>
            <input
              type="text"
              className="form-input"
              value={formData.gameName}
              onChange={(e) => setFormData({ ...formData, gameName: e.target.value })}
              required
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div className="form-group">
              <label className="form-label">{lang === "vi" ? "Nhà Phát Triển / Studio" : "Developer / Studio"}</label>
              <input
                type="text"
                className="form-input"
                value={formData.developerName}
                onChange={(e) => setFormData({ ...formData, developerName: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">{lang === "vi" ? "Email Hỗ Trợ Quyền Riêng Tư" : "Privacy Email"}</label>
              <input
                type="email"
                className="form-input"
                value={formData.contactEmail}
                onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                required
              />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div className="form-group">
              <label className="form-label">{lang === "vi" ? "Ngày Có Hiệu Lực" : "Effective Date"}</label>
              <input
                type="date"
                className="form-input"
                value={formData.effectiveDate}
                onChange={(e) => setFormData({ ...formData, effectiveDate: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">{lang === "vi" ? "Cập Nhật Lần Cuối" : "Last Updated"}</label>
              <input
                type="date"
                className="form-input"
                value={formData.lastUpdated}
                onChange={(e) => setFormData({ ...formData, lastUpdated: e.target.value })}
              />
            </div>
          </div>

          {/* Third Party SDKs Toggles */}
          <div className="form-group">
            <label className="form-label">
              {lang === "vi" ? "Các Dịch Vụ & SDK Tích Hợp (SDK Checklist)" : "Integrated Third-Party SDKs"}
            </label>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {formData.sdks.map((sdk) => (
                <label
                  key={sdk.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    padding: "0.55rem 0.85rem",
                    background: "var(--bg-tertiary)",
                    borderRadius: "var(--radius-sm)",
                    cursor: "pointer",
                    fontSize: "0.88rem",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={sdk.enabled}
                    onChange={() => handleSdkToggle(sdk.id)}
                    style={{ accentColor: "var(--accent-cyan)", width: "16px", height: "16px" }}
                  />
                  <span style={{ fontWeight: 600 }}>{sdk.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.75rem", flexWrap: "wrap", gap: "0.75rem" }}>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handleReset}
            >
              {lang === "vi" ? "Khôi phục mặc định" : "Reset Defaults"}
            </button>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                {lang === "vi" ? "Hủy" : "Cancel"}
              </button>
              <button type="submit" className="btn btn-primary">
                {lang === "vi" ? "Lưu Thay Đổi" : "Save Changes"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
