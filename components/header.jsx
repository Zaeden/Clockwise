import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PenBox } from "lucide-react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import UserMenu from "./user-menu";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  await checkUser();

  return (
    <div className="mx-auto py-2 px-4 flex justify-between items-center shadow-md border-b-2">
      <Link href={"/"} className="flex items-center justify-center">
        <Image
          src="/clockwise-logo.png"
          width="150"
          height="60"
          alt="Clockwise Logo"
          className="h-16 w-auto"
        />
        <h1 className="hidden md:block text-2xl font-bold">Clockwise</h1>
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/events?create=true">
          <Button className="flex items-center gap-2">
            <PenBox size={18} />
            Create Event
          </Button>
        </Link>
        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard">
            <Button variant="outline">Login</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserMenu />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
