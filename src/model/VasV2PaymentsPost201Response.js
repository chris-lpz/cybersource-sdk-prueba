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
    define(['ApiClient', 'model/PtsV2PaymentsPost201ResponseClientReferenceInformation', 'model/VasV2PaymentsPost201ResponseLinks', 'model/VasV2PaymentsPost201ResponseOrderInformation', 'model/VasV2PaymentsPost201ResponseTaxInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2PaymentsPost201ResponseClientReferenceInformation'), require('./VasV2PaymentsPost201ResponseLinks'), require('./VasV2PaymentsPost201ResponseOrderInformation'), require('./VasV2PaymentsPost201ResponseTaxInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.VasV2PaymentsPost201Response = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost201ResponseClientReferenceInformation, root.CyberSource.VasV2PaymentsPost201ResponseLinks, root.CyberSource.VasV2PaymentsPost201ResponseOrderInformation, root.CyberSource.VasV2PaymentsPost201ResponseTaxInformation);
  }
}(this, function(ApiClient, PtsV2PaymentsPost201ResponseClientReferenceInformation, VasV2PaymentsPost201ResponseLinks, VasV2PaymentsPost201ResponseOrderInformation, VasV2PaymentsPost201ResponseTaxInformation) {
  'use strict';




  /**
   * The VasV2PaymentsPost201Response model module.
   * @module model/VasV2PaymentsPost201Response
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>VasV2PaymentsPost201Response</code>.
   * @alias module:model/VasV2PaymentsPost201Response
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>VasV2PaymentsPost201Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VasV2PaymentsPost201Response} obj Optional instance to populate.
   * @return {module:model/VasV2PaymentsPost201Response} The populated <code>VasV2PaymentsPost201Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = VasV2PaymentsPost201ResponseLinks.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('submitTimeUtc')) {
        obj['submitTimeUtc'] = ApiClient.convertToType(data['submitTimeUtc'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = PtsV2PaymentsPost201ResponseClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('taxInformation')) {
        obj['taxInformation'] = VasV2PaymentsPost201ResponseTaxInformation.constructFromObject(data['taxInformation']);
      }
      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = VasV2PaymentsPost201ResponseOrderInformation.constructFromObject(data['orderInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/VasV2PaymentsPost201ResponseLinks} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * An unique identification number generated by Cybersource to identify the submitted request. Returned by all services. It is also appended to the endpoint of the resource. On incremental authorizations, this value with be the same as the identification number returned in the original authorization response. 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` **Example** `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC.  Returned by Cybersource for all services. 
   * @member {String} submitTimeUtc
   */
  exports.prototype['submitTimeUtc'] = undefined;
  /**
   * The status of the submitted transaction.  Possible values:  - COMPLETED 
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/VasV2PaymentsPost201ResponseTaxInformation} taxInformation
   */
  exports.prototype['taxInformation'] = undefined;
  /**
   * @member {module:model/VasV2PaymentsPost201ResponseOrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;



  return exports;
}));


