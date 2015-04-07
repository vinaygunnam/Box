/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
class HelloController {
    greet(name?: string): string {
        return "Hello, " + (name || "there");
    }
}

export = HelloController;