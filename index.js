const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

app.use(express.json());

app.get("/", async (req, res) => {
  const allUser = await prisma.user.findMany();
  res.json(allUser);
});

app.post("/", async (req, res) => {
  const newUser = await prisma.user.create({ data: req.body });
  res.json(newUser);
});

app.listen(3001, () => console.log(`Server running on port ${3001}`));
