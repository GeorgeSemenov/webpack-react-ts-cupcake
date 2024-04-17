module.exports = function () {
  return {
    module: {
      rules: [
        //тут указываем массив настроек для лоадеров
        {
          //Тут описываем настройки лоадера
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
  };
};
