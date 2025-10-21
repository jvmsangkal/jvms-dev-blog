import { Github, RssIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import NavbarLink from './navbar-link';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from './navigation-menu';
import { navigationMenuTriggerStyle } from './navigation-menu-utils';
import ThemeToggle from './theme-toggle';

export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-between px-4 py-2">
      <Link href="/">
        <Image className="dark:invert" src="/logo.svg" alt="Logo" width={100} height={100} />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="flex items-center gap-2">
            <NavbarLink href="/blog">
              Blog
            </NavbarLink>
            <NavbarLink href="/projects">
              Projects
            </NavbarLink>
            <NavbarLink href="/demos">
              Demos
            </NavbarLink>
            <NavigationMenuLink active={false} href="https://github.com/jvmsangkal" className={navigationMenuTriggerStyle()}>
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
