import { BaseResponse } from './common';

export enum OrderStatus {
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

enum Country {
  'AFEGANISTAO' = 132,
  'ALBANIA, REPUBLICA DA' = 175,
  'ALEMANHA' = 230,
  'BURKINA FASO' = 310,
  'ANDORRA' = 370,
  'ANGOLA' = 400,
  'ANGUILLA' = 418,
  'ANTIGUA E BARBUDA' = 434,
  'ANTILHAS HOLANDESAS' = 477,
  'ARABIA SAUDITA' = 531,
  'ARGELIA' = 590,
  'ARGENTINA' = 639,
  'ARMENIA, REPUBLICA DA' = 647,
  'ARUBA' = 655,
  'AUSTRALIA' = 698,
  'AUSTRIA' = 728,
  'AZERBAIJAO, REPUBLICA DO' = 736,
  'BAHAMAS, ILHAS' = 779,
  'BAHREIN, ILHAS' = 809,
  'BANGLADESH' = 817,
  'BARBADOS' = 833,
  'BELARUS, REPUBLICA DA' = 850,
  'BELGICA' = 876,
  'BELIZE' = 884,
  'BERMUDAS' = 906,
  'MIANMAR (BIRMANIA)' = 930,
  'BOLIVIA' = 973,
  'BOSNIA-HERZEGOVINA (REPUBLICA DA)' = 981,
  'BOTSUANA' = 1015,
  'BRASIL' = 1058,
  'BRUNEI' = 1082,
  'BULGARIA, REPUBLICA DA' = 1112,
  'BURUNDI' = 1155,
  'BUTAO' = 1198,
  'CABO VERDE, REPUBLICA DE' = 1279,
  'CAYMAN, ILHAS' = 1376,
  'CAMBOJA' = 1414,
  'CAMAROES' = 1457,
  'CANADA' = 1490,
  'GUERNSEY, ILHA DO CANAL (INCLUI ALDERNEY E SARK)' = 1504,
  'JERSEY, ILHA DO CANAL' = 1508,
  'CANARIAS, ILHAS' = 1511,
  'CAZAQUISTAO, REPUBLICA DO' = 1538,
  'CATAR' = 1546,
  'CHILE' = 1589,
  'CHINA, REPUBLICA POPULAR' = 1600,
  'FORMOSA (TAIWAN)' = 1619,
  'CHIPRE' = 1635,
  'COCOS(KEELING),ILHAS' = 1651,
  'COLOMBIA' = 1694,
  'COMORES, ILHAS' = 1732,
  'CONGO' = 1775,
  'COOK, ILHAS' = 1830,
  'COREIA, REP.POP.DEMOCRATICA' = 1872,
  'COREIA, REPUBLICA DA' = 1902,
  'COSTA DO MARFIM' = 1937,
  'CROACIA (REPUBLICA DA)' = 1953,
  'COSTA RICA' = 1961,
  'COVEITE' = 1988,
  'CUBA' = 1996,
  'BENIN' = 2291,
  'DINAMARCA' = 2321,
  'DOMINICA,ILHA' = 2356,
  'EQUADOR' = 2399,
  'EGITO' = 2402,
  'ERITREIA' = 2437,
  'EMIRADOS ARABES UNIDOS' = 2445,
  'ESPANHA' = 2453,
  'ESLOVENIA, REPUBLICA DA' = 2461,
  'ESLOVACA, REPUBLICA' = 2470,
  'ESTADOS UNIDOS' = 2496,
  'ESTONIA, REPUBLICA DA' = 2518,
  'ETIOPIA' = 2534,
  'FALKLAND (ILHAS MALVINAS)' = 2550,
  'FEROE, ILHAS' = 2593,
  'FILIPINAS' = 2674,
  'FINLANDIA' = 2712,
  'FRANCA' = 2755,
  'GABAO' = 2810,
  'GAMBIA' = 2852,
  'GANA' = 2895,
  'GEORGIA, REPUBLICA DA' = 2917,
  'GIBRALTAR' = 2933,
  'GRANADA' = 2976,
  'GRECIA' = 3018,
  'GROENLANDIA' = 3050,
  'GUADALUPE' = 3093,
  'GUAM' = 3131,
  'GUATEMALA' = 3174,
  'GUIANA FRANCESA' = 3255,
  'GUINE' = 3298,
  'GUINE-EQUATORIAL' = 3310,
  'GUINE-BISSAU' = 3344,
  'GUIANA' = 3379,
  'HAITI' = 3417,
  'HONDURAS' = 3450,
  'HONG KONG' = 3514,
  'HUNGRIA, REPUBLICA DA' = 3557,
  'IEMEN' = 3573,
  'MAN, ILHA DE' = 3595,
  'INDIA' = 3611,
  'INDONESIA' = 3654,
  'IRAQUE' = 3697,
  'IRA, REPUBLICA ISLAMICA DO' = 3727,
  'IRLANDA' = 3751,
  'ISLANDIA' = 3794,
  'ISRAEL' = 3832,
  'ITALIA' = 3867,
  'JAMAICA' = 3913,
  'JOHNSTON, ILHAS' = 3964,
  'JAPAO' = 3999,
  'JORDANIA' = 4030,
  'KIRIBATI' = 4111,
  'LAOS, REP.POP.DEMOCR.DO' = 4200,
  'LEBUAN,ILHAS' = 4235,
  'LESOTO' = 4260,
  'LETONIA, REPUBLICA DA' = 4278,
  'LIBANO' = 4316,
  'LIBERIA' = 4340,
  'LIBIA' = 4383,
  'LIECHTENSTEIN' = 4405,
  'LITUANIA, REPUBLICA DA' = 4421,
  'LUXEMBURGO' = 4456,
  'MACAU' = 4472,
  'MACEDONIA, ANT.REP.IUGOSLAVA' = 4499,
  'MADAGASCAR' = 4502,
  'MADEIRA, ILHA DA' = 4525,
  'MALASIA' = 4553,
  'MALAVI' = 4588,
  'MALDIVAS' = 4618,
  'MALI' = 4642,
  'MALTA' = 4677,
  'MARIANAS DO NORTE' = 4723,
  'MARROCOS' = 4740,
  'MARSHALL,ILHAS' = 4766,
  'MARTINICA' = 4774,
  'MAURICIO' = 4855,
  'MAURITANIA' = 4880,
  'MAYOTTE (ILHAS FRANCESAS)' = 4885,
  'MIDWAY, ILHAS' = 4901,
  'MEXICO' = 4936,
  'MOLDAVIA, REPUBLICA DA' = 4944,
  'MONACO' = 4952,
  'MONGOLIA' = 4979,
  'MONTENEGRO' = 4985,
  'MICRONESIA' = 4995,
  'MONTSERRAT,ILHAS' = 5010,
  'MOCAMBIQUE' = 5053,
  'NAMIBIA' = 5070,
  'NAURU' = 5088,
  'CHRISTMAS,ILHA (NAVIDAD)' = 5118,
  'NEPAL' = 5177,
  'NICARAGUA' = 5215,
  'NIGER' = 5258,
  'NIGERIA' = 5282,
  'NIUE,ILHA' = 5312,
  'NORFOLK,ILHA' = 5355,
  'NORUEGA' = 5380,
  'NOVA CALEDONIA' = 5428,
  'PAPUA NOVA GUINE' = 5452,
  'NOVA ZELANDIA' = 5487,
  'VANUATU' = 5517,
  'OMA' = 5568,
  'PACIFICO,ILHAS DO (POSSESSAO DOS EUA)' = 5665,
  'PAISES BAIXOS (HOLANDA)' = 5738,
  'PALAU' = 5754,
  'PAQUISTAO' = 5762,
  'PANAMA' = 5800,
  'PARAGUAI' = 5860,
  'PERU' = 5894,
  'PITCAIRN,ILHA' = 5932,
  'POLINESIA FRANCESA' = 5991,
  'POLONIA, REPUBLICA DA' = 6033,
  'PORTUGAL' = 6076,
  'PORTO RICO' = 6114,
  'QUENIA' = 6238,
  'QUIRGUIZ, REPUBLICA' = 6254,
  'REINO UNIDO' = 6289,
  'REPUBLICA CENTRO-AFRICANA' = 6408,
  'REPUBLICA DOMINICANA' = 6475,
  'REUNIAO, ILHA' = 6602,
  'ZIMBABUE' = 6653,
  'ROMENIA' = 6700,
  'RUANDA' = 6750,
  'RUSSIA, FEDERACAO DA' = 6769,
  'SALOMAO, ILHAS' = 6777,
  'SAINT KITTS E NEVIS' = 6781,
  'SAARA OCIDENTAL' = 6858,
  'EL SALVADOR' = 6874,
  'SAMOA' = 6904,
  'SAMOA AMERICANA' = 6912,
  'SAO CRISTOVAO E NEVES,ILHAS' = 6955,
  'SAN MARINO' = 6971,
  'SAO PEDRO E MIQUELON' = 7005,
  'SAO VICENTE E GRANADINAS' = 7056,
  'SANTA HELENA' = 7102,
  'SANTA LUCIA' = 7153,
  'SENEGAL' = 7285,
  'SEYCHELLES' = 7315,
  'SERRA LEOA' = 7358,
  'SERVIA' = 7370,
  'CINGAPURA' = 7412,
  'SIRIA, REPUBLICA ARABE DA' = 7447,
  'SOMALIA' = 7480,
  'SRI LANKA' = 7501,
  'SUAZILANDIA' = 7544,
  'AFRICA DO SUL' = 7560,
  'SUDAO' = 7595,
  'SUECIA' = 7641,
  'SUICA' = 7676,
  'SURINAME' = 7706,
  'TADJIQUISTAO, REPUBLICA DO' = 7722,
  'TAILANDIA' = 7765,
  'TANZANIA, REP.UNIDA DA' = 7803,
  'TERRITORIO BRIT.OC.INDICO' = 7820,
  'DJIBUTI' = 7838,
  'CHADE' = 7889,
  'TCHECA, REPUBLICA' = 7919,
  'TIMOR LESTE' = 7951,
  'TOGO' = 8001,
  'TOQUELAU,ILHAS' = 8052,
  'TONGA' = 8109,
  'TRINIDAD E TOBAGO' = 8150,
  'TUNISIA' = 8206,
  'TURCAS E CAICOS,ILHAS' = 8230,
  'TURCOMENISTAO, REPUBLICA DO' = 8249,
  'TURQUIA' = 8273,
  'TUVALU' = 8281,
  'UCRANIA' = 8311,
  'UGANDA' = 8338,
  'URUGUAI' = 8451,
  'UZBEQUISTAO, REPUBLICA DO' = 8478,
  'VATICANO, EST.DA CIDADE DO' = 8486,
  'VENEZUELA' = 8508,
  'VIETNA' = 8583,
  'VIRGENS,ILHAS (BRITANICAS)' = 8630,
  'VIRGENS,ILHAS (E.U.A.)' = 8664,
  'FIJI' = 8702,
  'WAKE, ILHA' = 8737,
  'CONGO, REPUBLICA DEMOCRATICA DO' = 8885,
  'ZAMBIA' = 8907,
}

enum PaymentMethods {
  MULTIPLE = 'multiplas',
  CASH = 'dinheiro',
  CREDIT = 'credito',
  DEBIT = 'debito',
  TICKET = 'boleto',
  DEPOSIT = 'deposito',
  CHECK = 'cheque',
  INSTALLMENTS = 'crediario',
  COMMERCIAL_DUPLICATE = 'duplicata_mercantil',
}

enum FreightContracting {
  REMITTER_CIF = 'R',
  RECIPIENT_FOB = 'D',
  THIRD_PARTY = 'T',
  REMITTER_SELF_TRANSPORT = '3',
  RECIPIENT_SELF_TRANSPORT = '4',
  NO_TRANSPORT = 'S',
}

enum ShippingMethods {
  CORREIOS = 'C',
  TRANSPORTADORA = 'T',
  MERCADO_ENVIOS = 'M',
  CORREIOS_E_FULFILLMENT = 'E',
  B2W_ENTREGA = 'B',
  CUSTOMIZADA = 'X',
  CONECTALA_ETIQUETAS = 'D',
  JADLOG = 'J',
  SEM_FRETE = 'S',
  TOTAL_EXPRESS = 'TOTALEXPRESS',
  OLIST = 'OLIST',
  GATEWAY_LOGISTICO = 'GATEWAY',
  MAGALU_ENTREGAS = 'MAGALU_ENTREGAS',
  MAGALU_FULFILLMENT = 'MAGALU_FULFILLMENT',
  SHOPEE_ENVIOS = 'SHOPEE_ENVIOS',
  NETSHOES_ENTREGAS = 'NS_ENTREGAS',
  VIA_VAREJO_ENVVIAS = 'VIAVAREJO_ENVVIAS',
  ALIEXPRESS_ENVIOS = 'ALI_ENVIOS',
  MADEIRA_ENVIOS = 'MADEIRA_ENVIOS',
  LOGGI = 'LOGGI',
  AMAZON_DBA = 'AMAZON_DBA',
  MAGALU_ENTREGAS_POR_NETSHOES = 'NS_MAGALU_ENTREGAS',
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

export interface GetOrderParams {
  id: number;
}

interface DetailedOrder {
  id?: number;
  numero?: number;
  numero_ecommerce?: string;
  data_pedido?: string;
  data_prevista?: string;
  data_faturamento?: string;
  data_envio?: string;
  data_entrega?: string;
  id_lista_preco?: string;
  descricao_lista_preco?: string;
  cliente: Customer;
  endereco_entrega?: DeliveryAddress;
  itens: Array<{ item: Item }>;
  condicao_pagamento?: string;
  forma_pagamento: PaymentMethods;
  meio_pagamento?: string;
  parcelas?: Array<{ parcela: Installment }>;
  marcadores?: Array<{ marcador: Marker }>;
  nome_transportador?: string;
  frete_por_conta?: FreightContracting;
  forma_frete?: string;
  valor_frete?: number;
  valor_desconto?: number;
  outras_despesas?: number;
  total_produtos?: number;
  total_pedido?: number;
  situacao?: OrderStatus;
  numero_ordem_compra?: string;
  id_vendedor?: number;
  nome_vendedor?: string;
  obs?: string;
  obs_interna?: string;
  codigo_rastreamento?: string;
  url_rastreamento?: string;
  id_nota_fiscal?: number;
  deposito?: string;
  ecommerce?: Ecommerce;
  forma_envio?: ShippingMethods;
  intermediador?: Intermediary;
  id_natureza_operacao?: string;
}

interface Customer {
  codigo?: string;
  nome: string;
  nome_fantasia?: string;
  tipo_pessoa?: string;
  cpf_cnpj?: string;
  ie?: string;
  rg?: string;
  endereco?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cep?: string;
  cidade?: string;
  uf?: string;
  pais?: Country;
  fone?: string;
  email?: string;
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

interface Item {
  id_produto?: number;
  codigo?: string;
  descricao: string;
  unidade: string;
  quantidade: number;
  valor_unitario: number;
  info_adicional?: string;
}

interface Installment {
  dias?: number;
  data?: string;
  valor?: number;
  obs?: string;
  forma_pagamento: string;
  meio_pagamento?: string;
}

interface Marker {
  id?: number;
  descricao?: string;
  cor?: string;
}

interface Ecommerce {
  id?: number;
  numeroPedidoEcommerce?: string;
  numeroPedidoCanalVenda?: string;
  nomeEcommerce?: string;
  canalVenda?: string;
}

interface Intermediary {
  nome: string;
  cnpj: string;
  cnpjPagamento?: string;
}

export interface SearchOrdersResponse {
  retorno: BaseResponse['retorno'] & {
    pedidos?: { pedido: Order }[];
  };
}

export interface GetOrderResponse {
  retorno: BaseResponse['retorno'] & {
    order?: DetailedOrder;
  };
}
