# CyberSource.KmsV2KeysSymGet200ResponseKeyInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **String** | Merchant Id  | [optional] 
**keyId** | **String** | Key serial number  | [optional] 
**status** | **String** | The status of the key.  Possible values:  - FAILED  - ACTIVE  - INACTIVE  - EXPIRED  | [optional] 
**expirationDate** | **String** | The expiration time in UTC.  | [optional] 
**message** | **String** | message in case of failed key  | [optional] 
**errorInformation** | [**KmsV2KeysSymPost201ResponseErrorInformation**](KmsV2KeysSymPost201ResponseErrorInformation.md) |  | [optional] 


