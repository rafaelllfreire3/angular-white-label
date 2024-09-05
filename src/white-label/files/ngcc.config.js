// Allows deep-import warnings to be ignored
// https://github.com/angular/angular/pull/35683

module.exports = {
  packages: {
    '@rafaelllfreire3/ngx-wiz-sso': {
      ignorableDeepImportMatchers: [
        /@angular\//,
      ]
    },
  },
};