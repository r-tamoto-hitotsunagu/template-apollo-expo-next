// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const choiceBool = [
  { name: 'Yes', value: true },
  { name: 'No', value: false },
];

module.exports = {
  description: 'Creating a configuration of features',
  prompts: [
    {
      type: 'input',
      name: 'feature_name',
      message: 'Input features name',
    },
    {
      type: 'list',
      name: 'is_create_api',
      message: 'Create api ?',
      choices: choiceBool,
    },
    {
      type: 'list',
      name: 'is_create_graphql',
      message: 'Create GraphQL ?',
      choices: choiceBool,
    },
    {
      type: 'list',
      name: 'is_create_store',
      message: 'Create Store ?',
      choices: choiceBool,
    },
    {
      type: 'list',
      name: 'is_create_util',
      message: 'Create Util ?',
      choices: choiceBool,
    },
    {
      type: 'list',
      name: 'is_create_validator',
      message: 'Create Validator ?',
      choices: choiceBool,
    },
    {
      type: 'list',
      name: 'is_create_asset',
      message: 'Create assets ?',
      choices: choiceBool,
    },
  ],
  actions: (answers) => {
    const saveDir = path.join(
      process.cwd(),
      'apps/frontend/mobile/src/features/',
      answers.feature_name
    );

    const templateDir = path.join(
      process.cwd(),
      'tools/scaffolding/mobile/features/template'
    );

    return [
      /**
       * required
       */
      {
        type: 'add',
        path: `${saveDir}/components/.gitkeep`,
        templateFile: `${templateDir}/components/.gitkeep`,
        skipIfExists: true,
      },
      {
        type: 'add',
        path: `${saveDir}/screens/index.ts`,
        templateFile: `${templateDir}/screens/index.ts`,
        skipIfExists: true,
      },
      {
        type: 'add',
        path: `${saveDir}/navigators/index.tsx`,
        templateFile: `${templateDir}/navigators/index.tsx.hbs`,
        skipIfExists: true,
      },
      {
        type: 'add',
        path: `${saveDir}/navigators/types.ts`,
        templateFile: `${templateDir}/navigators/types.ts.hbs`,
        skipIfExists: true,
      },
      {
        type: 'add',
        path: `${saveDir}/hooks/useNav.ts`,
        templateFile: `${templateDir}/hooks/useNav.ts.hbs`,
        skipIfExists: true,
      },
      {
        type: 'add',
        path: `${saveDir}/types/index.ts`,
        templateFile: `${templateDir}/types/index.ts`,
        skipIfExists: true,
      },
      {
        type: 'add',
        path: `${saveDir}/index.ts`,
        templateFile: `${templateDir}/index.ts`,
        skipIfExists: true,
      },
      /**
       * optional
       */
      {
        type: 'add',
        path: `${saveDir}/utils/index.ts`,
        templateFile: `${templateDir}/utils/index.ts`,
        skipIfExists: true,
        skip: (v) => {
          if (v.is_create_util) {
            return true;
          }
          return 'stop';
        },
      },
      {
        type: 'add',
        path: `${saveDir}/assets/.gitkeep`,
        templateFile: `${templateDir}/assets/.gitkeep`,
        skipIfExists: true,
        skip: (v) => {
          if (v.is_create_asset) {
            return true;
          }
          return 'stop';
        },
      },
      {
        type: 'add',
        path: `${saveDir}/api/.gitkeep`,
        templateFile: `${templateDir}/api/.gitkeep`,
        skipIfExists: true,
        skip: (v) => {
          if (v.is_create_api) {
            return true;
          }
          return 'stop';
        },
      },
      {
        type: 'add',
        path: `${saveDir}/stores/.gitkeep`,
        templateFile: `${templateDir}/stores/.gitkeep`,
        skipIfExists: true,
        skip: (v) => {
          if (v.is_create_store) {
            return true;
          }
          return 'stop';
        },
      },
      {
        type: 'add',
        path: `${saveDir}/utils/index.ts`,
        templateFile: `${templateDir}/utils/index.ts`,
        skipIfExists: true,
        skip: (v) => {
          if (v.is_create_util) {
            return true;
          }
          return 'stop';
        },
      },
      {
        type: 'add',
        path: `${saveDir}/validators/.gitkeep`,
        templateFile: `${templateDir}/validators/.gitkeep`,
        skipIfExists: true,
        skip: (v) => {
          if (v.is_create_validator) {
            return true;
          }
          return 'stop';
        },
      },
      {
        type: 'add',
        path: `${saveDir}/graphql/mutations/.gitkeep`,
        templateFile: `${templateDir}/graphql/mutations/.gitkeep`,
        skipIfExists: true,
        skip: (v) => {
          if (v.is_create_graphql) {
            return true;
          }
          return 'stop';
        },
      },
      {
        type: 'add',
        path: `${saveDir}/graphql/queries/.gitkeep`,
        templateFile: `${templateDir}/graphql/queries/.gitkeep`,
        skipIfExists: true,
        skip: (v) => {
          if (v.is_create_graphql) {
            return true;
          }
          return 'stop';
        },
      },
      {
        type: 'add',
        path: `${saveDir}/graphql/subscriptions/.gitkeep`,
        templateFile: `${templateDir}/graphql/subscriptions/.gitkeep`,
        skipIfExists: true,
        skip: (v) => {
          if (v.is_create_graphql) {
            return true;
          }
          return 'stop';
        },
      },
    ];
  },
};
