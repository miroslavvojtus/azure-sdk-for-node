// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'lchency4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://lchency4.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ee7eaf5-6a2f-49fd-953f-d760b5ac2e05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs?api-version=2018-08-01.7.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 21 Aug 2018 20:25:24 GMT',
  etag: '0x8D607A439A76693',
  location: 'https://lchency4.westcentralus.batch.azure.com/jobs/job-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '8c1629a1-6b0a-41a8-b07a-908a6cb46b51',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://lchency4.westcentralus.batch.azure.com/jobs/job-1',
  date: 'Tue, 21 Aug 2018 20:25:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs?api-version=2018-08-01.7.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 21 Aug 2018 20:25:24 GMT',
  etag: '0x8D607A439A76693',
  location: 'https://lchency4.westcentralus.batch.azure.com/jobs/job-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '8c1629a1-6b0a-41a8-b07a-908a6cb46b51',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://lchency4.westcentralus.batch.azure.com/jobs/job-1',
  date: 'Tue, 21 Aug 2018 20:25:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/ContainerJobNodeSDKTest/tasks?api-version=2018-08-01.7.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 21 Aug 2018 20:25:24 GMT',
  etag: '0x8D607A439BE4963',
  location: 'https://lchency4.westcentralus.batch.azure.com/jobs/ContainerJobNodeSDKTest/tasks/ContainerNodeSDKTestTask',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '8ed01ce5-ca1b-4a8d-91bf-a5eb7d28e89e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://lchency4.westcentralus.batch.azure.com/jobs/ContainerJobNodeSDKTest/tasks/ContainerNodeSDKTestTask',
  date: 'Tue, 21 Aug 2018 20:25:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/ContainerJobNodeSDKTest/tasks?api-version=2018-08-01.7.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 21 Aug 2018 20:25:24 GMT',
  etag: '0x8D607A439BE4963',
  location: 'https://lchency4.westcentralus.batch.azure.com/jobs/ContainerJobNodeSDKTest/tasks/ContainerNodeSDKTestTask',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '8ed01ce5-ca1b-4a8d-91bf-a5eb7d28e89e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://lchency4.westcentralus.batch.azure.com/jobs/ContainerJobNodeSDKTest/tasks/ContainerNodeSDKTestTask',
  date: 'Tue, 21 Aug 2018 20:25:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .delete('/jobs/ContainerJobNodeSDKTest?api-version=2018-08-01.7.0')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '615df23b-468d-404f-938f-089d90517196',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:25:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .delete('/jobs/ContainerJobNodeSDKTest?api-version=2018-08-01.7.0')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '615df23b-468d-404f-938f-089d90517196',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:25:24 GMT',
  connection: 'close' });
 return result; }]];