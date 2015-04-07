/// <reference path="../../scripts/typings/_refs.ts" />
module Common {
    export interface ILink {
        href: string;
        rel: string;
        method: string;
    }

    export interface IResource {
        links: ILink[];
    }

    export class HypermediaBaseController {
        apiEndPoint: string;

        static $inject = ["$http"];
        constructor(public $http: ng.IHttpService) {
        }

        fetchResource(url: string, method?: string): ng.IHttpPromise<IResource> {
            method = method || "GET";
            if (url) {
                return this.$http({
                    url: "http://private-daf6f-hypermediablog.apiary-mock.com" + url,
                    method: method
                });
            } else {
                throw new Error("Not a valid url: '" + url + "'");
            }
        }

        fetchUrl(resource: IResource, relation: string, method?: string): ILink {
            if (resource && resource.links && resource.links.length) {
                if (relation) {
                    if (method) {
                        return _.find(resource.links, (link: ILink) => link && link.rel === relation && link.method === method);
                    } else {
                        return _.find(resource.links,(link: ILink) => link && link.rel === relation);
                    }
                } else {
                    return null;
                }
            } else {
                return null;
            }
        }
    }
} 