/// <reference path="../scripts/typings/_refs.ts" />
/// <reference path="all-posts/all-posts.ts" />
/// <reference path="home/home.ts" />
/// <reference path="post/post.ts" />
angular.module("app", ["ui.router"]).constant("ApiEndPoint", "http://private-daf6f-hypermediablog.apiary-mock.com").directive("popover", App.popover).controller("HomeController", App.HomeController).directive("home", App.home).controller("AllPostsController", App.AllPostsController).directive("allPosts", App.allPosts).controller("PostController", App.PostController).directive("post", App.post).config([
    "$stateProvider",
    "$urlRouterProvider",
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider.state("root", {
            url: "/",
            templateUrl: "/app/templates/landing.html"
        }).state("posts", {
            url: "/posts?url",
            templateUrl: "/app/templates/posts.html"
        }).state("post", {
            url: "/post?url",
            template: "<div post></div>"
        });
    }
]);
//# sourceMappingURL=app.js.map