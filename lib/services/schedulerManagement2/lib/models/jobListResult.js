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
 * Class representing a JobListResult.
 */
class JobListResult extends Array {
  /**
   * Create a JobListResult.
   * @member {string} [nextLink] Gets or sets the URL to get the next set of
   * jobs.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of JobListResult
   *
   * @returns {object} metadata of JobListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobListResult',
      type: {
        name: 'Composite',
        className: 'JobListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'JobDefinitionElementType',
                  type: {
                    name: 'Composite',
                    className: 'JobDefinition'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = JobListResult;