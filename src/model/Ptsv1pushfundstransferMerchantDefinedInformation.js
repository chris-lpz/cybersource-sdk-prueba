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
    root.CyberSource.Ptsv1pushfundstransferMerchantDefinedInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv1pushfundstransferMerchantDefinedInformation model module.
   * @module model/Ptsv1pushfundstransferMerchantDefinedInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv1pushfundstransferMerchantDefinedInformation</code>.
   * @alias module:model/Ptsv1pushfundstransferMerchantDefinedInformation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Ptsv1pushfundstransferMerchantDefinedInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv1pushfundstransferMerchantDefinedInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv1pushfundstransferMerchantDefinedInformation} The populated <code>Ptsv1pushfundstransferMerchantDefinedInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * The number you assign for as the key for your merchant-defined data field. Valid values are 0 to 100.  For example, to set or access the key for the 2nd merchant-defined data field in the array, you would reference merchantDefinedInformation[1].key.  For Mastercard Send: Name to be displayed in the reconciliation report for this disbursement. This value will appear as a header in the column name of the report. 
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * The value you assign for your merchant-defined data field.  For details, see merchant_defined_data1 field description in the Credit Card Services Using the SCMP API Guide.  Warning Merchant-defined data fields are not intended to and must not be used to capture personally identifying information. Accordingly, merchants are prohibited from capturing, obtaining, and/or transmitting any personally identifying information in or via the merchant-defined data fields. Personally identifying information includes, but is not limited to, address, credit card number, social security number, driver's license number, state-issued identification number, passport number, and card verification numbers (CVV, CVC2, CVV2, CID, CVN). In the event CyberSource discovers that a merchant is capturing and/or transmitting personally identifying information via the merchant-defined data fields, whether or not intentionally, CyberSource will immediately suspend the merchant's account, which will result in a rejection of any and all transaction requests submitted by the merchant after the point of suspension.  For Mastercard Send: Value to be displayed in the reconciliation report for this disbursement. 
   * @member {String} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));

