export enum ProcessingStatus {
  NotProcessed = 1,
  ProcessedWithValidationErrors = 2,
  ProcessedSuccessfully = 3,
  PartiallyProcessed = 4,
}

export enum ErrorCodes {
  TokenNotProvided = 1,
  InvalidOrNotFoundToken = 2,
  MalformedOrErrorXML = 3,
  XMLProcessingError = 4,
  APIBlockedOrNoAccess = 5,
  APIBlockedTemporarilyTooManyAccessesLastMinute = 6,
  CompanySpaceExhausted = 7,
  CompanyBlocked = 8,
  DuplicateSequenceNumbers = 9,
  ParameterNotProvided = 10,
  APIBlockedTemporarilyTooManyConcurrentAccesses = 11,
  QueryReturnedNoRecords = 20,
  QueryReturnedTooManyRecords = 21,
  XMLHasMoreRecordsThanAllowedPerBatch = 22,
  PageYouAreTryingToGetDoesNotExist = 23,
  RecordDuplicationError = 30,
  ValidationErrors = 31,
  RecordNotFound = 32,
  DuplicateRecordFound = 33,
  InvoiceNotAuthorized = 34,
  UnexpectedErrorTryAgainLater = 35,
  SystemMaintenance = 99,
}

export interface Error {
  erro: string;
}

export interface BaseParams {
  token: string;
  formato: 'JSON' | 'XML';
}

export interface BaseResponse {
  retorno: {
    status_processamento: ProcessingStatus;
    status: string;
    codigo_erro?: ErrorCodes;
    erros?: Error[];
  };
}
