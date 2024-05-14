import { BaseResponse } from './common';

export interface SearchInvoicesParams {
  tipoNota?: string;
  numero?: string;
  cliente?: string;
  cpf_cnpj?: string;
  dataInicial?: string;
  dataFinal?: string;
  situacao?: string;
  numeroEcommerce?: string;
  idVendedor?: number;
  idFormaEnvio?: number;
  nomeVendedor?: string;
  pagina?: number;
}

export interface GetInvoiceParams {
  id: string;
}

interface DeliveryAddress {
  tipo_pessoa?: string;
  cpf_cnpj?: string;
  endereco?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cep?: string;
  cidade?: string;
  uf?: string;
  fone?: string;
  nome_destinatario?: string;
  ie?: string;
}

interface Carrier {
  nome: string;
}

interface Invoice {
  id?: number;
  tipo?: string;
  serie?: number;
  numero?: number;
  numero_ecommerce?: string;
  data_emissao?: string;
  nome?: string;
  cliente?: Customer;
  endereco_entrega?: DeliveryAddress;
  transportador?: Carrier;
  valor?: number;
  valor_produtos?: number;
  valor_frete?: number;
  id_vendedor?: number;
  nome_vendedor?: string;
  situacao?: number;
  descricao_situacao?: string;
  chave_acesso?: string;
  id_forma_frete?: string;
  id_forma_envio?: string;
  codigo_rastreamento?: string;
  url_rastreamento?: string;
}

export interface SearchInvoicesResponse {
  retorno: BaseResponse['retorno'] & {
    notas_fiscais?: Invoice[];
  };
}

export interface GetInvoiceResponse {
  retorno: BaseResponse['retorno'] & {
    nota_fiscal: DetailedInvoice;
  };
}

interface Customer {
  nome: string;
  tipo_pessoa?: string;
  cpf_cnpj?: string;
  ie?: string;
  endereco?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cep?: string;
  cidade?: string;
  uf?: string;
  fone?: string;
  email?: string;
}

interface Item {
  id_produto?: number;
  codigo?: string;
  descricao: string;
  unidade: string;
  ncm: string;
  quantidade: number;
  valor_unitario: number;
  valor_total: number;
  cfop: string;
  natureza: string;
}

interface ShippingMethod {
  id: number;
  description: string;
}

interface FreightMethod {
  id: number;
  description: string;
}

interface Installment {
  days?: number;
  date?: string; // or Date if you prefer
  amount?: number;
  notes?: string;
  paymentMethod: string;
  paymentMeans?: string;
}

interface Marker {
  id?: number;
  descricao?: string;
  cor?: string;
}

interface Intermediador {
  nome: string;
  cnpj: string;
  cnpjPagamento?: string;
}

interface DetailedInvoice {
  id: number;
  tipo_nota: string;
  natureza_operacao: string;
  regime_tributario: number;
  finalidade: number;
  serie: number;
  numero: number;
  numero_ecommerce: string;
  data_emissao?: string; // or Date if you prefer
  data_saida?: string; // or Date if you prefer
  hora_saida?: string;
  cliente?: Customer;
  endereco_entrega?: DeliveryAddress;
  itens: Item[];
  base_icms?: number;
  valor_icms?: number;
  base_icms_st?: number;
  valor_icms_st?: number;
  valor_servicos?: number;
  valor_produtos?: number;
  valor_frete?: number;
  valor_seguro?: number;
  valor_outras?: number;
  valor_ipi?: number;
  valor_issqn?: number;
  valor_nota?: number;
  valor_desconto?: number;
  valor_faturado?: number;
  frete_por_conta?: string;
  transportador?: Carrier;
  placa?: string;
  uf_placa?: string;
  quantidade_volumes?: number;
  especie_volumes?: string;
  marca_volumes?: string;
  numero_volumes?: string;
  peso_bruto?: number;
  peso_liquido?: number;
  forma_envio?: ShippingMethod;
  forma_frete?: FreightMethod;
  codigo_rastreamento?: string;
  url_rastreamento?: string;
  forma_pagamento: string;
  meio_pagamento?: string;
  condicao_pagamento?: string;
  parcelas?: Installment[];
  id_venda?: number;
  id_vendedor?: number;
  nome_vendedor?: string;
  situacao?: number;
  descricao_situacao?: string;
  obs?: string;
  chave_acesso?: string;
  marcadores?: Marker[];
  intermediador?: Intermediador;
}
