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
 * Class representing a MigrateSchemaSqlServerSqlDbTaskOutputMigrationLevel.
 * @extends models['MigrateSchemaSqlServerSqlDbTaskOutput']
 */
class MigrateSchemaSqlServerSqlDbTaskOutputMigrationLevel extends models['MigrateSchemaSqlServerSqlDbTaskOutput'] {
  /**
   * Create a MigrateSchemaSqlServerSqlDbTaskOutputMigrationLevel.
   * @property {string} [state] Overall state of the schema migration. Possible
   * values include: 'None', 'InProgress', 'Failed', 'Warning', 'Completed',
   * 'Skipped', 'Stopped'
   * @property {date} [startedOn] Migration start time
   * @property {date} [endedOn] Migration end time
   * @property {string} [sourceServerVersion] Source server version
   * @property {string} [sourceServerBrandVersion] Source server brand version
   * @property {string} [targetServerVersion] Target server version
   * @property {string} [targetServerBrandVersion] Target server brand version
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of MigrateSchemaSqlServerSqlDbTaskOutputMigrationLevel
   *
   * @returns {object} metadata of MigrateSchemaSqlServerSqlDbTaskOutputMigrationLevel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MigrationLevelOutput',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'resultType',
          clientName: 'resultType'
        },
        uberParent: 'MigrateSchemaSqlServerSqlDbTaskOutput',
        className: 'MigrateSchemaSqlServerSqlDbTaskOutputMigrationLevel',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          resultType: {
            required: true,
            serializedName: 'resultType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          state: {
            required: false,
            readOnly: true,
            serializedName: 'state',
            type: {
              name: 'String'
            }
          },
          startedOn: {
            required: false,
            readOnly: true,
            serializedName: 'startedOn',
            type: {
              name: 'DateTime'
            }
          },
          endedOn: {
            required: false,
            readOnly: true,
            serializedName: 'endedOn',
            type: {
              name: 'DateTime'
            }
          },
          sourceServerVersion: {
            required: false,
            readOnly: true,
            serializedName: 'sourceServerVersion',
            type: {
              name: 'String'
            }
          },
          sourceServerBrandVersion: {
            required: false,
            readOnly: true,
            serializedName: 'sourceServerBrandVersion',
            type: {
              name: 'String'
            }
          },
          targetServerVersion: {
            required: false,
            readOnly: true,
            serializedName: 'targetServerVersion',
            type: {
              name: 'String'
            }
          },
          targetServerBrandVersion: {
            required: false,
            readOnly: true,
            serializedName: 'targetServerBrandVersion',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MigrateSchemaSqlServerSqlDbTaskOutputMigrationLevel;