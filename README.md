# React Calendar Heatmap

This is a React application that demonstrates the usage of a calendar heatmap component. The heatmap shows random values for each day of the year, with the ability to click on each day and display a tooltip with additional information.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm (Node Package Manager) installed on your machine.

### Installation

1. install modules ReactJSX.

   ```bash
   npm install
   
2. install dependencies calendar-heatmap && tooltip

    ```bash
   npm install react-calendar-heatmap react-tooltip

3. install tailwindcss

    ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p

   Configure your template paths tailwind.config.js
    ```bash
    /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
