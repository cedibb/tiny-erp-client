import type {
  BaseResponse,
  GetOrderParams,
  GetOrderResponse,
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
  SearchProductsParams,
  GetProductParams,
  SearchProductsResponse,
  GetProductResponse,
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

  //CLIENTS
  searchClients(params: SearchClientsParams): Promise<SearchClientsResponse> {
    return this.request<SearchClientsParams, SearchClientsResponse>('contatos.pesquisa', params);
  }

  getClient(params: GetClientParams): Promise<GetClientResponse> {
    return this.request<GetClientParams, GetClientResponse>('contato.obter', params);
  }

  addClient(params: AddClientParams): Promise<AddClientResponse> {
    return this.request<AddClientParams, AddClientResponse>('contato.adicionar', params);
  }

  updateClient(params: UpdateClientParams): Promise<UpdateClientResponse> {
    return this.request<UpdateClientParams, UpdateClientResponse>('contato.atualizar', params);
  }

  //PRODUCTS
  searchProducts(params: SearchProductsParams): Promise<SearchProductsResponse> {
    return this.request<SearchProductsParams, SearchProductsResponse>('produtos.pesquisa', params);
  }

  getProduct(params: GetProductParams): Promise<GetProductResponse> {
    return this.request<GetProductParams, GetProductResponse>('produto.obter', params);
  }

  //ORDERS
  searchOrders(params: SearchOrdersParams): Promise<SearchOrdersResponse> {
    return this.request<SearchOrdersParams, SearchOrdersResponse>('pedidos.pesquisa', params);
  }

  getOrder(params: GetOrderParams): Promise<GetOrderResponse> {
    return this.request<GetOrderParams, GetOrderResponse>('pedido.obter', params);
  }
}

export { TinyERPClient };
