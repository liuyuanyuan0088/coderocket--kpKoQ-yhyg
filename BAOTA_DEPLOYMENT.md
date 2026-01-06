# 宝塔面板部署指南
## 📋 准备工作
### 1. 本地构建项目
在你的电脑上，进入项目目录，运行：
```bash
# 安装依赖（如果还没安装）
npm install
# 构建生产版本
npm run build
```
构建完成后，会在项目根目录生成一个 `dist` 文件夹，这就是要上传到服务器的文件。
## 🚀 宝塔面板部署步骤
### 第一步：登录宝塔面板
1. 打开浏览器，访问你的宝塔面板地址：
  ```
  http://你的服务器IP:8888
  ```
2. 输入宝塔账号和密码登录
### 第二步：创建网站
1. **点击左侧菜单"网站"**
2. **点击"添加站点"按钮**
3. **填写网站信息：**
  ```
  域名：asean-newenergy.com
  备注：東盟新能資產管理有限公司
  根目录：/www/wwwroot/asean-newenergy.com
  FTP：不创建
  数据库：不创建
  PHP版本：纯静态
  ```
4. **点击"提交"**
### 第三步：上传网站文件
#### 方法一：使用宝塔文件管理器（推荐）
1. **在宝塔面板，点击左侧"文件"**
2. **进入网站目录：**
  ```
  /www/wwwroot/asean-newenergy.com
  ```
3. **删除默认文件**
  - 删除目录中的所有默认文件（如 index.html, 404.html 等）
4. **上传构建文件**
  - 点击"上传"按钮
  - 选择本地 `dist` 文件夹中的**所有文件**
  - 或者将 `dist` 文件夹打包成 zip，上传后解压
5. **确保文件结构正确：**
  ```
  /www/wwwroot/asean-newenergy.com/
  ├── index.html
  ├── assets/
  │   ├── index-xxx.js
  │   ├── index-xxx.css
  │   └── ...
  └── vite.svg
  ```
#### 方法二：使用FTP工具（FileZilla）
1. **下载并安装 FileZilla**
  - 访问：https://filezilla-project.org
2. **连接到服务器**
  - 主机：你的服务器IP
  - 用户名：root（或宝塔提供的FTP账号）
  - 密码：服务器密码
  - 端口：22
3. **上传文件**
  - 在右侧窗口进入：`/www/wwwroot/asean-newenergy.com`
  - 在左侧窗口选择本地 `dist` 文件夹中的所有文件
  - 拖拽上传
### 第四步：配置Nginx（重要！）
**React单页应用需要特殊的Nginx配置，否则刷新页面会404！**
1. **在宝塔面板，点击"网站"**
2. **找到 asean-newenergy.com，点击"设置"**
3. **点击"配置文件"标签**
4. **找到 `location /` 部分，替换为：**
```nginx
location / {
   try_files $uri $uri/ /index.html;
   index index.html;
}
# 如果有静态资源缓存需求，添加：
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
   expires 7d;
   add_header Cache-Control "public, immutable";
}
```
5. **完整的配置文件应该类似：**
```nginx
server {
   listen 80;
   server_name asean-newenergy.com www.asean-newenergy.com;
   root /www/wwwroot/asean-newenergy.com;
   index index.html;
   # 关键配置：支持前端路由
   location / {
       try_files $uri $uri/ /index.html;
   }
   # 静态资源缓存
   location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
       expires 7d;
       add_header Cache-Control "public, immutable";
   }
   # 禁止访问隐藏文件
   location ~ /\. {
       deny all;
   }
   access_log /www/wwwlogs/asean-newenergy.com.log;
   error_log /www/wwwlogs/asean-newenergy.com.error.log;
}
```
6. **保存配置**
7. **重启Nginx**
  - 点击左侧"软件商店"
  - 找到"Nginx"
  - 点击"重载配置"或"重启"
### 第五步：绑定域名
1. **在网站设置中，点击"域名管理"**
2. **添加域名：**
  ```
  asean-newenergy.com
  www.asean-newenergy.com
  ```
3. **保存设置**
### 第六步：配置SSL证书（HTTPS）
#### 方法一：使用Let's Encrypt免费证书（推荐）
1. **在网站设置中，点击"SSL"标签**
2. **选择"Let's Encrypt"**
3. **填写邮箱地址**
4. **勾选域名：**
  - ✅ asean-newenergy.com
  - ✅ www.asean-newenergy.com
5. **点击"申请"**
6. **等待证书申请成功**
7. **开启"强制HTTPS"**
  - 这样HTTP会自动跳转到HTTPS
#### 方法二：上传自己的证书
1. **在SSL标签，选择"其他证书"**
2. **粘贴证书内容：**
  - 证书(PEM格式)
  - 密钥(KEY)
3. **保存并部署**
### 第七步：测试网站
1. **访问网站：**
  ```
  https://asean-newenergy.com
  ```
2. **测试所有页面：**
  - ✅ 首页
  - ✅ 公司文化
  - ✅ 服务与解决方案
  - ✅ 关于我们
  - ✅ 新闻中心
  - ✅ 联系我们
  - ✅ App下载
  - ✅ 管理后台：https://asean-newenergy.com/admin/login
3. **测试刷新功能：**
  - 访问任意内页
  - 按 F5 刷新
  - 应该正常显示，不会出现404
## 🔧 DNS配置（在域名注册商处）
### 如果使用宝塔服务器
1. **登录Gname域名控制台**
2. **修改DNS解析记录：**
  **删除之前的记录，添加新的：**
  ```
  记录类型：A
  主机记录：@
  记录值：[你的宝塔服务器IP地址]
  TTL：600
  ```
  ```
  记录类型：A
  主机记录：www
  记录值：[你的宝塔服务器IP地址]
  TTL：600
  ```
3. **等待DNS生效（10-30分钟）**
## 📊 常见问题解决
### Q1: 刷新页面出现404
**解决方案：**
### Q2: 网站显示"403 Forbidden"
**解决方案：**
 ```bash
 chmod -R 755 /www/wwwroot/asean-newenergy.com
 ```
### Q3: CSS/JS文件加载失败
**解决方案：**
### Q4: 管理后台无法访问
**解决方案：**
### Q5: HTTPS证书申请失败
**解决方案：**
## 🎯 部署检查清单
部署完成后，请检查以下项目：
## 🚀 性能优化建议
### 1. 开启Gzip压缩
在宝塔面板 → 软件商店 → Nginx → 配置修改：
```nginx
# 开启Gzip
gzip on;
gzip_min_length 1k;
gzip_comp_level 6;
gzip_types text/plain text/css text/javascript application/json application/javascript application/x-javascript application/xml;
gzip_vary on;
```
### 2. 配置浏览器缓存
已在上面的Nginx配置中包含。
### 3. 开启HTTP/2
在网站设置 → SSL → 开启HTTP/2
### 4. CDN加速（可选）
## 📞 需要帮助？
如果遇到问题：
1. **查看错误日志：**
  ```
  /www/wwwlogs/asean-newenergy.com.error.log
  ```
2. **检查Nginx状态：**
  - 宝塔面板 → 软件商店 → Nginx → 查看日志
3. **重启服务：**
  - 重启Nginx
  - 重启服务器（如果必要）
**部署完成！你的网站现在可以通过 https://asean-newenergy.com 访问了！** 🎉