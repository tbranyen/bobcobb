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

#### Why the name Bob Cobb?

Someone already took the name maestro on
[NPM](https://npmjs.org/package/maestro), so I decided to name it after the
character with the same name in
[Seinfeld](http://seinfeld.wikia.com/wiki/Bob_Cobb).

![](https://raw.githubusercontent.com/tbranyen/bobcobb/master/bobcobb.jpg)
