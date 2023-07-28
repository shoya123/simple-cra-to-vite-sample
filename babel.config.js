module.exports = {
  presets: [
    ["@babel/preset-react", { runtime: "automatic" }],
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
    // [
    //  @see https://github.com/jinshuju/babel-preset-react-app
    //   "react-app",
    //   {
    //     flow: false,
    //     typescript: true,
    //     runtime: "automatic",
    //   },
    // ],
  ],
  // plugins: ["@babel/plugin-transform-modules-commonjs"],
};
