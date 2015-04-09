/// <reference path="../../scripts/typings/_refs.ts" />
interface JQuery {
    popover();
}

module App {
    export function popover(): ng.IDirective {
        var directive: ng.IDirective = {
            restrict: "EA",
            link: (scope, element: ng.IAugmentedJQuery) => {
                element.popover();
            }
        };

        return directive;
    }
} 