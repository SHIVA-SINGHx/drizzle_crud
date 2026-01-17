
import { eq } from "drizzle-orm";
import { db } from "./src/config/db.js";
import { usersTable } from "./src/drizzle/schema.js";

const main = async ()=>{

    //1. Insert a user (Create)
    // const insertUser = await db.insert(usersTable).values({
    //     name: "Shiva Singh",
    //     age: 18,
    //     email: "shiva.singh@example.com", 
    // })
    // console.log("Inserted User:", insertUser);


    /// 2.Insert multiple users (Create)
    //     const insertUser2 = await db.insert(usersTable).values([
    //     {
    //         name: "John Doe",
    //         age: 25,
    //         email: "john.doe@example.com"
    //     },
    //     {
    //         name: "Jane Smith",
    //         age: 30,
    //         email: "jane.smith@example.com"
    //     }
    // ])

    // 3. fetch all users (READ)
    // const getUser = await db.select().from(usersTable);
    // console.log("All users: ", getUser)


    // 4. Update a user (UPDATE)
    const updateUser = await db.update(usersTable)
    .set({name: "Shiva Updated"})
    .where(eq(usersTable.email, "shiva@example@gmail.com"))

    console.log("Updated User: ", updateUser);

    // 5. Delete a user (DELETE)
    await db.delete(usersTable).where(eq(usersTable.email, "shiva.singh@example.com"));
}


// const app = epxress();
// const PORT = 3000;

main();


