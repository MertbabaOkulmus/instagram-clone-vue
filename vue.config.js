const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const vueSrc = "./src";
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("vue-loader")
      .loader("vue-loader") // or `vue-loader-v16` if you are using a preview support of Vue 3 in Vue CLI
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, vueSrc),
        "~": path.resolve(__dirname, vueSrc),
        _: path.resolve(__dirname, "./node_modules"),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
});
