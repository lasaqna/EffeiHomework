"# EffeiHomework" 
1. mysqlでテーブルを作る
    スキーマ名"user_db"でスキーマを作る  
    そこにテーブル名userでテーブルを作る
    - カラム
      - username,password
      - 両方ともVARCHART(45)
2. backendapi/routes/index.js内にある以下のpasswordのところに自分のmysqlのrootユーザのパスワードを入れる
```
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // あなたのMySQLパスワードに置き換えてください
  database: 'user_db',
});

```
2.  
コマンドプロンプトを二つ開いて下のコマンドを動かす
```
cd backendAPI
npm i  
npm start
```

```
cd homework
npm i  
npm run dev
```
