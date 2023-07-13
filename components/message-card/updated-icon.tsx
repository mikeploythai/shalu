import { Pencil1Icon } from "@radix-ui/react-icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function UpdatedIcon({ updatedAt }: { updatedAt: string }) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Pencil1Icon />
      </TooltipTrigger>

      <TooltipContent className="mx-2 my-1">
        Updated {updatedAt} 🤥
      </TooltipContent>
    </Tooltip>
  );
}
