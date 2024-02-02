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
    define(['ApiClient', 'model/Ptsv2paymentsRiskInformationAuxiliaryData', 'model/Ptsv2paymentsRiskInformationBuyerHistory', 'model/Ptsv2paymentsRiskInformationProfile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsRiskInformationAuxiliaryData'), require('./Ptsv2paymentsRiskInformationBuyerHistory'), require('./Ptsv2paymentsRiskInformationProfile'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsRiskInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsRiskInformationAuxiliaryData, root.CyberSource.Ptsv2paymentsRiskInformationBuyerHistory, root.CyberSource.Ptsv2paymentsRiskInformationProfile);
  }
}(this, function(ApiClient, Ptsv2paymentsRiskInformationAuxiliaryData, Ptsv2paymentsRiskInformationBuyerHistory, Ptsv2paymentsRiskInformationProfile) {
  'use strict';




  /**
   * The Ptsv2paymentsRiskInformation model module.
   * @module model/Ptsv2paymentsRiskInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsRiskInformation</code>.
   * This object is only needed when you are requesting both payment and DM services at same time.
   * @alias module:model/Ptsv2paymentsRiskInformation
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Ptsv2paymentsRiskInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsRiskInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsRiskInformation} The populated <code>Ptsv2paymentsRiskInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('profile')) {
        obj['profile'] = Ptsv2paymentsRiskInformationProfile.constructFromObject(data['profile']);
      }
      if (data.hasOwnProperty('eventType')) {
        obj['eventType'] = ApiClient.convertToType(data['eventType'], 'String');
      }
      if (data.hasOwnProperty('buyerHistory')) {
        obj['buyerHistory'] = Ptsv2paymentsRiskInformationBuyerHistory.constructFromObject(data['buyerHistory']);
      }
      if (data.hasOwnProperty('auxiliaryData')) {
        obj['auxiliaryData'] = ApiClient.convertToType(data['auxiliaryData'], [Ptsv2paymentsRiskInformationAuxiliaryData]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2paymentsRiskInformationProfile} profile
   */
  exports.prototype['profile'] = undefined;
  /**
   * Specifies one of the following types of events: - login - account_creation - account_update For regular payment transactions, do not send this field. 
   * @member {String} eventType
   */
  exports.prototype['eventType'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsRiskInformationBuyerHistory} buyerHistory
   */
  exports.prototype['buyerHistory'] = undefined;
  /**
   * @member {Array.<module:model/Ptsv2paymentsRiskInformationAuxiliaryData>} auxiliaryData
   */
  exports.prototype['auxiliaryData'] = undefined;



  return exports;
}));

