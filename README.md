# Electron設定
<a>Electron事前準備が終わっているので、中身の編集だけでお好きなアプリが作成できます。</a>
<a>事前にnode.jsをインストールしておいてください。</a>

### アプリ(中身)設定
アプリはindex.htmlを編集することで変更できます。

### アプリ(名前)設定
<a>すべてのファイルのname1をすべて変更日本語不可</a>
<a>package.jsonのマイアプリを変更日本語可</a>

#### アイコン画像
<a>windowsはapp.ico,macはapp.iconsが適用されますのでお好きな画像名前をapp.○○○で使ってください。</a>

## 必ずファイル名で実行してください。cd ~~

### 動作確認

<a>$ npm start</a>


### 書き出しツールをインストール

<a>$ npm install --save-dev @electron-forge/cli</a>

<a>$ npx electron-forge import</a>


### 書き出す mac or win

<a>$ npm run build-mac</a>

<a>or</a>

<a>$ npm run build-win</a>


### 参考

- [Electron](https://qiita.com/udayaan/items/dfb324bc6cadeb9a8f6f)

- [icon](https://zenn.dev/sprout2000/books/6f6a0bf2fd301c/viewer/13311)
