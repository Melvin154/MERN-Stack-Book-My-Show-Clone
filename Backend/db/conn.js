

const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://melthomas220:Melvin213@book-my-show.ajdjmk6.mongodb.net/?retryWrites=true&w=majority")

.then(()=>{
    console.log("Db Connected Successfully");
})
.catch((err)=>{
    console.log("Db not Connected Successfully");
    console.log(err);
})