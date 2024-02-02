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
    define(['ApiClient', 'model/PaymentsProductsVirtualTerminalConfigurationInformationConfigurations'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentsProductsVirtualTerminalConfigurationInformationConfigurations'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PaymentsProductsVirtualTerminalConfigurationInformation = factory(root.CyberSource.ApiClient, root.CyberSource.PaymentsProductsVirtualTerminalConfigurationInformationConfigurations);
  }
}(this, function(ApiClient, PaymentsProductsVirtualTerminalConfigurationInformationConfigurations) {
  'use strict';




  /**
   * The PaymentsProductsVirtualTerminalConfigurationInformation model module.
   * @module model/PaymentsProductsVirtualTerminalConfigurationInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PaymentsProductsVirtualTerminalConfigurationInformation</code>.
   * @alias module:model/PaymentsProductsVirtualTerminalConfigurationInformation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PaymentsProductsVirtualTerminalConfigurationInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentsProductsVirtualTerminalConfigurationInformation} obj Optional instance to populate.
   * @return {module:model/PaymentsProductsVirtualTerminalConfigurationInformation} The populated <code>PaymentsProductsVirtualTerminalConfigurationInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('templateId')) {
        obj['templateId'] = ApiClient.convertToType(data['templateId'], 'String');
      }
      if (data.hasOwnProperty('configurations')) {
        obj['configurations'] = PaymentsProductsVirtualTerminalConfigurationInformationConfigurations.constructFromObject(data['configurations']);
      }
    }
    return obj;
  }

  /**
   * @member {String} templateId
   */
  exports.prototype['templateId'] = undefined;
  /**
   * @member {module:model/PaymentsProductsVirtualTerminalConfigurationInformationConfigurations} configurations
   */
  exports.prototype['configurations'] = undefined;



  return exports;
}));


