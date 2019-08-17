"use strict";

angular
  .module("ngCordova.extras.AppPreferences", [])

  /**
   * Angular wrapper around AppPreferences module
   */
  .factory("$cordovaSimpleAppPreferences", [
    "$window",
    "$q",
    function($window, $q) {
      var prefs = $window.plugins.appPreferences;

      return {
        save: function(key, value) {
          var p = $q.defer();

          prefs.store(
            function(result) {
              p.resolve(result);
            },
            function(error) {
              console.log("AppPreferences: save failed: ", error);
              p.reject();
            },
            key,
            value
          );
          return p.promise;
        },
        load: function(key) {
          var p = $q.defer();
          prefs.fetch(
            function(result) {
              // console.log("AppPreferences: loaded " + key + ": " + result);
              p.resolve(result);
            },
            function(error) {
              // console.log("AppPreferences: load failed: " + error);
              p.resolve(null);
            },
            key
          );
          return p.promise;
        }
      };
    }
  ]);
