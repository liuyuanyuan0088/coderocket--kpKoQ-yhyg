# 東盟新能資產管理有限公司
专注于东盟地区新能源资产投资管理的专业机构。
## 🌐 网站地址
## 📋 项目概述
这是一个使用 React + TypeScript + Vite + Tailwind CSS 构建的企业官网，包含完整的内容管理系统。
## ✨ 主要功能
### 前台网站
### 管理后台
## 🚀 快速开始
### 安装依赖
```bash
npm install
```
### 开发环境
```bash
npm run dev
```
访问: http://localhost:5173
### 构建生产版本
```bash
npm run build
```
### 预览生产版本
```bash
npm run preview
```
## 🔐 管理后台
### 访问地址
```
https://asean-newenergy.com/admin/login
```
### 默认密码
```
admin123
```
### 修改密码
编辑 `src/contexts/AuthContext.tsx`:
```typescript
const ADMIN_PASSWORD = 'your-new-password';
```
## 📁 项目结构
```
project/
├── src/
│   ├── components/          # UI 组件
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   └── CoreValues.tsx
│   │
│   ├── pages/              # 页面组件
│   │   ├── CompanyCulture.tsx
│   │   ├── Services.tsx
│   │   ├── AboutUs.tsx
│   │   ├── News.tsx
│   │   ├── CompanyNews.tsx
│   │   ├── IndustryNews.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   ├── AppDownload.tsx
│   │   │
│   │   └── admin/          # 管理后台
│   │       ├── AdminLogin.tsx
│   │       ├── AdminDashboard.tsx
│   │       └── Edit*.tsx
│   │
│   ├── contexts/           # 全局状态
│   │   ├── ContentContext.tsx
│   │   └── AuthContext.tsx
│   │
│   ├── config/             # 配置
│   │   └── site.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── globals.css
│
├── public/
├── vercel.json
├── vite.config.ts
└── package.json
```
## 🛠️ 技术栈
## 📝 内容管理
所有内容存储在浏览器的 localStorage 中：
## 🎨 样式定制
主题色在 `tailwind.config.js` 和 `src/globals.css` 中配置。
主要颜色：
## 🔄 数据同步
1. 在管理后台编辑内容
2. 点击"保存更改"
3. 数据保存到 localStorage
4. 前台页面自动读取最新数据
5. 刷新页面查看更新
## 📱 响应式设计
## 🌐 SEO 优化
## 🚀 部署
### Vercel 部署（推荐）
1. **连接 Git 仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. **Vercel 自动部署**
   - 登录 Vercel Dashboard
   - Import Git Repository
   - 选择项目
   - 点击 Deploy
3. **配置自定义域名**
   - 进入 Project Settings → Domains
   - 添加 `asean-newenergy.com`
   - 按照提示配置 DNS
### 手动部署
```bash
npm run build
# 将 dist/ 目录上传到服务器
```
## 📊 浏览器支持
## 🤝 贡献
欢迎提交 Issues 和 Pull Requests！
## 📄 许可证
© 2024 東盟新能資產管理有限公司. All rights reserved.
## 📞 联系方式
Made with ❤️ using React + TypeScript + Vite + Tailwind CSS