import { BaseResponse } from './common';

export type ProductStatus = 'A' | 'I' | 'E';
export type ProductVariationType = 'N' | 'P' | 'V';

interface EcommerceMapping {
  idEcommerce: number;
  skuMapeamento: string;
  idMapeamento: number;
  preco?: number;
  preco_promocional?: number;
}

interface KitItem {
  id_produto: number;
  quantidade: number;
}

interface ExternalImage {
  url: string;
}

interface Attachment {
  anexo: string;
}

interface Variation {
  id?: number;
  codigo?: string;
  preco?: number;
  grade?: string[];
  mapeamentos?: EcommerceMapping[];
}

export interface Product {
  id: number;
  nome: string;
  codigo?: string;
  preco: number;
  preco_promocional: number;
  preco_custo?: number;
  preco_custo_medio?: number;
  unidade?: string;
  gtin?: string;
  tipoVariacao: ProductVariationType;
  localizacao?: string;
  situacao?: ProductStatus;
  data_criacao?: string;
}

interface DetailedProduct {
  id?: number;
  data_criacao?: string;
  nome?: string;
  codigo?: string;
  unidade?: string;
  preco?: number;
  preco_promocional?: number;
  ncm?: string;
  origem?: string;
  gtin?: string;
  gtin_embalagem?: string;
  localizacao?: string;
  peso_liquido?: number;
  peso_bruto?: number;
  estoque_minimo?: number;
  estoque_maximo?: number;
  id_fornecedor?: number;
  codigo_fornecedor?: string;
  codigo_pelo_fornecedor?: string;
  unidade_por_caixa?: string;
  preco_custo?: number;
  preco_custo_medio?: number;
  situacao?: ProductStatus;
  tipo?: string;
  classe_ipi?: string;
  valor_ipi_fixo?: number;
  cod_lista_servicos?: string;
  descricao_complementar?: string;
  obs?: string;
  garantia?: string;
  cest?: string;
  tipoVariacao: ProductVariationType;
  variacoes?: Variation[];
  idProdutoPai?: number;
  sob_encomenda: string;
  dias_preparacao?: number;
  grade?: string[];
  marca?: string;
  tipoEmbalagem?: number;
  alturaEmbalagem?: number;
  larguraEmbalagem?: number;
  comprimentoEmbalagem?: number;
  diametroEmbalagem?: number;
  categoria?: string;
  anexos?: Attachment[];
  imagens_externas?: ExternalImage[];
  classe_produto: string;
  kit?: KitItem[];
  seo_title?: string;
  seo_keywords?: string;
  link_video?: string;
  seo_description?: string;
  slug?: string;
  mapeamentos?: EcommerceMapping[];
}

export interface SearchProductsParams {
  pesquisa: string;
  idTag?: number;
  idListaPreco?: number;
  pagina?: number;
  gtin?: string;
  situacao?: ProductStatus;
  dataCriacao?: string;
}

export interface GetProductParams {
  id: number;
}

export interface SearchProductsResponse extends BaseResponse {
  retorno: BaseResponse['retorno'] & {
    produtos?: Product[];
  };
}

export interface GetProductResponse {
  retorno: BaseResponse['retorno'] & {
    produto?: DetailedProduct;
  };
}
