"use client";

import React from "react";
import { Language } from "../types/policy";
import { dataSafetyPoints } from "../data/policyData";

interface HighlightsProps {
  lang: Language;
}

export const DataSafetyHighlights: React.FC<HighlightsProps> = ({ lang }) => {
  return (
    <section className="highlights-section" id="data-safety-summary">
      <div className="container">
        <div className="section-heading-wrapper">
          <div className="section-kicker">
            {lang === "vi" ? "Tiêu Chuẩn Bảo Mật Google Play" : "Google Play Data Safety Pillars"}
          </div>
          <h2 className="section-title">
            {lang === "vi" ? "Cam Kết An Toàn Dữ Liệu" : "Our Core Safety Commitments"}
          </h2>
        </div>

        <div className="highlights-grid">
          {dataSafetyPoints.map((point, index) => (
            <div key={index} className="card-glass highlight-card">
              <div className="highlight-icon-box">
                {index === 0 && (
                  /* Shield Icon */
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                )}
                {index === 1 && (
                  /* Lock Icon */
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                )}
                {index === 2 && (
                  /* Trash / Deletion Icon */
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                )}
                {index === 3 && (
                  /* Verified / Sparkle Icon */
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                )}
              </div>
              <h3 className="highlight-title">{point.title[lang]}</h3>
              <p className="highlight-desc">{point.desc[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
