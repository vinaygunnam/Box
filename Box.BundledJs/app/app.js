/// <reference path="controllers/hellocontroller.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
var HelloController = require("./controllers/HelloController");
var App;
(function (App) {
    "use strict";
    angular.module("app", []).controller("HelloController", HelloController);
})(App || (App = {}));
//# sourceMappingURL=app.js.map