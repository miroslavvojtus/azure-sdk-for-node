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
 * Base class for file properties.
 *
 */
class ProjectFileProperties {
  /**
   * Create a ProjectFileProperties.
   * @property {string} [extension] Optional File extension. If submitted it
   * should not have a leading period and must match the extension from
   * filePath.
   * @property {string} [filePath] Relative path of this file resource. This
   * property can be set when creating or updating the file resource.
   * @property {date} [lastModified] Modification DateTime.
   * @property {string} [mediaType] File content type. This propery can be
   * modified to reflect the file content type.
   * @property {number} [size] File size.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ProjectFileProperties
   *
   * @returns {object} metadata of ProjectFileProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ProjectFileProperties',
      type: {
        name: 'Composite',
        className: 'ProjectFileProperties',
        modelProperties: {
          extension: {
            required: false,
            serializedName: 'extension',
            type: {
              name: 'String'
            }
          },
          filePath: {
            required: false,
            serializedName: 'filePath',
            type: {
              name: 'String'
            }
          },
          lastModified: {
            required: false,
            readOnly: true,
            serializedName: 'lastModified',
            type: {
              name: 'DateTime'
            }
          },
          mediaType: {
            required: false,
            serializedName: 'mediaType',
            type: {
              name: 'String'
            }
          },
          size: {
            required: false,
            readOnly: true,
            serializedName: 'size',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ProjectFileProperties;