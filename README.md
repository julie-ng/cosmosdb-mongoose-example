# Azure Examples: Cosmos DB and Mongoose

[![Build Status](https://dev.azure.com/julie-msft/cosmosdb-mongoose-example/_apis/build/status/julie-ng.cosmosdb-mongoose-example?branchName=master)](https://dev.azure.com/julie-msft/cosmosdb-mongoose-example/_build/latest?definitionId=1&branchName=master)

This repository shows how to use [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/) with Node.js and the [MongoDB protocol](https://docs.microsoft.com/en-us/azure/cosmos-db/mongodb-introduction) with the popular [mongoose](https://www.npmjs.com/package/mongoose) npm package.

## Setup

3. Create your CosmosDB account and database per [Azure Docs* &rarr;](https://docs.microsoft.com/en-us/azure/cosmos-db/mongodb-mongoose)
4. Once your database is deployed, find your credentials under "Connection String"

5. Enable **Aggregation Pipeline** in your CosmosDB per [aka.ms/mongodb-aggregation](https://aka.ms/mongodb-aggregation) to use mongoose's rich API.

*TODO: replace this link because it's outdated

## Run Examples

This repository shows a few examples. When run, the results are outputted to the console:

```
[INFO] Connected (…)
[INFO] Number of Families: 4
[INFO] New Family saved (…)
[INFO] Number of Families: 5
[INFO] Disconnected, bye bye
```

Get the code to run these examples:

```bash
git clone https://github.com/julie-ng/cosmosdb-mongoose-example
```

### Configure Credentials

To test your connection locally, copy `.env.example` and rename it to `.env` filling in your credentials:

| Variable | Example | Reference in Azure Portal
|:--|:--|:--|
| `DB_HOST` | `exampledb.documents.azure.com` | "Host" |
| `DB_USER` | exampledb | "Username" |
| `DB_PASSWORD` |  | "Primary Password" |
| `DB_PORT` | 10255 | "Port". Default is 10255 |
| `DB_NAME` | testdb | You must first create this in the "Data Explorer" plane of your Cosmos DB.|

### Run the Code

Finally, install the dependencies and run all examples:

```bash
npm install
npm run examples
```
