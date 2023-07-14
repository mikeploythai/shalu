import { createNextRouteHandler } from "uploadthing/next";
import { photoRouter } from "./core";

export const { GET, POST } = createNextRouteHandler({
  router: photoRouter,
});
