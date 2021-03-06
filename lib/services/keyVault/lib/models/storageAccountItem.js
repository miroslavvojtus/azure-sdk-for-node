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
 * The storage account item containing storage account metadata.
 *
 */
class StorageAccountItem {
  /**
   * Create a StorageAccountItem.
   * @member {string} [id] Storage identifier.
   * @member {string} [resourceId] Storage account resource Id.
   * @member {object} [attributes] The storage account management attributes.
   * @member {boolean} [attributes.enabled] the enabled state of the object.
   * @member {date} [attributes.created] Creation time in UTC.
   * @member {date} [attributes.updated] Last updated time in UTC.
   * @member {string} [attributes.recoveryLevel] Reflects the deletion recovery
   * level currently in effect for storage accounts in the current vault. If it
   * contains 'Purgeable' the storage account can be permanently deleted by a
   * privileged user; otherwise, only the system can purge the storage account,
   * at the end of the retention interval. Possible values include:
   * 'Purgeable', 'Recoverable+Purgeable', 'Recoverable',
   * 'Recoverable+ProtectedSubscription'
   * @member {object} [tags] Application specific metadata in the form of
   * key-value pairs.
   */
  constructor() {
  }

  /**
   * Defines the metadata of StorageAccountItem
   *
   * @returns {object} metadata of StorageAccountItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StorageAccountItem',
      type: {
        name: 'Composite',
        className: 'StorageAccountItem',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          resourceId: {
            required: false,
            readOnly: true,
            serializedName: 'resourceId',
            type: {
              name: 'String'
            }
          },
          attributes: {
            required: false,
            readOnly: true,
            serializedName: 'attributes',
            type: {
              name: 'Composite',
              className: 'StorageAccountAttributes'
            }
          },
          tags: {
            required: false,
            readOnly: true,
            serializedName: 'tags',
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
          }
        }
      }
    };
  }
}

module.exports = StorageAccountItem;
