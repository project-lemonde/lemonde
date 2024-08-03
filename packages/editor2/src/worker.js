console.log("Hello worker.js");

import("https://cdn.skypack.dev/lodash").then((lodash) => {
    console.log("lodash", lodash);
});
