const express = require("express");
const mustache = require("mustache");
const app = express();

app.get("/", (req, res) => {
  const html = `<!DOCTYPE html>
  <html>
  <head>
    <title>Oie</title>
  </head>
  <body>
    <p>{{#uppercase}}{{message}}{{/uppercase}}</p>
  </body>
  </html>`;

  const result = mustache.render(html, {
    message: "Faaala!",
    uppercase: () => (text, render) => render(text).toUpperCase()
  });

  res.send(result);
});

app.listen(8080);
