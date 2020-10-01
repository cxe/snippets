//usr/bin/env docker run --rm --init -it -p 8080:8080 -v "$PWD":"$PWD" -w "$PWD" node:latest ${1:-node "$PWD/${0#./}"}; exit;

/**
 * @use:
 *   No need to install npm or node locally - all you need is `docker` to run this dockerized node service from a single file due to the bash-js-comment at the top.
 *   Make this file runnable `chmod +x self-dockerizing.js` then you can just start it `./self-dockerizing.js` and it will run in docker under the same path.
 *   As this is an interactive docker terminal you can also proxy any other command through docker e.g. `./run ls -la` 
 */
require('http').createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
    console.info(res.statusCode, req.url);
}).listen(8080, _ => console.info(`Server running at http://localhost:8080/`));
