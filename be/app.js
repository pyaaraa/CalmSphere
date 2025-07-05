import express from  "express" ;
const app = express();

// Add GET route for root path
app.get("/", (req, res) => {
    res.send("Welcome to the API!");
});

app.post("/", (req,res)=>{
    res.send("hello")
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})