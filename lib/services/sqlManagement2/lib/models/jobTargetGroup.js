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

const models = require('./index');

/**
 * A group of job targets.
 *
 * @extends models['ProxyResource']
 */
class JobTargetGroup extends models['ProxyResource'] {
  /**
   * Create a JobTargetGroup.
   * @member {array} members Members of the target group.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of JobTargetGroup
   *
   * @returns {object} metadata of JobTargetGroup
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobTargetGroup',
      type: {
        name: 'Composite',
        className: 'JobTargetGroup',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          members: {
            required: true,
            serializedName: 'properties.members',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'JobTargetElementType',
                  type: {
                    name: 'Composite',
                    className: 'JobTarget'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = JobTargetGroup;