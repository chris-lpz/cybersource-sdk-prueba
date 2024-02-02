# CyberSource.DecisionManagerApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionDecisionManagerCase**](DecisionManagerApi.md#actionDecisionManagerCase) | **POST** /risk/v1/decisions/{id}/actions | Take action on a DM post-transactional case
[**addNegative**](DecisionManagerApi.md#addNegative) | **POST** /risk/v1/lists/{type}/entries | List Management
[**commentDecisionManagerCase**](DecisionManagerApi.md#commentDecisionManagerCase) | **POST** /risk/v1/decisions/{id}/comments | Add a comment to a DM post-transactional case
[**createBundledDecisionManagerCase**](DecisionManagerApi.md#createBundledDecisionManagerCase) | **POST** /risk/v1/decisions | Create Decision Manager
[**fraudUpdate**](DecisionManagerApi.md#fraudUpdate) | **POST** /risk/v1/decisions/{id}/marking | Fraud Marking


<a name="actionDecisionManagerCase"></a>
# **actionDecisionManagerCase**
> InlineResponse200 actionDecisionManagerCase(id, caseManagementActionsRequest)

Take action on a DM post-transactional case

Take action on a DM post-transactional case

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.DecisionManagerApi();

var id = "id_example"; // String | An unique identification number generated by Cybersource to identify the submitted request.

var caseManagementActionsRequest = new CyberSource.CaseManagementActionsRequest(); // CaseManagementActionsRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionDecisionManagerCase(id, caseManagementActionsRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| An unique identification number generated by Cybersource to identify the submitted request. | 
 **caseManagementActionsRequest** | [**CaseManagementActionsRequest**](CaseManagementActionsRequest.md)|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addNegative"></a>
# **addNegative**
> RiskV1UpdatePost201Response addNegative(type, addNegativeListRequest)

List Management

This call adds/deletes/converts the request information in the negative list.  Provide the list to be updated as the path parameter. This value can be &#39;postiive&#39;, &#39;negative&#39; or &#39;review&#39;. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.DecisionManagerApi();

var type = "type_example"; // String | The list to be updated. It can be 'positive', 'negative' or 'review'.

var addNegativeListRequest = new CyberSource.AddNegativeListRequest(); // AddNegativeListRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addNegative(type, addNegativeListRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| The list to be updated. It can be &#39;positive&#39;, &#39;negative&#39; or &#39;review&#39;. | 
 **addNegativeListRequest** | [**AddNegativeListRequest**](AddNegativeListRequest.md)|  | 

### Return type

[**RiskV1UpdatePost201Response**](RiskV1UpdatePost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="commentDecisionManagerCase"></a>
# **commentDecisionManagerCase**
> InlineResponse201 commentDecisionManagerCase(id, caseManagementCommentsRequest)

Add a comment to a DM post-transactional case

Add a comment to a DM post-transactional case

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.DecisionManagerApi();

var id = "id_example"; // String | An unique identification number generated by Cybersource to identify the submitted request.

var caseManagementCommentsRequest = new CyberSource.CaseManagementCommentsRequest(); // CaseManagementCommentsRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.commentDecisionManagerCase(id, caseManagementCommentsRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| An unique identification number generated by Cybersource to identify the submitted request. | 
 **caseManagementCommentsRequest** | [**CaseManagementCommentsRequest**](CaseManagementCommentsRequest.md)|  | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createBundledDecisionManagerCase"></a>
# **createBundledDecisionManagerCase**
> RiskV1DecisionsPost201Response createBundledDecisionManagerCase(createBundledDecisionManagerCaseRequest)

Create Decision Manager

Decision Manager can help you automate and streamline your fraud operations. Decision Manager will return a decision based on the request values.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.DecisionManagerApi();

var createBundledDecisionManagerCaseRequest = new CyberSource.CreateBundledDecisionManagerCaseRequest(); // CreateBundledDecisionManagerCaseRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createBundledDecisionManagerCase(createBundledDecisionManagerCaseRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBundledDecisionManagerCaseRequest** | [**CreateBundledDecisionManagerCaseRequest**](CreateBundledDecisionManagerCaseRequest.md)|  | 

### Return type

[**RiskV1DecisionsPost201Response**](RiskV1DecisionsPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="fraudUpdate"></a>
# **fraudUpdate**
> RiskV1UpdatePost201Response fraudUpdate(id, fraudMarkingActionRequest)

Fraud Marking

This can be used to - 1. Add known fraudulent data to the fraud history 2. Remove data added to history with Transaction Marking Tool or by uploading chargeback files 3. Remove chargeback data from history that was automatically added. For detailed information, contact your Cybersource representative  Place the request ID of the transaction you want to mark as suspect (or remove from history) as the path parameter in this request. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.DecisionManagerApi();

var id = "id_example"; // String | Request ID of the transaction that you want to mark as suspect or remove from history.

var fraudMarkingActionRequest = new CyberSource.FraudMarkingActionRequest(); // FraudMarkingActionRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.fraudUpdate(id, fraudMarkingActionRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Request ID of the transaction that you want to mark as suspect or remove from history. | 
 **fraudMarkingActionRequest** | [**FraudMarkingActionRequest**](FraudMarkingActionRequest.md)|  | 

### Return type

[**RiskV1UpdatePost201Response**](RiskV1UpdatePost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8
