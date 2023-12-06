const yaml = require("js-yaml")
const fs = require("fs")
let http = require('http')

let app = http.createServer((req, res) => {
    console.log("Solicutd ->"+req.url)
    let texto;
    if (req.url=='/yamlo.yml'){
        /*res.setHeader('Content-Type', 'application/json');
        texto = fs.readFileSync(`yamlo.yml`, 'utf8')
        texto = yaml.load(texto)
        res.end(JSON.stringify(texto));*/

        res.setHeader('Content-Type', 'text/yaml');
        texto = fs.readFileSync(`yamlo.yml`, 'utf8')
        res.end(texto)
    } else {
        res.setHeader('Content-Type', 'text/html');
        texto = fs.readFileSync(`index.html`, 'utf8')
        res.end(texto);
    }
})

app.listen(3000)






