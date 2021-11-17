const express = require("express");
const xml = require("xml");

const app = express();
let keywords = ["Rent/Lease","Rent Lease","Travel & Transport"];
app.get("/", (req, res, next) => {
  let data = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <!--  created with Free Online Sitemap Generator www.xml-sitemaps.com  -->`;

  for (let i = 0; i <3; i++) {
    let x = encodeURIComponent(keywords[i]).toString();
    data += `<url>
    <loc>https://www.spaarksweb.com/home/nearby?search=${x}</loc>
    <lastmod>2021-10-17T05:01:45+00:00</lastmod>
    <changefreq>daily</changefreq>
    </url>`;
  }

  data += `</urlset>`;

  res.header("Content-Type", "application/xml");
  res.status(200).send(data);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});