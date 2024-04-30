import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(){
    // Insere dados no bando

    const pessoas = ["Levi", "Bruna", "André", "Rafael", "Eberth", "Leonardo", "Cleiton", "Diana", "Lailson"]

    const insertdados = await prisma.profile.createMany({
        data: pessoas.map(name => ({
            name: name
        })) 
            
        });

    console.log(insertdados);


    // Consulta dados no banco, ex: pela inicial
// const selectdados = await prisma.profile.findMany({
//     where: {
//         name: { contains: "C"}
//     }
// })
// console.log(selectdados)

// Atualiza dados no banco
// const updatedados = await prisma.profile.update({
//     where: {
//         id: 1,
//     },
//     data: {
//         name: "Marcell"
//     }

// })
// console.log(updatedados)


// deleta dados 
// const deleteddados = await prisma.profile.delete({
//     where: {
//        id: 1,
//     },
// });

// console.log(deleteddados)

 }

main()