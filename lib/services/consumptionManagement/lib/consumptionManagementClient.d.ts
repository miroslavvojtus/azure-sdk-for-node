/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClient, ServiceClientOptions, ServiceCallback, HttpOperationResponse, ServiceClientCredentials } from 'ms-rest';
import { AzureServiceClient, AzureServiceClientOptions } from 'ms-rest-azure';
import * as models from "./models";
import * as operations from "./operations";

export default class ConsumptionManagementClient extends AzureServiceClient {
  /**
   * Initializes a new instance of the ConsumptionManagementClient class.
   * @constructor
   *
   * @class
   * @param {credentials} credentials - Credentials needed for the client to connect to Azure.
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
   *
   * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
   *
   * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   *
   */
  constructor(credentials: ServiceClientCredentials, baseUri?: string, options?: AzureServiceClientOptions);

  credentials: ServiceClientCredentials;

  apiVersion: string;

  acceptLanguage: string;

  longRunningOperationRetryTimeout: number;

  generateClientRequestId: boolean;

  // Operation groups
  chargesByBillingAccount: operations.ChargesByBillingAccount;
  chargesForBillingAccountByProject: operations.ChargesForBillingAccountByProject;
  chargesByProject: operations.ChargesByProject;
  chargesForBillingAccountByBillingProfile: operations.ChargesForBillingAccountByBillingProfile;
  chargesByBillingProfile: operations.ChargesByBillingProfile;
  creditsByBillingAccount: operations.CreditsByBillingAccount;
  creditsByBillingProfile: operations.CreditsByBillingProfile;
  productsByBillingAccount: operations.ProductsByBillingAccount;
  paymentMethodsByBillingAccount: operations.PaymentMethodsByBillingAccount;
  paymentMethodsByBillingProfile: operations.PaymentMethodsByBillingProfile;


  /**
   * Lists the products by billingProfileId for given start and end date.
   *
   * @param {string} billingAccountId BillingAccount ID
   *
   * @param {string} billingProfileId Billing Profile Id.
   *
   * @param {string} startDate Start date
   *
   * @param {string} endDate End date
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ProductsListResult>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  productsByBillingProfileWithHttpOperationResponse(billingAccountId: string, billingProfileId: string, startDate: string, endDate: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ProductsListResult>>;

  /**
   * Lists the products by billingProfileId for given start and end date.
   *
   * @param {string} billingAccountId BillingAccount ID
   *
   * @param {string} billingProfileId Billing Profile Id.
   *
   * @param {string} startDate Start date
   *
   * @param {string} endDate End date
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ProductsListResult} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ProductsListResult} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ProductsListResult} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  productsByBillingProfile(billingAccountId: string, billingProfileId: string, startDate: string, endDate: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.ProductsListResult>;
  productsByBillingProfile(billingAccountId: string, billingProfileId: string, startDate: string, endDate: string, callback: ServiceCallback<models.ProductsListResult>): void;
  productsByBillingProfile(billingAccountId: string, billingProfileId: string, startDate: string, endDate: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ProductsListResult>): void;
}

export { ConsumptionManagementClient, models as ConsumptionManagementModels };
