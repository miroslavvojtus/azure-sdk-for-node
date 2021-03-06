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
 * Describes automatic OS upgrade properties on the image.
 *
 */
class AutomaticOSUpgradeProperties {
  /**
   * Create a AutomaticOSUpgradeProperties.
   * @member {boolean} automaticOSUpgradeSupported Specifies whether automatic
   * OS upgrade is supported on the image.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AutomaticOSUpgradeProperties
   *
   * @returns {object} metadata of AutomaticOSUpgradeProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AutomaticOSUpgradeProperties',
      type: {
        name: 'Composite',
        className: 'AutomaticOSUpgradeProperties',
        modelProperties: {
          automaticOSUpgradeSupported: {
            required: true,
            serializedName: 'automaticOSUpgradeSupported',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = AutomaticOSUpgradeProperties;
