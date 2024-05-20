# TinyERP Client

This project provides a TypeScript client for interacting with the TinyERP API.

## Installation

```bash
npm i tinyerp-client
```

## Usage

```typescript
const { TinyERPClient } = require('tiny-erp-client');

// Initialize the client with your API token
const client = new TinyERPClient('your_api_token_here');

// Example: Retrieve account information
client.getAccountInfo().then((response) => {
  console.log('Account Information:', response);
});

// Example: Search for customers

client.searchCustomers({ pesquisa: 'John Doe' }).then((response) => {
  console.log('Search Results:', response);
});

// Example: Get detailed information about a customer

client.getCustomer({ id: '123456' }).then((response) => {
  console.log('Customer Details:', response);
});
```

## Service Implementation Progress

- ~~Account Data (Dados da conta)~~

- ~~Clients and Suppliers (Clientes e Fornecedores)~~

- Products (Produtos)

- Product Tag Groups (Grupos de Tags de Produtos)

- Product Tags (Tags de Produtos)

- Price Lists (Listas de Preços)

- Sellers (Vendedores)

- CRM

- Accounts Receivable (Contas a receber)

- Accounts Payable (Contas a pagar)

- Webhooks

- Shipping (Fretes)

- Subscription (Inscrição)

- Orders (Pedidos)

- POS (PDV)

- Invoices (Notas Fiscais)

- Expeditions (Expedições)

- Service Invoices (Notas Fiscais de Serviço)

- Contracts (Contratos)

- Separation (Separação)

- Linked Tables (Tabelas Vinculadas)

- Customer Service (Atendimento)

- Location (Localização)

## References

For more information, please refer to the [official TinyERP API documentation](https://tiny.com.br/api-docs/api).
