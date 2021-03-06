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
 * LUIS Composite Entity.
 *
 */
class CompositeEntityModel {
  /**
   * Create a CompositeEntityModel.
   * @property {string} parentType Type/name of parent entity.
   * @property {string} value Value for composite entity extracted by LUIS.
   * @property {array} children Child entities.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CompositeEntityModel
   *
   * @returns {object} metadata of CompositeEntityModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CompositeEntityModel',
      type: {
        name: 'Composite',
        className: 'CompositeEntityModel',
        modelProperties: {
          parentType: {
            required: true,
            serializedName: 'parentType',
            type: {
              name: 'String'
            }
          },
          value: {
            required: true,
            serializedName: 'value',
            type: {
              name: 'String'
            }
          },
          children: {
            required: true,
            serializedName: 'children',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CompositeChildModelElementType',
                  type: {
                    name: 'Composite',
                    className: 'CompositeChildModel'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CompositeEntityModel;
