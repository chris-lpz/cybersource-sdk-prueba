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
    root.CyberSource.Ptsv2paymentsMerchantInformationServiceFeeDescriptor = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsMerchantInformationServiceFeeDescriptor model module.
   * @module model/Ptsv2paymentsMerchantInformationServiceFeeDescriptor
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsMerchantInformationServiceFeeDescriptor</code>.
   * @alias module:model/Ptsv2paymentsMerchantInformationServiceFeeDescriptor
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Ptsv2paymentsMerchantInformationServiceFeeDescriptor</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsMerchantInformationServiceFeeDescriptor} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsMerchantInformationServiceFeeDescriptor} The populated <code>Ptsv2paymentsMerchantInformationServiceFeeDescriptor</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('contact')) {
        obj['contact'] = ApiClient.convertToType(data['contact'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of the service provider that is collecting the service fee. The service provider name must consist of 3, 7, or 12 characters followed by an asterisk (*). This value must also include the words \"Service Fee.\"  When you include more than one consecutive space, extra spaces are removed. Use one of the following formats for this value: - <3-character name>*Service Fee - <7-character name>*Service Fee - <12-character name>*Service Fee  When payments are made in installments, this value must also include installment information such as \"1 of 5\" or \"3 of 7.\" For installment payments, use one of the following formats for this value: - <3-character name>*Service Fee*<N> of <M> - <7-character name>*Service Fee*<N> of <M> - <12-character name>*Service Fee*<N> of <M>  where <N> is the payment number and <M> is the total number of payments.  When you do not include this value in your request, CyberSource uses the value that is in your CyberSource account.  This value might be displayed on the cardholder's statement. 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Contact information for the service provider that is collecting the service fee. when you include more than one consecutive space, extra spaces are removed.  When you do not include this value in your request, CyberSource uses the value that is in your CyberSource account.  This value might be displayed on the cardholder's statement. 
   * @member {String} contact
   */
  exports.prototype['contact'] = undefined;
  /**
   * State or territory in which the service provider is located.  When you do not include this value in your request, CyberSource uses the value that is in your CyberSource account.  This value might be displayed on the cardholder's statement. 
   * @member {String} state
   */
  exports.prototype['state'] = undefined;



  return exports;
}));

