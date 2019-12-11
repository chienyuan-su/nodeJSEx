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

A. SSL/TLS : 安全通訊協定(Secure Sockets Layer) / (Transport Layer Security，TLS 用於取代 SSL 的加密協定

B. SSL包含三種類 : 自簽憑證(估計只能用來編碼)，網域驗證憑證(需要確認確實有該網域存在)，完整驗證(企業級憑證)

C. 透過第三方機構(憑證授權中心)發證，只發給公司或法人，證書裡保有公司基本資料與網站域名。

D. 連線開始時會進行 SSL 握手協議，當下瀏覽器可以去查詢證書是否合法。

E. 瀏覽器對服務器傳資料時，就算封包被攔也解不開。


##### [2019-12-08] #####
#### HTTP 傳輸協定 (單工, 只有 Client 向 Server 要求處理或解答)####

請求的封包長相 :

(網路截圖)
![image](https://github.com/chienyuan-su/nodeJSEx/blob/master/images/httpRequest.png)

A. 請求方法 (Method)
  
  - a. OPTIONS : 沒用到（有興趣可以再研究）

  - b. GET : 很常見, body 不能裝載東西, 想給 server 的東西需要放在 header 裡, 好處是快速, 不用打開 body 來看 

  - c. HEAD : 判斷資料在不在很好用, 不用真的去把資料抓下來, 有時候資料真的很大, 用這 method 可以秒回 (4.0 code push 有用到)

  - d. POST : 我們都用這個, 可以取代 Get, Put, delete, 用來通知 server 做任何事, 資料可以放在 body 裡

  - e. PUT : 沒用到（有興趣可以再研究)

  - f. DELETE : 沒用到（有興趣可以再研究)

  - g. TRACE : 沒用到（有興趣可以再研究)

  - h. CONNECT : 沒用到（有興趣可以再研究)
  
B. URL : 請求的目標 api, 如果是 Get 會一起把參數都填成 queryString

C. 協議（Http）版本 : 0.9 / 1.0 / 1.1

D. Header : 有很多既定的, 也可以自訂, 列舉幾個重要的

  - a. Accept 系列, 告訴 server 自己能接受的某某格式 (Accept：内容类型 content-type, Accept-Charset,...)
  
  - b. Cookie : server 設定, 訪問時放在 Header 還回去
  
  - c. Content-Length : body 的長度, 以 byte 算(可用 string length 想像)
  
  - d. Content-Type (重要): body 的 MIME(Multipurpose Internet Mail Extensions 多用途網際網路郵件擴展)類型,
  
      * d.1. 一個MIME類型包括一個類型（type），一個子類型（subtype）
      * d.2. 我們用到的 : application/json, application/x-www-form-urlencoded
      * d.3. 其他常見 : text/plain(純文字), text/xml

E. body : 訊息本體


回應的封包長相

（網路截圖）
![image](https://github.com/chienyuan-su/nodeJSEx/blob/master/images/httpResponse.png)
