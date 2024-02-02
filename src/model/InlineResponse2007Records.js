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
    define(['ApiClient', 'model/InlineResponse2007ResponseRecord', 'model/InlineResponse2007SourceRecord'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2007ResponseRecord'), require('./InlineResponse2007SourceRecord'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse2007Records = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse2007ResponseRecord, root.CyberSource.InlineResponse2007SourceRecord);
  }
}(this, function(ApiClient, InlineResponse2007ResponseRecord, InlineResponse2007SourceRecord) {
  'use strict';




  /**
   * The InlineResponse2007Records model module.
   * @module model/InlineResponse2007Records
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2007Records</code>.
   * @alias module:model/InlineResponse2007Records
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>InlineResponse2007Records</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2007Records} obj Optional instance to populate.
   * @return {module:model/InlineResponse2007Records} The populated <code>InlineResponse2007Records</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('sourceRecord')) {
        obj['sourceRecord'] = InlineResponse2007SourceRecord.constructFromObject(data['sourceRecord']);
      }
      if (data.hasOwnProperty('responseRecord')) {
        obj['responseRecord'] = InlineResponse2007ResponseRecord.constructFromObject(data['responseRecord']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/InlineResponse2007SourceRecord} sourceRecord
   */
  exports.prototype['sourceRecord'] = undefined;
  /**
   * @member {module:model/InlineResponse2007ResponseRecord} responseRecord
   */
  exports.prototype['responseRecord'] = undefined;



  return exports;
}));


