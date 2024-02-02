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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ReportingV3ChargebackDetailsGet200ResponseChargebackDetails = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReportingV3ChargebackDetailsGet200ResponseChargebackDetails model module.
   * @module model/ReportingV3ChargebackDetailsGet200ResponseChargebackDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ReportingV3ChargebackDetailsGet200ResponseChargebackDetails</code>.
   * @alias module:model/ReportingV3ChargebackDetailsGet200ResponseChargebackDetails
   * @class
   */
  var exports = function() {
    var _this = this;
























  };

  /**
   * Constructs a <code>ReportingV3ChargebackDetailsGet200ResponseChargebackDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportingV3ChargebackDetailsGet200ResponseChargebackDetails} obj Optional instance to populate.
   * @return {module:model/ReportingV3ChargebackDetailsGet200ResponseChargebackDetails} The populated <code>ReportingV3ChargebackDetailsGet200ResponseChargebackDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('processorMerchantId')) {
        obj['processorMerchantId'] = ApiClient.convertToType(data['processorMerchantId'], 'String');
      }
      if (data.hasOwnProperty('merchantName')) {
        obj['merchantName'] = ApiClient.convertToType(data['merchantName'], 'String');
      }
      if (data.hasOwnProperty('transactionReferenceNumber')) {
        obj['transactionReferenceNumber'] = ApiClient.convertToType(data['transactionReferenceNumber'], 'String');
      }
      if (data.hasOwnProperty('merchantReferenceNumber')) {
        obj['merchantReferenceNumber'] = ApiClient.convertToType(data['merchantReferenceNumber'], 'String');
      }
      if (data.hasOwnProperty('natureOfDispute')) {
        obj['natureOfDispute'] = ApiClient.convertToType(data['natureOfDispute'], 'String');
      }
      if (data.hasOwnProperty('alertType')) {
        obj['alertType'] = ApiClient.convertToType(data['alertType'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
      if (data.hasOwnProperty('sign')) {
        obj['sign'] = ApiClient.convertToType(data['sign'], 'String');
      }
      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('cardType')) {
        obj['cardType'] = ApiClient.convertToType(data['cardType'], 'String');
      }
      if (data.hasOwnProperty('originalSettlementTime')) {
        obj['originalSettlementTime'] = ApiClient.convertToType(data['originalSettlementTime'], 'Date');
      }
      if (data.hasOwnProperty('trackingNumber')) {
        obj['trackingNumber'] = ApiClient.convertToType(data['trackingNumber'], 'String');
      }
      if (data.hasOwnProperty('currencyCode')) {
        obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
      }
      if (data.hasOwnProperty('requestId')) {
        obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
      }
      if (data.hasOwnProperty('responseDueTime')) {
        obj['responseDueTime'] = ApiClient.convertToType(data['responseDueTime'], 'Date');
      }
      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Date');
      }
      if (data.hasOwnProperty('actionDescription')) {
        obj['actionDescription'] = ApiClient.convertToType(data['actionDescription'], 'String');
      }
      if (data.hasOwnProperty('customerId')) {
        obj['customerId'] = ApiClient.convertToType(data['customerId'], 'String');
      }
      if (data.hasOwnProperty('reasonCode')) {
        obj['reasonCode'] = ApiClient.convertToType(data['reasonCode'], 'String');
      }
      if (data.hasOwnProperty('representmentCPTime')) {
        obj['representmentCPTime'] = ApiClient.convertToType(data['representmentCPTime'], 'Date');
      }
      if (data.hasOwnProperty('applications')) {
        obj['applications'] = ApiClient.convertToType(data['applications'], 'String');
      }
      if (data.hasOwnProperty('eventRequestedTime')) {
        obj['eventRequestedTime'] = ApiClient.convertToType(data['eventRequestedTime'], 'Date');
      }
      if (data.hasOwnProperty('preDisputeFlag')) {
        obj['preDisputeFlag'] = ApiClient.convertToType(data['preDisputeFlag'], 'String');
      }
    }
    return obj;
  }

  /**
   * Processor Merchant Id
   * @member {String} processorMerchantId
   */
  exports.prototype['processorMerchantId'] = undefined;
  /**
   * Merchant Name
   * @member {String} merchantName
   */
  exports.prototype['merchantName'] = undefined;
  /**
   * Transaction Reference Number
   * @member {String} transactionReferenceNumber
   */
  exports.prototype['transactionReferenceNumber'] = undefined;
  /**
   * Merchant Reference Number
   * @member {String} merchantReferenceNumber
   */
  exports.prototype['merchantReferenceNumber'] = undefined;
  /**
   * Nature of Dispute
   * @member {String} natureOfDispute
   */
  exports.prototype['natureOfDispute'] = undefined;
  /**
   * Chargeback Alert Type
   * @member {String} alertType
   */
  exports.prototype['alertType'] = undefined;
  /**
   * Chargeback Amount
   * @member {String} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * Chargeback Sign
   * @member {String} sign
   */
  exports.prototype['sign'] = undefined;
  /**
   * Chargeback Action
   * @member {String} action
   */
  exports.prototype['action'] = undefined;
  /**
   * Card Type
   * @member {String} cardType
   */
  exports.prototype['cardType'] = undefined;
  /**
   * Original Settlement Date
   * @member {Date} originalSettlementTime
   */
  exports.prototype['originalSettlementTime'] = undefined;
  /**
   * Tracking Number
   * @member {String} trackingNumber
   */
  exports.prototype['trackingNumber'] = undefined;
  /**
   * Valid ISO 4217 ALPHA-3 currency code
   * @member {String} currencyCode
   */
  exports.prototype['currencyCode'] = undefined;
  /**
   * Request Id
   * @member {String} requestId
   */
  exports.prototype['requestId'] = undefined;
  /**
   * Response Due Date
   * @member {Date} responseDueTime
   */
  exports.prototype['responseDueTime'] = undefined;
  /**
   * Chargeback Date
   * @member {Date} time
   */
  exports.prototype['time'] = undefined;
  /**
   * Chargeback Action Description
   * @member {String} actionDescription
   */
  exports.prototype['actionDescription'] = undefined;
  /**
   * Customer Id
   * @member {String} customerId
   */
  exports.prototype['customerId'] = undefined;
  /**
   * Chargeback Reason Code
   * @member {String} reasonCode
   */
  exports.prototype['reasonCode'] = undefined;
  /**
   * Representment CP Date
   * @member {Date} representmentCPTime
   */
  exports.prototype['representmentCPTime'] = undefined;
  /**
   * ICS Request Applications
   * @member {String} applications
   */
  exports.prototype['applications'] = undefined;
  /**
   * Event Request Date
   * @member {Date} eventRequestedTime
   */
  exports.prototype['eventRequestedTime'] = undefined;
  /**
   * Pre Dispute Flag
   * @member {String} preDisputeFlag
   */
  exports.prototype['preDisputeFlag'] = undefined;



  return exports;
}));


