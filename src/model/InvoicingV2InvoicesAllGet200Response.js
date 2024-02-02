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
    define(['ApiClient', 'model/GetAllPlansResponseLinks', 'model/InvoicingV2InvoicesAllGet200ResponseInvoices'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetAllPlansResponseLinks'), require('./InvoicingV2InvoicesAllGet200ResponseInvoices'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InvoicingV2InvoicesAllGet200Response = factory(root.CyberSource.ApiClient, root.CyberSource.GetAllPlansResponseLinks, root.CyberSource.InvoicingV2InvoicesAllGet200ResponseInvoices);
  }
}(this, function(ApiClient, GetAllPlansResponseLinks, InvoicingV2InvoicesAllGet200ResponseInvoices) {
  'use strict';




  /**
   * The InvoicingV2InvoicesAllGet200Response model module.
   * @module model/InvoicingV2InvoicesAllGet200Response
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InvoicingV2InvoicesAllGet200Response</code>.
   * @alias module:model/InvoicingV2InvoicesAllGet200Response
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>InvoicingV2InvoicesAllGet200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvoicingV2InvoicesAllGet200Response} obj Optional instance to populate.
   * @return {module:model/InvoicingV2InvoicesAllGet200Response} The populated <code>InvoicingV2InvoicesAllGet200Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = GetAllPlansResponseLinks.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('submitTimeUtc')) {
        obj['submitTimeUtc'] = ApiClient.convertToType(data['submitTimeUtc'], 'String');
      }
      if (data.hasOwnProperty('totalInvoices')) {
        obj['totalInvoices'] = ApiClient.convertToType(data['totalInvoices'], 'Number');
      }
      if (data.hasOwnProperty('invoices')) {
        obj['invoices'] = ApiClient.convertToType(data['invoices'], [InvoicingV2InvoicesAllGet200ResponseInvoices]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/GetAllPlansResponseLinks} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` **Example** `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC.  Returned by Cybersource for all services. 
   * @member {String} submitTimeUtc
   */
  exports.prototype['submitTimeUtc'] = undefined;
  /**
   * @member {Number} totalInvoices
   */
  exports.prototype['totalInvoices'] = undefined;
  /**
   * @member {Array.<module:model/InvoicingV2InvoicesAllGet200ResponseInvoices>} invoices
   */
  exports.prototype['invoices'] = undefined;



  return exports;
}));

