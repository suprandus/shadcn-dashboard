import { LogOut, Moon, Settings, User } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  return (
    <nav className="p-4 items-center flex justify-between">
      {/* LEFT */}
      collapseButton
      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>
        <Moon />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/130210722?v=4" />
              <AvatarFallback>AA</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-[1.2rem] w-[1.2rem] mr-2" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-[1.2rem] w-[1.2rem] mr-2" /> Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
