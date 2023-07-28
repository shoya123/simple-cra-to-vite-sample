# Simple CRA to Vite sample

最小の Create React App のプロジェクトを Vite へと移行した。

参考: https://www.robinwieruch.de/vite-create-react-app/

## step

1. CRA をインストール
2. Vite をインストールし、CRA をアンインストール （この時点で問題なくブラウザ上で動作させる）
3. svg などの asset の型定義を CRA からコピー
4. ESLint を導入

## package の説明

- @babel/plugin-proposal-private-property-in-object
  - babel-preset-react-app を使う時に必要になった。これがないと jest が 1 秒以上終了しませんでした的な warning が出るようになる。ただ、@babel/preset-env の依存に入っているようなので基本的には不要と思う
- @babel/plugin-transform-modules-commonjs
  - 外部ライブラリを ESmodule→CommonJs module に変換する時に入れたけど、多分不要。.babelrc から babel.config.js に変換したことで node_modules が変換の対象になったはずだから
- babel-preset-react-app
  - CRA の babel の preset だけど、今回はもうはいらないと思われる。他の babel 関連のもので十分と思われる。
- react-app-polyfill
  - これがないとテスト実行時にファイルがないという類のエラーが出た。jest の設定次第で不要にできると思われる。
