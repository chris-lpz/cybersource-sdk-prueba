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
    root.CyberSource.InlineResponse2007SourceRecord = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse2007SourceRecord model module.
   * @module model/InlineResponse2007SourceRecord
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2007SourceRecord</code>.
   * @alias module:model/InlineResponse2007SourceRecord
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>InlineResponse2007SourceRecord</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2007SourceRecord} obj Optional instance to populate.
   * @return {module:model/InlineResponse2007SourceRecord} The populated <code>InlineResponse2007SourceRecord</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
      if (data.hasOwnProperty('customerId')) {
        obj['customerId'] = ApiClient.convertToType(data['customerId'], 'String');
      }
      if (data.hasOwnProperty('paymentInstrumentId')) {
        obj['paymentInstrumentId'] = ApiClient.convertToType(data['paymentInstrumentId'], 'String');
      }
      if (data.hasOwnProperty('instrumentIdentifierId')) {
        obj['instrumentIdentifierId'] = ApiClient.convertToType(data['instrumentIdentifierId'], 'String');
      }
      if (data.hasOwnProperty('cardNumber')) {
        obj['cardNumber'] = ApiClient.convertToType(data['cardNumber'], 'String');
      }
      if (data.hasOwnProperty('cardExpiryMonth')) {
        obj['cardExpiryMonth'] = ApiClient.convertToType(data['cardExpiryMonth'], 'String');
      }
      if (data.hasOwnProperty('cardExpiryYear')) {
        obj['cardExpiryYear'] = ApiClient.convertToType(data['cardExpiryYear'], 'String');
      }
      if (data.hasOwnProperty('cardType')) {
        obj['cardType'] = ApiClient.convertToType(data['cardType'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} token
   */
  exports.prototype['token'] = undefined;
  /**
   * @member {String} customerId
   */
  exports.prototype['customerId'] = undefined;
  /**
   * @member {String} paymentInstrumentId
   */
  exports.prototype['paymentInstrumentId'] = undefined;
  /**
   * @member {String} instrumentIdentifierId
   */
  exports.prototype['instrumentIdentifierId'] = undefined;
  /**
   * @member {String} cardNumber
   */
  exports.prototype['cardNumber'] = undefined;
  /**
   * @member {String} cardExpiryMonth
   */
  exports.prototype['cardExpiryMonth'] = undefined;
  /**
   * @member {String} cardExpiryYear
   */
  exports.prototype['cardExpiryYear'] = undefined;
  /**
   * @member {String} cardType
   */
  exports.prototype['cardType'] = undefined;



  return exports;
}));


