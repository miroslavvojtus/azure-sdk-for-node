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
 * Metadata for tables selected in migration project
 *
 */
class MigrationTableMetadata {
  /**
   * Create a MigrationTableMetadata.
   * @property {string} [sourceTableName] Source table name
   * @property {string} [targetTableName] Target table name
   */
  constructor() {
  }

  /**
   * Defines the metadata of MigrationTableMetadata
   *
   * @returns {object} metadata of MigrationTableMetadata
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MigrationTableMetadata',
      type: {
        name: 'Composite',
        className: 'MigrationTableMetadata',
        modelProperties: {
          sourceTableName: {
            required: false,
            readOnly: true,
            serializedName: 'sourceTableName',
            type: {
              name: 'String'
            }
          },
          targetTableName: {
            required: false,
            readOnly: true,
            serializedName: 'targetTableName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MigrationTableMetadata;