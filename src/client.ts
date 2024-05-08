import { AccountInfoResponse, AccountInfoParams, BaseParams, BaseResponse, ProcessingStatus } from './types';

class TinyERPClient {
  private apiKey: string;
  private readonly baseUrl: string = 'https://api.tiny.com.br/api2';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async request<T extends BaseParams, R extends BaseResponse>(
    endpoint: string,
    data?: T,
    method: string = 'GET',
  ): Promise<R> {
    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}.php`, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: data ? JSON.stringify(data) : undefined,
      });

      const responseBody: R = await response.json();

      // This is done because the API returns a 200 status code even when there's an error.
      if (responseBody.retorno.status_processamento !== ProcessingStatus.ProcessedSuccessfully) {
        console.error(`API request failed: ${responseBody.retorno.status}`);
        throw new Error(responseBody.retorno.erros?.map((error) => error.erro).join(', '));
      }

      return responseBody;
    } catch (error) {
      console.error(`Failed to make request: ${error}`);
      throw error;
    }
  }

  getAccountInfo(data: AccountInfoParams): Promise<AccountInfoResponse> {
    return this.request('info', data);
  }
}

export default TinyERPClient;
