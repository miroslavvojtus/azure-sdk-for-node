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
 * MSDeploy ARM PUT information
 *
 * @extends models['ProxyOnlyResource']
 */
class MSDeploy extends models['ProxyOnlyResource'] {
  /**
   * Create a MSDeploy.
   * @member {string} [packageUri] Package URI
   * @member {string} [connectionString] SQL Connection String
   * @member {string} [dbType] Database Type
   * @member {string} [setParametersXmlFileUri] URI of MSDeploy Parameters
   * file. Must not be set if SetParameters is used.
   * @member {object} [setParameters] MSDeploy Parameters. Must not be set if
   * SetParametersXmlFileUri is used.
   * @member {boolean} [skipAppData] Controls whether the MSDeploy operation
   * skips the App_Data directory.
   * If set to <code>true</code>, the existing App_Data directory on the
   * destination
   * will not be deleted, and any App_Data directory in the source will be
   * ignored.
   * Setting is <code>false</code> by default.
   * @member {boolean} [appOffline] Sets the AppOffline rule while the MSDeploy
   * operation executes.
   * Setting is <code>false</code> by default.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of MSDeploy
   *
   * @returns {object} metadata of MSDeploy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MSDeploy',
      type: {
        name: 'Composite',
        className: 'MSDeploy',
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
          kind: {
            required: false,
            serializedName: 'kind',
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
          packageUri: {
            required: false,
            serializedName: 'properties.packageUri',
            type: {
              name: 'String'
            }
          },
          connectionString: {
            required: false,
            serializedName: 'properties.connectionString',
            type: {
              name: 'String'
            }
          },
          dbType: {
            required: false,
            serializedName: 'properties.dbType',
            type: {
              name: 'String'
            }
          },
          setParametersXmlFileUri: {
            required: false,
            serializedName: 'properties.setParametersXmlFileUri',
            type: {
              name: 'String'
            }
          },
          setParameters: {
            required: false,
            serializedName: 'properties.setParameters',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          skipAppData: {
            required: false,
            serializedName: 'properties.skipAppData',
            type: {
              name: 'Boolean'
            }
          },
          appOffline: {
            required: false,
            serializedName: 'properties.appOffline',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = MSDeploy;