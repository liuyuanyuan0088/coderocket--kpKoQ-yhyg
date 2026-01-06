# Vercel 部署指南（已完成部署版本）
## ✅ 部署狀態
你的網站已經成功部署到Vercel！
**主網站**: https://assetmanagement.coderocket.app
**管理後台**: https://assetmanagement.coderocket.app/admin/login
**默認密碼**: `admin123`
## 🎯 已啟用的功能
### 1. 完整的網站功能
### 2. 管理控制台
### 3. Vercel優勢
## 🔄 如何更新網站內容
### 方法一：使用管理控制台（最簡單）
1. **訪問管理後台**
  ```
  https://assetmanagement.coderocket.app/admin/login
  ```
2. **輸入密碼**
  ```
  admin123
  ```
3. **選擇要編輯的模塊**
  - 網站設置
  - 首頁文案
  - 輪播圖管理
  - 公司文化
  - 服務管理
  - 團隊管理
  - 新聞管理
  - FAQ管理
  - 等等...
4. **編輯內容**
  - 修改文字
  - 更新圖片URL
  - 調整描述
5. **保存更改**
  - 點擊「保存更改」按鈕
  - 內容立即生效
6. **查看更新**
  - 返回前台頁面
  - 刷新查看更新後的內容
### 方法二：通過Git自動部署
如果你的項目連接了GitHub/GitLab：
```bash
# 修改代碼
git add .
git commit -m "Update content"
git push
# Vercel自動檢測更新
# 1-2分鐘後網站自動更新
```
**自動部署流程：**
1. 你推送代碼到Git倉庫
2. Vercel自動檢測到更新
3. Vercel自動構建新版本
4. 構建成功後自動部署
5. 網站更新完成（零停機）
## 🌐 綁定自定義域名
### 步驟一：在Vercel添加域名
1. **登錄Vercel控制台**
  ```
  https://vercel.com/dashboard
  ```
2. **進入你的項目**
  - 找到你的項目
  - 點擊進入
3. **添加域名**
  - 點擊 "Settings" → "Domains"
  - 輸入你的域名：`asean-newenergy.com`
  - 點擊 "Add"
4. **Vercel顯示DNS配置指南**
  - 記下需要添加的DNS記錄
### 步驟二：配置DNS（在Gname）
1. **登錄Gname控制台**
  ```
  https://www.gname.com
  ```
2. **進入域名管理**
  - 找到 `asean-newenergy.com`
  - 點擊「解析」或「管理」
3. **添加DNS記錄**
  **方式一：使用CNAME記錄（推薦）**
  ```
  類型：CNAME
  主機記錄：@
  記錄值：cname.vercel-dns.com
  TTL：600
  ```
  ```
  類型：CNAME
  主機記錄：www
  記錄值：cname.vercel-dns.com
  TTL：600
  ```
  **方式二：使用A記錄**
  ```
  類型：A
  主機記錄：@
  記錄值：76.76.21.21
  TTL：600
  ```
  ```
  類型：CNAME
  主機記錄：www
  記錄值：cname.vercel-dns.com
  TTL：600
  ```
4. **保存設置**
### 步驟三：等待生效
1. **等待時間**
  - DNS記錄生效：10-30分鐘
  - 全球完全生效：24-48小時
2. **檢查DNS**
  ```bash
  nslookup asean-newenergy.com
  ```
3. **Vercel自動配置SSL**
  - DNS生效後
  - Vercel自動申請Let's Encrypt證書
  - HTTPS自動啟用
4. **完成！**
  - 訪問：`https://asean-newenergy.com`
  - 管理後台：`https://asean-newenergy.com/admin/login`
## 🔧 Vercel項目配置
### vercel.json說明
項目已包含 `vercel.json` 配置文件，確保：
```json
{
 "rewrites": [
   {
     "source": "/(.*)",
     "destination": "/index.html"
   }
 ]
}
```
這個配置保證：
## 📊 Vercel控制台功能
### 1. 部署歷史
### 2. 性能分析
### 3. 日誌查看
### 4. 環境變量
## 🎯 使用管理控制台
### 13個管理模塊
1. **網站設置**
  - 公司名稱、Logo
  - 聯繫方式、地址
  - 工作時間
2. **首頁文案**
  - 主標題、副標題
  - 各板塊文字
3. **輪播圖管理**
  - 上傳圖片URL
  - 設置標題
  - 調整順序
4. **關於卡片**
  - 3個卡片內容
  - 圖片和文字
5. **公司文化**
  - 使命、願景
  - 企業價值觀
6. **核心價值觀**
  - 5個核心價值
  - 圖標和描述
7. **服務管理**
  - 服務項目列表
  - 服務描述
8. **團隊管理**
  - 團隊成員信息
  - 成員頭像URL
  - 職位和背景
9. **團隊文化**
  - 團隊理念
  - 文化介紹
10. **新聞管理**
   - 公司新聞
   - 行業新聞
   - 文章內容
11. **FAQ管理**
   - 常見問題
   - 答案編輯
12. **App下載**
   - 下載鏈接
   - 二維碼URL
   - 功能介紹
13. **聯繫頁面**
   - 聯繫信息
   - 表單設置
## 🚀 性能優化
### Vercel自動優化
### 已配置的優化
## 🔒 安全特性
### 已啟用的安全功能
### 安全建議
1. **定期更改管理員密碼**
2. **不要在公共場合登錄控制台**
3. **使用HTTPS訪問**
4. **定期檢查訪問日誌**
## 📱 移動端優化
## 🎉 部署成功清單
檢查以下項目確認部署成功：
## 📞 獲取幫助
### Vercel支持
### 項目問題
如果遇到問題：
1. 檢查Vercel部署日誌
2. 查看瀏覽器控制台錯誤
3. 測試管理控制台功能
4. 確認DNS配置正確
## 🎯 下一步
### 建議操作
1. **測試管理控制台**
  - 登錄後台
  - 嘗試編輯內容
  - 確認更新生效
2. **配置自定義域名**
  - 如果需要使用 asean-newenergy.com
  - 按照上面的步驟配置DNS
3. **優化網站內容**
  - 更新圖片
  - 完善文字描述
  - 添加真實內容
4. **分享網站**
  - 測試完成後
  - 分享給團隊成員
  - 收集反饋意見
**恭喜！你的網站已成功部署到Vercel！** 🎊
立即訪問：https://assetmanagement.coderocket.app