/// <reference path="../../scripts/typings/_refs.ts" />
module App {
    export class RestNavigatorController {
        static $inject = ["$http"];
        constructor(public $http: ng.IHttpService) {

        }
    }

    export function restNavigator(): ng.IDirective {
        var directive: ng.IDirective = {
            restrict: "EA",
            scope: {
                link: "=",
                targetState: "@",
            }
        };

        return directive;
    }
}