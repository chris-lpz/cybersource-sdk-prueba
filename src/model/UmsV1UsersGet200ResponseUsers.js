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
    define(['ApiClient', 'model/UmsV1UsersGet200ResponseAccountInformation', 'model/UmsV1UsersGet200ResponseContactInformation', 'model/UmsV1UsersGet200ResponseOrganizationInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UmsV1UsersGet200ResponseAccountInformation'), require('./UmsV1UsersGet200ResponseContactInformation'), require('./UmsV1UsersGet200ResponseOrganizationInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.UmsV1UsersGet200ResponseUsers = factory(root.CyberSource.ApiClient, root.CyberSource.UmsV1UsersGet200ResponseAccountInformation, root.CyberSource.UmsV1UsersGet200ResponseContactInformation, root.CyberSource.UmsV1UsersGet200ResponseOrganizationInformation);
  }
}(this, function(ApiClient, UmsV1UsersGet200ResponseAccountInformation, UmsV1UsersGet200ResponseContactInformation, UmsV1UsersGet200ResponseOrganizationInformation) {
  'use strict';




  /**
   * The UmsV1UsersGet200ResponseUsers model module.
   * @module model/UmsV1UsersGet200ResponseUsers
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>UmsV1UsersGet200ResponseUsers</code>.
   * @alias module:model/UmsV1UsersGet200ResponseUsers
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>UmsV1UsersGet200ResponseUsers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UmsV1UsersGet200ResponseUsers} obj Optional instance to populate.
   * @return {module:model/UmsV1UsersGet200ResponseUsers} The populated <code>UmsV1UsersGet200ResponseUsers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountInformation')) {
        obj['accountInformation'] = UmsV1UsersGet200ResponseAccountInformation.constructFromObject(data['accountInformation']);
      }
      if (data.hasOwnProperty('organizationInformation')) {
        obj['organizationInformation'] = UmsV1UsersGet200ResponseOrganizationInformation.constructFromObject(data['organizationInformation']);
      }
      if (data.hasOwnProperty('contactInformation')) {
        obj['contactInformation'] = UmsV1UsersGet200ResponseContactInformation.constructFromObject(data['contactInformation']);
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UmsV1UsersGet200ResponseAccountInformation} accountInformation
   */
  exports.prototype['accountInformation'] = undefined;
  /**
   * @member {module:model/UmsV1UsersGet200ResponseOrganizationInformation} organizationInformation
   */
  exports.prototype['organizationInformation'] = undefined;
  /**
   * @member {module:model/UmsV1UsersGet200ResponseContactInformation} contactInformation
   */
  exports.prototype['contactInformation'] = undefined;
  /**
   * @member {Object.<String, String>} customFields
   */
  exports.prototype['customFields'] = undefined;



  return exports;
}));

