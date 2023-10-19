# tutorial-shaka-player

基本的なReactの知識を持っているメンバーがshaka-playerについての知識を身につけるためのチュートリアル

## setup

モジュールのインストール

```
bun install
```

stepの選択: `.env`を開いて

```txt:.env
VITE_STEP=選択したstep名
```

アプリケーションの立ち上げ

```
bun run dev
```

## 各stepの概要

- step1: videoタグを用いてmp4を再生する
  - Networkタブを開いて、最初にmp4がひと固まりで読み込まれる様子を確認する

- step2: shaka-playerを入れてDash形式の動画を再生する
  - Networkタブを開いて、セグメントファイルが次々に読み込まれている様子を確認する

- step3: shaka-playerを用いてdrmのかかった動画を再生する
