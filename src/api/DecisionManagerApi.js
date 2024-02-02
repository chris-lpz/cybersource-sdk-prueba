/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AddNegativeListRequest', 'model/CaseManagementActionsRequest', 'model/CaseManagementCommentsRequest', 'model/CreateBundledDecisionManagerCaseRequest', 'model/FraudMarkingActionRequest', 'model/InlineResponse200', 'model/InlineResponse201', 'model/InlineResponse4001', 'model/InlineResponse4031', 'model/InlineResponse422', 'model/InlineResponse5001', 'model/InlineResponse502', 'model/InlineResponse503', 'model/PtsV2PaymentsPost502Response', 'model/RiskV1DecisionsPost201Response', 'model/RiskV1DecisionsPost400Response', 'model/RiskV1DecisionsPost400Response1', 'model/RiskV1UpdatePost201Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddNegativeListRequest'), require('../model/CaseManagementActionsRequest'), require('../model/CaseManagementCommentsRequest'), require('../model/CreateBundledDecisionManagerCaseRequest'), require('../model/FraudMarkingActionRequest'), require('../model/InlineResponse200'), require('../model/InlineResponse201'), require('../model/InlineResponse4001'), require('../model/InlineResponse4031'), require('../model/InlineResponse422'), require('../model/InlineResponse5001'), require('../model/InlineResponse502'), require('../model/InlineResponse503'), require('../model/PtsV2PaymentsPost502Response'), require('../model/RiskV1DecisionsPost201Response'), require('../model/RiskV1DecisionsPost400Response'), require('../model/RiskV1DecisionsPost400Response1'), require('../model/RiskV1UpdatePost201Response'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.DecisionManagerApi = factory(root.CyberSource.ApiClient, root.CyberSource.AddNegativeListRequest, root.CyberSource.CaseManagementActionsRequest, root.CyberSource.CaseManagementCommentsRequest, root.CyberSource.CreateBundledDecisionManagerCaseRequest, root.CyberSource.FraudMarkingActionRequest, root.CyberSource.InlineResponse200, root.CyberSource.InlineResponse201, root.CyberSource.InlineResponse4001, root.CyberSource.InlineResponse4031, root.CyberSource.InlineResponse422, root.CyberSource.InlineResponse5001, root.CyberSource.InlineResponse502, root.CyberSource.InlineResponse503, root.CyberSource.PtsV2PaymentsPost502Response, root.CyberSource.RiskV1DecisionsPost201Response, root.CyberSource.RiskV1DecisionsPost400Response, root.CyberSource.RiskV1DecisionsPost400Response1, root.CyberSource.RiskV1UpdatePost201Response);
  }
}(this, function(ApiClient, AddNegativeListRequest, CaseManagementActionsRequest, CaseManagementCommentsRequest, CreateBundledDecisionManagerCaseRequest, FraudMarkingActionRequest, InlineResponse200, InlineResponse201, InlineResponse4001, InlineResponse4031, InlineResponse422, InlineResponse5001, InlineResponse502, InlineResponse503, PtsV2PaymentsPost502Response, RiskV1DecisionsPost201Response, RiskV1DecisionsPost400Response, RiskV1DecisionsPost400Response1, RiskV1UpdatePost201Response) {
  'use strict';

  /**
   * DecisionManager service.
   * @module api/DecisionManagerApi
   * @version 0.0.1
   */

  /**
   * Constructs a new DecisionManagerApi. 
   * @alias module:api/DecisionManagerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the actionDecisionManagerCase operation.
     * @callback module:api/DecisionManagerApi~actionDecisionManagerCaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Take action on a DM post-transactional case
     * Take action on a DM post-transactional case
     * @param {String} id An unique identification number generated by Cybersource to identify the submitted request.
     * @param {module:model/CaseManagementActionsRequest} caseManagementActionsRequest 
     * @param {module:api/DecisionManagerApi~actionDecisionManagerCaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    this.actionDecisionManagerCase = function(id, caseManagementActionsRequest, callback) {
      var postBody = caseManagementActionsRequest;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling actionDecisionManagerCase");
      }

      // verify the required parameter 'caseManagementActionsRequest' is set
      if (caseManagementActionsRequest === undefined || caseManagementActionsRequest === null) {
        throw new Error("Missing the required parameter 'caseManagementActionsRequest' when calling actionDecisionManagerCase");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/CaseManagementActionsRequest', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/risk/v1/decisions/{id}/actions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addNegative operation.
     * @callback module:api/DecisionManagerApi~addNegativeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RiskV1UpdatePost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Management
     * This call adds/deletes/converts the request information in the negative list.  Provide the list to be updated as the path parameter. This value can be &#39;postiive&#39;, &#39;negative&#39; or &#39;review&#39;. 
     * @param {String} type The list to be updated. It can be &#39;positive&#39;, &#39;negative&#39; or &#39;review&#39;.
     * @param {module:model/AddNegativeListRequest} addNegativeListRequest 
     * @param {module:api/DecisionManagerApi~addNegativeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RiskV1UpdatePost201Response}
     */
    this.addNegative = function(type, addNegativeListRequest, callback) {
      var postBody = addNegativeListRequest;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling addNegative");
      }

      // verify the required parameter 'addNegativeListRequest' is set
      if (addNegativeListRequest === undefined || addNegativeListRequest === null) {
        throw new Error("Missing the required parameter 'addNegativeListRequest' when calling addNegative");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/AddNegativeListRequest', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
        'type': type
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = RiskV1UpdatePost201Response;

      return this.apiClient.callApi(
        '/risk/v1/lists/{type}/entries', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the commentDecisionManagerCase operation.
     * @callback module:api/DecisionManagerApi~commentDecisionManagerCaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a comment to a DM post-transactional case
     * Add a comment to a DM post-transactional case
     * @param {String} id An unique identification number generated by Cybersource to identify the submitted request.
     * @param {module:model/CaseManagementCommentsRequest} caseManagementCommentsRequest 
     * @param {module:api/DecisionManagerApi~commentDecisionManagerCaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */
    this.commentDecisionManagerCase = function(id, caseManagementCommentsRequest, callback) {
      var postBody = caseManagementCommentsRequest;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling commentDecisionManagerCase");
      }

      // verify the required parameter 'caseManagementCommentsRequest' is set
      if (caseManagementCommentsRequest === undefined || caseManagementCommentsRequest === null) {
        throw new Error("Missing the required parameter 'caseManagementCommentsRequest' when calling commentDecisionManagerCase");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/CaseManagementCommentsRequest', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse201;

      return this.apiClient.callApi(
        '/risk/v1/decisions/{id}/comments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createBundledDecisionManagerCase operation.
     * @callback module:api/DecisionManagerApi~createBundledDecisionManagerCaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RiskV1DecisionsPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Decision Manager
     * Decision Manager can help you automate and streamline your fraud operations. Decision Manager will return a decision based on the request values.
     * @param {module:model/CreateBundledDecisionManagerCaseRequest} createBundledDecisionManagerCaseRequest 
     * @param {module:api/DecisionManagerApi~createBundledDecisionManagerCaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RiskV1DecisionsPost201Response}
     */
    this.createBundledDecisionManagerCase = function(createBundledDecisionManagerCaseRequest, callback) {
      var postBody = createBundledDecisionManagerCaseRequest;

      // verify the required parameter 'createBundledDecisionManagerCaseRequest' is set
      if (createBundledDecisionManagerCaseRequest === undefined || createBundledDecisionManagerCaseRequest === null) {
        throw new Error("Missing the required parameter 'createBundledDecisionManagerCaseRequest' when calling createBundledDecisionManagerCase");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/CreateBundledDecisionManagerCaseRequest', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = RiskV1DecisionsPost201Response;

      return this.apiClient.callApi(
        '/risk/v1/decisions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the fraudUpdate operation.
     * @callback module:api/DecisionManagerApi~fraudUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RiskV1UpdatePost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fraud Marking
     * This can be used to - 1. Add known fraudulent data to the fraud history 2. Remove data added to history with Transaction Marking Tool or by uploading chargeback files 3. Remove chargeback data from history that was automatically added. For detailed information, contact your Cybersource representative  Place the request ID of the transaction you want to mark as suspect (or remove from history) as the path parameter in this request. 
     * @param {String} id Request ID of the transaction that you want to mark as suspect or remove from history.
     * @param {module:model/FraudMarkingActionRequest} fraudMarkingActionRequest 
     * @param {module:api/DecisionManagerApi~fraudUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RiskV1UpdatePost201Response}
     */
    this.fraudUpdate = function(id, fraudMarkingActionRequest, callback) {
      var postBody = fraudMarkingActionRequest;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling fraudUpdate");
      }

      // verify the required parameter 'fraudMarkingActionRequest' is set
      if (fraudMarkingActionRequest === undefined || fraudMarkingActionRequest === null) {
        throw new Error("Missing the required parameter 'fraudMarkingActionRequest' when calling fraudUpdate");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/FraudMarkingActionRequest', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = RiskV1UpdatePost201Response;

      return this.apiClient.callApi(
        '/risk/v1/decisions/{id}/marking', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
