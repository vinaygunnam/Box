/// <reference path="../../scripts/typings/_refs.ts" />
module App {
    export class PostController extends Common.HypermediaBaseController {
        post: IPost;
        editLink: Common.ILink;
        deleteLink: Common.ILink;

        static $inject = ["$http", "$stateParams"];
        constructor($http: ng.IHttpService, $stateParams: ng.ui.IStateParamsService) {
            super($http);

            var promise = this.fetchResource($stateParams["url"]);
            if (promise) {
                promise
                    .then((response: ng.IHttpPromiseCallbackArg<IPost>) => {
                        this.post = response.data;
                        this.editLink = this.fetchUrl(response.data, "update");
                        this.deleteLink = this.fetchUrl(response.data, "delete");
                    }, () => {});
            }
        }
    }

    export function post(): ng.IDirective {
        var directive: ng.IDirective = {
            restrict: "EA",
            controller: "PostController",
            controllerAs: "pc",
            templateUrl: "/app/post/post.html",
            replace: true
        };

        return directive;
    }
}