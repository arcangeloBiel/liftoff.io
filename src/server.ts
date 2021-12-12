import express from 'express';

const app = express();

//Rota
app.get("/test", (req, res) => {
   return res.send("Ola NLW ")
})

app.post("/test-post", (req, res) => {
    return res.send("Ola post NLW")
 })

//https://localhost:300
app.listen(3000, () => {
    console.log(" Server is running NLW")
});