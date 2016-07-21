/**
 * meanie-angular-analytics * https://github.com/meanie/angular-analytics
 *
 * Copyright (c) 2016 Adam Buczynski <me@adambuczynski.com>
 * License: MIT
 */
(function (window, angular, undefined) {
  'use strict';

  /**
   * Module definition and dependencies
   */

  angular.module('Analytics.Service', [])

  /**
   * Provider definition
   */
  .provider('$analytics', function AnalyticsProvider() {

    /**
     * Enabled flag
     */
    this.isEnabled = true;

    /**
     * Set default data
     */
    this.setEnabled = function (isEnabled) {
      this.isEnabled = !!isEnabled;
    };

    /**
     * Service getter
     */
    this.$get = ['$window', '$location', function ($window, $location) {

      //Check if enabled
      var _isEnabled = this.isEnabled;

      /**
       * Initialize google analytics queue
       */
      $window.ga = $window.ga || function () {
        ($window.ga.q = $window.ga.q || []).push(arguments);
      };
      $window.ga.l = +new Date();

      /**
       * GA wrapper function
       */
      function ga() {
        if (_isEnabled) {
          $window.ga.apply(undefined, arguments);
        }
      }

      /**
       * Class definition
       */
      var Analytics = {

        /**
         * Enable analytics in realtime
         */
        enable: function enable() {
          _isEnabled = true;
        },

        /**
         * Disable analytics in realtime
         */
        disable: function disable() {
          _isEnabled = false;
        },

        /**
         * Check if enabled
         */
        isEnabled: function isEnabled() {
          return _isEnabled;
        },

        /**
         * Create interface
         */
        create: function create(trackingId, name, config) {
          ga('create', angular.extend({
            trackingId: trackingId,
            cookieDomain: 'auto',
            name: name
          }, config || {}));
        },

        /**
         * Set interface
         */
        set: {

          /**
           * Set app name
           */
          appName: function appName(name) {
            ga('set', 'appName', name);
          },

          /**
           * Set app ID
           */
          appId: function appId(id) {
            ga('set', 'appId', id);
          },

          /**
           * Set app version
           */
          appVersion: function appVersion(version) {
            ga('set', 'appVersion', version);
          },

          /**
           * Set user ID
           */
          userId: function userId(_userId) {
            ga('set', 'userId', _userId);
          },

          /**
           * Set data source
           */
          dataSource: function dataSource(_dataSource) {
            ga('set', 'dataSource', _dataSource);
          },

          /**
           * Set screen name
           */
          screenName: function screenName(_screenName) {
            ga('set', 'screenName', _screenName);
          },

          /**
           * Set document title
           */
          documentTitle: function documentTitle(title) {
            ga('set', 'title', title);
          },

          /**
           * Set hostname
           */
          hostname: function hostname(_hostname) {
            ga('set', 'hostname', _hostname);
          },

          /**
           * Set page
           */
          page: function page(_page) {
            ga('set', 'page', _page);
          },

          /**
           * Campaign name
           */
          campaignName: function campaignName(name) {
            ga('set', 'campaignName', name);
          },

          /**
           * Campaign ID
           */
          campaignId: function campaignId(id) {
            ga('set', 'campaignId', id);
          },

          /**
           * Campaign source
           */
          campaignSource: function campaignSource(source) {
            ga('set', 'campaignSource', source);
          },

          /**
           * Campaign medium
           */
          campaignMedium: function campaignMedium(medium) {
            ga('set', 'campaignMedium', medium);
          },

          /**
           * Campaign keyword
           */
          campaignKeyword: function campaignKeyword(keyword) {
            ga('set', 'campaignKeyword', keyword);
          },

          /**
           * Campaign content
           */
          campaignContent: function campaignContent(content) {
            ga('set', 'campaignContent', content);
          },

          /**
           * Set user language
           */
          language: function language(_language) {
            ga('set', 'language', _language);
          },

          /**
           * Set document encoding
           */
          encoding: function encoding(_encoding) {
            ga('set', 'encoding', _encoding);
          },

          /**
           * Anonymize sender's IP address
           */
          anonymizeIp: function anonymizeIp(_anonymizeIp) {
            ga('set', 'anonymizeIp', !!_anonymizeIp);
          }
        },

        /**
         * Tracking interface
         */
        track: {

          /**
           * Register a pageview
           */
          pageview: function pageview(page) {
            ga('send', {
              hitType: 'pageview',
              page: page || $location.url()
            });
          },

          /**
           * Register a screenview
           */
          screenview: function screenview(screenName) {
            ga('send', {
              hitType: 'screenview',
              screenName: screenName
            });
          },

          /**
           * Register an event
           */
          event: function event(category, action, label, value) {
            ga('send', {
              hitType: 'event',
              eventCategory: category,
              eventAction: action,
              eventLabel: label,
              eventValue: value
            });
          },

          /**
           * Register a social hit
           */
          social: function social(network, action, target) {
            ga('send', {
              hitType: 'social',
              socialNetwork: network,
              socialAction: action,
              socialTarget: target
            });
          },

          /**
           * Register an exception
           */
          exception: function exception(description, isFatal) {
            ga('send', {
              hitType: 'exception',
              exDescription: description,
              exFatal: !!isFatal
            });
          },

          /**
           * Register a timing hit
           */
          timing: function timing(category, variable, value, label) {
            ga('send', {
              hitType: 'timing',
              timingCategory: category,
              timingVar: variable,
              timingValue: value,
              timingLabel: label
            });
          }
        }
      };

      //Return
      return Analytics;
    }];
  });
})(window, window.angular);