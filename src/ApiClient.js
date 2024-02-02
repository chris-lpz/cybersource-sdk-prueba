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

'use strict';

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['axios', 'axios-cookiejar-support', 'https-proxy-agent', 'https', 'querystring', 'Authentication/MerchantConfig', 'Authentication/Logger', 'Authentication/Constants', 'Authentication/Authorization', 'Authentication/PayloadDigest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('axios'), require('axios-cookiejar-support'), require('https-proxy-agent'), require('https'), require('querystring'), require('./authentication/core/MerchantConfig'), require('./authentication/logging/Logger'), require('./authentication/util/Constants'), require('./authentication/core/Authorization'), require('./authentication/payloadDigest/DigestGenerator'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ApiClient = factory(root.axios, root.axiosCookieJar, root.httpsProxyAgent, root.https, root.querystring, root.Authentication.MerchantConfig, root.Authentication.Logger, root.Authentication.Constants, root.Authentication.Authorization, root.Authentication.PayloadDigest);
  }
}(this, function(axios, axiosCookieJar, { HttpsProxyAgent }, https, querystring, MerchantConfig, Logger, Constants, Authorization, PayloadDigest) {
  /**
   * @module ApiClient
   * @version 0.0.1
   */

  /**
   * Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
   * application to use this class directly - the *Api and model classes provide the public API for the service. The
   * contents of this file should be regarded as internal but are documented for completeness.
   * @alias module:ApiClient
   * @class
   */
  var exports = function() {
    /**
     * The base URL against which to resolve every API call's (relative) path.
     * @type {String}
     * @default https://apitest.cybersource.com
     */
    this.basePath = 'https://apitest.cybersource.com'.replace(/\/+$/, '');

    /**
     * The authentication methods to be included for all API calls.
     * @type {Array.<String>}
     */
    this.authentications = {
    };
    /**
     * The default HTTP headers to be included for all API calls.
     * @type {Array.<String>}
     * @default {}
     */
    this.defaultHeaders = {};

    /**
     * The default HTTP timeout for all API calls.
     * @type {Number}
     * @default 60000
     */
    this.timeout = 60000;

    /**
     * If set to false an additional timestamp parameter is added to all API GET calls to
     * prevent browser caching
     * @type {Boolean}
     * @default true
     */
    this.cache = true;

    /**
     * If set to true, the client will save the cookies from each server
     * response, and return them in the next request.
     * @default false
     */
    this.enableCookies = false;

    /*
     * Used to save and return cookies in a node.js (non-browser) setting,
     * if this.enableCookies is set to true.
     */
    if (typeof window === 'undefined') {
      const wrapper = require('axios-cookiejar-support').wrapper;
      const toughCookieJar = require('tough-cookie').CookieJar;
      wrapper(axios);
      this.cookieJar = new toughCookieJar();
    }

    /**
     * The filepath where reports are downloaded
     */
    this.downloadFilePath = '';

    /**
     * The user-defined Accept Header Type
     */
    this.acceptHeader = '';
  };

  /**
   * Returns a string representation for an actual parameter.
   * @param param The actual parameter.
   * @returns {String} The string representation of <code>param</code>.
   */
  exports.prototype.paramToString = function(param) {
    if (param == undefined || param == null) {
      return '';
    }
    if (param instanceof Date) {
      return param.toJSON();
    }
    return param.toString();
  };

  /**
   * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
   * NOTE: query parameters are not handled here.
   * @param {String} path The path to append to the base URL.
   * @param {Object} pathParams The parameter values to append.
   * @returns {String} The encoded path with parameter values substituted.
   */
  exports.prototype.buildUrl = function(path, pathParams) {
    if (!path.match(/^\//)) {
      path = '/' + path;
    }
    var url = path;
    var _this = this;
    url = url.replace(/\{([\w-]+)\}/g, function(fullMatch, key) {
      var value;
      if (pathParams.hasOwnProperty(key)) {
        value = _this.paramToString(pathParams[key]);
      } else {
        value = fullMatch;
      }
      return encodeURIComponent(value);
    });
    return url;
  };

  /**
   * Checks whether the given content type represents JSON.<br>
   * JSON content type examples:<br>
   * <ul>
   * <li>application/json</li>
   * <li>application/json; charset=UTF8</li>
   * <li>APPLICATION/JSON</li>
   * </ul>
   * @param {String} contentType The MIME content type to check.
   * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
   */
  exports.prototype.isJsonMime = function(contentType) {
    return Boolean(contentType != null && contentType.match(/^application\/json(;.*)?$/i));
  };

  /**
   * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
   * @param {Array.<String>} contentTypes
   * @returns {String} The chosen content type, preferring JSON.
   */
  exports.prototype.jsonPreferredMime = function(contentTypes) {
    for (var i = 0; i < contentTypes.length; i++) {
      if (this.isJsonMime(contentTypes[i])) {
        return contentTypes[i];
      }
    }
    return contentTypes[0];
  };

  /**
   * Checks whether the given parameter value represents file-like content.
   * @param param The parameter to check.
   * @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
   */
  exports.prototype.isFileParam = function(param) {
    // fs.ReadStream in Node.js and Electron (but not in runtime like browserify)
    if (typeof require === 'function') {
      var fs;
      try {
        fs = require('fs');
      } catch (err) {}
      if (fs && fs.ReadStream && param instanceof fs.ReadStream) {
        return true;
      }
    }
    // Buffer in Node.js
    if (typeof Buffer === 'function' && param instanceof Buffer) {
      return true;
    }
    // Blob in browser
    if (typeof Blob === 'function' && param instanceof Blob) {
      return true;
    }
    // File in browser (it seems File object is also instance of Blob, but keep this for safe)
    if (typeof File === 'function' && param instanceof File) {
      return true;
    }
    return false;
  };

  /**
   * Normalizes parameter values:
   * <ul>
   * <li>remove nils</li>
   * <li>keep files and arrays</li>
   * <li>format to string with `paramToString` for other cases</li>
   * </ul>
   * @param {Object.<String, Object>} params The parameters as object properties.
   * @returns {Object.<String, Object>} normalized parameters.
   */
  exports.prototype.normalizeParams = function(params) {
    var newParams = {};
    for (var key in params) {
      if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null) {
        var value = params[key];
        if (this.isFileParam(value) || Array.isArray(value)) {
          newParams[key] = value;
        } else {
          newParams[key] = this.paramToString(value);
        }
      }
    }
    return newParams;
  };

  /**
   * Enumeration of collection format separator strategies.
   * @enum {String}
   * @readonly
   */
  exports.CollectionFormatEnum = {
    /**
     * Comma-separated values. Value: <code>csv</code>
     * @const
     */
    CSV: ',',
    /**
     * Space-separated values. Value: <code>ssv</code>
     * @const
     */
    SSV: ' ',
    /**
     * Tab-separated values. Value: <code>tsv</code>
     * @const
     */
    TSV: '\t',
    /**
     * Pipe(|)-separated values. Value: <code>pipes</code>
     * @const
     */
    PIPES: '|',
    /**
     * Native array. Value: <code>multi</code>
     * @const
     */
    MULTI: 'multi'
  };

  /**
   * Builds a string representation of an array-type actual parameter, according to the given collection format.
   * @param {Array} param An array parameter.
   * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
   * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
   * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
   */
  exports.prototype.buildCollectionParam = function buildCollectionParam(param, collectionFormat) {
    if (param == null) {
      return null;
    }
    switch (collectionFormat) {
      case 'csv':
        return param.map(this.paramToString).join(',');
      case 'ssv':
        return param.map(this.paramToString).join(' ');
      case 'tsv':
        return param.map(this.paramToString).join('\t');
      case 'pipes':
        return param.map(this.paramToString).join('|');
      case 'multi':
        // return the array directly as SuperAgent will handle it as expected
        return param.map(this.paramToString);
      default:
        throw new Error('Unknown collection format: ' + collectionFormat);
    }
  };

  /**
   * Applies authentication headers to the axiosConfig.
   * @param {Object} axiosConfig The object to be used as configuration for <code>axios</code> API.
   * @param {Array.<String>} authNames An array of authentication method names.
   */
  exports.prototype.applyAuthToRequest = function(axiosConfig, authNames) {
    var _this = this;
    authNames.forEach(function(authName) {
      var auth = _this.authentications[authName];
      switch (auth.type) {
        case 'basic':
          if (auth.username || auth.password) {
            axiosConfig.auth(auth.username || '', auth.password || '');
          }
          break;
        case 'apiKey':
          if (auth.apiKey) {
            var data = {};
            if (auth.apiKeyPrefix) {
              data[auth.name] = auth.apiKeyPrefix + ' ' + auth.apiKey;
            } else {
              data[auth.name] = auth.apiKey;
            }
            if (auth['in'] === 'header') {
              axiosConfig.headers = data;
            } else {
              axiosConfig.params = data;
            }
          }
          break;
        case 'oauth2':
          if (auth.accessToken) {
            axiosConfig.headers['Authorization'] = 'Bearer ' + auth.accessToken;
          }
          break;
        default:
          throw new Error('Unknown authentication type: ' + auth.type);
      }
    });
  };

  /**
   * Deserializes an HTTP response body into a value of the specified type.
   * @param {Object} response A SuperAgent response object.
   * @param {(String|Array.<String>|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
   * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
   * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
   * all properties on <code>data<code> will be converted to this type.
   * @returns A value of the specified type.
   */
  exports.prototype.deserialize = function deserialize(response, returnType) {
    if (response == null || returnType == null || response.status == 204) {
      return null;
    }
    // Rely on SuperAgent for parsing response body.
    // See http://visionmedia.github.io/superagent/#parsing-response-bodies
    var data = response.data;
    if (data == null || (typeof data === 'object' && typeof data.length === 'undefined' && !Object.keys(data).length)) {
      // SuperAgent does not always produce a body; use the unparsed response as a fallback
      data = response.statusText;
    }
    return exports.convertToType(data, returnType);
  };

  /**
   * Translates the Axios error into an error object that is backward compatible.
   * @param {Object} error An Axios error object.
   * @returns A backward compatible error object.
   */
  exports.prototype.translateError = function translateError(error) {
    var tester = {};
    tester.status = error.response.status;
    tester.response = {};
    tester.response.req = {};
    tester.response.req.method = error.response.config.method;
    tester.response.req.url = error.response.config.baseURL + error.response.config.url;
    tester.response.req.data = error.response.config.data;
    tester.response.req.headers = error.response.config.headers;
    tester.response.header = error.response.headers;
    tester.response.status = error.response.status;
    tester.response.text = JSON.stringify(error.response.data);
    return tester;
  }

  /**
   * Translates the Axios 404 error into an error object that is backward compatible.
   * @param {Object} error An Axios error object.
   * @returns A backward compatible error object.
   */
  exports.prototype.translate404Error = function translate404Error(error) {
    var tester = {};
    tester.status = error.response.status;
    tester.response = {};
    tester.response.req = {};
    tester.response.req.method = error.response.config.method;
    tester.response.req.url = error.response.config.baseURL + error.response.config.url;
    tester.response.req.headers = error.response.config.headers;
    tester.response.header = error.response.headers;
    tester.response.status = error.response.status;

    try {
      // 404 is caused by missing resource / resource not found
      if (error.response.config.responseType != 'stream'){
        tester.response.text = JSON.stringify(error.response.data);
      } else { throw "Exception during streaming"; }
    } catch(err) {
      // 404 is caused by unexpected end of stream or stream not found
      tester.response.text = error.message;
    }
    return tester;
  }

  /**
   * Translates the Axios Proxy error into an error object that is backward compatible.
   * @param {Object} error An Axios error object.
   * @returns A backward compatible error object.
   */
  exports.prototype.translateProxyIssue = function translateProxyIssue(error) {
    var tester = {};
    tester.errno = error.errno;
    tester.code = error.code;
    tester.syscall = error.syscall;
    tester.address = error.address;
    tester.port = error.port;
    return tester;
  }

  /**
   * Translates the Axios response into a response object that is backward compatible.
   * @param {Object} response An Axios response object.
   * @returns A backward compatible response object.
   */
  exports.prototype.translateResponse = function translateResponse(response) {
    var tester = {};
    tester.req = {};
    tester.req.method = response.config.method;
    tester.req.url = response.config.baseURL + response.config.url;
    tester.req.data = response.config.data;
    tester.req.headers = response.config.headers;
    tester.header = response.headers;
    tester.status = response.status;
    tester.text = JSON.stringify(response.data);
    return tester;
  }

    // Code added by Infosys dev team

  /**
   * This method will set the merchantConfig object global
   *
   * @param {Configuration} configObject merchantConfiguration properties.
   */
  exports.prototype.setConfiguration = function (configObject) {

    this.merchantConfig = new MerchantConfig(configObject);
    this.constants = Constants;
    if(this.merchantConfig.getIntermediateHost()) {
      if(this.merchantConfig.getIntermediateHost().startsWith(this.constants.HTTP_URL_PREFIX) ||
        this.merchantConfig.getIntermediateHost().startsWith('http://')) {
          this.basePath = this.merchantConfig.getIntermediateHost();
      } else {
        this.basePath = this.constants.HTTP_URL_PREFIX + this.merchantConfig.getIntermediateHost();
      }
    } else {
      this.basePath = this.constants.HTTP_URL_PREFIX + this.merchantConfig.getRequestHost();
    }
    this.logger = Logger.getLogger(this.merchantConfig, 'ApiClient');
  }

  /**
   * This method is to generate headers for http and jwt authentication.
   *
   * @param {String} httpMethod
   * @param {String} requestTarget
   * @param {String} requestBody
   */
  exports.prototype.callAuthenticationHeader = function (httpMethod, requestTarget, requestBody, headerParams) {

    this.merchantConfig.setRequestTarget(requestTarget);
    this.merchantConfig.setRequestType(httpMethod)
    this.merchantConfig.setRequestJsonData(requestBody);

    this.logger.info('Authentication Type : ' + this.merchantConfig.getAuthenticationType());
    this.logger.info(this.constants.REQUEST_TYPE + ' : ' + httpMethod.toUpperCase());

    var token = Authorization.getToken(this.merchantConfig, this.logger);

    // var clientId = getClientId();

    // headerParams['v-c-client-id'] = clientId;

    // if (this.merchantConfig.getSolutionId() != null && this.merchantConfig.getSolutionId() != '') {
      // headerParams['v-c-solution-id'] = this.merchantConfig.getSolutionId();
    // }

    if (this.merchantConfig.getAuthenticationType().toLowerCase() === this.constants.JWT) {
      token = 'Bearer ' + token;
      headerParams['Authorization'] = token;
      this.logger.info(this.constants.AUTHORIZATION + ' : ' + token);
    }
    else if (this.merchantConfig.getAuthenticationType().toLowerCase() === this.constants.HTTP) {
      var date = new Date(Date.now()).toUTCString();

      if (httpMethod.toLowerCase() === this.constants.POST
        || httpMethod.toLowerCase() === this.constants.PATCH
        || httpMethod.toLowerCase() === this.constants.PUT) {
        var digest = PayloadDigest.generateDigest(this.merchantConfig, this.logger);
        digest = this.constants.SIGNATURE_ALGORITHAM + digest;
        this.logger.info(this.constants.DIGEST + " : " + digest);
        headerParams['digest'] = digest;
      }

      headerParams['v-c-merchant-id'] = this.merchantConfig.getMerchantID();
      headerParams['date'] = date;
      headerParams['host'] = this.merchantConfig.getRequestHost();
      headerParams['signature'] = token;
      headerParams['User-Agent'] = this.constants.USER_AGENT_VALUE;

      this.logger.info('v-c-merchant-id : ' + this.merchantConfig.getMerchantID());
      this.logger.info('date : ' + date);
      this.logger.info('host : ' + this.merchantConfig.getRequestHost());
      this.logger.info('signature : ' + token);
      this.logger.info('User-Agent : ' + headerParams['User-Agent']);
      this.logger.info(this.constants.END_TRANSACTION);
    }
    else if (this.merchantConfig.getAuthenticationType().toLowerCase() === this.constants.OAUTH) {
      token = 'Bearer ' + token;
      headerParams['Authorization'] = token;
      // this.logger.info(this.constants.AUTHORIZATION + ' : ' + token);
    }

    return headerParams;
  }

  function getClientId() {
    var packageInfo = require('./../package.json');
    return "cybs-rest-sdk-node-" + packageInfo.version;
  }

  /**
   * Callback function to receive the result of the operation.
   * @callback module:ApiClient~callApiCallback
   * @param {String} error Error message, if any.
   * @param data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Invokes the REST service using the supplied settings and parameters.
   * @param {String} path The base URL to invoke.
   * @param {String} httpMethod The HTTP method to use.
   * @param {Object.<String, String>} pathParams A map of path parameters and their values.
   * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
   * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
   * @param {Object.<String, Object>} formParams A map of form parameters and their values.
   * @param {Object} bodyParam The value to pass as the request body.
   * @param {Array.<String>} authNames An array of authentication type names.
   * @param {Array.<String>} contentTypes An array of request MIME types.
   * @param {Array.<String>} accepts An array of acceptable response MIME types.
   * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
   * constructor for a complex type.
   * @param {module:ApiClient~callApiCallback} callback The callback function.
   * @returns {Object} The SuperAgent request object.
   */
  exports.prototype.callApi = function callApi(path, httpMethod, pathParams,
      queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts,
      returnType, callback) {

    var _this = this;
    var url = this.buildUrl(path, pathParams);
    var useProxy = this.merchantConfig.getUseProxy();
    var proxyAddress = this.merchantConfig.getProxyAddress();
    var proxyPort = this.merchantConfig.getProxyPort();
    var proxyUser = this.merchantConfig.getProxyUser();
    var proxyPassword = this.merchantConfig.getProxyPassword();
    var enableClientCert = this.merchantConfig.getEnableClientCert();

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    var axiosConfig = {
      baseURL: this.basePath,
      method: httpMethod,
      proxy: false,
      headers: {}
    };

    if (useProxy && (proxyAddress != null && proxyAddress != '')) {
      if ((proxyUser != null && proxyUser != '') && (proxyPassword!= null && proxyPassword != '')) {
        var proxy  = process.env.http_proxy || 'http://' + proxyUser + ':' + proxyPassword + '@' + proxyAddress + ':' + proxyPort;
      }
      else {
        var proxy  = process.env.http_proxy || 'http://' +  proxyAddress + ':' + proxyPort;
      }

      const agent = new HttpsProxyAgent(proxy);
      axiosConfig.httpsAgent = agent;
    }

    var fslib = require('fs');
    var pathlib = require('path');

    if(enableClientCert) {
      var certFile = pathlib.resolve(pathlib.join(this.merchantConfig.getClientCertDir(), this.merchantConfig.getSSLClientCert()));
      var keyFile = pathlib.resolve(pathlib.join(this.merchantConfig.getClientCertDir(), this.merchantConfig.getPrivateKey()));

      if (axiosConfig.httpsAgent) {
        axiosConfig.httpsAgent.cert = fslib.readFileSync(certFile);
        axiosConfig.httpsAgent.key = fslib.readFileSync(keyFile);
      } else {
        axiosConfig.httpsAgent = new https.Agent({
          cert: fslib.readFileSync(certFile),
          key: fslib.readFileSync(keyFile)
        });
      }
    }

    // apply authentications
    this.applyAuthToRequest(axiosConfig, authNames);

    // set query parameters
    if (httpMethod.toLowerCase() === this.constants.GET && this.cache === false) {
        queryParams['_'] = new Date().getTime();
    }

    /**
     *added by infosys team, to generate requestTarget with pathParam
     */
    var requestTarget = this.buildRequestTarget(path, pathParams, queryParams);

    if (httpMethod.toLowerCase() === this.constants.POST
      || httpMethod.toLowerCase() === this.constants.PATCH
      || httpMethod.toLowerCase() === this.constants.PUT) {
      if (bodyParam !== "{}") {
        bodyParam = JSON.stringify(bodyParam, null, 0);
      }
    }

    if (this.merchantConfig.getAuthenticationType().toLowerCase() !== this.constants.MUTUAL_AUTH)
    {
      headerParams = this.callAuthenticationHeader(httpMethod, requestTarget, bodyParam, headerParams);
    }

    if(this.merchantConfig.getDefaultHeaders()) {
      for (const [key, value] of Object.entries(this.merchantConfig.getDefaultHeaders())) {
        headerParams[`${key}`] = `${value}`;
      }
    }

    // set header parameters
    for (const key in this.defaultHeaders) {
      axiosConfig.headers[key] = this.defaultHeaders[`${key}`];
    }

    for (const key in headerParams) {
      axiosConfig.headers[key] = headerParams[`${key}`];
    }

    // set request timeout
    axiosConfig.timeout = this.timeout;

    var contentType = this.jsonPreferredMime(contentTypes);
    var contentTypeHeaderValue = '';
    if (contentType) {
      // Issue with superagent and multipart/form-data (https://github.com/visionmedia/superagent/issues/746)
      if(contentType != 'multipart/form-data') {
        contentTypeHeaderValue = contentType;
      }
    } else if (!contentTypeHeaderValue) {
      contentTypeHeaderValue = 'application/json';
    }

    if (contentType === 'application/x-www-form-urlencoded') {
      contentTypeHeaderValue = 'application/x-www-form-urlencoded';
      axiosConfig.headers['Content-Type'] = contentTypeHeaderValue;
      formParams = bodyParam;
      axiosConfig.data = JSON.parse(formParams);
    } else if (contentType == 'multipart/form-data') {
      var _formParams = this.normalizeParams(formParams);
      contentTypeHeaderValue = 'multipart/form-data';
      axiosConfig.headers['Content-Type'] = contentTypeHeaderValue;
      const formData = new formData();
      for (var key in _formParams) {
        if (_formParams.hasOwnProperty(key)) {
          formData.append(key, _formParams[key]);
        }
      }
    } else if (bodyParam) {
      axiosConfig.data = JSON.parse(bodyParam);
    }

    var accept = this.jsonPreferredMime(accepts);

    if (this.acceptHeader) {
      accept = this.acceptHeader;
    }

    if (accept) {
      axiosConfig.headers['Accept'] = accept;
      /* Code for downloading file from stream */
      if (accept === 'application/xml' || accept === 'text/csv') {
        if (accept === 'application/xml') {
          this.downloadFilePath = this.downloadFilePath + '.xml';
        } else {
          this.downloadFilePath = this.downloadFilePath + '.csv';
        }

        var fs = require('fs');
        var stream = fs.createWriteStream(this.downloadFilePath);
        axiosConfig.method = 'GET';
        axiosConfig.responseType = 'stream';
        axiosConfig.url = requestTarget;
        axiosConfig.cancelToken = source.token;
        axios.request(axiosConfig).then(function(response) {
          response.data.pipe(stream);
        });
      }
    }

    if (returnType === 'Blob') {
      axiosConfig.responseType = 'blob';
    } else if (returnType === 'String') {
      axiosConfig.responseType = 'string';
    }

    // Attach previously saved cookies, if enabled
    if (this.enableCookies){
      axiosConfig.jar = this.cookieJar;
    }

    axiosConfig.url = requestTarget;


    axios.request(axiosConfig).then(function(response) {
      if (callback) {
        var data = _this.deserialize(response, returnType);
        response = _this.translateResponse(response);

        callback(null, data, response);
      }
    }).catch(function(error, response) {
      source.cancel('Stream ended.');
      var userError = {};
      if (error.code && error.code == "ECONNREFUSED") {
        userError = _this.translateProxyIssue(error);
      } else if (error.code && error.code == "ERR_BAD_REQUEST") {
        userError = _this.translate404Error(error);
        response = userError.response;
      } else if (error.code && error.code == "ETIMEDOUT") {
        userError = _this.translateProxyIssue(error);
      } else {
        userError = _this.translateError(error);
        response = userError.response;
      }

      callback(userError, null, response);
    });

    process.on('uncaughtException', (reason, p) => {
      // console.log('Uncaught exception at Promise :' + p + ' with Reason : ' + reason);
    });
  };

  /**
   * Build request target required for the signature generation
   * @param {String} path
   * @param {Object} pathParams
   */
  exports.prototype.buildRequestTarget = function (path, pathParams, queryParams) {
    if (!path.match(/^\//)) {
      path = '/' + path;
    }

    var _this = this;
    var requestTarget = path.replace(/\{([\w-]+)\}/g, function (fullMatch, key) {
      var value;
      if (pathParams.hasOwnProperty(key)) {
        value = _this.paramToString(pathParams[key]);
      } else {
        value = fullMatch;
      }
      return encodeURIComponent(value);
    });

    // added by infosys team, to generate requestTarget with queryParams
    if (Object.keys(queryParams).length !== 0) {
      var queryFlag = false;
      var queryArray = [];
      Object.keys(queryParams).forEach(function (prop) {
        var val = queryParams[prop];

        if (val !== undefined) {
          queryArray[prop] = val;
          queryFlag = true;
        }
      });
      if (queryFlag)
        requestTarget = requestTarget + '?' + querystring.stringify(queryArray);
    }
    return requestTarget;
  };

  /**
   * Parses an ISO-8601 string representation of a date value.
   * @param {String} str The date value as a string.
   * @returns {Date} The parsed date object.
   */
  exports.parseDate = function(str) {
    return new Date(str.replace(/T/i, ' '));
  };

  /**
   * Converts a value to the specified type.
   * @param {(String|Object)} data The data to convert, as a string or object.
   * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
   * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
   * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
   * all properties on <code>data<code> will be converted to this type.
   * @returns An instance of the specified type or null or undefined if data is null or undefined.
   */
  exports.convertToType = function(data, type) {
    if (data === null || data === undefined)
      return data

    switch (type) {
      case 'Boolean':
        return Boolean(data);
      case 'Integer':
        return parseInt(data, 10);
      case 'Number':
        return parseFloat(data);
      case 'String':
        return String(data);
      case 'Date':
        return this.parseDate(String(data));
      case 'Blob':
          return data;
      default:
        if (type === Object) {
          // generic object, return directly
          return data;
        } else if (typeof type === 'function') {
          // for model type like: User
          return type.constructFromObject(data);
        } else if (Array.isArray(type)) {
          // for array type like: ['String']
          var itemType = type[0];
          return data.map(function(item) {
            return exports.convertToType(item, itemType);
          });
        } else if (typeof type === 'object') {
          // for plain object type like: {'String': 'Integer'}
          var keyType, valueType;
          for (var k in type) {
            if (type.hasOwnProperty(k)) {
              keyType = k;
              valueType = type[k];
              break;
            }
          }
          var result = {};
          for (var k in data) {
            if (data.hasOwnProperty(k)) {
              var key = exports.convertToType(k, keyType);
              var value = exports.convertToType(data[k], valueType);
              result[key] = value;
            }
          }
          return result;
        } else {
          // for unknown type, return the data directly
          return data;
        }
    }
  };

  /**
   * Constructs a new map or array model from REST data.
   * @param data {Object|Array} The REST data.
   * @param obj {Object|Array} The target object or array.
   */
  exports.constructFromObject = function(data, obj, itemType) {
    if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        if (data.hasOwnProperty(i))
          obj[i] = exports.convertToType(data[i], itemType);
      }
    } else {
      for (var k in data) {
        if (data.hasOwnProperty(k))
          obj[k] = exports.convertToType(data[k], itemType);
      }
    }
  };

  /**
   * The default API client implementation.
   * @type {module:ApiClient}
   */
  exports.instance = new exports();

  return exports;
}));