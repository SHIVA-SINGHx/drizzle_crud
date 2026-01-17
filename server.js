import epxress from "express";
import { db } from "./src/config/db.js";
import { usersTable } from "./src/drizzle/schema.js";

const main = async ()=>{
    // insert a user
    const insertUser = await db.insert(usersTable).values({
        name: "Shiva Singh",
        age: 18,
        email: "shiva@example@gmail.com", 
    })
    console.log("Inserted User:", insertUser);
}

const app = epxress();
const PORT = 3000;


app.get("/", (req, res)=>{
    res.status(200).json({
        message: `Welcome to the Drizzle Crud API`,
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    
})