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
    root.CyberSource.PaymentsProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsMerchantNotifications = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PaymentsProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsMerchantNotifications model module.
   * @module model/PaymentsProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsMerchantNotifications
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PaymentsProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsMerchantNotifications</code>.
   * @alias module:model/PaymentsProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsMerchantNotifications
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>PaymentsProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsMerchantNotifications</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentsProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsMerchantNotifications} obj Optional instance to populate.
   * @return {module:model/PaymentsProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsMerchantNotifications} The populated <code>PaymentsProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsMerchantNotifications</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('backofficePostEnabled')) {
        obj['backofficePostEnabled'] = ApiClient.convertToType(data['backofficePostEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('backofficeEmailAddress')) {
        obj['backofficeEmailAddress'] = ApiClient.convertToType(data['backofficeEmailAddress'], 'String');
      }
      if (data.hasOwnProperty('backofficeEmailEnabled')) {
        obj['backofficeEmailEnabled'] = ApiClient.convertToType(data['backofficeEmailEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('backofficePostUrl')) {
        obj['backofficePostUrl'] = ApiClient.convertToType(data['backofficePostUrl'], 'String');
      }
      if (data.hasOwnProperty('cardNumberFormat')) {
        obj['cardNumberFormat'] = ApiClient.convertToType(data['cardNumberFormat'], 'String');
      }
    }
    return obj;
  }

  /**
   * Enables Webhook transaction confirmation messages sent to URL defined in backofficePostUrl. Usually enabled by web developers integrating to Secure Acceptance.
   * @member {Boolean} backofficePostEnabled
   */
  exports.prototype['backofficePostEnabled'] = undefined;
  /**
   * Email address to receive transaction confirmation messages.
   * @member {String} backofficeEmailAddress
   */
  exports.prototype['backofficeEmailAddress'] = undefined;
  /**
   * Enables email transaction confirmation messages, sent to the address specified in backofficeEmailAddress.
   * @member {Boolean} backofficeEmailEnabled
   */
  exports.prototype['backofficeEmailEnabled'] = undefined;
  /**
   * Webhook URL to which transaction confirmation is sent. Usually completed by the web developers integrating to Secure Acceptance.
   * @member {String} backofficePostUrl
   */
  exports.prototype['backofficePostUrl'] = undefined;
  /**
   * Format in which the card number should be masked in the notifications.   Valid values: `1` - Display first 6 digits only (e.g. \"444433**********\")  `2` - Display last four digits only (e.g. \"************1111\")  `3` - Display First six and last four digits (e.g. \"444433******1111\") 
   * @member {String} cardNumberFormat
   */
  exports.prototype['cardNumberFormat'] = undefined;



  return exports;
}));


