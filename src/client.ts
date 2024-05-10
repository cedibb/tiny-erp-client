import type {
  BaseResponse,
  SearchOrdersParams,
  SearchOrdersResponse,
  AccountInfoResponse,
  SearchClientsParams,
  GetClientParams,
  AddClientParams,
  UpdateClientParams,
  SearchClientsResponse,
  GetClientResponse,
  AddClientResponse,
  UpdateClientResponse,
} from './types';

class TinyERPClient {
  private token: string;
  private baseUrl: string = 'https://api.tiny.com.br/api2';

  constructor(token: string) {
    this.token = token;
  }

  private async request<T, R extends BaseResponse>(endpoint: string, data?: T): Promise<R> {
    try {
      const requestData = { ...data, token: this.token, formato: 'JSON' };

      const params = new URLSearchParams(requestData).toString();

      const response = await fetch(`${this.baseUrl}/${endpoint}.php?${params}`);

      const responseBody: R = await response.json();

      if (responseBody.retorno.status === 'Erro') {
        const errorMessage = responseBody.retorno.erros!.map((e) => e.erro).join(', ');
        throw new Error(errorMessage);
      }

      return responseBody;
    } catch (error) {
      console.error(`Failed to make request: ${error}`);
      throw error;
    }
  }

  getAccountInfo(): Promise<AccountInfoResponse> {
    return this.request('info');
  }

  searchOrders(params: SearchOrdersParams): Promise<SearchOrdersResponse> {
    return this.request<SearchOrdersParams, SearchOrdersResponse>('pedidos.pesquisa', params);
  }

  searchClients(params: SearchClientsParams): Promise<SearchClientsResponse> {
    return this.request<SearchClientsParams, SearchClientsResponse>('clientes.pesquisa', params);
  }

  getClient(params: GetClientParams): Promise<GetClientResponse> {
    return this.request<GetClientParams, GetClientResponse>('cliente', params);
  }

  addClient(params: AddClientParams): Promise<AddClientResponse> {
    return this.request<AddClientParams, AddClientResponse>('cliente.adicionar', params);
  }

  updateClient(params: UpdateClientParams): Promise<UpdateClientResponse> {
    return this.request<UpdateClientParams, UpdateClientResponse>('cliente.atualizar', params);
  }
}

export { TinyERPClient };
