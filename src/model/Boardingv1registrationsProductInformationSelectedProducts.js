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
    define(['ApiClient', 'model/CommerceSolutionsProducts', 'model/PaymentsProducts', 'model/RiskProducts', 'model/ValueAddedServicesProducts'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CommerceSolutionsProducts'), require('./PaymentsProducts'), require('./RiskProducts'), require('./ValueAddedServicesProducts'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Boardingv1registrationsProductInformationSelectedProducts = factory(root.CyberSource.ApiClient, root.CyberSource.CommerceSolutionsProducts, root.CyberSource.PaymentsProducts, root.CyberSource.RiskProducts, root.CyberSource.ValueAddedServicesProducts);
  }
}(this, function(ApiClient, CommerceSolutionsProducts, PaymentsProducts, RiskProducts, ValueAddedServicesProducts) {
  'use strict';




  /**
   * The Boardingv1registrationsProductInformationSelectedProducts model module.
   * @module model/Boardingv1registrationsProductInformationSelectedProducts
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Boardingv1registrationsProductInformationSelectedProducts</code>.
   * @alias module:model/Boardingv1registrationsProductInformationSelectedProducts
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Boardingv1registrationsProductInformationSelectedProducts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Boardingv1registrationsProductInformationSelectedProducts} obj Optional instance to populate.
   * @return {module:model/Boardingv1registrationsProductInformationSelectedProducts} The populated <code>Boardingv1registrationsProductInformationSelectedProducts</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('payments')) {
        obj['payments'] = PaymentsProducts.constructFromObject(data['payments']);
      }
      if (data.hasOwnProperty('risk')) {
        obj['risk'] = RiskProducts.constructFromObject(data['risk']);
      }
      if (data.hasOwnProperty('commerceSolutions')) {
        obj['commerceSolutions'] = CommerceSolutionsProducts.constructFromObject(data['commerceSolutions']);
      }
      if (data.hasOwnProperty('valueAddedServices')) {
        obj['valueAddedServices'] = ValueAddedServicesProducts.constructFromObject(data['valueAddedServices']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PaymentsProducts} payments
   */
  exports.prototype['payments'] = undefined;
  /**
   * @member {module:model/RiskProducts} risk
   */
  exports.prototype['risk'] = undefined;
  /**
   * @member {module:model/CommerceSolutionsProducts} commerceSolutions
   */
  exports.prototype['commerceSolutions'] = undefined;
  /**
   * @member {module:model/ValueAddedServicesProducts} valueAddedServices
   */
  exports.prototype['valueAddedServices'] = undefined;



  return exports;
}));


