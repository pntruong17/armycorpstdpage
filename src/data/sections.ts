import { GameConfig } from "../types/policy";

export interface PolicySectionItem {
  id: string;
  number: string;
  iconName: string;
  title: {
    vi: string;
    en: string;
  };
  summary: {
    vi: string;
    en: string;
  };
  getContent: (config: GameConfig) => {
    vi: string;
    en: string;
  };
}

export const getPolicySections = (config: GameConfig): PolicySectionItem[] => [
  {
    id: "intro",
    number: "01",
    iconName: "book",
    title: {
      vi: "Giới thiệu & Phạm vi áp dụng",
      en: "1. Introduction & Scope"
    },
    summary: {
      vi: "Cam kết bảo vệ quyền riêng tư người chơi của " + config.developerName + " đối với trò chơi " + config.gameName + ".",
      en: "Privacy commitment by " + config.developerName + " regarding the mobile game " + config.gameName + "."
    },
    getContent: (cfg) => ({
      vi: `Chính sách quyền riêng tư này mô tả cách thức **${cfg.developerName}** ("chúng tôi", "nhà phát triển") thu thập, sử dụng, lưu trữ và bảo vệ thông tin khi bạn tải về, cài đặt và trải nghiệm trò chơi di động **${cfg.gameName}** trên nền tảng Google Play Store.

Chúng tôi hiểu rằng sự riêng tư của người chơi là ưu tiên hàng đầu. Chúng tôi cam kết minh bạch tuyệt đối về mọi dữ liệu được xử lý nhằm mang lại trải nghiệm chơi game an toàn, công bằng và mượt mà nhất. Khi tải về hoặc tiếp tục sử dụng trò chơi này, bạn đồng ý với việc thu thập và sử dụng thông tin theo quy định trong Chính sách này.`,
      en: `This Privacy Policy outlines how **${cfg.developerName}** ("we", "our", or "the Developer") collects, uses, stores, and safeguards your information when you download, install, and play the mobile game **${cfg.gameName}** distributed on the Google Play Store.

We respect your personal privacy and are committed to complete transparency regarding any data processed during gameplay. By downloading, accessing, or playing our game, you acknowledge and agree to the practices outlined in this policy.`
    })
  },
  {
    id: "data-collection",
    number: "02",
    iconName: "database",
    title: {
      vi: "Dữ liệu chúng tôi thu thập",
      en: "2. Information We Collect"
    },
    summary: {
      vi: "Phân loại các nhóm dữ liệu kỹ thuật, định danh quảng cáo và tiến trình trò chơi.",
      en: "Categories of technical diagnostics, advertising IDs, and gameplay save data collected."
    },
    getContent: (cfg) => ({
      vi: `Trong quá trình vận hành trò chơi **${cfg.gameName}**, chúng tôi và các đối tác dịch vụ bên thứ ba có thể thu thập các loại dữ liệu sau:

### a. Thông tin thiết bị và mạng (Device & Network Information)
- **Định danh thiết bị (Device Identifiers):** Mã định danh quảng cáo của Google (Google Advertising ID - GAID), mã định danh ngẫu nhiên phiên bản cài đặt (App Set ID).
- **Thông số kỹ thuật phần cứng:** Mẫu máy (Device Model), nhà sản xuất, phiên bản hệ điều hành Android, độ phân giải màn hình, dung lượng RAM, chip đồ họa (GPU).
- **Dữ liệu mạng:** Địa chỉ IP (được rút gọn/ẩn danh hóa để xác định vùng địa lý cấp quốc gia/thành phố cho việc phân phát máy chủ phù hợp), loại kết nối (Wi-Fi hoặc dữ liệu di động).

### b. Nhật ký trò chơi & Phân tích lỗi (Gameplay & Diagnostics Data)
- **Dữ liệu phân tích hành vi:** Thời lượng phiên chơi, các màn chơi đã vượt qua, cấp độ nhân vật, vật phẩm trong game, điểm số và thành tựu đã mở khóa.
- **Nhật ký sự cố (Crash Logs):** Dấu vết ngăn xếp (stack traces), trạng thái bộ nhớ tại thời điểm văng game thông qua Firebase Crashlytics để đội ngũ lập trình viên kịp thời khắc phục lỗi.

### c. Giao dịch mua hàng trong ứng dụng (In-App Purchases - IAP)
- Nếu trò chơi có tính năng mua vật phẩm số, toàn bộ giao dịch thanh toán được xử lý trực tiếp và độc quyền bởi **Google Play In-App Billing**.
- Chúng tôi **tuyệt đối KHÔNG** thu thập, lưu trữ hay có quyền truy cập vào thông tin thẻ tín dụng, tài khoản ngân hàng hay mật khẩu thanh toán của bạn. Chúng tôi chỉ nhận được mã biên lai xác thực từ Google Play để cấp phát vật phẩm tương ứng.`,
      en: `While operating **${cfg.gameName}**, we and our integrated third-party SDK partners may collect the following categories of data:

### a. Device & Network Technical Information
- **Device Identifiers:** Google Advertising ID (GAID), App Set ID, and anonymized installation identifiers.
- **Hardware Specifications:** Device manufacturer, hardware model, Android OS version, display resolution, available memory (RAM), and GPU specifications.
- **Network Data:** IP address (coarsely localized to determine country/region for latency optimization) and connection type (Wi-Fi or cellular).

### b. Gameplay Telemetry & Crash Diagnostics
- **Gameplay Analytics:** Session duration, stage progression, character levels, in-game currency earnings, achievements unlocked, and leaderboard scores.
- **Crash Diagnostics:** Crash stack traces and memory snapshots collected via Firebase Crashlytics to diagnose and patch software crashes quickly.

### c. In-App Purchase Transactions
- All virtual item transactions are processed directly and securely through the **Google Play Billing System**.
- We **NEVER** collect, receive, or store your credit card details, banking credentials, or personal payment methods. We only receive an anonymous purchase token to fulfill your ordered digital goods.`
    })
  },
  {
    id: "data-usage",
    number: "03",
    iconName: "cpu",
    title: {
      vi: "Mục đích sử dụng dữ liệu",
      en: "3. How We Use Your Data"
    },
    summary: {
      vi: "Cung cấp tính năng game, tối ưu hóa độ ổn định, hiển thị quảng cáo phù hợp và bảo vệ an toàn.",
      en: "Powering gameplay mechanics, crash prevention, ad rendering, and anti-fraud protections."
    },
    getContent: (cfg) => ({
      vi: `Dữ liệu được thu thập chỉ phục vụ các mục đích hợp pháp và minh bạch sau:
1. **Duy trì hoạt động trò chơi:** Lưu trữ tiến trình (Cloud Save), đồng bộ bảng xếp hạng, khôi phục dữ liệu nhân vật khi đổi máy.
2. **Khắc phục sự cố và nâng cao chất lượng:** Phát hiện nhanh các thiết bị gặp lỗi khung hình (lag), treo game hoặc không tương thích để phát hành bản cập nhật sửa lỗi.
3. **Hiển thị quảng cáo hỗ trợ game miễn phí:** Cung cấp quảng cáo phần thưởng (xem video nhận thưởng vật phẩm) và quảng cáo banner thông qua các mạng quảng cáo được Google chứng nhận.
4. **Bảo mật và chống gian lận:** Phát hiện các hành vi can thiệp trái phép vào dữ liệu game (hack, mod, cheat) nhằm bảo vệ tính công bằng cho toàn thể cộng đồng người chơi.`,
      en: `The collected information is used solely for legitimate, transparent purposes:
1. **Core Gameplay Operations:** Maintaining game states, enabling cloud saves via Google Play Games Services, and synchronizing global leaderboards.
2. **Quality Assurance & Bug Resolution:** Detecting device-specific performance bottlenecks, crashes, and visual glitches to deploy rapid hotfixes.
3. **Advertising Support for Free Access:** Serving rewarded video advertisements (e.g. revive or bonus gems) and banners via Google-certified ad networks.
4. **Security & Anti-Cheat Enforcement:** Detecting unauthorized client modifications, memory hacking, and automated bots to safeguard fair play for all players.`
    })
  },
  {
    id: "third-party",
    number: "04",
    iconName: "layers",
    title: {
      vi: "Dịch vụ & SDK bên thứ ba",
      en: "4. Third-Party Services & SDKs"
    },
    summary: {
      vi: "Danh sách chi tiết các thư viện SDK tích hợp và liên kết đến chính sách bảo mật chính thức của từng đối tác.",
      en: "Comprehensive directory of integrated third-party SDKs and direct links to their official privacy policies."
    },
    getContent: (cfg) => ({
      vi: `Trò chơi **${cfg.gameName}** tích hợp một số Bộ công cụ phát triển phần mềm (SDK) từ các nhà cung cấp uy tín hàng đầu nhằm cung cấp dịch vụ hạ tầng, phân tích và quảng cáo. Mỗi đối tác này tuân thủ các quy chuẩn bảo mật nghiêm ngặt. Dưới đây là danh sách chi tiết:`,
      en: `The game **${cfg.gameName}** integrates Software Development Kits (SDKs) from industry-standard service providers to enable analytics, cloud saves, and advertising. Each partner adheres to strict privacy frameworks. Below is the full disclosure list:`
    })
  },
  {
    id: "data-retention-security",
    number: "05",
    iconName: "lock",
    title: {
      vi: "Lưu trữ, Bảo mật & Thời hạn giữ liệu",
      en: "5. Storage, Security & Retention"
    },
    summary: {
      vi: "Các biện pháp bảo vệ kỹ thuật số tiên tiến và nguyên tắc lưu trữ dữ liệu tối thiểu.",
      en: "Advanced cryptographic safeguards and data minimization retention policies."
    },
    getContent: (cfg) => ({
      vi: `### a. Biện pháp an ninh mạng
- **Mã hóa đường truyền:** Toàn bộ dữ liệu trao đổi giữa game và hệ thống máy chủ được mã hóa bằng chuẩn **Transport Layer Security (TLS 1.3 / HTTPS)**.
- **Kiểm soát truy cập nghiêm ngặt:** Chỉ các kỹ sư được phân quyền mới có thể truy cập vào hệ sinh thái dữ liệu phân tích, có xác thực hai lớp (2FA).
- **Nguyên tắc giảm thiểu dữ liệu:** Chúng tôi chỉ thu thập đúng những trường thông tin tối thiểu cần thiết để trò chơi có thể vận hành ổn định.

### b. Thời hạn lưu trữ dữ liệu (Data Retention)
- Dữ liệu phân tích sự cố (Crashlytics): Tự động xóa sau 90 đến 180 ngày theo chính sách chuẩn của Google Firebase.
- Dữ liệu lưu trữ tiến trình game: Được giữ nguyên chừng nào người chơi còn duy trì tài khoản Google Play Games hoặc đến khi người chơi gửi yêu cầu xóa dữ liệu.`,
      en: `### a. Cybersecurity Safeguards
- **In-Transit Encryption:** All network traffic between the mobile application and server infrastructure is protected via **TLS 1.3 / HTTPS encryption**.
- **Restricted Access Controls:** Only authorized technical personnel with multi-factor authentication (2FA) have administrative access to crash telemetry systems.
- **Data Minimization:** We only process the absolute minimum data required for game mechanics and stability.

### b. Retention Periods
- Crash telemetry (Crashlytics): Retained for 90 to 180 days before automated deletion in accordance with Google Firebase standards.
- Cloud Save Data: Maintained as long as your Google Play Games account is active, or until you initiate an explicit data deletion request.`
    })
  },
  {
    id: "data-deletion",
    number: "06",
    iconName: "trash",
    title: {
      vi: "Quyền của bạn & Cơ chế yêu cầu xóa dữ liệu",
      en: "6. User Rights & Data Deletion Mechanism"
    },
    summary: {
      vi: "Thực hiện cam kết Google Play Data Safety: Quy trình 3 bước gửi yêu cầu xóa vĩnh viễn dữ liệu người chơi.",
      en: "Mandatory Google Play Data Safety fulfillment: 3-step workflow to request permanent player data deletion."
    },
    getContent: (cfg) => ({
      vi: `Theo quy định của Google Play Store và các luật bảo vệ quyền riêng tư quốc tế (GDPR, CCPA), bạn có toàn quyền:
1. **Xem và tra cứu** các thông tin liên quan đến tài khoản trò chơi của bạn.
2. **Yêu cầu sửa đổi** thông tin nếu có sai sót.
3. **Yêu cầu xóa vĩnh viễn (Data Deletion Request):** Xóa toàn bộ tiến trình game, lịch sử sự kiện và dữ liệu định danh liên quan đến thiết bị của bạn.

### Cách thức gửi yêu cầu xóa dữ liệu (Quy trình chuẩn Google Play):
- **Bước 1:** Gửi email trực tiếp đến địa chỉ hỗ trợ của chúng tôi: **[${cfg.contactEmail}](mailto:${cfg.contactEmail})** với tiêu đề \`[DATA DELETION] - ${cfg.gameName}\`. Bạn cũng có thể nhấn trực tiếp vào nút **"Yêu Cầu Xóa Dữ Liệu"** trên trang này.
- **Bước 2:** Cung cấp thông tin nhận diện tài khoản của bạn (ví dụ: Google Play Gamer ID, hoặc mã Player ID trong phần Cài đặt game).
- **Bước 3:** Chúng tôi sẽ phản hồi xác nhận và tiến hành thanh lọc, xóa bỏ toàn bộ dữ liệu trong vòng **30 ngày làm việc**. Sau khi hoàn tất, chúng tôi sẽ gửi email thông báo xác nhận kết quả cho bạn.`,
      en: `Under Google Play Developer Policy and international privacy frameworks (GDPR, CCPA), you hold full rights to:
1. **Access & Inspect** data associated with your gameplay account.
2. **Rectify** any inaccurate personal records.
3. **Request Permanent Erasure (Data Deletion):** Erase all cloud saves, player analytics, and associated advertising identifiers.

### Standard Deletion Procedure (Google Play Data Safety Compliant):
- **Step 1:** Dispatch an email directly to our support desk: **[${cfg.contactEmail}](mailto:${cfg.contactEmail})** with the subject line \`[DATA DELETION REQUEST] - ${cfg.gameName}\` or click the **"Request Data Deletion"** button on this page.
- **Step 2:** Provide your in-game Player ID or Google Play Gamer tag to identify your records.
- **Step 3:** Our engineering team will review and permanently purge your records across all systems within **30 business days**, followed by a written confirmation email.`
    })
  },
  {
    id: "children-privacy",
    number: "07",
    iconName: "child",
    title: {
      vi: "Quyền riêng tư của trẻ em (COPPA & GDPR-K)",
      en: "7. Children's Privacy (COPPA & Family Policy)"
    },
    summary: {
      vi: "Tuân thủ đạo luật Bảo vệ Quyền riêng tư của Trẻ em trên Mạng và Quy chuẩn Gia đình của Google Play.",
      en: "Compliance with Children's Online Privacy Protection Act and Google Play Families Policy."
    },
    getContent: (cfg) => ({
      vi: `Chúng tôi đặc biệt quan tâm đến sự an toàn và quyền riêng tư của trẻ em:
- Trò chơi **${cfg.gameName}** không hướng trực tiếp đến trẻ em dưới 13 tuổi (hoặc dưới 16 tuổi tại khu vực Liên minh Châu Âu theo GDPR-K).
- Chúng tôi **không chủ ý thu thập** bất kỳ thông tin nhận dạng cá nhân nào từ trẻ em dưới độ tuổi quy định.
- Nếu bạn là phụ huynh hoặc người giám hộ hợp pháp và phát hiện con bạn đã cung cấp thông tin cá nhân cho chúng tôi mà không có sự đồng ý của cha mẹ, vui lòng liên hệ ngay với chúng tôi qua email: **[${cfg.contactEmail}](mailto:${cfg.contactEmail})**. Chúng tôi sẽ khẩn trương xác minh và xóa bỏ dữ liệu đó ngay lập tức.`,
      en: `Protecting younger players' privacy is of paramount importance:
- The game **${cfg.gameName}** is not primarily directed toward children under 13 years of age (or under 16 in the European Economic Area under GDPR-K).
- We **do not knowingly solicit or collect** personally identifiable information from children without verified parental consent.
- If you are a parent or legal guardian and believe that your child has submitted personal details to us without authorization, please immediately contact us at **[${cfg.contactEmail}](mailto:${cfg.contactEmail})**. We will investigate and purge such records promptly.`
    })
  },
  {
    id: "opt-out-ads",
    number: "08",
    iconName: "sliders",
    title: {
      vi: "Hướng dẫn tắt quảng cáo cá nhân hóa trên Android",
      en: "8. Opting Out of Targeted Advertising on Android"
    },
    summary: {
      vi: "Các bước đơn giản để đặt lại hoặc xóa bỏ mã định danh quảng cáo GAID trực tiếp trong cài đặt điện thoại Android.",
      en: "Simple step-by-step instructions to reset or delete your Google Advertising ID in Android system settings."
    },
    getContent: () => ({
      vi: `Nếu bạn không muốn nhận quảng cáo dựa trên sở thích cá nhân, hệ điều hành Android của Google cho phép bạn dễ dàng kiểm soát hoặc xóa bỏ mã nhận diện quảng cáo bất kỳ lúc nào:

1. Mở ứng dụng **Cài đặt (Settings)** trên điện thoại Android của bạn.
2. Cuộn xuống và chọn mục **Google** (hoặc **Dịch vụ Google**).
3. Nhấn vào mục **Quảng cáo (Ads)**.
4. Chọn một trong các tùy chọn:
   - **Xóa mã nhận diện quảng cáo (Delete advertising ID):** Ngăn chặn hoàn toàn mọi ứng dụng trên máy theo dõi mã GAID của bạn.
   - **Đặt lại mã nhận diện quảng cáo (Reset advertising ID):** Làm mới hoàn toàn lịch sử quảng cáo về số 0.
   - Hoặc bật tùy chọn **Từ chối cá nhân hóa quảng cáo (Opt out of Ads Personalization)** đối với các phiên bản Android cũ hơn.`,
      en: `If you prefer not to receive personalized interest-based advertising, Android provides native system controls to reset or erase your identifier at any time:

1. Open your Android device **Settings** app.
2. Navigate to **Google** (or **Google Services**).
3. Tap on **Ads**.
4. Choose either:
   - **Delete advertising ID:** Permanently prevents all apps on your device from tracking your GAID.
   - **Reset advertising ID:** Generates a fresh random identifier, severing previous ad profile histories.
   - Or toggle on **Opt out of Ads Personalization** on earlier Android releases.`
    })
  },
  {
    id: "changes-contact",
    number: "09",
    iconName: "clock",
    title: {
      vi: "Hiệu lực, Cập nhật & Thông tin liên hệ",
      en: "9. Policy Updates & Official Contact Channels"
    },
    summary: {
      vi: "Thông tin pháp lý của nhà phát triển và kênh giải đáp thắc mắc chính thức.",
      en: "Official developer entity credentials and inquiry contact channels."
    },
    getContent: (cfg) => ({
      vi: `### a. Cập nhật chính sách
Chúng tôi có thể định kỳ cập nhật Chính sách quyền riêng tư này để phản ánh những thay đổi trong trò chơi, quy định mới của Google Play Console hoặc luật pháp hiện hành. Khi có thay đổi, ngày "Cập nhật lần cuối" ở đầu trang sẽ được làm mới. Mọi cập nhật sẽ có hiệu lực ngay khi được công bố trên trang web này.

### b. Kênh liên hệ chính thức
Nếu bạn có bất kỳ câu hỏi, thắc mắc, phản hồi hoặc cần hỗ trợ về quyền riêng tư, vui lòng liên hệ trực tiếp với chúng tôi:
- **Nhà phát triển / Studio:** ${cfg.developerName}
- **Email hỗ trợ quyền riêng tư:** [${cfg.contactEmail}](mailto:${cfg.contactEmail})
- **Tên trò chơi:** ${cfg.gameName}
- **Website chính thức:** [${cfg.websiteUrl || "Đang cập nhật"}](${cfg.websiteUrl || "#"})
- **Ngày có hiệu lực:** ${cfg.effectiveDate}
- **Cập nhật lần cuối:** ${cfg.lastUpdated}`,
      en: `### a. Policy Amendments
We may periodically update this Privacy Policy to reflect gameplay modifications, Google Play policy revisions, or legal requirements. Any modifications will be posted directly to this URL, with the updated "Last Revised" date indicated at the top. Continued gameplay following updates constitutes acceptance.

### b. Official Contact Channels
For any privacy questions, data requests, or compliance inquiries, please contact our privacy compliance desk directly:
- **Developer / Entity:** ${cfg.developerName}
- **Privacy Support Email:** [${cfg.contactEmail}](mailto:${cfg.contactEmail})
- **Application Title:** ${cfg.gameName}
- **Official Portal:** [${cfg.websiteUrl || "Coming Soon"}](${cfg.websiteUrl || "#"})
- **Effective Date:** ${cfg.effectiveDate}
- **Last Revised:** ${cfg.lastUpdated}`
    })
  }
];
