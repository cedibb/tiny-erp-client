# TinyERP Client

This project provides a TypeScript client for interacting with the TinyERP API.

## Installation

```bash
npm i tinyerp-client
```

## Usage

```typescript
import { TinyERPClient } from 'tinyerp-client';

const client = new TinyERPClient('your-token-here');

// Get account info
const accountInfo = await client.getAccountInfo();

// Search for orders
const orders = await client.searchOrders({ ... });

// Search for clients
const clients = await client.searchClients({ ... });

// Get client information
const clientInfo = await client.getClient({ ... });

// Add a new client
const newClient = await client.addClient({ ... });

// Update an existing client
const updatedClient = await client.updateClient({ ... });
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
