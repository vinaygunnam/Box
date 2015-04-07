/// <reference path="../../scripts/typings/_refs.ts" />
var App;
(function (App) {
    var RestNavigatorController = (function () {
        function RestNavigatorController($http) {
            this.$http = $http;
        }
        RestNavigatorController.$inject = ["$http"];
        return RestNavigatorController;
    })();
    App.RestNavigatorController = RestNavigatorController;
    function restNavigator() {
        var directive = {
            restrict: "EA",
            scope: {
                link: "=",
                targetState: "@",
            }
        };
        return directive;
    }
    App.restNavigator = restNavigator;
})(App || (App = {}));
//# sourceMappingURL=rest-navigator.js.map