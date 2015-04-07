/// <reference path="controllers/hellocontroller.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
import HelloController = require("./controllers/HelloController");
module App {
    "use strict";

    angular.module("app", [])
        .controller("HelloController", HelloController);
}