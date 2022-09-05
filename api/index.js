// Requiring express in our server
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
// RUTA INICIAL
app.get('/', function(req, res) {
res.json({
	number: "Todo bien"
});
});

let embarques = [
   {"color": "ROJO",
    "serie": "1FMDU32P4VZA41862",
    "folio": 180743,
    "modelo": "1997",
    "marca": "FORD",
    "linea": "EXPLORER"
}
];

// EMBARQUE POR ARRAY
app.use(cors());

// Configuracion body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// activar servidor
app.listen(3000, function(req, res) {
console.log("Servidor corriendo en el puerto 3000");
});

app.get('/select/:folio', (req, res) => {
    // Reading isbn from the URL
    const folio = req.params.folio;

    // Searching books for the folio
    for (let embarque of embarques) {
        if (embarque.folio === folio) {
            res.json(embarque);
            return;
        }
    }

    // Sending 404 when not found something is a good practice
    res.status(404).send('Embarque no encontrado');
});