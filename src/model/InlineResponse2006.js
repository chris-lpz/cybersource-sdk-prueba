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
    define(['ApiClient', 'model/InlineResponse2005EmbeddedTotals', 'model/InlineResponse2006Billing', 'model/InlineResponse2006Links'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2005EmbeddedTotals'), require('./InlineResponse2006Billing'), require('./InlineResponse2006Links'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse2006 = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse2005EmbeddedTotals, root.CyberSource.InlineResponse2006Billing, root.CyberSource.InlineResponse2006Links);
  }
}(this, function(ApiClient, InlineResponse2005EmbeddedTotals, InlineResponse2006Billing, InlineResponse2006Links) {
  'use strict';




  /**
   * The InlineResponse2006 model module.
   * @module model/InlineResponse2006
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2006</code>.
   * @alias module:model/InlineResponse2006
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>InlineResponse2006</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2006} obj Optional instance to populate.
   * @return {module:model/InlineResponse2006} The populated <code>InlineResponse2006</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = InlineResponse2006Links.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('batchId')) {
        obj['batchId'] = ApiClient.convertToType(data['batchId'], 'String');
      }
      if (data.hasOwnProperty('batchCreatedDate')) {
        obj['batchCreatedDate'] = ApiClient.convertToType(data['batchCreatedDate'], 'String');
      }
      if (data.hasOwnProperty('batchSource')) {
        obj['batchSource'] = ApiClient.convertToType(data['batchSource'], 'String');
      }
      if (data.hasOwnProperty('merchantReference')) {
        obj['merchantReference'] = ApiClient.convertToType(data['merchantReference'], 'String');
      }
      if (data.hasOwnProperty('batchCaEndpoints')) {
        obj['batchCaEndpoints'] = ApiClient.convertToType(data['batchCaEndpoints'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('totals')) {
        obj['totals'] = InlineResponse2005EmbeddedTotals.constructFromObject(data['totals']);
      }
      if (data.hasOwnProperty('billing')) {
        obj['billing'] = InlineResponse2006Billing.constructFromObject(data['billing']);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse2006Links} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * Unique identification number assigned to the submitted request.
   * @member {String} batchId
   */
  exports.prototype['batchId'] = undefined;
  /**
   * ISO-8601 format: yyyy-MM-ddTHH:mm:ssZ
   * @member {String} batchCreatedDate
   */
  exports.prototype['batchCreatedDate'] = undefined;
  /**
   * Valid Values:   * SCHEDULER   * TOKEN_API   * CREDIT_CARD_FILE_UPLOAD   * AMEX_REGSITRY   * AMEX_REGISTRY_API   * AMEX_MAINTENANCE 
   * @member {String} batchSource
   */
  exports.prototype['batchSource'] = undefined;
  /**
   * Reference used by merchant to identify batch.
   * @member {String} merchantReference
   */
  exports.prototype['merchantReference'] = undefined;
  /**
   * @member {String} batchCaEndpoints
   */
  exports.prototype['batchCaEndpoints'] = undefined;
  /**
   * Valid Values:   * REJECTED   * RECEIVED   * VALIDATED   * DECLINED   * PROCESSING   * COMPLETED 
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/InlineResponse2005EmbeddedTotals} totals
   */
  exports.prototype['totals'] = undefined;
  /**
   * @member {module:model/InlineResponse2006Billing} billing
   */
  exports.prototype['billing'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;



  return exports;
}));

