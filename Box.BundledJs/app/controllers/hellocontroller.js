/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var HelloController = (function () {
    function HelloController() {
    }
    HelloController.prototype.greet = function (name) {
        return "Hello, " + (name || "there");
    };
    return HelloController;
})();
module.exports = HelloController;
//# sourceMappingURL=hellocontroller.js.map