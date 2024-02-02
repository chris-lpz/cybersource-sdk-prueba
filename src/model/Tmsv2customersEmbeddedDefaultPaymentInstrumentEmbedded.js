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
    define(['ApiClient', 'model/Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbedded = factory(root.CyberSource.ApiClient, root.CyberSource.Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier);
  }
}(this, function(ApiClient, Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier) {
  'use strict';




  /**
   * The Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbedded model module.
   * @module model/Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbedded
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbedded</code>.
   * Additional resources for the Payment Instrument. 
   * @alias module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbedded
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbedded} obj Optional instance to populate.
   * @return {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbedded} The populated <code>Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbedded</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('instrumentIdentifier')) {
        obj['instrumentIdentifier'] = Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier.constructFromObject(data['instrumentIdentifier']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier} instrumentIdentifier
   */
  exports.prototype['instrumentIdentifier'] = undefined;



  return exports;
}));


