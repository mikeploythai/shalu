import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

export default function OptionsDropdown({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none" asChild>
        <Button size="icon" variant="ghost" className="focus-visible:ring-0">
          <DotsVerticalIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mx-2 my-1">
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
