"use client";

import React, { useState, useMemo } from "react";
import { Language, GameConfig } from "../types/policy";
import { getPolicySections } from "../data/sections";

interface PolicyContentProps {
  lang: Language;
  config: GameConfig;
  onOpenDeletionModal: () => void;
  onCopySectionLink: (id: string) => void;
}

export const PolicyContent: React.FC<PolicyContentProps> = ({
  lang,
  config,
  onOpenDeletionModal,
  onCopySectionLink,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const sections = useMemo(() => getPolicySections(config), [config]);

  // Filter sections based on search query
  const filteredSections = useMemo(() => {
    if (!searchTerm.trim()) return sections;
    const term = searchTerm.toLowerCase();
    return sections.filter((s) => {
      const title = s.title[lang].toLowerCase();
      const content = s.getContent(config)[lang].toLowerCase();
      return title.includes(term) || content.includes(term);
    });
  }, [sections, config, lang, searchTerm]);

  // Helper to parse simple markdown (paragraphs, bold, links, lists) safely
  const renderFormattedContent = (rawText: string) => {
    const lines = rawText.split("\n");
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];
    let listType: "ul" | "ol" | null = null;

    const flushList = (keyPrefix: number) => {
      if (currentList.length > 0 && listType) {
        if (listType === "ul") {
          elements.push(
            <ul key={`ul-${keyPrefix}`}>
              {currentList.map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
              ))}
            </ul>
          );
        } else {
          elements.push(
            <ol key={`ol-${keyPrefix}`}>
              {currentList.map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
              ))}
            </ol>
          );
        }
        currentList = [];
        listType = null;
      }
    };

    const formatInline = (text: string) => {
      let formatted = text
        // Bold: **text**
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        // Inline code: `code`
        .replace(/`([^`]+)`/g, "<code style='background:rgba(255,255,255,0.08);padding:0.15rem 0.4rem;border-radius:4px;font-family:monospace;'>$1</code>")
        // Links: [text](url)
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
      return formatted;
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("### ")) {
        flushList(index);
        elements.push(
          <h3 key={index} id={`h3-${index}`}>
            {trimmed.replace("### ", "")}
          </h3>
        );
      } else if (trimmed.startsWith("- ")) {
        if (listType !== "ul") {
          flushList(index);
          listType = "ul";
        }
        currentList.push(trimmed.replace(/^- \s*/, ""));
      } else if (/^\d+\.\s/.test(trimmed)) {
        if (listType !== "ol") {
          flushList(index);
          listType = "ol";
        }
        currentList.push(trimmed.replace(/^\d+\.\s*/, ""));
      } else if (trimmed.length > 0) {
        flushList(index);
        elements.push(
          <p key={index} dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }} />
        );
      }
    });

    flushList(lines.length + 10);
    return elements;
  };

  return (
    <div className="policy-content-area" id="policy-content">
      {/* Search Toolbar */}
      <div className="policy-toolbar">
        <div className="search-input-box">
          <svg className="search-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            id="policy-search-input"
            className="search-input"
            placeholder={
              lang === "vi"
                ? "Tìm kiếm điều khoản (AdMob, xóa dữ liệu, GAID, trẻ em...)"
                : "Search terms (e.g. AdMob, data deletion, GAID, children...)"
            }
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {searchTerm && (
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => setSearchTerm("")}
          >
            {lang === "vi" ? "Xóa tìm kiếm" : "Clear Search"}
          </button>
        )}
      </div>

      {filteredSections.length === 0 ? (
        <div className="card-glass" style={{ padding: "3rem", textAlign: "center" }}>
          <p style={{ color: "var(--text-muted)" }}>
            {lang === "vi"
              ? "Không tìm thấy điều khoản nào khớp với từ khóa tìm kiếm."
              : "No policy section matched your search term."}
          </p>
        </div>
      ) : (
        filteredSections.map((section) => {
          const contentObj = section.getContent(config);
          const rawContent = contentObj[lang];

          return (
            <article
              key={section.id}
              id={section.id}
              className="policy-section-card"
            >
              <div className="section-header-row">
                <div className="section-header-title-box">
                  <span className="section-num-badge">{section.number}</span>
                  <h2 className="section-card-title">{section.title[lang]}</h2>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => onCopySectionLink(section.id)}
                  title={lang === "vi" ? "Sao chép link mục này" : "Copy section link"}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                  <span>Link</span>
                </button>
              </div>

              <div className="section-body-content">
                {renderFormattedContent(rawContent)}

                {/* Section Specific Enhancements: Third Party SDK Table */}
                {section.id === "third-party" && (
                  <div className="sdk-table-wrapper">
                    <table className="sdk-table">
                      <thead>
                        <tr>
                          <th>{lang === "vi" ? "Tên Dịch Vụ / SDK" : "Service / SDK Name"}</th>
                          <th>{lang === "vi" ? "Mục Đích Tích Hợp" : "Purpose & Function"}</th>
                          <th>{lang === "vi" ? "Chính Sách Đối Tác" : "Partner Privacy Policy"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {config.sdks.filter((sdk) => sdk.enabled).map((sdk) => (
                          <tr key={sdk.id}>
                            <td className="sdk-name-cell">
                              <div>{sdk.name}</div>
                              <span className="sdk-badge">
                                {lang === "vi" ? "Đang Tích Hợp" : "Active SDK"}
                              </span>
                            </td>
                            <td>{sdk.purpose[lang]}</td>
                            <td>
                              <a
                                href={sdk.policyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary btn-sm"
                                style={{ display: "inline-flex", whiteSpace: "nowrap" }}
                              >
                                {lang === "vi" ? "Xem Chính Sách ↗" : "View Policy ↗"}
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Section Specific Enhancements: Data Deletion Callout Banner */}
                {section.id === "data-deletion" && (
                  <div className="deletion-highlight-banner">
                    <div className="deletion-banner-text">
                      <h4>
                        {lang === "vi"
                          ? "Quy Trình Xử Lý Yêu Cầu Xóa Dữ Liệu"
                          : "Direct Data Deletion Channel"}
                      </h4>
                      <p>
                        {lang === "vi"
                          ? `Đáp ứng yêu cầu Google Play Data Safety: Nhấn vào đây để tạo mẫu yêu cầu xóa dữ liệu gửi đến ${config.contactEmail}.`
                          : `Google Play Data Safety compliant: Generate your player deletion ticket directly to ${config.contactEmail}.`}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="btn btn-purple"
                      onClick={onOpenDeletionModal}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      </svg>
                      <span>
                        {lang === "vi" ? "Mở Mẫu Xóa Dữ Liệu" : "Open Deletion Form"}
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </article>
          );
        })
      )}
    </div>
  );
};
