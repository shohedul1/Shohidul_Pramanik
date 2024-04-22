'use client';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';

const ThemeToggler = () => {
    const {theme,setTheme} = useTheme();
    const sunIcon = 'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0';
    const moonIcon = 'absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-90 dark:scale-100';

  return (
    <div>
        <Button onClick={()=>setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <SunIcon
            className={sunIcon}/>
            <MoonIcon
            className={moonIcon}
            />
        </Button>
    </div>
  )
}

export default ThemeToggler