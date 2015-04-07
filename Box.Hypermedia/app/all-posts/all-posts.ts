/// <reference path="../../scripts/typings/_refs.ts" />
/// <reference path="../common/hypermedia-helper.ts" />
module App {
    export interface IPostCollection extends Common.IResource {
        items: IPost[];
    }

    export interface IPost extends Common.IResource {
        id: number;
        title: string;
        body: string;
        posted: string;
        votes: number;

        // UI props
        navigationLink: Common.ILink;
    }

    export class AllPostsController extends Common.HypermediaBaseController {
        newPostLink: Common.ILink;
        posts: IPost[]

        static $inject = ["$stateParams", "$http"];

        constructor($stateParams: ng.ui.IStateParamsService, $http: ng.IHttpService) {
            super($http);
            var promise = this.fetchResource($stateParams["url"]);

            if (promise) {
                promise
                    .then((response: ng.IHttpPromiseCallbackArg<IPostCollection>) => {
                        var posts = response.data.items;
                        _.each(posts, (post: IPost) => {
                            post.navigationLink = this.fetchUrl(post, "self");
                        });
                    this.posts = posts;
                        this.newPostLink = this.fetchUrl(response.data, "create");
                    }, () => {});
            }
        }
    }

    export function allPosts(): ng.IDirective {
        var directive: ng.IDirective = {
            restrict: "EA",
            controller: "AllPostsController",
            controllerAs: "apc",
            templateUrl: "/app/all-posts/all-posts.html",
            replace: true
        };

        return directive;
    }
}