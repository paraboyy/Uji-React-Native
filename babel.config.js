module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Ganti plugin usang dengan versi transform yang baru
      "@babel/plugin-transform-nullish-coalescing-operator",
      "@babel/plugin-transform-numeric-separator",
      ["@babel/plugin-transform-class-properties", { loose: true }],
      ["@babel/plugin-transform-private-methods", { loose: true }],
      ["@babel/plugin-transform-private-property-in-object", { loose: true }],
      "@babel/plugin-transform-optional-catch-binding",
      "@babel/plugin-transform-logical-assignment-operators",
      "@babel/plugin-transform-optional-chaining",
      "@babel/plugin-transform-object-rest-spread",
      "@babel/plugin-transform-async-generator-functions",
      'react-native-reanimated/plugin',
      // Tambahkan plugin baru jika diperlukan
    ]
  };
};
