import { PhotoRouter } from "@/app/(private)/api/uploadthing/core";
import { cn } from "@/lib/utils";
import { ImageIcon } from "@radix-ui/react-icons";
import { UploadDropzone } from "@uploadthing/react";
import "@uploadthing/react/styles.css";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

interface UploadModal extends React.HTMLAttributes<HTMLButtonElement> {
  setPhotoUrl: (photoUrl: string) => void;
}

export default function UploadModal({ className, setPhotoUrl }: UploadModal) {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size="icon" className={cn("", className)}>
          <ImageIcon />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Attach Images</AlertDialogTitle>
          <AlertDialogDescription>
            Powered by UploadThing
          </AlertDialogDescription>
        </AlertDialogHeader>

        <UploadDropzone<PhotoRouter>
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            if (res) {
              res.forEach((photo) => setPhotoUrl(photo.fileUrl));
              setIsOpen(false);

              toast({
                title: "Success!",
                description: "Your photo(s) were attached! 📸",
              });
            }
          }}
          onUploadError={(error: Error) => {
            toast({
              title: "Error!",
              description: error.message,
              variant: "destructive",
            });
          }}
        />

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
