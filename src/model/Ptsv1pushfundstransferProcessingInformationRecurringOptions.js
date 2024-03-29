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
    root.CyberSource.Ptsv1pushfundstransferProcessingInformationRecurringOptions = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv1pushfundstransferProcessingInformationRecurringOptions model module.
   * @module model/Ptsv1pushfundstransferProcessingInformationRecurringOptions
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv1pushfundstransferProcessingInformationRecurringOptions</code>.
   * @alias module:model/Ptsv1pushfundstransferProcessingInformationRecurringOptions
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Ptsv1pushfundstransferProcessingInformationRecurringOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv1pushfundstransferProcessingInformationRecurringOptions} obj Optional instance to populate.
   * @return {module:model/Ptsv1pushfundstransferProcessingInformationRecurringOptions} The populated <code>Ptsv1pushfundstransferProcessingInformationRecurringOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('loanPayment')) {
        obj['loanPayment'] = ApiClient.convertToType(data['loanPayment'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * boolean Default: false Flag that indicates whether this is a payment towards an existing contractual loan.  Possible values:  true: Loan payment false: (default) Not a loan payment  This field applies only to FDC Compass 
   * @member {Boolean} loanPayment
   */
  exports.prototype['loanPayment'] = undefined;



  return exports;
}));


