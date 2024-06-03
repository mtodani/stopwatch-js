# ストップウォッチ

このプロジェクトは、簡単なストップウォッチのウェブアプリです。HTML、CSS、JavaScriptを使用して作成しました。

## 構成

- `index.html`: アプリケーションのメインHTMLファイル
- `main.css`: アプリケーションのスタイルシート
- `main.js`: アプリケーションのJavaScriptファイル

## 機能

- スタートボタンをクリックして、ストップウォッチを開始します。
- ストップボタンをクリックして、ストップウォッチを停止します。
- 開始および停止の時刻がログとして表示されます。

## 使用方法
### ローカルでの閲覧
 `index.html`をブラウザで開きます。
### 公開URL
このストップウォッチアプリは以下のURLで公開しています。  
https://mtodani.github.io/stopwatch-js/

## カスタマイズ

`main.js`の`options`オブジェクトを編集することで、ストップウォッチの表示色や背景色をカスタマイズできます。

```javascript
var options = { 
    color: 'limegreen',
    backgroundColor: 'black'
};
