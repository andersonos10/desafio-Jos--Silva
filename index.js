const express = require (express)
const app = express ()
const PORT = 3000
app.listen( PORT,( ) => {console.log ('App online na porta ${PORT}')})
app.get ('/' , (req,res) => {})