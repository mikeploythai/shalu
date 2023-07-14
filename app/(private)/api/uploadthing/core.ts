import { currentUser } from "@clerk/nextjs";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const photoRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async () => {
      const user = await currentUser();

      if (!user) {
        throw new Error("Unauthorized");
      }

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata }) => {
      console.log("Upload complete for userId:", metadata.userId);
    }),
} satisfies FileRouter;

export type PhotoRouter = typeof photoRouter;
