/* tslint:disable */
/* eslint-disable */
/**
 * Babylon PTE API
 * Babylon Public Test Environment (PTE) API specification.
 *
 * The version of the OpenAPI document: 0.1.12
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
 * @interface Signature
 */
export interface Signature {
    /**
     * 
     * @type {string}
     * @memberof Signature
     */
    publicKey: string;
    /**
     * 
     * @type {string}
     * @memberof Signature
     */
    signature: string;
}

export function SignatureFromJSON(json: any): Signature {
    return SignatureFromJSONTyped(json, false);
}

export function SignatureFromJSONTyped(json: any, ignoreDiscriminator: boolean): Signature {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'publicKey': json['public_key'],
        'signature': json['signature'],
    };
}

export function SignatureToJSON(value?: Signature | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'public_key': value.publicKey,
        'signature': value.signature,
    };
}

