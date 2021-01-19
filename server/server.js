const express = require('express');
const app = express()
const path = require('path')

app.get('/', (req, res)=>{
	res.sendFile(path.join(__dirname, '..', 'client', 'public', 'index.html'))
})


app.listen(80, err=>{
	if(err){ console.log('server cannot listen'); return}
	console.log('server listening')
})