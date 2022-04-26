/* tslint:disable */
/* eslint-disable */
/**
 * Babylon PTE API
 * Babylon Public Test Environment (PTE) API specification.
 *
 * The version of the OpenAPI document: 0.1.15
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    MethodRule,
    MethodRuleFromJSON,
    MethodRuleFromJSONTyped,
    MethodRuleToJSON,
} from './MethodRule';

/**
 * 
 * @export
 * @interface AccessRules
 */
export interface AccessRules {
    /**
     * 
     * @type {string}
     * @memberof AccessRules
     */
    defaultRule: string;
    /**
     * 
     * @type {Array<MethodRule>}
     * @memberof AccessRules
     */
    methodRules: Array<MethodRule>;
}

export function AccessRulesFromJSON(json: any): AccessRules {
    return AccessRulesFromJSONTyped(json, false);
}

export function AccessRulesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccessRules {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'defaultRule': json['default_rule'],
        'methodRules': ((json['method_rules'] as Array<any>).map(MethodRuleFromJSON)),
    };
}

export function AccessRulesToJSON(value?: AccessRules | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'default_rule': value.defaultRule,
        'method_rules': ((value.methodRules as Array<any>).map(MethodRuleToJSON)),
    };
}

