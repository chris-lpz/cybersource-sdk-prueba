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
    define(['ApiClient', 'model/Ptsv2paymentsidcapturesOrderInformationAmountDetails', 'model/Ptsv2paymentsidcapturesOrderInformationBillTo', 'model/Ptsv2paymentsidcapturesOrderInformationInvoiceDetails', 'model/Ptsv2paymentsidcapturesOrderInformationShipTo', 'model/Ptsv2paymentsidcapturesOrderInformationShippingDetails', 'model/Ptsv2paymentsidrefundsOrderInformationLineItems'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsidcapturesOrderInformationAmountDetails'), require('./Ptsv2paymentsidcapturesOrderInformationBillTo'), require('./Ptsv2paymentsidcapturesOrderInformationInvoiceDetails'), require('./Ptsv2paymentsidcapturesOrderInformationShipTo'), require('./Ptsv2paymentsidcapturesOrderInformationShippingDetails'), require('./Ptsv2paymentsidrefundsOrderInformationLineItems'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsidrefundsOrderInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsidcapturesOrderInformationAmountDetails, root.CyberSource.Ptsv2paymentsidcapturesOrderInformationBillTo, root.CyberSource.Ptsv2paymentsidcapturesOrderInformationInvoiceDetails, root.CyberSource.Ptsv2paymentsidcapturesOrderInformationShipTo, root.CyberSource.Ptsv2paymentsidcapturesOrderInformationShippingDetails, root.CyberSource.Ptsv2paymentsidrefundsOrderInformationLineItems);
  }
}(this, function(ApiClient, Ptsv2paymentsidcapturesOrderInformationAmountDetails, Ptsv2paymentsidcapturesOrderInformationBillTo, Ptsv2paymentsidcapturesOrderInformationInvoiceDetails, Ptsv2paymentsidcapturesOrderInformationShipTo, Ptsv2paymentsidcapturesOrderInformationShippingDetails, Ptsv2paymentsidrefundsOrderInformationLineItems) {
  'use strict';




  /**
   * The Ptsv2paymentsidrefundsOrderInformation model module.
   * @module model/Ptsv2paymentsidrefundsOrderInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsidrefundsOrderInformation</code>.
   * @alias module:model/Ptsv2paymentsidrefundsOrderInformation
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Ptsv2paymentsidrefundsOrderInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsidrefundsOrderInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsidrefundsOrderInformation} The populated <code>Ptsv2paymentsidrefundsOrderInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amountDetails')) {
        obj['amountDetails'] = Ptsv2paymentsidcapturesOrderInformationAmountDetails.constructFromObject(data['amountDetails']);
      }
      if (data.hasOwnProperty('billTo')) {
        obj['billTo'] = Ptsv2paymentsidcapturesOrderInformationBillTo.constructFromObject(data['billTo']);
      }
      if (data.hasOwnProperty('shipTo')) {
        obj['shipTo'] = Ptsv2paymentsidcapturesOrderInformationShipTo.constructFromObject(data['shipTo']);
      }
      if (data.hasOwnProperty('lineItems')) {
        obj['lineItems'] = ApiClient.convertToType(data['lineItems'], [Ptsv2paymentsidrefundsOrderInformationLineItems]);
      }
      if (data.hasOwnProperty('invoiceDetails')) {
        obj['invoiceDetails'] = Ptsv2paymentsidcapturesOrderInformationInvoiceDetails.constructFromObject(data['invoiceDetails']);
      }
      if (data.hasOwnProperty('shippingDetails')) {
        obj['shippingDetails'] = Ptsv2paymentsidcapturesOrderInformationShippingDetails.constructFromObject(data['shippingDetails']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2paymentsidcapturesOrderInformationAmountDetails} amountDetails
   */
  exports.prototype['amountDetails'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidcapturesOrderInformationBillTo} billTo
   */
  exports.prototype['billTo'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidcapturesOrderInformationShipTo} shipTo
   */
  exports.prototype['shipTo'] = undefined;
  /**
   * @member {Array.<module:model/Ptsv2paymentsidrefundsOrderInformationLineItems>} lineItems
   */
  exports.prototype['lineItems'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidcapturesOrderInformationInvoiceDetails} invoiceDetails
   */
  exports.prototype['invoiceDetails'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidcapturesOrderInformationShippingDetails} shippingDetails
   */
  exports.prototype['shippingDetails'] = undefined;



  return exports;
}));

