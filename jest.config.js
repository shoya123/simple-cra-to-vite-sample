// Jest では ESM の構文を解釈できないので、 ESM 形式で書かれたパッケージのみ `babel` の変換を有効にするために `transformIgnorePatterns` を設定する。
const esmPackages = [
  "array-move",
  ["@amcharts", ["d3-force", "d3-quadtree", "d3-dispatch", "d3-timer"]],
  ["camelcase-keys", ["camelcase", "quick-lru"]],
].flat(2);

module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":
      "<rootDir>/config/jest/fileTransform.js",
  },

  // jestでES moduleの外部ライブラリをCommonJSに変換できるようにする
  // @see https://qiita.com/miyuc/items/a5cae6252231e224f57f
  // @see https://media-massage.net/blog/ts-jest%E3%81%8C%E5%A4%96%E9%83%A8%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%82%92import%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84%E5%A0%B4%E5%90%88%E3%81%AE%E5%AF%BE%E5%87%A6%E6%96%B9/
  transformIgnorePatterns: [`/node_modules/(?!(${esmPackages.join("|")})/)`],

  // tsconfigでbaseUrlを設定したように、 import Component from `Component/Component`でモジュールを解決したい
  // 右の形式はだけでなく。import Component from `./Component/Component`
  // @see https://github.com/jestjs/jest/issues/2144
  // @see https://stackoverflow.com/questions/50171412/absolute-paths-baseurl-gives-error-cannot-find-module
  modulePaths: ["<rootDir>/src"],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  },

  // 拡張子なしでもモジュールを解決できるようにする
  moduleFileExtensions: [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  resetMocks: true,
};
