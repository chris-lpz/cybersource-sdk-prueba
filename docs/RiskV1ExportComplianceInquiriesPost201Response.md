# CyberSource.RiskV1ExportComplianceInquiriesPost201Response

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PtsV2IncrementalAuthorizationPatch201ResponseLinks**](PtsV2IncrementalAuthorizationPatch201ResponseLinks.md) |  | [optional] 
**id** | **String** | An unique identification number generated by Cybersource to identify the submitted request. Returned by all services. It is also appended to the endpoint of the resource. On incremental authorizations, this value with be the same as the identification number returned in the original authorization response.  | [optional] 
**submitTimeUtc** | **String** | Time of request in UTC. Format: &#x60;YYYY-MM-DDThh:mm:ssZ&#x60; **Example** &#x60;2016-08-11T22:47:57Z&#x60; equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The &#x60;T&#x60; separates the date and the time. The &#x60;Z&#x60; indicates UTC.  Returned by Cybersource for all services.  | [optional] 
**submitTimeLocal** | **String** | Time that the transaction was submitted in local time. Generated by Cybersource. | [optional] 
**status** | **String** | The status for the call can be: - COMPLETED - INVALID_REQUEST - DECLINED  | [optional] 
**message** | **String** | The message describing the reason of the status. Value can be   - The customer matched the Denied Parties List   - The Export bill_country/ship_country  match   - Export email_country match   - Export hostname_country/ip_country match  | [optional] 
**clientReferenceInformation** | [**RiskV1DecisionsPost201ResponseClientReferenceInformation**](RiskV1DecisionsPost201ResponseClientReferenceInformation.md) |  | [optional] 
**exportComplianceInformation** | [**PtsV2PaymentsPost201ResponseWatchlistScreeningInformation**](PtsV2PaymentsPost201ResponseWatchlistScreeningInformation.md) |  | [optional] 
**errorInformation** | [**RiskV1ExportComplianceInquiriesPost201ResponseErrorInformation**](RiskV1ExportComplianceInquiriesPost201ResponseErrorInformation.md) |  | [optional] 

