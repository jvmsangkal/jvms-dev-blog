import { Github, RssIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import ThemeToggle from "./theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-between px-4 py-2">
      <Link href="/">
        <Image
          className="dark:invert"
          src="/logo.svg"
          loading="eager"
          alt="Logo"
          width={100}
          height={100}
        />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="flex items-center gap-2">
            <NavigationMenuLink
              render={<Link href="/blog" />}
              className={navigationMenuTriggerStyle()}
            >
              Blog
            </NavigationMenuLink>
            <NavigationMenuLink
              render={<Link href="/projects" />}
              className={navigationMenuTriggerStyle()}
            >
              Projects
            </NavigationMenuLink>
            <NavigationMenuLink
              render={<Link href="/demos" />}
              className={navigationMenuTriggerStyle()}
            >
              Demos
            </NavigationMenuLink>
            <NavigationMenuLink
              active={false}
              href="https://github.com/jvmsangkal"
              className={navigationMenuTriggerStyle()}
            >
              <Github size={24} />
            </NavigationMenuLink>
            <NavigationMenuLink active={false} href="#" className={navigationMenuTriggerStyle()}>
              <RssIcon size={24} />
            </NavigationMenuLink>
            <ThemeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
