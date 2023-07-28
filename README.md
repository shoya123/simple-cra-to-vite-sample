# Simple CRA to Vite sample

最小の Create React App のプロジェクトを Vite へと移行した。

参考: https://www.robinwieruch.de/vite-create-react-app/

## step

1. CRA をインストール
2. Vite をインストールし、CRA をアンインストール （この時点で問題なくブラウザ上で動作させる）
3. svg などの asset の型定義を CRA からコピー
4. ESLint を導入


## packageの説明
* @babel/plugin-proposal-private-property-in-object
    * babel-preset-react-app を使う時に必要になった。これがないとjestが1秒以上終了しませんでした的な warningが出るようになる。ただ、@babel/preset-envの依存に入っているようなので基本的には不要と思う
* @babel/plugin-transform-modules-commonjs 
    * 外部ライブラリをESmodule→CommonJs module に変換する時に入れたけど、多分不要。.babelrcからbabel.config.jsに変換したことでnode_modulesが変換の対象になったはずだから
* babel-preset-react-app
    * CRAのbabelのpresetだけど、今回はもうはいらないと思われる。他のbabel関連のもので十分と思われる。
* react-app-polyfill
    * これがないとテスト実行時にファイルがないという類のエラーが出た。jestの設定次第で不要にできると思われる。

