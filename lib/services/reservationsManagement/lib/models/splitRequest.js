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
 * Class representing a SplitRequest.
 */
class SplitRequest {
  /**
   * Create a SplitRequest.
   * @member {array} [quantities] List of the quantities in the new
   * reservations to create.
   * @member {string} [reservationId] Resource id of the reservation to be
   * split. Format of the resource id should be
   * /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}
   */
  constructor() {
  }

  /**
   * Defines the metadata of SplitRequest
   *
   * @returns {object} metadata of SplitRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SplitRequest',
      type: {
        name: 'Composite',
        className: 'SplitRequest',
        modelProperties: {
          quantities: {
            required: false,
            serializedName: 'properties.quantities',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NumberElementType',
                  type: {
                    name: 'Number'
                  }
              }
            }
          },
          reservationId: {
            required: false,
            serializedName: 'properties.reservationId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SplitRequest;
