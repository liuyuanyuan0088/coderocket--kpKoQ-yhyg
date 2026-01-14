# 東盟新能資產管理有限公司 官方網站
[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com)
[![React](https://img.shields.io/badge/React-19.1-61dafb.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8.svg)](https://tailwindcss.com/)
> 專注于東盟地區新能源資產投資管理的專業機構官方網站
## 🌐 在線訪問
## ✨ 主要功能
### 前台網站
### 管理後台 (CMS)
## 🚀 技術棧
### 核心技術
### UI 組件
### 狀態管理
## 📦 快速開始
### 安裝依賴
```bash
npm install
```
### 開發環境
```bash
npm run dev
```
訪問: http://localhost:5173
### 構建生產版本
```bash
npm run build
```
### 預覽生產版本
```bash
npm run preview
```
## 🔐 管理後台
### 訪問地址
```
https://asean-newenergy.com/admin/login
```
### 默認密碼
```
i3zzq^Mwx9D(A*t
```
### 修改密碼
編輯 `src/contexts/AuthContext.tsx`:
```typescript
const ADMIN_PASSWORD = 'your-new-password';
```
## 📁 項目結構
```
project/
├── src/
│   ├── components/          # UI 組件
│   │   ├── Navigation.tsx   # 導航欄
│   │   ├── Footer.tsx       # 頁腳
│   │   ├── Hero.tsx         # 輪播圖
│   │   ├── About.tsx        # 關於卡片
│   │   └── CoreValues.tsx   # 核心價值觀
│   │
│   ├── pages/              # 頁面組件
│   │   ├── CompanyCulture.tsx
│   │   ├── Services.tsx
│   │   ├── AboutUs.tsx
│   │   ├── News.tsx
│   │   ├── Contact.tsx
│   │   ├── AppDownload.tsx
│   │   │
│   │   └── admin/          # 管理後台
│   │       ├── AdminLogin.tsx
│   │       ├── AdminDashboard.tsx
│   │       └── Edit*.tsx   # 各種編輯頁面
│   │
│   ├── contexts/           # 全局狀態
│   │   ├── ContentContext.tsx
│   │   └── AuthContext.tsx
│   │
│   ├── config/             # 配置
│   │   └── site.ts
│   │
│   ├── App.tsx             # 主應用
│   ├── main.tsx            # 入口文件
│   └── globals.css         # 全局樣式
│
├── public/                 # 靜態資源
├── index.html             # HTML 模板
├── package.json           # 依賴配置
├── vite.config.ts         # Vite 配置
├── tailwind.config.js     # Tailwind 配置
└── tsconfig.json          # TypeScript 配置
```
## 🎨 主題色彩
## 📝 內容管理
所有內容存儲在瀏覽器的 localStorage 中：
## 🔄 數據同步
1. 在管理後台編輯內容
2. 點擊"保存更改"
3. 數據自動保存到 localStorage
4. 前台頁面實時讀取最新數據
5. 刷新頁面查看更新
## 📱 響應式設計
## 🌐 SEO 優化
## 🚀 部署
### Vercel 部署（推薦）
1. 連接 Git 倉庫到 Vercel
2. 自動檢測 Vite 項目
3. 一鍵部署
### 手動部署
```bash
npm run build
# 將 dist/ 目錄上傳到服務器
```
## 📊 瀏覽器支持
## 🤝 貢獻指南
歡迎提交 Issues 和 Pull Requests！
## 📄 許可證
© 2024 東盟新能資產管理有限公司. All rights reserved.
## 📞 聯繫方式
Made with ❤️ using React + TypeScript + Vite + Tailwind CSS
**Version 2.0.0** - 最新版本 | 2024年1月