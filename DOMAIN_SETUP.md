# 域名配置指南
## 📋 域名信息
 - 主DNS: a.share-dns.com
 - 辅助DNS: b.share-dns.net
## 🔧 配置步骤
### 第一步：更新域名的DNS服务器
1. 登录你的域名注册商控制台（购买域名的网站）
2. 找到域名 `asean-newenergy.com` 的管理页面
3. 进入DNS管理或名称服务器设置
4. 将DNS服务器修改为：
  ```
  a.share-dns.com
  b.share-dns.net
  ```
5. 保存设置
### 第二步：配置DNS解析记录
登录DNS服务商控制台（a.share-dns.com），添加以下记录：
#### A记录配置（指向服务器IP）
```
记录类型: A
主机记录: @
记录值: [需要CodeRocket提供的服务器IP地址]
TTL: 600
```
#### CNAME记录配置（www子域名）
```
记录类型: CNAME
主机记录: www
记录值: assetmanagement.coderocket.app
TTL: 600
```
#### 可选：CNAME记录配置（根域名）
如果DNS服务商支持根域名CNAME：
```
记录类型: CNAME
主机记录: @
记录值: assetmanagement.coderocket.app
TTL: 600
```
### 第三步：等待DNS生效
### 第四步：验证配置
使用以下命令检查DNS是否生效：
```bash
# Windows/Mac/Linux
nslookup asean-newenergy.com
# 详细查询
dig asean-newenergy.com
# 检查www子域名
nslookup www.asean-newenergy.com
```
## ✅ 配置成功后
当DNS生效后，你可以通过以下地址访问网站：
## ⚠️ 注意事项
1. **DNS服务器更新时间**
  - 更新DNS服务器后，可能需要24-48小时全球生效
  - 建议提前配置，避免影响网站访问
2. **HTTPS证书**
  - 域名生效后，需要配置SSL证书
  - CodeRocket平台可能会自动配置Let's Encrypt免费证书
  - 如需自定义证书，请联系技术支持
3. **备用访问地址**
  - 在自定义域名配置期间，可以继续使用：
  - https://assetmanagement.coderocket.app
4. **DNS记录优先级**
  - A记录优先级高于CNAME记录
  - 建议使用A记录配置根域名(@)
  - 使用CNAME记录配置子域名(www)
## 🔍 常见问题
### Q: DNS已经配置但网站无法访问？
A: 请检查：
1. DNS记录是否正确配置
2. 等待DNS全球生效（可能需要24-48小时）
3. 清除本地DNS缓存：
  ```bash
  # Windows
  ipconfig /flushdns
  # Mac
  sudo dscacheutil -flushcache
  # Linux
  sudo systemd-resolve --flush-caches
  ```
### Q: 如何获取CodeRocket服务器的IP地址？
A: 使用以下命令查询备用域名的IP：
```bash
nslookup assetmanagement.coderocket.app
```
然后将该IP配置到A记录中。
### Q: 配置完成后网站显示"不安全"？
A: 这是因为HTTPS证书尚未配置，请：
1. 等待Let's Encrypt自动配置（通常24小时内完成）
2. 或联系CodeRocket技术支持手动配置SSL证书
## 📞 需要帮助？
如果遇到配置问题，请联系：
**更新日期**: 2024
**文档版本**: 1.0