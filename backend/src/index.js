//incluindo a lib expreess
const express = require('express'); 
const cors = require('cors'); //5.2 (gzipped: 2.1k)
const routes = require ('./routes');

//instanciando objeto acessivel pela porta 3333
const app = express();

app.use(cors());

//informando que o body das requisições sera enviados no padrão json
app.use(express.json())
app.use(routes)

/*
* Rota / Recurso
*/

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 */

/**
 * Tipos de parametros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação e condição)
 * -resquest.query
 * Route Params: Parâmetros utilizados para identificar recursos
 * -request.params
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 *-request.body
 */

/**
 * SQL: Mysq, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

app.listen(3333)

