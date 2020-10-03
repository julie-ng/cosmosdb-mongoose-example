# Azure Examples: Cosmos DB and Mongoose

[![Build Status](https://dev.azure.com/julie-msft/cosmosdb-mongoose-example/_apis/build/status/julie-ng.cosmosdb-mongoose-example?branchName=main)](https://dev.azure.com/julie-msft/cosmosdb-mongoose-example/_build/latest?definitionId=1&branchName=main)
[![Known Vulnerabilities](https://snyk.io/test/github/julie-ng/cosmosdb-mongoose-example/badge.svg)](https://snyk.io/test/github/julie-ng/cosmosdb-mongoose-example)

This repository shows how to use [Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/) with Node.js and the [MongoDB protocol](https://docs.microsoft.com/en-us/azure/cosmos-db/mongodb-introduction) with the popular [mongoose](https://www.npmjs.com/package/mongoose) npm package.

- create a Cosmos DB account and database using Azure CLI
- code examples with [mongoose](https://www.npmjs.com/package/mongoose) library
- [cost-optimized examples with mongoose discriminators](#azure-cost-optimization)

Example Demo Output:

```
$ npm run simple-examples

> node examples/simple/run.js

[INFO] Connected (…)
[INFO] Number of Families: 4
[INFO] New Family saved (…)
[INFO] Number of Families: 5
[INFO] Disconnected, bye bye
```

## Azure Cost Optimization

By default Mongoose creates a new colleciton per model. Because Azure charges you per collection, it makes sense to use [mongoose discriminators](https://mongoosejs.com/docs/discriminators.html) to leverage **schema inheritance** to optimize costs:

![](./images/cost-optimized-collections.svg)

Then you only **pay once for the `Base` model collection** instaead of doubling costs for `Family` and `Vacation` models.

For more details [see the cost optimized examples &rarr;](./examples/cost-optimized/)

# Usage

## Step 1 - Create a Cosmos DB (Azure CLI)


### Set Resource Names for Reuse

_N.B. Cosmos DB account names must be globally unique_

```bash
export COSMOS_DEMO_ACCOUNT_NAME=mycosmosdb-demo
export COSMOS_DEMO_RG_NAME=mycosmosdb-demo-rg
```

### Create Cosmos DB Account

- Free Tier: is limited to 1 account per subscription. Remove `--enable-free-tier` if required
- Enable [Aggregation Pipeline](https://aka.ms/mongodb-aggregation) for mongoose's rich API, so we can use e.g. `db.collection.countDocuments()` 

```bash
az cosmosdb create \
	--name $COSMOS_DEMO_ACCOUNT_NAME \
	--resource-group $COSMOS_DEMO_RG_NAME \
	--kind MongoDB \
	--capabilities EnableAggregationPipeline \
	--enable-free-tier true 	
```

### Create Database

We will name ours `mongodemo`

```bash
az cosmosdb mongodb database create \
  --resource-group $COSMOS_DEMO_RG_NAME \
  --account-name $COSMOS_DEMO_ACCOUNT_NAME \
  --name mongodemo
```

### Get Secret Key

Note: [jq](https://stedolan.github.io/jq/) is used to parse JSON output from Azure CLI and is [pre-installed](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu1804-README.md) on Azure DevOps hosted ubuntu agents.

```bash
az cosmosdb keys list \
	--name $COSMOS_DEMO_ACCOUNT_NAME \
	--resource-group $COSMOS_DEMO_RG_NAME \
	| jq '.primaryMasterKey' | sed 's/"//g'
```

## Step 2 - Get Code 

First you need the code in this repository

```
git clone https://github.com/julie-ng/cosmosdb-mongoose-example
```

## Step 3 - Configure Credentials

To test your connection locally, copy `.env.example` and rename it to `.env` filling in your configuration, for example

```
# .env
DB_HOST=mycosmosdb.documents.azure.com
DB_USER=mycosmosdb
DB_PASSWORD=myaccountprimarykey
DB_NAME=mydbname
DB_PORT=10255
```

## Final Step - run the examples


```bash
npm install
npm run simple-examples
npm run optimized-examples
```

# Misc.

## New to JavaScript?

Don't worry. These examples are easy to follow. But just in case, you need some guidance:

- **Promises and Async/Await**  
	To run multiple examples with a single connection, we have to add some extra Promises. See details at [`./examples/README.md` &rarr;](./examples/README.md)

- **ES6 Modules**  
	Compared to the official Microsoft documentation, each operation is split into its own file, e.g. `family.add.js`. 
	
	[Learn about ES6 modules here on MSN &rarr;](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

Have fun exploring the examples. If you have any questions, [open an issue &rarr;](./issues)