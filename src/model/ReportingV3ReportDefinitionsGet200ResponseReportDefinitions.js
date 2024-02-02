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
    define(['ApiClient', 'model/ReportingV3ReportDefinitionsNameGet200ResponseDefaultSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportingV3ReportDefinitionsNameGet200ResponseDefaultSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ReportingV3ReportDefinitionsGet200ResponseReportDefinitions = factory(root.CyberSource.ApiClient, root.CyberSource.ReportingV3ReportDefinitionsNameGet200ResponseDefaultSettings);
  }
}(this, function(ApiClient, ReportingV3ReportDefinitionsNameGet200ResponseDefaultSettings) {
  'use strict';




  /**
   * The ReportingV3ReportDefinitionsGet200ResponseReportDefinitions model module.
   * @module model/ReportingV3ReportDefinitionsGet200ResponseReportDefinitions
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ReportingV3ReportDefinitionsGet200ResponseReportDefinitions</code>.
   * @alias module:model/ReportingV3ReportDefinitionsGet200ResponseReportDefinitions
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>ReportingV3ReportDefinitionsGet200ResponseReportDefinitions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportingV3ReportDefinitionsGet200ResponseReportDefinitions} obj Optional instance to populate.
   * @return {module:model/ReportingV3ReportDefinitionsGet200ResponseReportDefinitions} The populated <code>ReportingV3ReportDefinitionsGet200ResponseReportDefinitions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('reportDefinitionId')) {
        obj['reportDefinitionId'] = ApiClient.convertToType(data['reportDefinitionId'], 'Number');
      }
      if (data.hasOwnProperty('reportDefintionName')) {
        obj['reportDefintionName'] = ApiClient.convertToType(data['reportDefintionName'], 'String');
      }
      if (data.hasOwnProperty('supportedFormats')) {
        obj['supportedFormats'] = ApiClient.convertToType(data['supportedFormats'], ['String']);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('defaultSettings')) {
        obj['defaultSettings'] = ReportingV3ReportDefinitionsNameGet200ResponseDefaultSettings.constructFromObject(data['defaultSettings']);
      }
      if (data.hasOwnProperty('subscriptionType')) {
        obj['subscriptionType'] = ApiClient.convertToType(data['subscriptionType'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * | Id  |         Definition Class          | | --- | --------------------------------- | | 210 | TransactionRequestClass           | | 211 | PaymentBatchDetailClass           | | 212 | ExceptionDetailClass              | | 213 | ProcessorSettlementDetailClass    | | 214 | ProcessorEventsDetailClass        | | 215 | FundingDetailClass                | | 216 | AgingDetailClass                  | | 217 | ChargebackAndRetrievalDetailClass | | 218 | DepositDetailClass                | | 219 | FeeDetailClass                    | | 220 | InvoiceSummaryClass               | | 221 | PayerAuthDetailClass              | | 222 | ConversionDetailClass             | | 270 | JPTransactionDetailClass          | | 271 | ServiceFeeDetailClass             | | 310 | GatewayTransactionRequestClass    | | 400 | DecisionManagerEventDetailClass   | | 401 | DecisionManagerDetailClass        | | 410 | FeeSummaryClass                   | | 420 | TaxCalculationClass               | | 520 | POSTerminalExceptionClass         | | 620 | SubscriptionDetailClass           | 
   * @member {Number} reportDefinitionId
   */
  exports.prototype['reportDefinitionId'] = undefined;
  /**
   * @member {String} reportDefintionName
   */
  exports.prototype['reportDefintionName'] = undefined;
  /**
   * @member {Array.<String>} supportedFormats
   */
  exports.prototype['supportedFormats'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {module:model/ReportingV3ReportDefinitionsNameGet200ResponseDefaultSettings} defaultSettings
   */
  exports.prototype['defaultSettings'] = undefined;
  /**
   * 'The subscription type for which report definition is required. By default the type will be CUSTOM.' Valid Values: - CLASSIC - CUSTOM - STANDARD 
   * @member {String} subscriptionType
   */
  exports.prototype['subscriptionType'] = undefined;



  return exports;
}));

