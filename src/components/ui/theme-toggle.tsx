'use client';

import { Moon, Sun, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { NavigationMenuLink } from './navigation-menu';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <NavigationMenuLink href="#"><SunMoon className="size-4" /></NavigationMenuLink>;
  }

  return (
    <NavigationMenuLink
      href="#"
      active={false}
      onClick={(e) => {
        e.preventDefault();
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
    >
      {theme === 'dark' ? <Moon className="size-4" /> : <Sun className="size-4" />}
    </NavigationMenuLink>
  );
}
