# Connect/Disconnect to CosmosDB

Don't be intimidated by the code in this folder. Mongoose code is pretty simple - see below.

The code in the files are a bit more verbose, because [julie-ng](https://github.com/julie-ng) is pedantic:

- setup own connection string so we could inject database name into it. CosmosDB has accounts, databases _and_ collections 🤯
- only open a connection to CosmosDB is one doesn't already exist
