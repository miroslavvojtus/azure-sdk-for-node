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
 * Output for the task that validates connection to Azure Database for
 * PostgreSQL and target server requirements
 *
 */
class ConnectToTargetAzureDbForPostgreSqlSyncTaskOutput {
  /**
   * Create a ConnectToTargetAzureDbForPostgreSqlSyncTaskOutput.
   * @property {string} [id] Result identifier
   * @property {string} [targetServerVersion] Version of the target server
   * @property {array} [databases] List of databases on target server
   * @property {string} [targetServerBrandVersion] Target server brand version
   * @property {array} [validationErrors] Validation errors associated with the
   * task
   */
  constructor() {
  }

  /**
   * Defines the metadata of ConnectToTargetAzureDbForPostgreSqlSyncTaskOutput
   *
   * @returns {object} metadata of ConnectToTargetAzureDbForPostgreSqlSyncTaskOutput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ConnectToTargetAzureDbForPostgreSqlSyncTaskOutput',
      type: {
        name: 'Composite',
        className: 'ConnectToTargetAzureDbForPostgreSqlSyncTaskOutput',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
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
          databases: {
            required: false,
            readOnly: true,
            serializedName: 'databases',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
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
          validationErrors: {
            required: false,
            readOnly: true,
            serializedName: 'validationErrors',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ReportableExceptionElementType',
                  type: {
                    name: 'Composite',
                    className: 'ReportableException'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ConnectToTargetAzureDbForPostgreSqlSyncTaskOutput;