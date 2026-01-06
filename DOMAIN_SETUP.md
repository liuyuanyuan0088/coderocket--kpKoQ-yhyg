# 域名配置指南
## ✅ 当前配置
**主域名**: `asean-newenergy.com`
## 🌐 DNS 配置
确保你的域名 DNS 记录已正确配置：
### Vercel 部署（推荐）
在 Vercel Dashboard 中添加自定义域名：
1. **登录 Vercel Dashboard**
   ```
   https://vercel.com/dashboard
   ```
2. **进入项目设置**
   - 选择你的项目
   - 点击 "Settings"
   - 点击 "Domains"
3. **添加域名**
   - 点击 "Add Domain"
   - 输入：`asean-newenergy.com`
   - 输入：`www.asean-newenergy.com`（可选）
   - 点击 "Add"
4. **配置 DNS**
   Vercel 会提供两种配置方式：
   **方式一：使用 A 记录（推荐）**
   ```
   类型    名称    值
   A       @       76.76.21.21
   CNAME   www     cname.vercel-dns.com
   ```
   **方式二：使用 CNAME（适用于子域名）**
   ```
   类型    名称    值
   CNAME   www     cname.vercel-dns.com
   ```
5. **等待 DNS 生效**
   - 通常需要 5-60 分钟
   - 可能需要最多 48 小时完全生效
6. **验证配置**
   - Vercel 会自动验证 DNS 配置
   - 配置正确后会显示绿色勾号
   - SSL 证书会自动配置
## 🔒 SSL/HTTPS
Vercel 会自动为你的域名配置免费的 SSL 证书：
## 📊 域名状态检查
使用以下工具检查域名配置：
```bash
# 检查 DNS 记录
nslookup asean-newenergy.com
# 检查 DNS 传播状态
https://www.whatsmydns.net/#A/asean-newenergy.com
# 检查 SSL 证书
https://www.ssllabs.com/ssltest/analyze.html?d=asean-newenergy.com
```
## 🎯 访问地址
配置完成后，你的网站将可以通过以下地址访问：
## 🔄 重定向配置
确保 `vercel.json` 包含以下配置：
```json
{
 "redirects": [
   {
     "source": "/:path((?!admin).*)*",
     "has": [
       {
         "type": "host",
         "value": "www.asean-newenergy.com"
       }
     ],
     "destination": "https://asean-newenergy.com/:path*",
     "permanent": true
   }
 ]
}
```
这会将 www 自动重定向到主域名。
## ⚠️ 常见问题
### Q1: DNS 配置后网站无法访问？
**解决方案：**
1. 检查 DNS 记录是否正确
2. 等待 DNS 传播（最多 48 小时）
3. 清除浏览器缓存
4. 使用无痕模式测试
### Q2: 显示 "域名未验证"？
**解决方案：**
1. 确认 DNS 记录已添加
2. 等待 5-10 分钟
3. 在 Vercel Dashboard 点击 "Verify"
### Q3: HTTPS 不可用？
**解决方案：**
1. 等待 SSL 证书自动配置（通常 5-10 分钟）
2. 检查 DNS 是否正确解析
3. 在 Vercel Dashboard 检查 SSL 状态
### Q4: 从旧域名迁移？
**解决方案：**
1. 在 Vercel 添加新域名
2. 保留旧域名一段时间
3. 使用 301 重定向从旧域名到新域名
4. 更新所有外部链接
## 📝 更新清单
域名更改后需要更新：
## 🎉 完成！
域名配置完成后：
1. **测试访问**
  ```
  https://asean-newenergy.com
  ```
2. **测试管理后台**
  ```
  https://asean-newenergy.com/admin/login
  ```
3. **测试所有页面**
  - 首页
  - 公司文化
  - 服务
  - 关于我们
  - 新闻中心
  - 联系我们
  - App下载
4. **检查移动端**
  - 响应式设计
  - 触摸交互
  - 页面加载速度
需要帮助？查看 Vercel 官方文档：
https://vercel.com/docs/concepts/projects/domains