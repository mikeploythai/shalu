import { DrawingPinIcon } from "@radix-ui/react-icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function PinnedIcon() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <DrawingPinIcon className="mx-[9px]" />
      </TooltipTrigger>

      <TooltipContent className="mx-2 my-1">
        This message was pinned by an admin 📌
      </TooltipContent>
    </Tooltip>
  );
}
