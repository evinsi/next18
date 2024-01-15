import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'tr'] as const;

export const pathnames = {
  '/': '/',
  '/home': {
    en: '/home',
    tr: '/anasayfa'
  },
  '/about': {
    en: '/about',
    tr:'/hakkinda'
  },
  '/contact': {
    en: '/contact',
    tr:'/iletisim'
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
