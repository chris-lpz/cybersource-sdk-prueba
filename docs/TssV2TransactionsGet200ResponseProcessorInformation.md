# CyberSource.TssV2TransactionsGet200ResponseProcessorInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**processor** | [**TssV2TransactionsGet200ResponseProcessorInformationProcessor**](TssV2TransactionsGet200ResponseProcessorInformationProcessor.md) |  | [optional] 
**multiProcessorRouting** | [**[TssV2TransactionsGet200ResponseProcessorInformationMultiProcessorRouting]**](TssV2TransactionsGet200ResponseProcessorInformationMultiProcessorRouting.md) | An array of object that contains the list of acquirer response codes &amp; reasons if a transaction is routed to multiple acquirers. | [optional] 
**transactionId** | **String** | Network transaction identifier (TID). You can use this value to identify a specific transaction when you are discussing the transaction with your processor. Not all processors provide this value.  Returned by the authorization service.  #### PIN debit Transaction identifier generated by the processor.  Returned by PIN debit credit.  #### GPX Processor transaction ID.  #### Cielo For Cielo, this value is the non-sequential unit (NSU) and is supported for all transactions. The value is generated by Cielo or the issuing bank.  #### Comercio Latino For Comercio Latino, this value is the proof of sale or non-sequential unit (NSU) number generated by the acquirers Cielo and Rede, or the issuing bank.  #### CyberSource through VisaNet and GPN For details about this value for CyberSource through VisaNet and GPN, see \&quot;Network Transaction Identifiers\&quot; in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### Moneris This value identifies the transaction on a host system. It contains the following information: - Terminal used to process the transaction - Shift during which the transaction took place - Batch number - Transaction number within the batch You must store this value. If you give the customer a receipt, display this value on the receipt.  **Example** For the value 66012345001069003: - Terminal ID &#x3D; 66012345 - Shift number &#x3D; 001 - Batch number &#x3D; 069 - Transaction number &#x3D; 003  | [optional] 
**networkTransactionId** | **String** | Same value as &#x60;processorInformation.transactionId&#x60; | [optional] 
**retrievalReferenceNumber** | **String** | #### Ingenico ePayments Unique number that CyberSource generates to identify the transaction. You can use this value to identify transactions in the Ingenico ePayments Collections Report, which provides settlement information. Contact customer support for information about the report.  ### CyberSource through VisaNet Retrieval request number.  | [optional] 
**responseId** | **String** | Response ID sent from the processor.  | [optional] 
**approvalCode** | **String** | Authorization code. Returned only when the processor returns this value.  The length of this value depends on your processor.  Returned by authorization service.  #### PIN debit Authorization code that is returned by the processor.  Returned by PIN debit credit.  #### Elavon Encrypted Account Number Program The returned value is OFFLINE.  #### TSYS Acquiring Solutions The returned value for a successful zero amount authorization is 000000.  | [optional] 
**responseCode** | **String** | For most processors, this is the error message sent directly from the bank. Returned only when the processor returns this value.  **Important** Do not use this field to evaluate the result of the authorization.  #### PIN debit Response value that is returned by the processor or bank. **Important** Do not use this field to evaluate the results of the transaction request.  Returned by PIN debit credit, PIN debit purchase, and PIN debit reversal.  #### AIBMS If this value is &#x60;08&#x60;, you can accept the transaction if the customer provides you with identification.  #### Atos This value is the response code sent from Atos and it might also include the response code from the bank. Format: &#x60;aa,bb&#x60; with the two values separated by a comma and where: - &#x60;aa&#x60; is the two-digit error message from Atos. - &#x60;bb&#x60; is the optional two-digit error message from the bank.  #### Comercio Latino This value is the status code and the error or response code received from the processor separated by a colon. Format: [status code]:E[error code] or [status code]:R[response code] Example &#x60;2:R06&#x60;  #### JCN Gateway Processor-defined detail error code. The associated response category code is in the &#x60;processorInformation.responseCategoryCode&#x60; field. String (3)  | [optional] 
**avs** | [**PtsV2PaymentsPost201ResponseProcessorInformationAvs**](PtsV2PaymentsPost201ResponseProcessorInformationAvs.md) |  | [optional] 
**cardVerification** | [**Riskv1decisionsProcessorInformationCardVerification**](Riskv1decisionsProcessorInformationCardVerification.md) |  | [optional] 
**achVerification** | [**PtsV2PaymentsPost201ResponseProcessorInformationAchVerification**](PtsV2PaymentsPost201ResponseProcessorInformationAchVerification.md) |  | [optional] 
**electronicVerificationResults** | [**TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults**](TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults.md) |  | [optional] 
**systemTraceAuditNumber** | **String** | This field is returned only for **American Express Direct** and **CyberSource through VisaNet**. Returned by authorization and incremental authorization services.  #### American Express Direct  System trace audit number (STAN). This value identifies the transaction and is useful when investigating a chargeback dispute.  #### CyberSource through VisaNet  System trace number that must be printed on the customer&#39;s receipt.  | [optional] 
**responseCodeSource** | **String** | Used by Visa only and contains the response source/reason code that identifies the source of the response decision.  | [optional] 
**paymentAccountReferenceNumber** | **String** | Visa-generated reference number that identifies a card-present transaction for which you provided one of the following:   - Visa primary account number (PAN)  - Visa-generated token for a PAN  This reference number serves as a link to the cardholder account and to all transactions for that account. This reply field is returned only for CyberSource through VisaNet.  **Note** On CyberSource through VisaNet, the value for this field corresponds to the following data in the TC 33 capture file: - Record: CP01 TCR8 - Position: 79-110 - Field: Payment Account Reference  The TC 33 Capture file contains information about the purchases and refunds that a merchant submits to CyberSource. CyberSource through VisaNet creates the TC 33 Capture file at the end of the day and sends it to the merchant&#39;s acquirer, who uses this information to facilitate end-of-day clearing processing with payment networks.  | [optional] 

