/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Object model for creating a pattern
 *
 */
class PatternRuleCreateObject {
  /**
   * Create a PatternRuleCreateObject.
   * @member {string} [pattern] The pattern text.
   * @member {string} [intent] The intent's name which the pattern belongs to.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PatternRuleCreateObject
   *
   * @returns {object} metadata of PatternRuleCreateObject
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PatternRuleCreateObject',
      type: {
        name: 'Composite',
        className: 'PatternRuleCreateObject',
        modelProperties: {
          pattern: {
            required: false,
            serializedName: 'pattern',
            type: {
              name: 'String'
            }
          },
          intent: {
            required: false,
            serializedName: 'intent',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PatternRuleCreateObject;