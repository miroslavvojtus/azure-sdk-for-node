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
 * The list of node health state chunks in the cluster that respect the input
 * filters in the chunk query. Returned by get cluster health state chunks
 * query.
 *
 * @extends models['EntityHealthStateChunkList']
 */
class NodeHealthStateChunkList extends models['EntityHealthStateChunkList'] {
  /**
   * Create a NodeHealthStateChunkList.
   * @property {array} [items] The list of node health state chunks that
   * respect the input filters in the chunk query.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of NodeHealthStateChunkList
   *
   * @returns {object} metadata of NodeHealthStateChunkList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NodeHealthStateChunkList',
      type: {
        name: 'Composite',
        className: 'NodeHealthStateChunkList',
        modelProperties: {
          totalCount: {
            required: false,
            serializedName: 'TotalCount',
            type: {
              name: 'Number'
            }
          },
          items: {
            required: false,
            serializedName: 'Items',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NodeHealthStateChunkElementType',
                  type: {
                    name: 'Composite',
                    className: 'NodeHealthStateChunk'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = NodeHealthStateChunkList;
