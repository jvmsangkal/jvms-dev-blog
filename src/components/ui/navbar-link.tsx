'use client';

import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationMenuLink } from './navigation-menu';
import { navigationMenuTriggerStyle } from './navigation-menu-utils';

type NavbarLinkProps<Route> = LinkProps<Route>;

export default function NavbarLink<Route>({ children, href }: NavbarLinkProps<Route>) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <NavigationMenuLink active={active} asChild className={navigationMenuTriggerStyle()}>
      <Link href={href}>{children}</Link>
    </NavigationMenuLink>
  );
}
