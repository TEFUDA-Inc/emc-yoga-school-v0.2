/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Noto Serif JP"', 'serif'],
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      colors: {
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
        },
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
        },
        blue: { // Added from admin dashboard colors
          100: '#dbeafe',
          700: '#1d4ed8',
          800: '#1e40af',
        },
        amber: { // Added from admin dashboard colors
          100: '#fef3c7',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
        },
        red: { // Added from admin dashboard colors
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626', // Added for consistency if needed
          700: '#b91c1c',
          800: '#991b1b',
        },
        purple: { // Added from admin dashboard colors
          100: '#f3e8ff',
          600: '#9333ea', // Added for consistency if needed
          700: '#7e22ce',
          800: '#6b21a8',
        },
        green: { // Added from admin dashboard colors
            100: '#dcfce7',
            500: '#22c55e', // Added for consistency if needed
            600: '#16a34a',
            700: '#15803d',
        },
        // card and background colors from HTML (might be default or component-specific)
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        background: 'hsl(var(--background))', // Assuming var(--background) is defined in globals.css
        foreground: 'hsl(var(--foreground))', // Assuming var(--foreground) is defined in globals.css
        primary: { // Example, if needed from components
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        muted: { // Example, if needed from components
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: { // Example, if needed from components
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        ring: 'hsl(var(--ring))', // Example, if needed for focus rings
        input: 'hsl(var(--input))', // Example, if needed for input borders
      },
      // Add other theme extensions if necessary, e.g., borderRadius, keyframes
    },
  },
  plugins: [],
};
