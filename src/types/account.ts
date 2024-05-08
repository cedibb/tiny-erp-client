import { BaseParams, BaseResponse } from './common';

export enum TaxRegimes {
  SimplesNacional = 'Simples Nacional',
  SimplesNacionalExcessoSublimiteReceitaBruta = 'Simples Nacional - excesso de sublimite de receita bruta',
  RegimeNormal = 'Regime Normal',
}

export interface Account {
  razao_social: string;
  cnpj_cpf: string;
  fantasia: string;
  endereco: string;
  numero: string;
  bairro: string;
  complemento: string;
  cidade: string;
  estado: string;
  cep: string;
  fone: string;
  email: string;
  inscricao_estadual: string;
  regime_tributario: TaxRegimes;
}

export interface AccountInfoParams extends BaseParams {}

export interface AccountInfoResponse extends BaseResponse {
  retorno: BaseResponse['retorno'] & {
    conta?: Account;
  };
}
