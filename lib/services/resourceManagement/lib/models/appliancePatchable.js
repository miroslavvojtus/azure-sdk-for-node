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
 * Information about appliance.
 *
 * @extends models['GenericResource']
 */
class AppliancePatchable extends models['GenericResource'] {
  /**
   * Create a AppliancePatchable.
   * @property {string} [managedResourceGroupId] The managed resource group Id.
   * @property {string} [applianceDefinitionId] The fully qualified path of
   * appliance definition Id.
   * @property {object} [parameters] Name and value pairs that define the
   * appliance parameters. It can be a JObject or a well formed JSON string.
   * @property {object} [outputs] Name and value pairs that define the
   * appliance outputs.
   * @property {string} [provisioningState] The appliance provisioning state.
   * Possible values include: 'Accepted', 'Running', 'Ready', 'Creating',
   * 'Created', 'Deleting', 'Deleted', 'Canceled', 'Failed', 'Succeeded',
   * 'Updating'
   * @property {string} [uiDefinitionUri] The blob URI where the UI definition
   * file is located.
   * @property {object} [plan] The plan information.
   * @property {string} [plan.name] The plan name.
   * @property {string} [plan.publisher] The publisher ID.
   * @property {string} [plan.product] The product code.
   * @property {string} [plan.promotionCode] The promotion code.
   * @property {string} [plan.version] The plan's version.
   * @property {string} [kind] The kind of the appliance. Allowed values are
   * MarketPlace and ServiceCatalog.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AppliancePatchable
   *
   * @returns {object} metadata of AppliancePatchable
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppliancePatchable',
      type: {
        name: 'Composite',
        className: 'AppliancePatchable',
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
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
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
          },
          managedBy: {
            required: false,
            serializedName: 'managedBy',
            type: {
              name: 'String'
            }
          },
          sku: {
            required: false,
            serializedName: 'sku',
            type: {
              name: 'Composite',
              className: 'Sku'
            }
          },
          identity: {
            required: false,
            serializedName: 'identity',
            type: {
              name: 'Composite',
              className: 'Identity'
            }
          },
          managedResourceGroupId: {
            required: false,
            serializedName: 'properties.managedResourceGroupId',
            type: {
              name: 'String'
            }
          },
          applianceDefinitionId: {
            required: false,
            serializedName: 'properties.applianceDefinitionId',
            type: {
              name: 'String'
            }
          },
          parameters: {
            required: false,
            serializedName: 'properties.parameters',
            type: {
              name: 'Object'
            }
          },
          outputs: {
            required: false,
            readOnly: true,
            serializedName: 'properties.outputs',
            type: {
              name: 'Object'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          uiDefinitionUri: {
            required: false,
            serializedName: 'properties.uiDefinitionUri',
            type: {
              name: 'String'
            }
          },
          plan: {
            required: false,
            serializedName: 'plan',
            type: {
              name: 'Composite',
              className: 'PlanPatchable'
            }
          },
          kind: {
            required: false,
            serializedName: 'kind',
            constraints: {
              Pattern: /^[-\w\._,\(\)]+$/
            },
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AppliancePatchable;
