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
    define(['ApiClient', 'model/GetAllPlansResponseOrderInformationAmountDetails', 'model/GetAllSubscriptionsResponseOrderInformationBillTo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetAllPlansResponseOrderInformationAmountDetails'), require('./GetAllSubscriptionsResponseOrderInformationBillTo'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.GetAllSubscriptionsResponseOrderInformation = factory(root.CyberSource.ApiClient, root.CyberSource.GetAllPlansResponseOrderInformationAmountDetails, root.CyberSource.GetAllSubscriptionsResponseOrderInformationBillTo);
  }
}(this, function(ApiClient, GetAllPlansResponseOrderInformationAmountDetails, GetAllSubscriptionsResponseOrderInformationBillTo) {
  'use strict';




  /**
   * The GetAllSubscriptionsResponseOrderInformation model module.
   * @module model/GetAllSubscriptionsResponseOrderInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>GetAllSubscriptionsResponseOrderInformation</code>.
   * @alias module:model/GetAllSubscriptionsResponseOrderInformation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>GetAllSubscriptionsResponseOrderInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAllSubscriptionsResponseOrderInformation} obj Optional instance to populate.
   * @return {module:model/GetAllSubscriptionsResponseOrderInformation} The populated <code>GetAllSubscriptionsResponseOrderInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amountDetails')) {
        obj['amountDetails'] = GetAllPlansResponseOrderInformationAmountDetails.constructFromObject(data['amountDetails']);
      }
      if (data.hasOwnProperty('billTo')) {
        obj['billTo'] = GetAllSubscriptionsResponseOrderInformationBillTo.constructFromObject(data['billTo']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/GetAllPlansResponseOrderInformationAmountDetails} amountDetails
   */
  exports.prototype['amountDetails'] = undefined;
  /**
   * @member {module:model/GetAllSubscriptionsResponseOrderInformationBillTo} billTo
   */
  exports.prototype['billTo'] = undefined;



  return exports;
}));


