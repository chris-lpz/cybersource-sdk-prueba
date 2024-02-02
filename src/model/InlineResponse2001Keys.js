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
    root.CyberSource.InlineResponse2001Keys = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse2001Keys model module.
   * @module model/InlineResponse2001Keys
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2001Keys</code>.
   * KeyResponseEntry
   * @alias module:model/InlineResponse2001Keys
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>InlineResponse2001Keys</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2001Keys} obj Optional instance to populate.
   * @return {module:model/InlineResponse2001Keys} The populated <code>InlineResponse2001Keys</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('organizationId')) {
        obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
      }
      if (data.hasOwnProperty('merchantName')) {
        obj['merchantName'] = ApiClient.convertToType(data['merchantName'], 'String');
      }
      if (data.hasOwnProperty('keyId')) {
        obj['keyId'] = ApiClient.convertToType(data['keyId'], 'String');
      }
      if (data.hasOwnProperty('keyType')) {
        obj['keyType'] = ApiClient.convertToType(data['keyType'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('expirationDate')) {
        obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], 'Date');
      }
      if (data.hasOwnProperty('dateAdded')) {
        obj['dateAdded'] = ApiClient.convertToType(data['dateAdded'], 'Date');
      }
      if (data.hasOwnProperty('addedBy')) {
        obj['addedBy'] = ApiClient.convertToType(data['addedBy'], 'String');
      }
      if (data.hasOwnProperty('dateModified')) {
        obj['dateModified'] = ApiClient.convertToType(data['dateModified'], 'Date');
      }
      if (data.hasOwnProperty('modifiedBy')) {
        obj['modifiedBy'] = ApiClient.convertToType(data['modifiedBy'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('serialNumber')) {
        obj['serialNumber'] = ApiClient.convertToType(data['serialNumber'], 'String');
      }
      if (data.hasOwnProperty('issuerName')) {
        obj['issuerName'] = ApiClient.convertToType(data['issuerName'], 'String');
      }
    }
    return obj;
  }

  /**
   * Merchant Id
   * @member {String} organizationId
   */
  exports.prototype['organizationId'] = undefined;
  /**
   * Merchant Name
   * @member {String} merchantName
   */
  exports.prototype['merchantName'] = undefined;
  /**
   * Key Id
   * @member {String} keyId
   */
  exports.prototype['keyId'] = undefined;
  /**
   * Key Type
   * @member {String} keyType
   */
  exports.prototype['keyType'] = undefined;
  /**
   * Status can be active/inactive
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Expiry Date. example - 2028-07-15 22:11:56 UTC
   * @member {Date} expirationDate
   */
  exports.prototype['expirationDate'] = undefined;
  /**
   * Date Addded. example - 2018-04-25 22:11:56 UTC
   * @member {Date} dateAdded
   */
  exports.prototype['dateAdded'] = undefined;
  /**
   * Added By
   * @member {String} addedBy
   */
  exports.prototype['addedBy'] = undefined;
  /**
   * Modified Date.
   * @member {Date} dateModified
   */
  exports.prototype['dateModified'] = undefined;
  /**
   * Modified By
   * @member {String} modifiedBy
   */
  exports.prototype['modifiedBy'] = undefined;
  /**
   * Version
   * @member {String} version
   */
  exports.prototype['version'] = undefined;
  /**
   * Serial Number
   * @member {String} serialNumber
   */
  exports.prototype['serialNumber'] = undefined;
  /**
   * Issuer Name
   * @member {String} issuerName
   */
  exports.prototype['issuerName'] = undefined;



  return exports;
}));


