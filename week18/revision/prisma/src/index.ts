import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

async function createUser() {
    await client.user.create({
        data:{
            username:"satyam",
            password:"satyam",
            age:20,
            city:"Nalanda"
        }
    })
}

async function findUser() {
    const user = await client.user.findFirst({
        where:{
            id: 1
        },
        include:{
            todos:true
        }
    })
    console.log(user);
    
}

// createUser()
findUser()