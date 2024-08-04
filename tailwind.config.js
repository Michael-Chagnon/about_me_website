/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        'glow': '0 0 30px rgba(255, 255, 255, 0.5)', // White glow effect
        'custom': '7px 7px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        fair:['"Playfair Display"'],
        nunito:['Nunito'],
        comfortaa: ['Comfortaa'],
        roboto: ['Roboto'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(114, 62%, 50%)",
          foreground: "hsl(0, 0%, 0%)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      spacing: {
        '999': '36rem'
      },
    },
    colors: {
      'error':{
        100:'#1F3555',
        200:'#FFFBFE',
        300: '#89023E',
        darkBlue: '#1F3555',
        reallyDarkBlue: '#111D2E',
        white: '#FFFFFF',
        darkGray: '#222222',
        hoveredGray: '#e6e6e6',
        gray: '#7F7F7F',
        darkPink: '#89023E',
        black: '#000000',
        green: '#1bc41b',
        lightGreen: '#1efa1e',
        red: '#fc2c03',
        darkRed: '#a61d02',
        reallyDarkGray: '#171717',
        beautifulGreen: '#8D945E',
        lightGray: '#828282',
        transparent: '#00FFFFFF',
        buttonBlue: '#25282B',
        A4: '#4A4A4A',
        A470: '#4A4A4AB3',
        brown: '#463730',
        gitPurple: '#6E5494',
        secureGray: '#eef1f4',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}