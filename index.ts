import express from "express";
import {
  logController,
  newControllerRout,
  postController,
} from "./controllers/controller";
const app = express();

app.use(express.json());

app.get("/log", logController);
app.post("/log", postController);
app.patch("/log", logController);
app.get("/user", newControllerRout);

app.listen(3000, () => {
  console.log("Server corre en el puerto 3000");
});
