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
    define(['ApiClient', 'model/Ptsv2refreshpaymentstatusidPaymentInformationCustomer', 'model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformationBank', 'model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformationCard', 'model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformationPaymentType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2refreshpaymentstatusidPaymentInformationCustomer'), require('./TssV2TransactionsPost201ResponseEmbeddedPaymentInformationBank'), require('./TssV2TransactionsPost201ResponseEmbeddedPaymentInformationCard'), require('./TssV2TransactionsPost201ResponseEmbeddedPaymentInformationPaymentType'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedPaymentInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2refreshpaymentstatusidPaymentInformationCustomer, root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedPaymentInformationBank, root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedPaymentInformationCard, root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedPaymentInformationPaymentType);
  }
}(this, function(ApiClient, Ptsv2refreshpaymentstatusidPaymentInformationCustomer, TssV2TransactionsPost201ResponseEmbeddedPaymentInformationBank, TssV2TransactionsPost201ResponseEmbeddedPaymentInformationCard, TssV2TransactionsPost201ResponseEmbeddedPaymentInformationPaymentType) {
  'use strict';




  /**
   * The TssV2TransactionsPost201ResponseEmbeddedPaymentInformation model module.
   * @module model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsPost201ResponseEmbeddedPaymentInformation</code>.
   * @alias module:model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformation
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>TssV2TransactionsPost201ResponseEmbeddedPaymentInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformation} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformation} The populated <code>TssV2TransactionsPost201ResponseEmbeddedPaymentInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('paymentType')) {
        obj['paymentType'] = TssV2TransactionsPost201ResponseEmbeddedPaymentInformationPaymentType.constructFromObject(data['paymentType']);
      }
      if (data.hasOwnProperty('customer')) {
        obj['customer'] = Ptsv2refreshpaymentstatusidPaymentInformationCustomer.constructFromObject(data['customer']);
      }
      if (data.hasOwnProperty('card')) {
        obj['card'] = TssV2TransactionsPost201ResponseEmbeddedPaymentInformationCard.constructFromObject(data['card']);
      }
      if (data.hasOwnProperty('bank')) {
        obj['bank'] = TssV2TransactionsPost201ResponseEmbeddedPaymentInformationBank.constructFromObject(data['bank']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformationPaymentType} paymentType
   */
  exports.prototype['paymentType'] = undefined;
  /**
   * @member {module:model/Ptsv2refreshpaymentstatusidPaymentInformationCustomer} customer
   */
  exports.prototype['customer'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformationCard} card
   */
  exports.prototype['card'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformationBank} bank
   */
  exports.prototype['bank'] = undefined;



  return exports;
}));

