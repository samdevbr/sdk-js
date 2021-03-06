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


import { Server } from './server';

/**
 * 
 * @export
 * @interface Environment
 */
export interface Environment {
    /**
     * The environment\'s name
     * @type {string}
     * @memberof Environment
     */
    name: string;
    /**
     * The type of the deployment being triggred
     * @type {string}
     * @memberof Environment
     */
    type: EnvironmentTypeEnum;
    /**
     * 
     * @type {Array<Server>}
     * @memberof Environment
     */
    servers?: Array<Server>;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof Environment
     */
    created_at?: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof Environment
     */
    updated_at?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum EnvironmentTypeEnum {
    Testing = 'testing',
    Staging = 'staging',
    Production = 'production'
}


