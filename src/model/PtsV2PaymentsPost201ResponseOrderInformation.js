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
    define(['ApiClient', 'model/PtsV2PaymentsPost201ResponseOrderInformationAmountDetails', 'model/PtsV2PaymentsPost201ResponseOrderInformationBillTo', 'model/PtsV2PaymentsPost201ResponseOrderInformationInvoiceDetails', 'model/PtsV2PaymentsPost201ResponseOrderInformationRewardPointsDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2PaymentsPost201ResponseOrderInformationAmountDetails'), require('./PtsV2PaymentsPost201ResponseOrderInformationBillTo'), require('./PtsV2PaymentsPost201ResponseOrderInformationInvoiceDetails'), require('./PtsV2PaymentsPost201ResponseOrderInformationRewardPointsDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2PaymentsPost201ResponseOrderInformation = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost201ResponseOrderInformationAmountDetails, root.CyberSource.PtsV2PaymentsPost201ResponseOrderInformationBillTo, root.CyberSource.PtsV2PaymentsPost201ResponseOrderInformationInvoiceDetails, root.CyberSource.PtsV2PaymentsPost201ResponseOrderInformationRewardPointsDetails);
  }
}(this, function(ApiClient, PtsV2PaymentsPost201ResponseOrderInformationAmountDetails, PtsV2PaymentsPost201ResponseOrderInformationBillTo, PtsV2PaymentsPost201ResponseOrderInformationInvoiceDetails, PtsV2PaymentsPost201ResponseOrderInformationRewardPointsDetails) {
  'use strict';




  /**
   * The PtsV2PaymentsPost201ResponseOrderInformation model module.
   * @module model/PtsV2PaymentsPost201ResponseOrderInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsPost201ResponseOrderInformation</code>.
   * @alias module:model/PtsV2PaymentsPost201ResponseOrderInformation
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>PtsV2PaymentsPost201ResponseOrderInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsPost201ResponseOrderInformation} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsPost201ResponseOrderInformation} The populated <code>PtsV2PaymentsPost201ResponseOrderInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amountDetails')) {
        obj['amountDetails'] = PtsV2PaymentsPost201ResponseOrderInformationAmountDetails.constructFromObject(data['amountDetails']);
      }
      if (data.hasOwnProperty('invoiceDetails')) {
        obj['invoiceDetails'] = PtsV2PaymentsPost201ResponseOrderInformationInvoiceDetails.constructFromObject(data['invoiceDetails']);
      }
      if (data.hasOwnProperty('rewardPointsDetails')) {
        obj['rewardPointsDetails'] = PtsV2PaymentsPost201ResponseOrderInformationRewardPointsDetails.constructFromObject(data['rewardPointsDetails']);
      }
      if (data.hasOwnProperty('billTo')) {
        obj['billTo'] = PtsV2PaymentsPost201ResponseOrderInformationBillTo.constructFromObject(data['billTo']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseOrderInformationAmountDetails} amountDetails
   */
  exports.prototype['amountDetails'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseOrderInformationInvoiceDetails} invoiceDetails
   */
  exports.prototype['invoiceDetails'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseOrderInformationRewardPointsDetails} rewardPointsDetails
   */
  exports.prototype['rewardPointsDetails'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseOrderInformationBillTo} billTo
   */
  exports.prototype['billTo'] = undefined;



  return exports;
}));

