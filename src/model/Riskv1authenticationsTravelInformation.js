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
    define(['ApiClient', 'model/Riskv1decisionsTravelInformationLegs', 'model/Riskv1decisionsTravelInformationPassengers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Riskv1decisionsTravelInformationLegs'), require('./Riskv1decisionsTravelInformationPassengers'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Riskv1authenticationsTravelInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Riskv1decisionsTravelInformationLegs, root.CyberSource.Riskv1decisionsTravelInformationPassengers);
  }
}(this, function(ApiClient, Riskv1decisionsTravelInformationLegs, Riskv1decisionsTravelInformationPassengers) {
  'use strict';




  /**
   * The Riskv1authenticationsTravelInformation model module.
   * @module model/Riskv1authenticationsTravelInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1authenticationsTravelInformation</code>.
   * @alias module:model/Riskv1authenticationsTravelInformation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Riskv1authenticationsTravelInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1authenticationsTravelInformation} obj Optional instance to populate.
   * @return {module:model/Riskv1authenticationsTravelInformation} The populated <code>Riskv1authenticationsTravelInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('legs')) {
        obj['legs'] = ApiClient.convertToType(data['legs'], [Riskv1decisionsTravelInformationLegs]);
      }
      if (data.hasOwnProperty('numberOfPassengers')) {
        obj['numberOfPassengers'] = ApiClient.convertToType(data['numberOfPassengers'], 'Number');
      }
      if (data.hasOwnProperty('passengers')) {
        obj['passengers'] = ApiClient.convertToType(data['passengers'], [Riskv1decisionsTravelInformationPassengers]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Riskv1decisionsTravelInformationLegs>} legs
   */
  exports.prototype['legs'] = undefined;
  /**
   * Number of passengers for whom the ticket was issued. If you do not include this field in your request, CyberSource uses a default value of 1. Required for American Express SafeKey (U.S.) for travel-related requests. 
   * @member {Number} numberOfPassengers
   */
  exports.prototype['numberOfPassengers'] = undefined;
  /**
   * @member {Array.<module:model/Riskv1decisionsTravelInformationPassengers>} passengers
   */
  exports.prototype['passengers'] = undefined;



  return exports;
}));


