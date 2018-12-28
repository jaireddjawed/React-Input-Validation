Package.describe({
  name: 'jaireddjawed:react-input-validation',
  version: '1.0.3',
  // Brief, one-line summary of the package.
  summary: 'Quickly validate user input in react.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jaireddjawed/React-Input-Validation',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  react: '16.4.1',
  'react-dom': '16.4.1',
  'prop-types': '15.6.2',
});

Package.onUse(function (api) {
  api.versionsFrom('1.7.0.3');
  api.use('ecmascript');
  api.mainModule('react-input-validation.js');
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('jaireddjawed:react-input-validation');
  api.mainModule('react-input-validation-tests.js');
});
