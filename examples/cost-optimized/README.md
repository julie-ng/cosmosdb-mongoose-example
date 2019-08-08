
## Azure Cost Optimization

By default Mongoose creates a new colleciton per model. Because Azure charges you per collection, it makes sense to use [mongoose discriminators](https://mongoosejs.com/docs/discriminators.html) to leverage **schema inheritance** to optimize costs:

![](./../../images/cost-optimized-collections.svg)

Then you only **pay once for the `Base` model collection** instaead of doubling costs for `Family` and `Vacation` models.

### Configure Schema Inheritance

This creates just 1 collection in Cosmos DB called `alldata`

```javascript
const config = {
	discriminatorKey: '_type',	
	collection: 'alldata'
}
```

### Define Base Schema

We create a base model to use the basic schema defined above.

```javascript
const baseModel = mongoose.model('Common', new mongoose.Schema({}, config))
module.exports = baseModel
```

### Inherit from Base

Then subsequent models inherit from the base mode.

```javascript
const baseModel = require('./base.model')
const Family = baseModel.discriminator('FamilyType', new mongoose.Schema({...}, config))
```

Note: the `{...}` above refers to the [family schema](./family.model.js) object but excluded for brevity.

The `FamilyType` appears in as a value in the `_type` key of your documents. So if you query your database, you will find, for example:

```javascript
{
	"_id" : ObjectId("5d4be85fe5adf122e4bb34ec"),
	"_type" : "VacationDestinationsType",
	"name" : "Honolulu",
	"country" : "USA",
	"__v" : 0
}
```

## References

For more details [see the Azure docs &rarr;](https://docs.microsoft.com/en-us/azure/cosmos-db/mongodb-mongoose#caveats-to-using-mongoose-with-cosmos-db)