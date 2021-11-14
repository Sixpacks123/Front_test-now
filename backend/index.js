const express = require('express')
const app = express()
const allactivity = require('./allactivity.json')

app.use(express.json())

app.get('/allactivity', (req,res) => {
    res.status(200).json(allactivity)
})

app.get('/allactivity/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const activity = allactivity.find(activity => activity.id === id)
    res.status(200).json(activity)
})

app.post('/allactivity', (req,res) => {
    allactivity.push(req.body)
    res.status(200).json(allactivity)
})
app.put('/allactivity/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let activity = allactivity.find(activity => activity.id === id)
    activity.TitleActivity =req.body.TitleActivity,
    activity.country =req.body.country,
    activity.type =req.body.type,
    res.status(200).json(activity)
})

app.delete('/allactivity/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let activity = allactivity.find(activity => activity.id === id)
    allactivity.splice(allactivity.indexOf(activity),1)
    res.status(200).json(allactivity)
})

app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})