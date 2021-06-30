const listPages = require('../utilities/listPages')

const componentsPath = '../../components'
const pagePath = '../../pages'

module.exports = {
  description: 'Generate a new React component',
  prompts: [
    {
      type: 'list',
      name: 'folder',
      message: 'Select folder',
      choices: () => [
        {
          name: 'Page',
          value: 'page',
        },
        {
          name: 'Components',
          value: 'component',
        },
      ],
    },
    {
      type: 'list',
      name: 'action',
      message: 'Select an action',
      default: 'create',
      choices: (answer) => {
        if (answer.folder === 'page') {
          return [
            {
              name: 'Create new component',
              value: 'create',
            },
            {
              name: 'Add sub component',
              value: 'add',
            },
          ]
        }
        return [
          {
            name: 'Create new component',
            value: 'create',
          },
        ]
      },
    },
    {
      type: 'list',
      name: 'component',
      message: 'Select component',
      when: (answer) => answer.action === 'add',
      choices: listPages,
    },
    {
      type: 'input',
      name: 'name',
      message: 'Component name:',
      validate: (value) => {
        if (!value) {
          return 'Component name is required'
        }
        return true
      },
    },
    {
      type: 'list',
      name: 'type',
      message: 'Select component type',
      default: 'functional',
      choices: () => [
        { name: 'Functional component', value: 'functional' },
        { name: 'Class Based Component', value: 'class' },
      ],
    },
    {
      type: 'list',
      name: 'style',
      message: 'Select style type',
      default: 'css',
      choices: () => [
        { name: 'CSS', value: 'css' },
        { name: 'SCSS', value: 'scss' },
        { name: 'LESS', value: 'less' },
      ],
    },
  ],
  actions: (data) => {
    let actions = []
    const target = 'kebabCase name' || 'dir'
    const folderName = data.folder === 'page' ? pagePath : componentsPath
    if (data.action === 'create') {
      actions = [
        ...actions,
        {
          type: 'add',
          path: `${folderName}/{{${target}}}/index.tsx`,
          templateFile: '../templates/{{type}}.tsx.hbs',
        },
        {
          type: 'add',
          path: `${folderName}/{{${target}}}/{{kebabCase name}}.{{style}}`,
        },
        {
          type: 'add',
          path: `${folderName}/{{${target}}}/{{kebabCase name}}.test.tsx`,
          templateFile: '../templates/test.tsx.hbs',
        },
      ]
    }
    if (data.action === 'add') {
      actions = [
        ...actions,
        {
          type: 'add',
          path: `${folderName}/{{component}}/sub-components/{{${target}}}/index.tsx`,
          templateFile: '../templates/{{type}}.tsx.hbs',
        },
        {
          type: 'add',
          path: `${folderName}/{{component}}/sub-components/{{${target}}}/{{kebabCase name}}.{{style}}`,
        },
        {
          type: 'add',
          path: `${folderName}/{{component}}/sub-components/{{${target}}}/{{kebabCase name}}.test.tsx`,
          templateFile: '../templates/test.tsx.hbs',
        },
      ]
    }
    return actions
  },
}
