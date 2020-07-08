import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  add,
  getAll,
  get,
  update,
  remove,
} from "../controllers/todosController.ts";

const router = new Router({ prefix: "/todos" });

router
  .get("/", getAll)
  .get("/:id", get)
  .post("/", add)
  .put("/:id", update)
  .delete("/:id", remove);

export default router;
