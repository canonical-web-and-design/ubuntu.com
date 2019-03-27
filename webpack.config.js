
module.exports = {
  entry: {
    desktopStatistics: './static/js/desktopStatistics.js',
    'dynamic-contact-form': './static/js/dynamic-contact-form.js',
    forms: './static/js/forms.js',
    main: [
      './static/js/core.js',
      './static/js/navigation.js',
      './static/js/scratch.js'
    ],
    'release-chart': './static/js/release-chart.js',
    stickyNav: './static/js/stickyNav.js'
  },
  mode: process.env.ENVIRONMENT === "devel" ? "development" : "production",
  output: {
    filename: "[name].min.js",
    path: __dirname + "/static/js/build"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
