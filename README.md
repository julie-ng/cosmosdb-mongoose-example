# Azure Examples: Cosmos DB and Mongoose

This repository shows how to use [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/) with Node.js using the [MongoDB protocol](https://docs.microsoft.com/en-us/azure/cosmos-db/mongodb-introduction) with [mongoose](https://www.npmjs.com/package/mongoose) npm package.

## Setup

1. Clone this repository

	```bash
	git clone https://github.com/julie-ng/cosmosdb-mongoose-example
	```

2. Install the dependencies

	```bash
	npm install
	```

3. Create your CosmosDB account and database per [Azure Docs* &rarr;](https://docs.microsoft.com/en-us/azure/cosmos-db/mongodb-mongoose)
4. Once your database is deployed, find your credentials under "Connection String"

*TODO: replace this link

## Examples

and then run an example, e.g. [examples/connect.js](./examples/connect.js)

```bash
npm run connect
```

which should output something like this:

```
[Connected] to test-cosmos-mongoapi.documents.azure.com
[Disconnected] bye bye
```

# Config Environment Variables

Authenticating to Azure Cosmos DB is done via environment variables. To test your connection locally, copy `.env.example` and rename it to `.env` filling in your credentials:

| Variable | Example | Reference in Azure Portal
|:--|:--|:--|
| `DB_HOST` | `exampledb.documents.azure.com` | "Host" |
| `DB_USER` | exampledb | "Username" |
| `DB_PASSWORD` |  | "Primary Password" |
| `DB_PORT` | 10255 | "Port". Default is 10255 |
| `DB_NAME` | testdb | You must first create this in the "Data Explorer" plane of your Cosmos DB.|