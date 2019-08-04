# New to JavaScript? What the Async/Await?!

JavaScript is weird. But we all love it anyway. In order to have code like this...

```
async function runTests () {
  await countModels()
  await addModel()
  await countModels()
}
```

We have a couple of practices:

- each example is separated into own file
- each example returns a `new Promise` so we can use the `await` feature
- each example exported function has a name, e.g. `countFamilies` to avoid debugging anonymous functions in your stack trace

That's why this code:

```javascript
family.save((err, res) => {
  if (err) console.error(err)
  if (res) console.log('[INFO] New Family saved', JSON.stringify(res))
})
```

ends up like this:

```javascript
function addFamily () {
  return new Promise((resolve, reject) => {
    family.save((err, res) => {
      if (err) reject(err)
      if (res) {
        console.log('[INFO] New Family saved', JSON.stringify(res))
        resolve(res)
      }
    })
  })
}
```

That's JavaScript for you… ¯\_(ツ)_/¯ 
If there's a better way, [let me know &rarr;](https://github.com/julie-ng/cosmosdb-mongoose-example/issues/new)