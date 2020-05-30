const express=require('express')
const app=express()
const teams=require('./teams')
const Venue=require('./Venue')
const demo=teams.map(team=>team.players)
const players=[]
 demo.forEach(item=>item.forEach(item=>players.push(item)))


app.get('/api/teams',(req,res)=>{
    
        res.json(teams)
        
})
app.get('/api/teams/players',(req,res)=>{
   
        res.json(players)
})
app.get('/api/venues',(req,res)=>{
   
        res.json(Venue)
})


const PORT=4000;

app.listen(PORT,()=>console.log("Server is running on port ",PORT))