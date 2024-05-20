import { describe, expect, it, jest, beforeEach } from '@jest/globals';
import TinyERP from '../src/client';
import {
  SearchOrdersParams,
  OrderStatus,
  SearchCustomersParams,
  GetCustomerParams,
  AddCustomerParams,
  UpdateCustomerParams,
} from '../types';

describe('TinyERP', () => {
  const mockToken = 'testToken';
  const client = new TinyERP(mockToken);

  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockClear();
  });

  it('getAccountInfo', async () => {
    const mockResponse = { retorno: { status: 'Ok', data: {} } };
    (global.fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
    } as Response);

    const response = await client.getAccountInfo();
    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`https://api.tiny.com.br/api2/info.php?token=${mockToken}&formato=JSON`);
  });

  it('searchOrders', async () => {
    const mockResponse = { retorno: { status: 'Ok', data: {} } };
    const mockParams: SearchOrdersParams = {
      numero: '1234',
      cliente: 'Test Client',
      cpf_cnpj: '12345678901',
      dataInicial: '2022-01-01',
      dataFinal: '2022-12-31',
      situacao: OrderStatus.Aprovado,
      idVendedor: '1',
      nomeVendedor: 'Test Vendor',
      pagina: 1,
    };
    (global.fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
    } as Response);

    const response = await client.searchOrders(mockParams);
    expect(response).toEqual(mockResponse);
  });

  it('searchCustomers', async () => {
    const mockResponse = { retorno: { status: 'Ok', data: {} } };
    const mockParams: SearchCustomersParams = {
      pesquisa: 'test',
      cpf_cnpj: '12345678901',
      idVendedor: 1,
      nomeVendedor: 'Test Vendor',
      situacao: 'A',
      pagina: 1,
      dataCriacao: '2022-01-01',
      dataMinimaAtualizacao: '2022-01-01',
    };

    (global.fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
    } as Response);

    const response = await client.searchCustomers(mockParams);
    expect(response).toEqual(mockResponse);
  });

  it('getCustomer', async () => {
    const mockResponse = { retorno: { status: 'Ok', data: {} } };
    const mockParams: GetCustomerParams = {
      id: '1',
    };

    (global.fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
    } as Response);

    const response = await client.getCustomer(mockParams);
    expect(response).toEqual(mockResponse);
  });

  it('addCustomer', async () => {
    const mockResponse = { retorno: { status: 'Ok', data: {} } };
    const mockParams: AddCustomerParams = {
      contato: {
        sequencia: '1',
        codigo: 'test',
        nome: 'Test Client',
        tipo_pessoa: 'F',
        cpf_cnpj: '12345678901',
        endereco: 'Test Street',
        numero: '1',
        complemento: 'Test Complement',
        bairro: 'Test Neighborhood',
        cep: '12345678',
        cidade: 'Test City',
        uf: 'TS',
        contatos: 'Test Contact',
        fone: '123456789',
        email: 'test@test.com',
        id_vendedor: '1',
        situacao: 'A',
        obs: 'Test Observation',
        contribuinte: 'Test Contributor',
        ie: '123456789',
        rg: '123456789',
        im: '123456789',
        pais: 'Test Country',
        fax: '123456789',
        celular: '123456789',
      },
    };

    (global.fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
    } as Response);

    const response = await client.addCustomer(mockParams);
    expect(response).toEqual(mockResponse);
  });

  it('updateCustomer', async () => {
    const mockResponse = { retorno: { status: 'Ok', data: {} } };
    const mockParams: UpdateCustomerParams = {
      contato: {
        sequencia: 1,
        nome: 'Updated Test Client',
        situacao: 'A',
      },
    };
    (global.fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
    } as Response);

    const response = await client.updateCustomer(mockParams);
    expect(response).toEqual(mockResponse);
  });

  it('handles request error', async () => {
    const mockError = new Error('Test error');
    (global.fetch as jest.MockedFunction<typeof fetch>).mockRejectedValueOnce(mockError);

    await expect(client.getAccountInfo()).rejects.toThrow(mockError);
  });

  it('handles error status in response body', async () => {
    const mockResponse = {
      retorno: {
        status: 'Erro',
        erros: [
          {
            erro: 'Example Error 1',
          },
          {
            erro: 'Example Error 2',
          },
        ],
      },
    };

    (global.fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: true, // This indicates a 200 status code
      json: () => Promise.resolve(mockResponse),
    } as Response);

    await expect(client.getAccountInfo()).rejects.toThrow('Example Error 1, Example Error 2');
  });
});
