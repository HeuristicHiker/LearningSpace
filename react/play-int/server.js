import fastify from "fastify";
import fastifyStatic from "@fastify/static";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";
import { renderToString } from "react-dom/server";
// import { renderToPipeableStream } from "react-dom/server"; // generally preferred
import { createElement as h } from "react";
import App from "./App.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const shell = readFileSync(path.join(__dirname, "dist", "index.html"), "utf8");

const app = fastify();

app.register(fastifyStatic, {
  root: path.join(__dirname, "dist"),
  prefix: "/",
});

// split rather than replace since we want to give lazy parts first then other
const parts = shell.split("<!--ROOT-->");
app.get("/", (req, reply) => {
  reply.raw.write(parts[0]);
  const reactApp = renderToString(h(App)); // wait till totally done then render
  reply.raw.write(reactApp);
  reply.raw.write(parts[1]);
  reply.raw.end();
});

app.listen({
  port: 3000,
});
