/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ApplicationDeploymentSettings } from './application-deployment-settings';
import { Environment } from './environment';
import { SocialAccount } from './social-account';

/**
 * 
 * @export
 * @interface Application
 */
export interface Application {
    /**
     * A domain name that points to application main web address. Can be a naked domain or any subdomain. If app has domain names `testing.my-app.com`, `staging.my-app.com` and `www.my-app.com` a possible good candidate for the application name would be the \"naked\" domain `my-app.com`
     * @type {string}
     * @memberof Application
     */
    name: string;
    /**
     * Numeric ID of the project that the application belongs to
     * @type {number}
     * @memberof Application
     */
    project_id: number;
    /**
     * Numeric ID of the source provider account where the repository is hosted. Required when the `repository` field is informed.
     * @type {number}
     * @memberof Application
     */
    source_provider_id?: number;
    /**
     * The name of the repository containing the application source code. Required when the `source_provider_id` field is informed.
     * @type {string}
     * @memberof Application
     */
    repository?: string;
    /**
     * The predominant programming language used in the application source code
     * @type {string}
     * @memberof Application
     */
    programming_language: string;
    /**
     * The base framework on top of which the application has been implemented - if any
     * @type {string}
     * @memberof Application
     */
    framework: string;
    /**
     * The applicaton initialization file/module/function from which the application execution starts. It might be a file name, a package manager script or a module/class/function exported by application code and invoked by a run time environment of the technology used by the application.
     * @type {string}
     * @memberof Application
     */
    entrypoint?: string;
    /**
     * The relative directory where package manager\'s manifest files (`package.json`, `composer.json`, `yarn.lock`, etc) are located. It needs to be set for applications where the actual source code is not located in the top level directory of the repository.
     * @type {string}
     * @memberof Application
     */
    root_directory?: string;
    /**
     * The relative web directory where publicly accessible assets are located and the web content should be served from
     * @type {string}
     * @memberof Application
     */
    public_directory: string;
    /**
     * 
     * @type {SocialAccount}
     * @memberof Application
     */
    source_provider?: SocialAccount;
    /**
     * The list of deployment settings for each application environment
     * @type {Array<ApplicationDeploymentSettings>}
     * @memberof Application
     */
    deployment_settings?: Array<ApplicationDeploymentSettings>;
    /**
     * The list of environments to which the application is linked to
     * @type {Array<Environment>}
     * @memberof Application
     */
    environments?: Array<Environment>;
    /**
     * Current status of deploying to remote servers the current application
     * @type {string}
     * @memberof Application
     */
    status?: ApplicationStatusEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum ApplicationStatusEnum {
    Pending = 'pending',
    InProgress = 'in-progress',
    Cancelled = 'cancelled',
    Completed = 'completed',
    Failed = 'failed'
}



