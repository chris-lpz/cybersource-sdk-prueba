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
    define(['ApiClient', 'model/PaymentsProductsDigitalPaymentsSubscriptionInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentsProductsDigitalPaymentsSubscriptionInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PaymentsProductsDigitalPayments = factory(root.CyberSource.ApiClient, root.CyberSource.PaymentsProductsDigitalPaymentsSubscriptionInformation);
  }
}(this, function(ApiClient, PaymentsProductsDigitalPaymentsSubscriptionInformation) {
  'use strict';




  /**
   * The PaymentsProductsDigitalPayments model module.
   * @module model/PaymentsProductsDigitalPayments
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PaymentsProductsDigitalPayments</code>.
   * @alias module:model/PaymentsProductsDigitalPayments
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PaymentsProductsDigitalPayments</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentsProductsDigitalPayments} obj Optional instance to populate.
   * @return {module:model/PaymentsProductsDigitalPayments} The populated <code>PaymentsProductsDigitalPayments</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('subscriptionInformation')) {
        obj['subscriptionInformation'] = PaymentsProductsDigitalPaymentsSubscriptionInformation.constructFromObject(data['subscriptionInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PaymentsProductsDigitalPaymentsSubscriptionInformation} subscriptionInformation
   */
  exports.prototype['subscriptionInformation'] = undefined;



  return exports;
}));


