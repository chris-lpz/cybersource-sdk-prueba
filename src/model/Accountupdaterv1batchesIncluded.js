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
    define(['ApiClient', 'model/Accountupdaterv1batchesIncludedTokens'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Accountupdaterv1batchesIncludedTokens'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Accountupdaterv1batchesIncluded = factory(root.CyberSource.ApiClient, root.CyberSource.Accountupdaterv1batchesIncludedTokens);
  }
}(this, function(ApiClient, Accountupdaterv1batchesIncludedTokens) {
  'use strict';




  /**
   * The Accountupdaterv1batchesIncluded model module.
   * @module model/Accountupdaterv1batchesIncluded
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Accountupdaterv1batchesIncluded</code>.
   * @alias module:model/Accountupdaterv1batchesIncluded
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Accountupdaterv1batchesIncluded</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Accountupdaterv1batchesIncluded} obj Optional instance to populate.
   * @return {module:model/Accountupdaterv1batchesIncluded} The populated <code>Accountupdaterv1batchesIncluded</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tokens')) {
        obj['tokens'] = ApiClient.convertToType(data['tokens'], [Accountupdaterv1batchesIncludedTokens]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Accountupdaterv1batchesIncludedTokens>} tokens
   */
  exports.prototype['tokens'] = undefined;



  return exports;
}));


