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
    root.CyberSource.PaymentsProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsCustomerNotifications = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PaymentsProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsCustomerNotifications model module.
   * @module model/PaymentsProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsCustomerNotifications
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PaymentsProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsCustomerNotifications</code>.
   * Features relating to notifications being sent directly to the payer using the Hosted Checkout.
   * @alias module:model/PaymentsProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsCustomerNotifications
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>PaymentsProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsCustomerNotifications</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentsProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsCustomerNotifications} obj Optional instance to populate.
   * @return {module:model/PaymentsProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsCustomerNotifications} The populated <code>PaymentsProductsSecureAcceptanceConfigurationInformationConfigurationsNotificationsCustomerNotifications</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('customReceiptPageEnabled')) {
        obj['customReceiptPageEnabled'] = ApiClient.convertToType(data['customReceiptPageEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('receiptEmailAddress')) {
        obj['receiptEmailAddress'] = ApiClient.convertToType(data['receiptEmailAddress'], 'String');
      }
      if (data.hasOwnProperty('customerReceiptEmailEnabled')) {
        obj['customerReceiptEmailEnabled'] = ApiClient.convertToType(data['customerReceiptEmailEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('customCancelPage')) {
        obj['customCancelPage'] = ApiClient.convertToType(data['customCancelPage'], 'String');
      }
      if (data.hasOwnProperty('customReceiptPage')) {
        obj['customReceiptPage'] = ApiClient.convertToType(data['customReceiptPage'], 'String');
      }
      if (data.hasOwnProperty('customCancelPageEnabled')) {
        obj['customCancelPageEnabled'] = ApiClient.convertToType(data['customCancelPageEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('notificationReceiptEmailEnabled')) {
        obj['notificationReceiptEmailEnabled'] = ApiClient.convertToType(data['notificationReceiptEmailEnabled'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Toggles the custom receipt page, where merchants can receive the results of the transaction and display appropriate messaging. Usually set by web developers integrating to Secure Acceptance.
   * @member {Boolean} customReceiptPageEnabled
   */
  exports.prototype['customReceiptPageEnabled'] = undefined;
  /**
   * Email address where a copy of the payer's receipt email is sent, when notificationReceiptEmailEnabled is true.
   * @member {String} receiptEmailAddress
   */
  exports.prototype['receiptEmailAddress'] = undefined;
  /**
   * Toggles an email receipt sent to the payer's email address on payment success.
   * @member {Boolean} customerReceiptEmailEnabled
   */
  exports.prototype['customerReceiptEmailEnabled'] = undefined;
  /**
   * URL to which transaction results are POSTed when the payer clicks 'Cancel' on the Hosted Checkout. Triggered when customCancelPageEnabled is true. Usually set by web developers integrating to Secure Acceptance.
   * @member {String} customCancelPage
   */
  exports.prototype['customCancelPage'] = undefined;
  /**
   * URL to which transaction results are POSTed when the payer requests a payment on the Hosted Checkout. Triggered when customCancelPageEnabled is true. Usually set by web developers integrating to Secure Acceptance.
   * @member {String} customReceiptPage
   */
  exports.prototype['customReceiptPage'] = undefined;
  /**
   * Toggles the custom cancel page, where merchants can receive notice that the payer has canceled, and display appropriate messaging and direction. Usually set by web developers integrating to Secure Acceptance.
   * @member {Boolean} customCancelPageEnabled
   */
  exports.prototype['customCancelPageEnabled'] = undefined;
  /**
   * Toggles whether merchant receives a copy of the payer's receipt email.
   * @member {Boolean} notificationReceiptEmailEnabled
   */
  exports.prototype['notificationReceiptEmailEnabled'] = undefined;



  return exports;
}));


