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
 * Class representing a MigrateSqlServerSqlMISyncTaskOutputMigrationLevel.
 * @extends models['MigrateSqlServerSqlMISyncTaskOutput']
 */
class MigrateSqlServerSqlMISyncTaskOutputMigrationLevel extends models['MigrateSqlServerSqlMISyncTaskOutput'] {
  /**
   * Create a MigrateSqlServerSqlMISyncTaskOutputMigrationLevel.
   * @property {number} [databaseCount] Count of databases
   * @property {string} [state] Current state of migration. Possible values
   * include: 'None', 'InProgress', 'Failed', 'Warning', 'Completed',
   * 'Skipped', 'Stopped'
   * @property {date} [startedOn] Migration start time
   * @property {date} [endedOn] Migration end time
   * @property {string} [sourceServerName] Source server name
   * @property {string} [sourceServerVersion] Source server version
   * @property {string} [sourceServerBrandVersion] Source server brand version
   * @property {string} [targetServerName] Target server name
   * @property {string} [targetServerVersion] Target server version
   * @property {string} [targetServerBrandVersion] Target server brand version
   * @property {number} [databaseErrorCount] Number of database level errors
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of MigrateSqlServerSqlMISyncTaskOutputMigrationLevel
   *
   * @returns {object} metadata of MigrateSqlServerSqlMISyncTaskOutputMigrationLevel
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
        uberParent: 'MigrateSqlServerSqlMISyncTaskOutput',
        className: 'MigrateSqlServerSqlMISyncTaskOutputMigrationLevel',
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
          databaseCount: {
            required: false,
            readOnly: true,
            serializedName: 'databaseCount',
            type: {
              name: 'Number'
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
          sourceServerName: {
            required: false,
            readOnly: true,
            serializedName: 'sourceServerName',
            type: {
              name: 'String'
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
          targetServerName: {
            required: false,
            readOnly: true,
            serializedName: 'targetServerName',
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
          },
          databaseErrorCount: {
            required: false,
            readOnly: true,
            serializedName: 'databaseErrorCount',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = MigrateSqlServerSqlMISyncTaskOutputMigrationLevel;