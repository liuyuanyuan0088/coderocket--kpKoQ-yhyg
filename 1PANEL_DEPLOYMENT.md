# 1Panel 部署指南
## 🎯 为什么选择1Panel？
1Panel是国产开源的现代化服务器管理面板：
**官网：** https://1panel.cn
## 📋 安装1Panel
### 前提条件
### 一键安装
```bash
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && bash quick_start.sh
```
### 安装过程
1. 选择安装目录（默认回车即可）
2. 设置面板端口（默认10086）
3. 设置安全入口（建议自定义）
4. 设置管理员账号和密码
5. 等待安装完成
### 安装完成后
访问面板：
```
http://你的服务器IP:10086/安全入口
```
例如：
```
http://123.45.67.89:10086/your_secret_path
```
## 🚀 部署React项目
### 第一步：安装运行环境
1. **登录1Panel面板**
2. **安装OpenResty（推荐）或Nginx**
  - 点击"应用商店"
  - 搜索"OpenResty"或"Nginx"
  - 点击"安装"
  - 等待安装完成
### 第二步：创建网站
1. **点击"网站"菜单**
2. **点击"创建网站"**
3. **填写网站信息：**
  ```
  网站类型：静态网站
  域名：asean-newenergy.com
  别名：东盟新能资产管理
  网站目录：/opt/1panel/apps/nginx/data/www/asean-newenergy
  PHP版本：无（静态网站不需要）
  ```
4. **点击"确认"**
### 第三步：上传网站文件
1. **构建项目**
  在本地电脑，项目目录运行：
  ```bash
  npm install
  npm run build
  ```
  生成 `dist` 文件夹
2. **上传文件**
  **方法一：使用1Panel文件管理器**
  - 点击"文件"菜单
  - 进入网站目录：`/opt/1panel/apps/nginx/data/www/asean-newenergy`
  - 点击"上传"
  - 上传 `dist` 文件夹中的所有文件
  **方法二：使用SFTP工具**
  - 使用FileZilla等工具连接服务器
  - 上传文件到网站目录
3. **检查文件结构**
  ```
  /opt/1panel/apps/nginx/data/www/asean-newenergy/
  ├── index.html
  ├── assets/
  │   ├── index-xxx.js
  │   ├── index-xxx.css
  │   └── ...
  └── vite.svg
  ```
### 第四步：配置Nginx
1. **在"网站"页面，找到你的网站**
2. **点击"配置"按钮**
3. **修改配置文件**
  找到 `location /` 部分，修改为：
  ```nginx
  location / {
      try_files $uri $uri/ /index.html;
      index index.html;
  }
  # 静态资源缓存
  location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
      expires 7d;
      add_header Cache-Control "public, immutable";
  }
  ```
4. **保存并重启Nginx**
### 第五步：配置域名
1. **在网站设置中，添加域名**
  - 主域名：`asean-newenergy.com`
  - 别名：`www.asean-newenergy.com`
2. **配置DNS**
  在Gname域名管理中：
  ```
  A记录：@ → [你的服务器IP]
  A记录：www → [你的服务器IP]
  ```
### 第六步：配置SSL证书
1. **在网站设置中，点击"HTTPS"**
2. **选择"Let's Encrypt"**
3. **填写邮箱并申请证书**
4. **开启"强制HTTPS"**
5. **等待证书申请成功**
## ✅ 部署完成！
访问你的网站：
```
https://asean-newenergy.com
```
## 🎨 1Panel特色功能
### 1. 应用商店
### 2. Docker管理
### 3. 数据库管理
### 4. 文件管理
### 5. 系统监控
## 🆚 1Panel vs 宝塔对比
| 特性 | 1Panel | 宝塔 |
|------|--------|------|
| **开源** | ✅ 完全开源 | ❌ 闭源 |
| **免费** | ✅ 完全免费 | ⚠️ 部分功能付费 |
| **界面** | 🎨 现代化 | 📱 传统 |
| **性能** | ⚡ 更快 | 👍 良好 |
| **资源占用** | 💾 更少 | 📊 较多 |
| **Docker** | ✅ 完整支持 | ✅ 支持 |
| **安全性** | 🔒 开源更安全 | 🔐 闭源 |
| **更新** | 🚀 快速 | 📅 定期 |
## 🔧 常见问题
### Q1: 1Panel和宝塔哪个好？
**A:** 1Panel更现代、免费、开源，推荐使用。宝塔功能成熟但部分收费。
### Q2: 1Panel稳定吗？
**A:** 非常稳定，很多企业在使用，社区活跃。
### Q3: 可以从宝塔迁移到1Panel吗？
**A:** 可以！1Panel兼容宝塔的网站结构。
### Q4: 支持哪些Linux系统？
**A:** 
## 📞 获取帮助
**1Panel - 现代化的开源服务器管理面板！** 🎉