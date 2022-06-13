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
            $zodModel: './src/__generated__/zod',
            $feature: './src/features',
            $gql: './src/__generated__/graphql',
            $type: './src/types',
            $util: './src/utils',
            $hook: './src/hooks',
          },
        },
      ],
      ['transform-inline-environment-variables'],
    ],
  };
};
