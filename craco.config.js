const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#293A80',
              '@layout-header-padding': '0 64px',
              '@layout-header-background': '#ffffff',
              '@border-radius-base': '22px',
              '@btn-text-hover-bg': '#9FC1EA',
              '@btn-font-weight': '600',
              '@typography-title-margin-bottom': '0',
              '@layout-body-background': '#F9FBFF',
              '@layout-footer-background': '#eaecf1',
              '@btn-default-color': '#293A80',
              '@btn-default-bg': '#ffffff',
              '@btn-default-border': '#9FC1EA',
              '@card-radius': '8px',
              '@table-border-radius-base': '0',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
