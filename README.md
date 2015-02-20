Maestro
-------

Simplify working with Node's cluster module.


``` bash
npm install maestro
```

``` javascript
// Allow the maestro to facilitate the spawning of child processes.
if (process.env.NODE_ENV === "production" && require("cluster").isMaster) {
  return require("maestro").startup();
}
```
