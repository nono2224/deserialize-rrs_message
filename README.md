# deserialize-rrs_message

[adf-core-java](https://github.com/roborescue/adf-core-java/tree/master)を用いた[RoboCupRescue Simulation Server](https://github.com/roborescue/rcrs-server)のシミュレーションにおいて，エージェントが送信する通信をデシリアライズするコードです

本コードの使い方は index.ts 内に記述されています．
下記のセットアップと実行方法は index.ts および本コードの実行の際の手順です．

## くわしく
adf-core-javaを用いたRoboCupRescue Simulationのシミュレーション上で，エージェントは通信をおこないます．
シミュレーションでは通信に使用できる帯域やデータ量に制限があります．
そのため，adf-core-java上でモジュールの再利用可能性の向上とともに，通信の最適化も同時に行われます．
そのため，シミュレーションログなどに含まれる通信データはバイナリであり，そのままでは解読ができません．
その解読ができないバイナリの通信データを解読可能にするコードが，本コードです．

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

## *

- CommandAmbulance
- CommandFire
- CommandScout
- MessageReport

これらのメッセージは解読できません
