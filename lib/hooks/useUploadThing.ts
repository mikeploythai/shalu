import type { PhotoRouter } from "@/app/(private)/api/uploadthing/core";
import { generateReactHelpers } from "@uploadthing/react/hooks";

export const { useUploadThing } = generateReactHelpers<PhotoRouter>();
