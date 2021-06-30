const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#6C00E1',
              '@layout-header-padding': '0 64px',
              '@layout-header-background': '#ffffff',
              '@border-radius-base': '22px',
              '@btn-text-hover-bg': '#EEE7FD',
              '@btn-font-weight': '600',
              '@typography-title-margin-bottom': '0',
              '@layout-body-background': 'linear-gradient(180deg, #E6F7FF 1.43%, #FFFFFF 74.91%)',
              '@layout-footer-background': '#ffffff',
              '@btn-default-color': '#6C00E1',
              '@btn-default-bg': '#EEE7FD',
              '@btn-default-border': '#EEE7FD',
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
