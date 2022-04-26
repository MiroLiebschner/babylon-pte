/* tslint:disable */
/* eslint-disable */
/**
 * Babylon PTE API
 * Babylon Public Test Environment (PTE) API specification.
 *
 * The version of the OpenAPI document: 0.1.14
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ResourceMetadata
 */
export interface ResourceMetadata {
    /**
     * 
     * @type {string}
     * @memberof ResourceMetadata
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceMetadata
     */
    value: string;
}

export function ResourceMetadataFromJSON(json: any): ResourceMetadata {
    return ResourceMetadataFromJSONTyped(json, false);
}

export function ResourceMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'value': json['value'],
    };
}

export function ResourceMetadataToJSON(value?: ResourceMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
    };
}

