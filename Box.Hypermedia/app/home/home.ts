/// <reference path="../../scripts/typings/_refs.ts" />
module App {
    export class HomeController extends Common.HypermediaBaseController {
        postsLink: Common.ILink;

        static $inject = ["$http"];
        constructor($http: ng.IHttpService) {
            super($http);

            var promise = this.fetchResource("/");
            if (promise) {
                promise
                    .then((response: ng.IHttpPromiseCallbackArg<Common.IResource>) => {
                        this.postsLink = this.fetchUrl(response.data, "posts");
                    }, () => {});
            }
        }
    }

    export function home(): ng.IDirective {
        var directive: ng.IDirective = {
            restrict: "EA",
            controller: "HomeController",
            controllerAs: "hc",
            templateUrl: "/app/home/home.html",
            replace: true
        };

        return directive;
    }
} 