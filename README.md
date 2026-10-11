# 🎮 Game Privacy Policy & Landing Page (Google Play Console Ready)

Trang Landing Page chính sách quyền riêng tư (Privacy Policy) dành cho Mobile Game, được xây dựng với **Next.js**, **TypeScript** và **Vanilla CSS**. Được thiết kế chuẩn hóa theo các yêu cầu kiểm duyệt nghiêm ngặt của **Google Play Developer Policy**, biểu mẫu **An toàn dữ liệu (Data Safety)**, và đạo luật **COPPA**.

---

## ✨ Tính Năng Nổi Bật

- 🛡️ **Chuẩn 100% Google Play Console**: Đầy đủ các điều khoản bắt buộc về thu thập định danh máy (Android GAID), nhật ký sự cố, quyền riêng tư trẻ em, bảo mật và lưu trữ.
- 🌐 **Hỗ trợ Song Ngữ (Bilingual VI / EN)**: Chuyển đổi 1-click giữa Tiếng Việt và Tiếng Anh (thuận tiện cho đội ngũ Google Play duyệt bằng tiếng Anh và người chơi Việt Nam đọc bằng tiếng Việt).
- ⚙️ **Bảng Điều Khiển Tùy Biến (Live Config)**: Dễ dàng nhập tên game của bạn, tên Studio, email hỗ trợ và chọn các SDK quảng cáo (Google AdMob, Firebase, Unity Ads) với cập nhật trực tiếp.
- 🗑️ **Cơ chế Yêu Cầu Xóa Dữ Liệu (Data Deletion Form)**: Tích hợp sẵn form và nút tạo email yêu cầu xóa dữ liệu chuẩn theo yêu cầu Google Play Data Safety.
- 📋 **Nút Sao Chép Link 1-Click**: Tự động sao chép đường link trang web hoặc link từng mục điều khoản để dán trực tiếp vào Google Play Console.
- 🚀 **Tối ưu Deploy Miễn Phí với GitHub Pages**: Đã tích hợp sẵn GitHub Actions workflow tự động build và xuất bản.

---

## 🛠️ Cài Đặt & Chạy Thử Trên Máy (Local)

1. Cài đặt dependencies (nếu chưa cài):
   ```bash
   npm install
   ```

2. Khởi chạy dev server:
   ```bash
   npm run dev
   ```
   Mở trình duyệt tại [http://localhost:3000](http://localhost:3000).

3. Xuất file tĩnh (Static Export):
   ```bash
   npm run build
   ```
   Toàn bộ mã HTML/CSS/JS tĩnh sẽ được xuất ra thư mục `./out`.

---

## 🚀 Hướng Dẫn Đăng Lên GitHub & Deploy Miễn Phí với GitHub Pages

### Bước 1: Tạo Repository mới trên GitHub
1. Truy cập [https://github.com/new](https://github.com/new).
2. Đặt tên repository (ví dụ: `game-privacy-policy` hoặc `<ten-game>-privacy`).
3. Chọn chế độ **Public**.
4. Nhấn **Create repository**.

### Bước 2: Đẩy mã nguồn từ máy lên GitHub
Trong thư mục dự án này, mở Terminal hoặc PowerShell và chạy:

```bash
# 1. Thêm tất cả file vào git commit
git add .
git commit -m "feat: setup Next.js game privacy policy landing page"

# 2. Đổi tên branch thành main
git branch -M main

# 3. Liên kết với repository vừa tạo (thay YOUR_USERNAME và REPO_NAME bằng của bạn)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 4. Đẩy mã nguồn lên
git push -u origin main
```

### Bước 3: Kích hoạt GitHub Pages (Miễn phí)
1. Trên GitHub của bạn, vào tab **Settings** của repository.
2. Chọn menu **Pages** ở cột bên trái.
3. Trong phần **Build and deployment** -> **Source**:
   - Chọn **GitHub Actions** (Workflow `.github/workflows/deploy.yml` đã được tạo sẵn trong dự án sẽ tự động chạy!).
4. Đợi khoảng 1-2 phút, bạn sẽ nhận được đường link miễn phí dạng:
   ```text
   https://YOUR_USERNAME.github.io/REPO_NAME/
   ```

---

## 📲 Cách Lấy Link Điền Vào Google Play Console

1. **Điền URL Chính Sách Quyền Riêng Tư (App Privacy Policy URL)**:
   - Trong Google Play Console, chọn game của bạn -> Menu bên trái tìm **Nội dung ứng dụng (App content)** -> **Chính sách quyền riêng tư (Privacy Policy)**.
   - Dán đường link GitHub Pages của bạn vào: `https://YOUR_USERNAME.github.io/REPO_NAME/`.
   - Nhấn **Lưu (Save)**.

2. **Khai báo Mục An Toàn Dữ Liệu (Data Safety)**:
   - Google Play hỏi có cung cấp cơ chế yêu cầu xóa dữ liệu không? -> Chọn **Có (Yes)**.
   - Nhập URL xóa dữ liệu: `https://YOUR_USERNAME.github.io/REPO_NAME/#data-deletion`.
