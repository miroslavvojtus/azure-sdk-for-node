/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

exports.QueryContext = require('./queryContext');
exports.WebMetaTag = require('./webMetaTag');
exports.ResponseBase = require('./responseBase');
exports.Identifiable = require('./identifiable');
exports.Response = require('./response');
exports.Thing = require('./thing');
exports.CreativeWork = require('./creativeWork');
exports.WebPage = require('./webPage');
exports.Answer = require('./answer');
exports.SearchResultsAnswer = require('./searchResultsAnswer');
exports.WebWebAnswer = require('./webWebAnswer');
exports.SearchResponse = require('./searchResponse');
exports.ErrorModel = require('./errorModel');
exports.ErrorResponse = require('./errorResponse');
exports.Query = require('./query');
exports.discriminators = {
  'ResponseBase.WebPage' : exports.WebPage,
  'ResponseBase.Web/WebAnswer' : exports.WebWebAnswer,
  'ResponseBase.SearchResponse' : exports.SearchResponse,
  'ResponseBase.Response' : exports.Response,
  'ResponseBase.SearchResultsAnswer' : exports.SearchResultsAnswer,
  'ResponseBase.Identifiable' : exports.Identifiable,
  'ResponseBase.ErrorResponse' : exports.ErrorResponse,
  'ResponseBase.Answer' : exports.Answer,
  'ResponseBase.Thing' : exports.Thing,
  'ResponseBase.CreativeWork' : exports.CreativeWork,
  'ResponseBase' : exports.ResponseBase
};
