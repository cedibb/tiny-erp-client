import type {
  BaseResponse,
  GetOrderParams,
  GetOrderResponse,
  SearchOrdersParams,
  SearchOrdersResponse,
  AccountInfoResponse,
  SearchCustomersParams,
  GetCustomerParams,
  AddCustomerParams,
  UpdateCustomerParams,
  SearchCustomersResponse,
  GetCustomerResponse,
  AddCustomerResponse,
  UpdateCustomerResponse,
  SearchProductsParams,
  GetProductParams,
  SearchProductsResponse,
  GetProductResponse,
  GetInvoiceParams,
  GetInvoiceResponse,
  SearchInvoicesParams,
  SearchInvoicesResponse,
  GetProductStockParams,
  GetProductStockResponse,
  GetStockUpdatesParams,
  GetStockUpdatesResponse,
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

  //CUSTOMERS
  searchCustomers(params: SearchCustomersParams): Promise<SearchCustomersResponse> {
    return this.request<SearchCustomersParams, SearchCustomersResponse>('contatos.pesquisa', params);
  }

  getCustomer(params: GetCustomerParams): Promise<GetCustomerResponse> {
    return this.request<GetCustomerParams, GetCustomerResponse>('contato.obter', params);
  }

  addCustomer(params: AddCustomerParams): Promise<AddCustomerResponse> {
    return this.request<AddCustomerParams, AddCustomerResponse>('contato.adicionar', params);
  }

  updateCustomer(params: UpdateCustomerParams): Promise<UpdateCustomerResponse> {
    return this.request<UpdateCustomerParams, UpdateCustomerResponse>('contato.atualizar', params);
  }

  //PRODUCTS
  searchProducts(params: SearchProductsParams): Promise<SearchProductsResponse> {
    return this.request<SearchProductsParams, SearchProductsResponse>('produtos.pesquisa', params);
  }

  getProduct(params: GetProductParams): Promise<GetProductResponse> {
    return this.request<GetProductParams, GetProductResponse>('produto.obter', params);
  }

  getProductStock(params: GetProductStockParams): Promise<GetProductStockResponse> {
    return this.request<GetProductStockParams, GetProductStockResponse>('produto.obter.estoque', params);
  }

  getStockUpdates(params: GetStockUpdatesParams): Promise<GetStockUpdatesResponse> {
    return this.request<GetStockUpdatesParams, GetStockUpdatesResponse>('lista.atualizacoes.estoque', params);
  }

  //ORDERS
  searchOrders(params: SearchOrdersParams): Promise<SearchOrdersResponse> {
    return this.request<SearchOrdersParams, SearchOrdersResponse>('pedidos.pesquisa', params);
  }

  getOrder(params: GetOrderParams): Promise<GetOrderResponse> {
    return this.request<GetOrderParams, GetOrderResponse>('pedido.obter', params);
  }

  //INVOICES
  searchInvoices(params: SearchInvoicesParams): Promise<SearchInvoicesResponse> {
    return this.request<SearchInvoicesParams, SearchInvoicesResponse>('notas.fiscais.pesquisa', params);
  }

  getInvoice(params: GetInvoiceParams): Promise<GetInvoiceResponse> {
    return this.request<GetInvoiceParams, GetInvoiceResponse>('nota.fiscal.obter', params);
  }
}

export { TinyERPClient };
