import localFont from 'next/font/local'

// Using local TTF font files
export const nunito = localFont({
  src: [
    {
      path: '../public/fonts/Nunito.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Nunito-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    // Add additional weights as needed
  ],
  variable: '--font-nunito',
})
