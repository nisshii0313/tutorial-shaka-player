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
- step2: shaka-playerを入れてmp4形式でない動画を再生する
- step3: shaka-playerを用いてdrmのかかった動画を再生する
