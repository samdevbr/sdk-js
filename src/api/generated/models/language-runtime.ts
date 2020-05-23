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


import { LanguageRuntimeFramework } from './language-runtime-framework';

/**
 * 
 * @export
 * @interface LanguageRuntime
 */
export interface LanguageRuntime {
    /**
     * The internal name/code of the language runtime
     * @type {string}
     * @memberof LanguageRuntime
     */
    name?: string;
    /**
     * The formatted name to be displayed in user interfaces
     * @type {string}
     * @memberof LanguageRuntime
     */
    displayable_name?: string;
    /**
     * The list of the supported versions of the runtime engine
     * @type {Array<object>}
     * @memberof LanguageRuntime
     */
    engine_versions?: Array<object>;
    /**
     * The list of supported frameworks built on top of the runtime engine
     * @type {Array<LanguageRuntimeFramework>}
     * @memberof LanguageRuntime
     */
    frameworks?: Array<LanguageRuntimeFramework>;
}


