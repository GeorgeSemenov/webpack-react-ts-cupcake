module.exports = function () {
  return {
    module: {
      rules: [
        //тут указываем массив настроек для лоадеров
        {
          //Тут описываем настройки лоадера
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
  };
};
