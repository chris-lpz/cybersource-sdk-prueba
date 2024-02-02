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
    define(['ApiClient', 'model/TssV2TransactionsGet200ResponseOrderInformationAmountDetails', 'model/TssV2TransactionsGet200ResponseOrderInformationBillTo', 'model/TssV2TransactionsGet200ResponseOrderInformationInvoiceDetails', 'model/TssV2TransactionsGet200ResponseOrderInformationLineItems', 'model/TssV2TransactionsGet200ResponseOrderInformationShipTo', 'model/TssV2TransactionsGet200ResponseOrderInformationShippingDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TssV2TransactionsGet200ResponseOrderInformationAmountDetails'), require('./TssV2TransactionsGet200ResponseOrderInformationBillTo'), require('./TssV2TransactionsGet200ResponseOrderInformationInvoiceDetails'), require('./TssV2TransactionsGet200ResponseOrderInformationLineItems'), require('./TssV2TransactionsGet200ResponseOrderInformationShipTo'), require('./TssV2TransactionsGet200ResponseOrderInformationShippingDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2TransactionsGet200ResponseOrderInformation = factory(root.CyberSource.ApiClient, root.CyberSource.TssV2TransactionsGet200ResponseOrderInformationAmountDetails, root.CyberSource.TssV2TransactionsGet200ResponseOrderInformationBillTo, root.CyberSource.TssV2TransactionsGet200ResponseOrderInformationInvoiceDetails, root.CyberSource.TssV2TransactionsGet200ResponseOrderInformationLineItems, root.CyberSource.TssV2TransactionsGet200ResponseOrderInformationShipTo, root.CyberSource.TssV2TransactionsGet200ResponseOrderInformationShippingDetails);
  }
}(this, function(ApiClient, TssV2TransactionsGet200ResponseOrderInformationAmountDetails, TssV2TransactionsGet200ResponseOrderInformationBillTo, TssV2TransactionsGet200ResponseOrderInformationInvoiceDetails, TssV2TransactionsGet200ResponseOrderInformationLineItems, TssV2TransactionsGet200ResponseOrderInformationShipTo, TssV2TransactionsGet200ResponseOrderInformationShippingDetails) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponseOrderInformation model module.
   * @module model/TssV2TransactionsGet200ResponseOrderInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponseOrderInformation</code>.
   * @alias module:model/TssV2TransactionsGet200ResponseOrderInformation
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponseOrderInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponseOrderInformation} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponseOrderInformation} The populated <code>TssV2TransactionsGet200ResponseOrderInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('billTo')) {
        obj['billTo'] = TssV2TransactionsGet200ResponseOrderInformationBillTo.constructFromObject(data['billTo']);
      }
      if (data.hasOwnProperty('shipTo')) {
        obj['shipTo'] = TssV2TransactionsGet200ResponseOrderInformationShipTo.constructFromObject(data['shipTo']);
      }
      if (data.hasOwnProperty('lineItems')) {
        obj['lineItems'] = ApiClient.convertToType(data['lineItems'], [TssV2TransactionsGet200ResponseOrderInformationLineItems]);
      }
      if (data.hasOwnProperty('amountDetails')) {
        obj['amountDetails'] = TssV2TransactionsGet200ResponseOrderInformationAmountDetails.constructFromObject(data['amountDetails']);
      }
      if (data.hasOwnProperty('shippingDetails')) {
        obj['shippingDetails'] = TssV2TransactionsGet200ResponseOrderInformationShippingDetails.constructFromObject(data['shippingDetails']);
      }
      if (data.hasOwnProperty('invoiceDetails')) {
        obj['invoiceDetails'] = TssV2TransactionsGet200ResponseOrderInformationInvoiceDetails.constructFromObject(data['invoiceDetails']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/TssV2TransactionsGet200ResponseOrderInformationBillTo} billTo
   */
  exports.prototype['billTo'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsGet200ResponseOrderInformationShipTo} shipTo
   */
  exports.prototype['shipTo'] = undefined;
  /**
   * Transaction Line Item data.
   * @member {Array.<module:model/TssV2TransactionsGet200ResponseOrderInformationLineItems>} lineItems
   */
  exports.prototype['lineItems'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsGet200ResponseOrderInformationAmountDetails} amountDetails
   */
  exports.prototype['amountDetails'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsGet200ResponseOrderInformationShippingDetails} shippingDetails
   */
  exports.prototype['shippingDetails'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsGet200ResponseOrderInformationInvoiceDetails} invoiceDetails
   */
  exports.prototype['invoiceDetails'] = undefined;



  return exports;
}));

