
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
  this.setEnabled = function(isEnabled) {
    this.isEnabled = !!isEnabled;
  };

  /**
   * Service getter
   */
  this.$get = function($window, $location) {

    //Check if enabled
    let isEnabled = this.isEnabled;

    /**
     * Initialize google analytics queue
     */
    $window.ga = $window.ga || function() {
      ($window.ga.q = $window.ga.q || []).push(arguments);
    };
    $window.ga.l = Number(new Date());

    /**
     * GA wrapper function
     */
    function ga() {
      if (isEnabled) {
        $window.ga.apply(undefined, arguments);
      }
    }

    /**
     * Class definition
     */
    let Analytics = {

      /**
       * Enable analytics in realtime
       */
      enable() {
        isEnabled = true;
      },

      /**
       * Disable analytics in realtime
       */
      disable() {
        isEnabled = false;
      },

      /**
       * Check if enabled
       */
      isEnabled() {
        return isEnabled;
      },

      /**
       * Create interface
       */
      create(trackingId, name, config) {
        ga('create', angular.extend({
          trackingId: trackingId,
          cookieDomain: 'auto',
          name: name,
        }, config || {}));
      },

      /**
       * Require interface
       */
      require(item) {
        ga('require', item);
      },

      /**
       * Set interface
       */
      set: {

        /**
         * Set app name
         */
        appName(name) {
          ga('set', 'appName', name);
        },

        /**
         * Set app ID
         */
        appId(id) {
          ga('set', 'appId', id);
        },

        /**
         * Set app version
         */
        appVersion(version) {
          ga('set', 'appVersion', version);
        },

        /**
         * Set user ID
         */
        userId(userId) {
          ga('set', 'userId', userId);
        },

        /**
         * Set data source
         */
        dataSource(dataSource) {
          ga('set', 'dataSource', dataSource);
        },

        /**
         * Set screen name
         */
        screenName(screenName) {
          ga('set', 'screenName', screenName);
        },

        /**
         * Set document title
         */
        documentTitle(title) {
          ga('set', 'title', title);
        },

        /**
         * Set hostname
         */
        hostname(hostname) {
          ga('set', 'hostname', hostname);
        },

        /**
         * Set page
         */
        page(page) {
          page = page || $location.url();
          ga('set', 'page', page);
        },

        /**
         * Campaign name
         */
        campaignName(name) {
          ga('set', 'campaignName', name);
        },

        /**
         * Campaign ID
         */
        campaignId(id) {
          ga('set', 'campaignId', id);
        },

        /**
         * Campaign source
         */
        campaignSource(source) {
          ga('set', 'campaignSource', source);
        },

        /**
         * Campaign medium
         */
        campaignMedium(medium) {
          ga('set', 'campaignMedium', medium);
        },

        /**
         * Campaign keyword
         */
        campaignKeyword(keyword) {
          ga('set', 'campaignKeyword', keyword);
        },

        /**
         * Campaign content
         */
        campaignContent(content) {
          ga('set', 'campaignContent', content);
        },

        /**
         * Set user language
         */
        language(language) {
          ga('set', 'language', language);
        },

        /**
         * Set document encoding
         */
        encoding(encoding) {
          ga('set', 'encoding', encoding);
        },

        /**
         * Anonymize sender's IP address
         */
        anonymizeIp(anonymizeIp) {
          ga('set', 'anonymizeIp', !!anonymizeIp);
        },
      },

      /**
       * Tracking interface
       */
      track: {

        /**
         * Register a pageview
         */
        pageview(page) {
          ga('send', {
            hitType: 'pageview',
            page: page || $location.url(),
          });
        },

        /**
         * Register a screenview
         */
        screenview(screenName) {
          ga('send', {
            hitType: 'screenview',
            screenName: screenName,
          });
        },

        /**
         * Register an event
         */
        event(category, action, label, value) {
          ga('send', {
            hitType: 'event',
            eventCategory: category,
            eventAction: action,
            eventLabel: label,
            eventValue: value,
          });
        },

        /**
         * Register a social hit
         */
        social(network, action, target) {
          ga('send', {
            hitType: 'social',
            socialNetwork: network,
            socialAction: action,
            socialTarget: target,
          });
        },

        /**
         * Register an exception
         */
        exception(description, isFatal) {
          ga('send', {
            hitType: 'exception',
            exDescription: description,
            exFatal: !!isFatal,
          });
        },

        /**
         * Register a timing hit
         */
        timing(category, variable, value, label) {
          ga('send', {
            hitType: 'timing',
            timingCategory: category,
            timingVar: variable,
            timingValue: value,
            timingLabel: label,
          });
        },
      },

      /**
       * E-commerce interface
       */
      ecommerce: {

        /**
         * Add transaction
         */
        addTransaction(data) {
          ga('ecommerce:addTransaction', data);
        },

        /**
         * Add item
         */
        addItem(data) {
          ga('ecommerce:addItem', data);
        },

        /**
         * Send
         */
        send() {
          ga('ecommerce:send');
        },

        /**
         * Clear
         */
        clear() {
          ga('ecommerce:clear');
        },
      },
    };

    //Return
    return Analytics;
  };
});
