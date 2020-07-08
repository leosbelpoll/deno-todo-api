import { Application } from "https://deno.land/x/oak/mod.ts";
import TodosRoutes from "./routes/todos.ts";

const env = Deno.env.toObject();

const HOST = env.HOST || "localhost";
const PORT = env.PORT || 8000;

const app = new Application();

app.use(TodosRoutes.routes());

app.use(TodosRoutes.allowedMethods());

console.log(`App is running on Port ${PORT}`);
await app.listen(`${HOST}:${PORT}`);
