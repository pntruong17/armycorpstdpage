"use client";

import React, { useState, useEffect } from "react";
import { Language, GameConfig } from "../types/policy";
import { defaultGameConfig } from "../data/policyData";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { DataSafetyHighlights } from "../components/DataSafetyHighlights";
import { TableOfContents } from "../components/TableOfContents";
import { PolicyContent } from "../components/PolicyContent";
import { DataDeletionModal } from "../components/DataDeletionModal";
import { ConfigDrawer } from "../components/ConfigDrawer";
import { FloatingActions } from "../components/FloatingActions";
import { Footer } from "../components/Footer";

export default function Home() {
  const [lang, setLang] = useState<Language>("vi");
  const [config, setConfig] = useState<GameConfig>(defaultGameConfig);
  const [isDeletionOpen, setIsDeletionOpen] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load saved preferences from localStorage on client mount
  useEffect(() => {
    try {
      const savedConfig = localStorage.getItem("game_privacy_config");
      if (savedConfig) {
        setConfig(JSON.parse(savedConfig));
      }
      const savedLang = localStorage.getItem("game_privacy_lang") as Language;
      if (savedLang === "vi" || savedLang === "en") {
        setLang(savedLang);
      }
    } catch {
      // LocalStorage error fallback
    }
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleToggleLang = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem("game_privacy_lang", newLang);
    } catch {
      // ignore
    }
    showToast(newLang === "vi" ? "Đã chuyển sang Tiếng Việt 🇻🇳" : "Switched to English 🌐");
  };

  const handleSaveConfig = (newConfig: GameConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem("game_privacy_config", JSON.stringify(newConfig));
    } catch {
      // ignore
    }
    showToast(lang === "vi" ? "Đã lưu cài đặt game thành công!" : "Game settings updated successfully!");
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      const url = window.location.href.split("#")[0];
      navigator.clipboard.writeText(url);
      showToast(
        lang === "vi"
          ? "Đã sao chép Link Chính sách! Bạn có thể dán vào Google Play Console."
          : "Policy URL copied! Ready to paste into Google Play Console."
      );
    }
  };

  const handleCopySectionLink = (sectionId: string) => {
    if (typeof window !== "undefined") {
      const url = `${window.location.href.split("#")[0]}#${sectionId}`;
      navigator.clipboard.writeText(url);
      showToast(
        lang === "vi"
          ? `Đã sao chép link mục #${sectionId}!`
          : `Copied section link #${sectionId}!`
      );
    }
  };

  return (
    <div className="page-wrapper">
      {/* Toast Notification */}
      {toastMessage && (
        <aside className="toast-notice" role="alert" aria-live="polite">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>{toastMessage}</span>
        </aside>
      )}

      {/* Header */}
      <Header
        lang={lang}
        onToggleLang={handleToggleLang}
        config={config}
        onOpenConfig={() => setIsConfigOpen(true)}
        onCopyLink={handleCopyLink}
      />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero
          lang={lang}
          config={config}
          onOpenDeletionModal={() => setIsDeletionOpen(true)}
          onOpenConfig={() => setIsConfigOpen(true)}
        />

        {/* Highlights Section */}
        <DataSafetyHighlights lang={lang} />

        {/* Policy Content and Sidebar Layout */}
        <div className="container">
          <div className="policy-main-layout">
            {/* Sticky Table of Contents */}
            <TableOfContents lang={lang} config={config} />

            {/* Comprehensive Policy Document */}
            <PolicyContent
              lang={lang}
              config={config}
              onOpenDeletionModal={() => setIsDeletionOpen(true)}
              onCopySectionLink={handleCopySectionLink}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        config={config}
        onOpenDeletionModal={() => setIsDeletionOpen(true)}
        onOpenConfig={() => setIsConfigOpen(true)}
      />

      {/* Floating Action Pill */}
      <FloatingActions
        lang={lang}
        onCopyLink={handleCopyLink}
        onOpenDeletionModal={() => setIsDeletionOpen(true)}
      />

      {/* Interactive Modals */}
      <DataDeletionModal
        isOpen={isDeletionOpen}
        onClose={() => setIsDeletionOpen(false)}
        lang={lang}
        config={config}
        onNotify={showToast}
      />

      <ConfigDrawer
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        lang={lang}
        currentConfig={config}
        onSaveConfig={handleSaveConfig}
      />
    </div>
  );
}
