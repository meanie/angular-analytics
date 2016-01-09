# angular-analytics

[![npm version](https://img.shields.io/npm/v/meanie-angular-analytics.svg)](https://www.npmjs.com/package/meanie-angular-analytics)
[![node dependencies](https://david-dm.org/meanie/angular-analytics.svg)](https://david-dm.org/meanie/angular-analytics)
[![github issues](https://img.shields.io/github/issues/meanie/angular-analytics.svg)](https://github.com/meanie/angular-analytics/issues)
[![codacy](https://img.shields.io/codacy/da49d6526e424c3394826592b19d86e3.svg)](https://www.codacy.com/app/meanie/angular-analytics)
[![Join the chat at https://gitter.im/meanie/meanie](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg)](https://gitter.im/meanie/meanie?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

An Angular wrapper service for Google Analytics.

## Installation
You can install this package using `npm` or `bower`.

### npm

```shell
npm install meanie-angular-analytics --save
```

Then add `Analytics.Service` as a dependency for your app:

```js
angular.module('App.MyModule', ['Analytics.Service']);
```

### bower

```shell
bower install meanie-angular-analytics
```

Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/meanie-angular-analytics/release/meanie-angular-analytics.js"></script>
```

Then add `Analytics.Service` as a dependency for your app:

```js
angular.module('App.MyModule', ['Analytics.Service']);
```

## Usage
```js
angular.module('App.MyModule')

/**
 * Configuration
 */
.config(function($analyticsProvider, Config) {
  $analyticsProvider.setEnabled(Config.ANALYTICS_ENABLED && Config.ANALYTICS_TRACKING_ID);
})

/**
 * Run logic
 */
.run(function($rootScope, $analytics, Config) {

  //Check if enabled
  if ($analytics.isEnabled()) {

    //Create site wide tracker
    $analytics.create(Config.ANALYTICS_TRACKING_ID);

    //On state changes, track page views
    $rootScope.$on('$stateChangeSuccess', function() {
      $analytics.track.pageview();
    });
  }
});
```

## Issues & feature requests

Please report any bugs, issues, suggestions and feature requests in the [meanie-angular-analytics issue tracker](https://github.com/meanie/angular-analytics/issues).

## Contributing

Pull requests are welcome! Please create them against the [dev branch](https://github.com/meanie/angular-analytics/tree/dev) of the repository.

If you would like to contribute to Meanie, please check out the [Meanie contributing guidelines](https://github.com/meanie/meanie/blob/master/CONTRIBUTING.md).

## License

(MIT License)

Copyright 2016, [Adam Buczynski](http://adambuczynski.com)
