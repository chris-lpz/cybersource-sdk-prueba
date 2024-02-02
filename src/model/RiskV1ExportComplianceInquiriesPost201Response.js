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
    define(['ApiClient', 'model/PtsV2IncrementalAuthorizationPatch201ResponseLinks', 'model/PtsV2PaymentsPost201ResponseWatchlistScreeningInformation', 'model/RiskV1DecisionsPost201ResponseClientReferenceInformation', 'model/RiskV1ExportComplianceInquiriesPost201ResponseErrorInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2IncrementalAuthorizationPatch201ResponseLinks'), require('./PtsV2PaymentsPost201ResponseWatchlistScreeningInformation'), require('./RiskV1DecisionsPost201ResponseClientReferenceInformation'), require('./RiskV1ExportComplianceInquiriesPost201ResponseErrorInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.RiskV1ExportComplianceInquiriesPost201Response = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2IncrementalAuthorizationPatch201ResponseLinks, root.CyberSource.PtsV2PaymentsPost201ResponseWatchlistScreeningInformation, root.CyberSource.RiskV1DecisionsPost201ResponseClientReferenceInformation, root.CyberSource.RiskV1ExportComplianceInquiriesPost201ResponseErrorInformation);
  }
}(this, function(ApiClient, PtsV2IncrementalAuthorizationPatch201ResponseLinks, PtsV2PaymentsPost201ResponseWatchlistScreeningInformation, RiskV1DecisionsPost201ResponseClientReferenceInformation, RiskV1ExportComplianceInquiriesPost201ResponseErrorInformation) {
  'use strict';




  /**
   * The RiskV1ExportComplianceInquiriesPost201Response model module.
   * @module model/RiskV1ExportComplianceInquiriesPost201Response
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>RiskV1ExportComplianceInquiriesPost201Response</code>.
   * @alias module:model/RiskV1ExportComplianceInquiriesPost201Response
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>RiskV1ExportComplianceInquiriesPost201Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RiskV1ExportComplianceInquiriesPost201Response} obj Optional instance to populate.
   * @return {module:model/RiskV1ExportComplianceInquiriesPost201Response} The populated <code>RiskV1ExportComplianceInquiriesPost201Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = PtsV2IncrementalAuthorizationPatch201ResponseLinks.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('submitTimeUtc')) {
        obj['submitTimeUtc'] = ApiClient.convertToType(data['submitTimeUtc'], 'String');
      }
      if (data.hasOwnProperty('submitTimeLocal')) {
        obj['submitTimeLocal'] = ApiClient.convertToType(data['submitTimeLocal'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = RiskV1DecisionsPost201ResponseClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('exportComplianceInformation')) {
        obj['exportComplianceInformation'] = PtsV2PaymentsPost201ResponseWatchlistScreeningInformation.constructFromObject(data['exportComplianceInformation']);
      }
      if (data.hasOwnProperty('errorInformation')) {
        obj['errorInformation'] = RiskV1ExportComplianceInquiriesPost201ResponseErrorInformation.constructFromObject(data['errorInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PtsV2IncrementalAuthorizationPatch201ResponseLinks} _links
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
   * Time that the transaction was submitted in local time. Generated by Cybersource.
   * @member {String} submitTimeLocal
   */
  exports.prototype['submitTimeLocal'] = undefined;
  /**
   * The status for the call can be: - COMPLETED - INVALID_REQUEST - DECLINED 
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The message describing the reason of the status. Value can be   - The customer matched the Denied Parties List   - The Export bill_country/ship_country  match   - Export email_country match   - Export hostname_country/ip_country match 
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {module:model/RiskV1DecisionsPost201ResponseClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseWatchlistScreeningInformation} exportComplianceInformation
   */
  exports.prototype['exportComplianceInformation'] = undefined;
  /**
   * @member {module:model/RiskV1ExportComplianceInquiriesPost201ResponseErrorInformation} errorInformation
   */
  exports.prototype['errorInformation'] = undefined;



  return exports;
}));

