'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('ChartCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.line = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      series: ['Series A', 'Series B'],
      data: [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
      ],
      onClick: function (points, evt) {
        console.log(points, evt);
      }
    };

    $scope.bar1 = {
      labels: ['Total Crash'],
      series: ['Count of app_version'],
      data: [
        [328]
      ]
    };

    $scope.bar2 = {
      labels: ['WatchlistFragment','TopViewFragment','MainActivity','IndicesFragment','FutureAndOptionsFragment','MeFragment', 'LoginDashboardActivity', 'CommodityDashboardFragment', 'CurrencyDashboardFragment', 'NewMarketDepthFragment', 'EquityV2Fragment', 'MeGuestFragment'],
      series: ['Count of app_version'],
      data: [
        [78, 56, 55, 42, 13, 13, 7, 5, 4, 4, 4, 4]
      ]
    };

    $scope.bar3 = {
      labels: ['java.lang.IllegalStateException','java.lang.IllegalArgumentException','java.lang.NullPointerException','com.afollestad.materialdialogs.MaterialDialog.DialogException','ai.haptik.android.sdk.HaptikException','java.lang.IndexOutOfBoundsException', 'java.lang.RuntimeException', 'android.view.WindowManager.BadTokenException', 'java.lang.OutOfMemoryError', 'java.util.concurrent.TimeoutException', 'android.view.InflateException', 'java.lang.ArrayIndexOutOfBoundsException', 'java.lang.NumberFormatException'],
      series: ['Count of app_version'],
      data: [
        [189, 58, 38, 15, 7, 7, 4, 3, 2, 2, 1, 1, 1]
      ]
    };

    $scope.bar4 = {
      labels: ['4G','WiFi','3G','OFFLINE','2G'],
      series: ['Count of app_version'],
      data: [
        [215, 58, 29, 25, 1]
      ]
    };

    $scope.bar5 = {
      labels: ['8.1.0', '7', '6.0.1', '7.1.2', '8.0.0', '5.1.1', '7.1.1', '6', '5.1', '4.4.4', '4.4.2', '4.1.2', '4.2.1', '4.2.2', '5.0.2'],
      series: ['Count of app_version'],
      data: [
        [77, 73, 45, 32, 23, 21, 21, 13, 11, 6, 2, 1, 1, 1, 1]
      ]
    };

    $scope.bar6 = {
      labels: ['Xiaomi Redmi Note 4','Xiaomi Redmi 4','Xiaomi Redmi Note 5','Xiaomi Redmi Note 3','samsung SM-G610F','vivo vivo 1723', 'Xiaomi Redmi 3S', 'vivo vivo 1726', 'HUAWEI BLN-L22', 'Xiaomi Redmi 4A', 'samsung SM-J810G', 'motorola Moto G (4)'],
      series: ['Count of app_version'],
      data: [
        [21, 15, 9, 8, 8, 7, 6, 6, 5, 5, 5, 5]
      ]
    };
}]);