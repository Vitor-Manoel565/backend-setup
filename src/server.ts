import fastify from "fastify";
import cors from '@fastify/cors';
import {PrismaClient} from '@prisma/client';

const app = fastify();
app.register(cors);
const prisma = new PrismaClient();

app.get("/get",async (request,resolve) => {
    const habits = await prisma.habit.findMany();
  console.log("server is runing");
  resolve.send(habits)
});

app.listen({
  port: 3333,
});
