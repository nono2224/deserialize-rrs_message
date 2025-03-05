# deserialize-rrs_message

[RoboCupRescue Simulation Server](https://github.com/roborescue/rcrs-server)のシミュレーションにおいて，エージェントが送信する通信をデシリアライズするコードです

本コードの使い方は index.ts 内に記述されています．
下記のセットアップと実行方法は index.ts および本コードの実行の際の手順です．

## セットアップ

### 1. 本リポジトリのクローンを作成

はじめに，本リポジトリをコンピュータにダウンロードします

```sh
git clone https://github.com/nono2224/deserialize-rrs_message.git
```

### 2. リポジトリへ移動

ダウンロードしたリポジトリへ移動を行います

```sh
cd deserialize-rrs_message
```

### 3. 依存関係であるパッケージのインストール

本ソフトウェアで必要とされているパッケージのインストールを行います

下記の shell を実行すると，必要なパッケージがインストールされます

```sh
npm install
```

## 実行方法

### 1. コンパイル

下記スクリプトでコンパイルします

```sh
tsc
```

### 3. 実行

下記スクリプトで実行させます

```sh
node ./dist/index.js
```
