const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');



const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // あなたのMySQLパスワードに置き換えてください
  database: 'user_db',
});

// データベース接続
db.connect(err => {
  if (err) throw err;
  console.log('MySQL接続成功');
});

// ユーザー登録API
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(query, [username, password], (err) => {
    if (err) return res.status(500).send('登録エラー');
    res.send('登録成功');
  });
});

// ログインAPI
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) return res.status(500).send('接続エラー');
    if (results.length > 0) res.send('ログイン成功');
    else res.status(401).send('ログイン失敗');
  });
});

// JSONデータの読み取り
router.get('/articles', (req, res) => {
  const filePath = path.join('data', 'articles.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'サーバーエラー' });
    res.json(JSON.parse(data));
  });
});

router.post('/addArticle', (req, res) => {
  const { name, description, price } = req.body;
  console.log(name,description,price);
  const filePath = path.join('data', 'articles.json');

  // ファイルを読み込む
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'サーバーエラー' });

    let articles = [];
    if (data) {
      articles = JSON.parse(data);
    }

    // 新しい記事を追加
    const newArticle = { name, description, price };
    articles.push(newArticle);

    // ファイルに書き込む
    fs.writeFile(filePath, JSON.stringify(articles, null, 2), 'utf8', (err) => {
      if (err) return res.status(500).json({ error: 'サーバーエラー' });
      res.json({ message: '記事が追加されました' });
    });
  });
});

module.exports = router;
