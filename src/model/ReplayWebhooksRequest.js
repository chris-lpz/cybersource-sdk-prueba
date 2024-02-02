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
    define(['ApiClient', 'model/Nrtfv1webhookswebhookIdreplaysByDeliveryStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Nrtfv1webhookswebhookIdreplaysByDeliveryStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ReplayWebhooksRequest = factory(root.CyberSource.ApiClient, root.CyberSource.Nrtfv1webhookswebhookIdreplaysByDeliveryStatus);
  }
}(this, function(ApiClient, Nrtfv1webhookswebhookIdreplaysByDeliveryStatus) {
  'use strict';




  /**
   * The ReplayWebhooksRequest model module.
   * @module model/ReplayWebhooksRequest
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ReplayWebhooksRequest</code>.
   * @alias module:model/ReplayWebhooksRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ReplayWebhooksRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReplayWebhooksRequest} obj Optional instance to populate.
   * @return {module:model/ReplayWebhooksRequest} The populated <code>ReplayWebhooksRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('byTransactionTraceIdentifiers')) {
        obj['byTransactionTraceIdentifiers'] = ApiClient.convertToType(data['byTransactionTraceIdentifiers'], ['String']);
      }
      if (data.hasOwnProperty('byDeliveryStatus')) {
        obj['byDeliveryStatus'] = Nrtfv1webhookswebhookIdreplaysByDeliveryStatus.constructFromObject(data['byDeliveryStatus']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} byTransactionTraceIdentifiers
   */
  exports.prototype['byTransactionTraceIdentifiers'] = undefined;
  /**
   * @member {module:model/Nrtfv1webhookswebhookIdreplaysByDeliveryStatus} byDeliveryStatus
   */
  exports.prototype['byDeliveryStatus'] = undefined;



  return exports;
}));


