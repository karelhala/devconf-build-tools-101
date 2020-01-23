# Building a web application with Parcel

## Run a dev server

Parcel can reuse you previously built bundles and doesn't need to start from scratch every time. This can greatly speed up the process.

For Parcel the `npm start` is set to execute:

```sh
cross-env NODE_ENV=development parcel <TARGET_APP>/index.html --port 8002 --no-source-maps
```

### Cold start

```shell
Server running at http://localhost:8002
✨  Built in 24.26s.
```

### Prebuilt bundle

```shell
Server running at http://localhost:8002
✨  Built in 2.85s.
```

## Building  a bundle

Let's take a look on the bundle sizes. This greatly depends on how your dependencies were built. If the included library expect you to do tree shaking in it's content, you might end up with a oversized bundle.

We've used two different UI frameworks, one that expects you to use tree shaking and another that wants its users to have as easy life as possible.

In this case `npm build` command is expected to execute:

```sh
cross-env NODE_ENV=production parcel build <TARGET_APP>/index.html --public-url / --no-source-maps -d dist/<TARGET_APP>
```

The key difference is that for running the dev server we executed the `parcel` command, while for the actual build we executed `parcel build`.

### Using Material-ui

```shell
✨  Built in 5.88s.

dist/mui/dogs.f60c044e.js    390.6 KB    5.72s
dist/mui/index.html             313 B      4ms
```

### Using PF4

```shell
✨  Built in 22.89s.

dist/src.516ba113.js             ⚠️  3.77 MB    23.00s
dist/pfbg_992@2x.dc038552.jpg     574.78 KB      31ms
dist/src.32796eea.css             374.29 KB    21.61s
dist/pfbg_768@2x.858eb340.jpg     353.55 KB      38ms
dist/pfbg_2000.995e4725.jpg       269.96 KB      38ms
dist/pfbg_576@2x.43ac66d5.jpg     191.01 KB      36ms
dist/login.6e08ae1f.js            128.78 KB     7.57s
dist/pfbg_768.720ff25c.jpg        113.96 KB      35ms
dist/demo1.229bb2d9.js             82.32 KB     7.21s
dist/pfbg_576.c5c6bdba.jpg         65.91 KB      36ms
dist/demo1.1f10ab7f.css            59.08 KB     1.10s
dist/demo2.d10e21ed.js              1.56 KB     857ms
dist/login.html                       488 B     315ms
dist/index.html                       484 B     318ms
dist/404.html                         224 B     324ms
dist/login.6f71cd8e.css                76 B     1.24s
```
