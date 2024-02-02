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
    root.CyberSource.PushFunds201ResponseClientReferenceInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PushFunds201ResponseClientReferenceInformation model module.
   * @module model/PushFunds201ResponseClientReferenceInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PushFunds201ResponseClientReferenceInformation</code>.
   * @alias module:model/PushFunds201ResponseClientReferenceInformation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PushFunds201ResponseClientReferenceInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PushFunds201ResponseClientReferenceInformation} obj Optional instance to populate.
   * @return {module:model/PushFunds201ResponseClientReferenceInformation} The populated <code>PushFunds201ResponseClientReferenceInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('submitLocalDateTime')) {
        obj['submitLocalDateTime'] = ApiClient.convertToType(data['submitLocalDateTime'], 'String');
      }
    }
    return obj;
  }

  /**
   * Merchant-generated order reference or tracking number. It is recommended that you send a unique value for each transaction so that you can perform meaningful searches for the transaction. 
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Date and time at your physical location.  Format: YYYYMMDDhhmmss, where YYYY = year, MM = month, DD = day, hh = hour, mm = minutes ss = seconds 
   * @member {String} submitLocalDateTime
   */
  exports.prototype['submitLocalDateTime'] = undefined;



  return exports;
}));


