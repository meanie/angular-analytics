# @meanie/angular-analytics

[![npm version](https://img.shields.io/npm/v/@meanie/angular-analytics.svg)](https://www.npmjs.com/package/@meanie/angular-analytics)
[![node dependencies](https://david-dm.org/meanie/angular-analytics.svg)](https://david-dm.org/meanie/angular-analytics)
[![github issues](https://img.shields.io/github/issues/meanie/angular-analytics.svg)](https://github.com/meanie/angular-analytics/issues)
[![codacy](https://img.shields.io/codacy/2850488ca36c476ab5ada9c155741202.svg)](https://www.codacy.com/app/meanie/angular-analytics)


An Angular wrapper service for Google Analytics

![Meanie](https://raw.githubusercontent.com/meanie/meanie/master/meanie-logo-full.png)

## Installation

You can install this package using `yarn` or `npm`:

```shell
#yarn
yarn add @meanie/angular-analytics

#npm
npm install @meanie/angular-analytics --save
```

Include the script `node_modules/@meanie/angular-analytics/release/angular-analytics.js` in your build process, or add it via a `<script>` tag to your `index.html`:

```html
<script src="node_modules/@meanie/angular-analytics/release/angular-analytics.js"></script>
```

Add `Analytics.Service` as a dependency for your app.

## Usage
```js
angular.module('App', [
  'Analytics.Service'
])
.config(function($analyticsProvider, Config) {
  $analyticsProvider.setEnabled(Config.ANALYTICS_ENABLED && Config.ANALYTICS_TRACKING_ID);
})
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

Please report any bugs, issues, suggestions and feature requests in the [@meanie/angular-analytics issue tracker](https://github.com/meanie/angular-analytics/issues).

## Contributing

Pull requests are welcome! If you would like to contribute to Meanie, please check out the [Meanie contributing guidelines](https://github.com/meanie/meanie/blob/master/CONTRIBUTING.md).

## Sponsor

This package has been kindly sponsored by [Hello Club](https://helloclub.com?source=meanie), an [all in one club and membership management solution](https://helloclub.com?source=meanie) complete with booking system, automated membership renewals, online payments and integrated access and light control. Check us out if you happen to belong to any kind of club or if you know someone who helps run a club!

## License

(MIT License)

Copyright 2016-2020, Adam Reis
