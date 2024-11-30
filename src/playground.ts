
import { db } from "./server/db";


await db.user.create({
    data:{
        emailAddress:"anddhital@gmail.com",
        firstName:"Ananda",
        lastName:"Dhital"
    }
})
console.log("Done");