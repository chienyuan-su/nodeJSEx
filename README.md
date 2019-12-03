# nodeJSEx
[前後端分離]

#### 通訊基礎 ####
網路 : 物理層、鏈結層、網絡層(IP)、傳輸層(TCP)、會話層、表現層和應用層(HTTP, WebSocket)

HTTP與TCP/IP : WEB使用HTTP協議作應用層協議，以封裝HTTP文本信息，然後使用TCP/IP做傳輸層協議將它發到網絡上。

Socket : 本身並不是協議，實際上是對TCP/IP協議的封裝。通過Socket，我們才能使用TCP/IP協議。

Session : 對話柄，識別個體，基本上用 set cookie 存放於瀏覽器中。

cookie : server 想放在瀏覽器裡的資料，能設定過期時間。


##### [2019-12-3] #####
#### HTTP v.s HTTPS ####
Http : 

A. 明文傳輸，雖然可軟體加密，但風險還是高，因為編碼演算法在客戶端(client)。

B. 問題的偵結點在於不確認身份這件事，中途攔截是可以竄改資料。

C. 著名問題 DDoS 攻擊，Server 發射大量無腦訪問，導致癱瘓。

Https :

A. SSL/TLS : 安全通訊協定(Secure Sockets Layer)

B. 透過第三方機構，來驗證雙方的身份，已確保我們所傳輸的資訊，可以完整且正確的提交給對方手上。
