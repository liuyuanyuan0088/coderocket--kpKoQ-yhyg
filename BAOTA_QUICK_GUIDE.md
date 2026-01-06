# 宝塔部署快速指南（5分钟版）
## 1️⃣ 本地构建
```bash
npm install
npm run build
```
## 2️⃣ 宝塔创建网站
## 3️⃣ 上传文件
## 4️⃣ 配置Nginx
在网站设置 → 配置文件中，将 `location /` 部分改为：
```nginx
location / {
   try_files $uri $uri/ /index.html;
   index index.html;
}
```
保存并重启Nginx
## 5️⃣ 配置DNS
在Gname域名管理中：
```
A记录：@ → [你的宝塔服务器IP]
A记录：www → [你的宝塔服务器IP]
```
## 6️⃣ 配置SSL
网站设置 → SSL → Let's Encrypt → 申请证书 → 开启强制HTTPS
## ✅ 完成！
访问：https://asean-newenergy.com