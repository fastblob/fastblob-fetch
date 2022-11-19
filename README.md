# fastblob-fetch
Fetch Blob using [fastblob.com](https://fastblob.com)

## Quickstart

``` js
import fetch from "@fastblob/fastblob-fetch";

// For example, your fastblob domain is `example.website.fastblob.com`
const url = "https://example.website.fastblob.com/big-buck-bunny/Big%20Buck%20Bunny_1080p_30fps.mp4";

const response = await fetch(url);
const blob = await response.blob();
const newURL = URL.createObjectURL(blob);
console.log(newURL);
```

## More Info

See [`@fastblob/fast-fetch`](https://github.com/fastblob/fast-fetch)

## Polyfills?
| caniuse | polyfill |
|---|---|
| [AbortController](https://caniuse.com/abortcontroller) | [mo/abortcontroller-polyfill](https://github.com/mo/abortcontroller-polyfill) |
| [Blob API: `stream`](https://caniuse.com/mdn-api_blob_stream) | [eligrey/Blob.js](https://github.com/eligrey/Blob.js) |
| [Promise.any](https://caniuse.com/mdn-javascript_builtins_promise_any) | [zloirock/corejs](https://github.com/zloirock/core-js#promiseany) |
| [TransformStream](https://caniuse.com/mdn-api_transformstream) | [MattiasBuelens/web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) |

## License

MIT
