import express from 'express';
import ejs from 'ejs';
import {dirname,join} from 'path';
import{fileURLToPath}from 'url'
const app = express();

//TODO: esto es para que reconozca las vistas
const __dirname = dirname(fileURLToPath(import.meta.url));

//TODO: esto es para poder usar el template engine para poder renderizar el html
app.set('view engine','ejs');
app.set('views',join(__dirname,'views'));

//TODO: estas son mis rutas para la
app.get('/',(req,res)=>{
    res.render('index')
})



app.listen(3000);
console.log('Server is listening on port 3000');