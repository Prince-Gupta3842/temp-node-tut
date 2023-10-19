const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // "/" means homepage
    res.end("This is our homepage");
  } else if (req.url === "/about") {
    res.end("This is our about section");
  } else {
    res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the webpage you are looking for</p>
  <a href="/">Home</a>
    `);
  }
});

server.listen(5000);
