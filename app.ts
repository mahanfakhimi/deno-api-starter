import { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import axiod from "https://deno.land/x/axiod@0.26.2/mod.ts";

const API_URL = "https://jsonplaceholder.typicode.com";

const router = new Router();

router.get("/posts", async (ctx) => {
  const res = await axiod.get(`${API_URL}/posts`);
  const posts = res.data;
  ctx.response.body = posts;
});

router.get("/todos", async (ctx) => {
  const res = await axiod.get(`${API_URL}/todos`);
  const todos = res.data;
  ctx.response.body = todos;
});

router.get("/users", async (ctx) => {
  const res = await axiod.get(`${API_URL}/users`);
  const users = res.data;
  ctx.response.body = users;
});

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });
