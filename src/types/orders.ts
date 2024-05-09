import { BaseResponse } from './common';

enum OrderStatus {
  EmAberto = 'aberto',
  Aprovado = 'aprovado',
  PreparandoEnvio = 'preparando_envio',
  Faturado = 'faturado',
  ProntoParaEnvio = 'pronto_envio',
  Enviado = 'enviado',
  Entregue = 'entregue',
  NaoEntregue = 'nao_entregue',
  Cancelado = 'cancelado',
}

export interface SearchOrdersParams {
  numero?: string;
  cliente?: string;
  cpf_cnpj?: string;
  dataInicial?: string;
  dataFinal?: string;
  dataAtualizacao?: string;
  situacao?: OrderStatus;
  numeroEcommerce?: string;
  idVendedor?: string;
  nomeVendedor?: string;
  marcador?: string;
  dataInicialOcorrencia?: string;
  dataFinalOcorrencia?: string;
  situacaoOcorrencia?: OrderStatus;
  pagina?: number;
  sort?: string;
}

export interface Order {
  id: number;
  numero: number;
  numero_ecommerce: string;
  data_pedido: string;
  data_prevista: string;
  nome: string;
  valor: string;
  id_vendedor: string;
  nome_vendedor: string;
  situacao: OrderStatus;
  codigo_rastreamento: string;
}

export interface SearchOrdersResponse extends BaseResponse {
  retorno: BaseResponse['retorno'] & {
    pedidos?: { pedido: Order }[];
  };
}
