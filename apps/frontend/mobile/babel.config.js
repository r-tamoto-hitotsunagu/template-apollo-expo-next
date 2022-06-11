module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            $gql: './src/__generated__/graphql',
            $type: './src/types',
            $util: './src/utils',
          },
        },
      ],
    ],
  };
};
