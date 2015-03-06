Bobcobb
-------

Simplify working with Node's cluster module.


``` bash
npm install bobcobb
```

``` javascript
// Allow the maestro to facilitate the spawning of child processes.
if (process.env.NODE_ENV === "production" && require("cluster").isMaster) {
  return require("bobcobb").startup();
}
```

### Question: Why the name Bob Cobb?

Answer:

Someone already took the name maestro on NPM, so I decided to name it after
the character with the same name in Seinfeld.

![](bobcobb.png)
