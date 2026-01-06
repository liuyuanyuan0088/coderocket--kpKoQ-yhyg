# Vercel 部署指南（最简单的部署方式）
## 🎯 为什么选择Vercel？
## 📋 部署步骤
### 第一步：准备项目
确保你的项目包含以下文件：
**不需要构建！** Vercel会自动构建。
### 第二步：注册Vercel账号
1. **访问 Vercel 官网**
  ```
  https://vercel.com
  ```
2. **点击 "Sign Up" 注册**
  - 推荐使用GitHub账号登录（最方便）
  - 或使用邮箱注册
3. **完成注册验证**
### 第三步：部署项目
#### 方法一：从GitHub部署（推荐）
1. **将项目上传到GitHub**
  ```bash
  # 如果还没有Git仓库
  git init
  git add .
  git commit -m "Initial commit"
  # 创建GitHub仓库并推送
  # 在GitHub创建新仓库：asean-newenergy
  git remote add origin https://github.com/你的用户名/asean-newenergy.git
  git push -u origin main
  ```
2. **在Vercel导入项目**
  - 登录Vercel
  - 点击 "Add New..." → "Project"
  - 选择 "Import Git Repository"
  - 选择你的GitHub仓库：`asean-newenergy`
  - 点击 "Import"
3. **配置项目（Vercel自动识别）**
  - Framework Preset: Vite ✅（自动识别）
  - Build Command: `npm run build` ✅（自动填写）
  - Output Directory: `dist` ✅（自动填写）
  **不需要修改任何配置！**
4. **点击 "Deploy"**
  - Vercel开始自动构建和部署
  - 等待1-2分钟
5. **完成！**
  - 部署成功后，Vercel会给你一个免费域名：
    ```
    https://asean-newenergy.vercel.app
    ```
  - 立即就能访问你的网站！
#### 方法二：直接上传项目
1. **在Vercel点击 "Add New..." → "Project"**
2. **点击 "Browse" 上传项目文件夹**
  - 选择你的项目文件夹
  - 上传整个项目（不需要先构建）
3. **配置和部署**
  - 同上面的步骤3-5
### 第四步：绑定自定义域名
1. **在Vercel项目中，点击 "Settings"**
2. **点击左侧 "Domains"**
3. **添加域名**
  - 输入：`asean-newenergy.com`
  - 点击 "Add"
4. **配置DNS记录**
  Vercel会显示需要添加的DNS记录：
  **在Gname域名管理中添加：**
  **方式一：A记录（推荐）**
  ```
  类型：A
  主机记录：@
  记录值：76.76.21.21
  TTL：600
  ```
  ```
  类型：CNAME
  主机记录：www
  记录值：cname.vercel-dns.com
  TTL：600
  ```
  **方式二：CNAME记录**
  ```
  类型：CNAME
  主机记录：@
  记录值：cname.vercel-dns.com
  TTL：600
  ```
5. **等待DNS生效（10-30分钟）**
6. **Vercel自动配置HTTPS**
  - DNS生效后，Vercel自动配置SSL证书
  - 无需任何操作！
7. **完成！**
  - 访问：`https://asean-newenergy.com`
  - 网站正常运行，全球CDN加速！
## 🔄 自动部署设置
**如果从GitHub部署，每次推送代码都会自动重新部署！**
```bash
# 更新代码
git add .
git commit -m "Update website"
git push
# Vercel自动检测更新并重新部署
# 1-2分钟后，网站自动更新！
```
## ⚙️ 环境变量设置
如果你的项目需要环境变量：
1. **在Vercel项目中，点击 "Settings"**
2. **点击 "Environment Variables"**
3. **添加变量：**
  ```
  VITE_API_URL=https://api.example.com
  ```
4. **重新部署**
## 📊 性能和功能
### Vercel提供的免费功能：
## 🆚 Vercel vs 宝塔对比
| 特性 | Vercel | 宝塔 |
|------|--------|------|
| **难度** | ⭐ 超简单 | ⭐⭐⭐ 需要学习 |
| **配置** | 零配置 | 需要配置Nginx |
| **HTTPS** | 自动配置 | 需要手动申请 |
| **CDN** | 全球CDN | 需要额外配置 |
| **成本** | 免费 | 需要服务器费用 |
| **速度** | 超快 | 取决于服务器 |
| **维护** | 无需维护 | 需要维护服务器 |
| **更新** | 自动部署 | 手动上传 |
## 🎯 最佳实践
### 1. 使用GitHub部署
### 2. 配置自定义域名
### 3. 设置环境变量
### 4. 使用预览部署
## 🔍 常见问题
### Q1: Vercel免费吗？
**A:** 个人项目完全免费！商业项目有付费计划，但功能更强大。
### Q2: 速度快吗？
**A:** 非常快！Vercel使用全球CDN，中国大陆访问速度也很好。
### Q3: 可以绑定自己的域名吗？
**A:** 可以！而且完全免费，自动配置HTTPS。
### Q4: 需要信用卡吗？
**A:** 不需要！免费计划不需要信用卡。
### Q5: 可以部署后台吗？
**A:** Vercel主要用于前端和静态网站。如果需要后台，推荐使用Vercel + Supabase组合。
## 🚀 立即开始！
**3分钟部署你的网站：**
1. 访问 https://vercel.com
2. 用GitHub登录
3. 导入你的项目
4. 点击Deploy
5. 完成！
**就这么简单！** 🎉
## 📞 需要帮助？
Vercel有完善的文档和社区：