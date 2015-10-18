/* jshint ignore:start */
Package.describe({
  name: 'silentcicero:saveas',
  version: '0.0.1',
  summary: 'Provides a global save file function (saveAs) for Meteor apps.',
  git: 'https://github.com/SilentCicero/meteor-package-solc',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');

  api.addFiles('index.js', 'client');
});
