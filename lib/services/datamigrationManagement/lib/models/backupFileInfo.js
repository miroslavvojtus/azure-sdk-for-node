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
 * Information of the backup file
 *
 */
class BackupFileInfo {
  /**
   * Create a BackupFileInfo.
   * @property {string} [fileLocation] Location of the backup file in shared
   * folder
   * @property {number} [familySequenceNumber] Sequence number of the backup
   * file in the backup set
   * @property {string} [status] Status of the backup file during migration.
   * Possible values include: 'Arrived', 'Queued', 'Uploading', 'Uploaded',
   * 'Restoring', 'Restored', 'Cancelled'
   */
  constructor() {
  }

  /**
   * Defines the metadata of BackupFileInfo
   *
   * @returns {object} metadata of BackupFileInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BackupFileInfo',
      type: {
        name: 'Composite',
        className: 'BackupFileInfo',
        modelProperties: {
          fileLocation: {
            required: false,
            serializedName: 'fileLocation',
            type: {
              name: 'String'
            }
          },
          familySequenceNumber: {
            required: false,
            serializedName: 'familySequenceNumber',
            type: {
              name: 'Number'
            }
          },
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BackupFileInfo;