
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4000
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
app.use(express.json());
const TODO = [{id:1,todo:'sample todo'}]

app.get('/', (req, res) => {   
  res.send(TODO)
})
app.post('/', (req, res) => {
    console.log( req.body,'2' )
  const updateddata = TODO.push(req.body)
  res.send(`data stored succesfully : ${updateddata}`)
})
app.put('/:id', (req, res) => {
    const ID = req.params.id
    const updatedArray = TODO.filter(p => console.log('p', p) ) 
    // TODO.push(updatedArray)
    console.log(ID,'18',updatedArray)
  res.send('put!')
})
app.delete('/:id', (req, res) => {
    const {id} = req.params
    const deletedArray = TODO.slice(p => (p.id = id) ) 
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`TODO list app running on port ${port}`)
})