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
 * The extended info of the manager.
 *
 * @extends models['BaseModel']
 */
class ManagerExtendedInfo extends models['BaseModel'] {
  /**
   * Create a ManagerExtendedInfo.
   * @member {string} [version] Represents the version of the ExtendedInfo
   * object being persisted
   * @member {string} integrityKey Represents the CIK of the resource
   * @member {string} [encryptionKey] Represents the CEK of the resource
   * @member {string} [encryptionKeyThumbprint] Represents the Cert thumbprint
   * that was used to encrypt the CEK
   * @member {string} [portalCertificateThumbprint] Represents the portal
   * thumbprint which can be used optionally to encrypt the entire data before
   * storing it.
   * @member {string} algorithm Represents the encryption algorithm used to
   * encrypt the other keys. None - if EncryptionKey is saved in plain text
   * format. AlgorithmName - if encryption is used
   * @member {string} [etag] ETag of the Resource
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ManagerExtendedInfo
   *
   * @returns {object} metadata of ManagerExtendedInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ManagerExtendedInfo',
      type: {
        name: 'Composite',
        className: 'ManagerExtendedInfo',
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
          version: {
            required: false,
            serializedName: 'properties.version',
            type: {
              name: 'String'
            }
          },
          integrityKey: {
            required: true,
            serializedName: 'properties.integrityKey',
            type: {
              name: 'String'
            }
          },
          encryptionKey: {
            required: false,
            serializedName: 'properties.encryptionKey',
            type: {
              name: 'String'
            }
          },
          encryptionKeyThumbprint: {
            required: false,
            serializedName: 'properties.encryptionKeyThumbprint',
            type: {
              name: 'String'
            }
          },
          portalCertificateThumbprint: {
            required: false,
            serializedName: 'properties.portalCertificateThumbprint',
            type: {
              name: 'String'
            }
          },
          algorithm: {
            required: true,
            serializedName: 'properties.algorithm',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ManagerExtendedInfo;