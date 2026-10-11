import { GameConfig } from "../types/policy";

export const defaultGameConfig: GameConfig = {
  gameName: "Army Corps TD",
  developerName: "Army Corps Studio",
  contactEmail: "pntruong17@gmail.com",
  effectiveDate: "2025-01-01",
  lastUpdated: "2026-10-11",
  websiteUrl: "https://pntruong17.github.io/armycorpstdpage",
  appCategory: "Mobile Game / Chiến Thuật & Thủ Thành",
  targetAudience: "teens_adults",
  sdks: [
    {
      id: "google-play-services",
      name: "Google Play Services",
      purpose: {
        vi: "Xác thực tài khoản người chơi, lưu trữ đám mây (Cloud Save), bảng xếp hạng và thành tích.",
        en: "Player authentication, cloud save game state, leaderboards, and achievement tracking."
      },
      policyUrl: "https://policies.google.com/privacy",
      enabled: true
    },
    {
      id: "admob",
      name: "Google AdMob",
      purpose: {
        vi: "Hiển thị quảng cáo biểu ngữ, quảng cáo xen kẽ và video phần thưởng hỗ trợ duy trì trò chơi miễn phí.",
        en: "Displaying banner, interstitial, and rewarded video ads to support free game access."
      },
      policyUrl: "https://policies.google.com/technologies/ads",
      enabled: true
    },
    {
      id: "firebase",
      name: "Google Firebase Analytics & Crashlytics",
      purpose: {
        vi: "Thu thập nhật ký sự cố (crash logs), phân tích hành vi người chơi để sửa lỗi và tối ưu hiệu năng game.",
        en: "Collecting crash reports and analyzing game stability and performance to improve gameplay."
      },
      policyUrl: "https://firebase.google.com/support/privacy",
      enabled: true
    },
    {
      id: "unity-ads",
      name: "Unity Ads / ironSource",
      purpose: {
        vi: "Mạng lưới quảng cáo video phần thưởng tương tác trong trò chơi.",
        en: "In-game interactive and rewarded video advertisement network."
      },
      policyUrl: "https://unity.com/legal/privacy-policy",
      enabled: true
    }
  ]
};

export const dataSafetyPoints = [
  {
    icon: "shield-check",
    title: {
      vi: "Không bán dữ liệu",
      en: "No Data Selling"
    },
    desc: {
      vi: "Chúng tôi cam kết không bao giờ bán, cho thuê hay thương mại hóa dữ liệu cá nhân của người chơi cho bên thứ ba.",
      en: "We strictly never sell, rent, or trade your personal player data to any external third parties."
    }
  },
  {
    icon: "lock-closed",
    title: {
      vi: "Mã hóa trong khi truyền tải",
      en: "Encrypted in Transit"
    },
    desc: {
      vi: "Tất cả thông tin trao đổi giữa game và máy chủ đều được mã hóa bằng giao thức bảo mật cao cấp HTTPS / TLS 1.3.",
      en: "All telemetry and network communication are encrypted end-to-end using industry standard HTTPS / TLS 1.3 protocols."
    }
  },
  {
    icon: "trash-bin",
    title: {
      vi: "Quyền yêu cầu xóa dữ liệu",
      en: "Data Deletion Rights"
    },
    desc: {
      vi: "Người chơi có toàn quyền yêu cầu xóa vĩnh viễn mọi dữ liệu cá nhân và tiến trình game bất kỳ lúc nào.",
      en: "Players can request full permanent deletion of their account records and gameplay data at any time."
    }
  },
  {
    icon: "sparkles",
    title: {
      vi: "Chuẩn Google Play Console",
      en: "Google Play Compliant"
    },
    desc: {
      vi: "Đầy đủ điều khoản kiểm duyệt của Google Play Developer Policy, biểu mẫu An toàn dữ liệu (Data Safety) và COPPA.",
      en: "Fully compliant with Google Play Data Safety policies, target audience guidelines, and privacy regulations."
    }
  }
];
