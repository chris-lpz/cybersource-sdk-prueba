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
    define(['ApiClient', 'model/PtsV2PaymentsPost201ResponseRiskInformationVelocityMorphing'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2PaymentsPost201ResponseRiskInformationVelocityMorphing'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2PaymentsPost201ResponseRiskInformationVelocity = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost201ResponseRiskInformationVelocityMorphing);
  }
}(this, function(ApiClient, PtsV2PaymentsPost201ResponseRiskInformationVelocityMorphing) {
  'use strict';




  /**
   * The PtsV2PaymentsPost201ResponseRiskInformationVelocity model module.
   * @module model/PtsV2PaymentsPost201ResponseRiskInformationVelocity
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsPost201ResponseRiskInformationVelocity</code>.
   * @alias module:model/PtsV2PaymentsPost201ResponseRiskInformationVelocity
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PtsV2PaymentsPost201ResponseRiskInformationVelocity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsPost201ResponseRiskInformationVelocity} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsPost201ResponseRiskInformationVelocity} The populated <code>PtsV2PaymentsPost201ResponseRiskInformationVelocity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('morphing')) {
        obj['morphing'] = ApiClient.convertToType(data['morphing'], [PtsV2PaymentsPost201ResponseRiskInformationVelocityMorphing]);
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], ['String']);
      }
    }
    return obj;
  }

  /**
   * List of information codes triggered by the order. These information codes were generated when you created the order and product velocity rules and are returned so that you can associate them with the rules.  Returned by scoring service. 
   * @member {Array.<module:model/PtsV2PaymentsPost201ResponseRiskInformationVelocityMorphing>} morphing
   */
  exports.prototype['morphing'] = undefined;
  /**
   * @member {Array.<String>} address
   */
  exports.prototype['address'] = undefined;



  return exports;
}));


