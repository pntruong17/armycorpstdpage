"use client";

import React, { useState } from "react";
import { Language, GameConfig } from "../types/policy";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  config: GameConfig;
  onNotify: (msg: string) => void;
}

export const DataDeletionModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  lang,
  config,
  onNotify,
}) => {
  const [playerId, setPlayerId] = useState("");
  const [deletionType, setDeletionType] = useState("all");
  const [playerEmail, setPlayerEmail] = useState("");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const mailSubject = `[DATA DELETION REQUEST] - ${config.gameName}`;
  const mailBody = `Kính gửi Đội ngũ hỗ trợ ${config.developerName},%0D%0A%0D%0A` +
    `Tôi xin gửi yêu cầu xóa dữ liệu người chơi theo quy định Google Play Data Safety.%0D%0A` +
    `- Tên trò chơi: ${config.gameName}%0D%0A` +
    `- Player ID / Gamer ID: ${playerId || "Chưa cung cấp"}%0D%0A` +
    `- Email liên hệ của người chơi: ${playerEmail || "Chưa cung cấp"}%0D%0A` +
    `- Loại yêu cầu: ${deletionType === "all" ? "Xóa vĩnh viễn toàn bộ dữ liệu & tài khoản" : "Chỉ xóa tiến trình chơi game (Cloud Save)"}%0D%0A` +
    `- Ghi chú thêm: ${notes || "Không có"}%0D%0A%0D%0A` +
    `Xin cảm ơn!`;

  const mailtoUrl = `mailto:${config.contactEmail}?subject=${encodeURIComponent(mailSubject)}&body=${mailBody}`;

  const copyTemplate = () => {
    const textToCopy = `Tiêu đề: ${mailSubject}\n\n` +
      `Kính gửi Đội ngũ hỗ trợ ${config.developerName},\n\n` +
      `Tôi xin gửi yêu cầu xóa dữ liệu người chơi theo quy định Google Play Data Safety.\n` +
      `- Tên trò chơi: ${config.gameName}\n` +
      `- Player ID / Gamer ID: ${playerId || "[Nhập ID của bạn]"}\n` +
      `- Email liên hệ của người chơi: ${playerEmail || "[Email của bạn]"}\n` +
      `- Loại yêu cầu: ${deletionType === "all" ? "Xóa vĩnh viễn toàn bộ dữ liệu & tài khoản" : "Chỉ xóa tiến trình chơi game (Cloud Save)"}\n` +
      `- Ghi chú thêm: ${notes || "Không có"}\n\n` +
      `Gửi đến: ${config.contactEmail}`;

    navigator.clipboard.writeText(textToCopy);
    onNotify(lang === "vi" ? "Đã sao chép nội dung email yêu cầu xóa dữ liệu!" : "Copied deletion email template to clipboard!");
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title gradient-text">
            {lang === "vi" ? "Yêu Cầu Xóa Dữ Liệu Người Chơi" : "Player Data Deletion Request"}
          </div>
          <button type="button" className="close-btn" onClick={onClose} aria-label="Close modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: "1.25rem", lineHeight: "1.5" }}>
          {lang === "vi"
            ? `Theo chính sách Google Play Data Safety, bạn có thể gửi yêu cầu xóa vĩnh viễn dữ liệu của bạn trong trò chơi ${config.gameName}. Yêu cầu sẽ được xử lý trong vòng 30 ngày làm việc.`
            : `Under Google Play Data Safety policies, you have the right to request permanent erasure of your data in ${config.gameName}. Requests are processed within 30 business days.`}
        </p>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label className="form-label">
              {lang === "vi" ? "Player ID hoặc Google Play Gamer Tag (*)" : "Player ID or Google Play Gamer Tag (*)"}
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="VD: PLAYER_98214 hoặc gamer_pro_99"
              value={playerId}
              onChange={(e) => setPlayerId(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              {lang === "vi" ? "Email nhận phản hồi xác nhận" : "Your Contact Email"}
            </label>
            <input
              type="email"
              className="form-input"
              placeholder="player@example.com"
              value={playerEmail}
              onChange={(e) => setPlayerEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              {lang === "vi" ? "Phạm vi dữ liệu muốn xóa" : "Deletion Scope"}
            </label>
            <select
              className="form-select"
              value={deletionType}
              onChange={(e) => setDeletionType(e.target.value)}
            >
              <option value="all">
                {lang === "vi" ? "Xóa vĩnh viễn toàn bộ tài khoản và dữ liệu" : "Permanent Deletion of all account records"}
              </option>
              <option value="cloud">
                {lang === "vi" ? "Chỉ xóa dữ liệu lưu đám mây (Cloud Save)" : "Only Cloud Save progression data"}
              </option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">
              {lang === "vi" ? "Ghi chú thêm (Tùy chọn)" : "Additional Notes (Optional)"}
            </label>
            <textarea
              className="form-textarea"
              rows={3}
              placeholder={lang === "vi" ? "Lý do hoặc thông tin thiết bị..." : "Reason or device details..."}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
            <a
              href={mailtoUrl}
              className="btn btn-primary"
              style={{ flex: "1 1 auto" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>{lang === "vi" ? "Mở Email Để Gửi" : "Send via Email"}</span>
            </a>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={copyTemplate}
              style={{ flex: "1 1 auto" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>{lang === "vi" ? "Sao Chép Mẫu Email" : "Copy Template"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
