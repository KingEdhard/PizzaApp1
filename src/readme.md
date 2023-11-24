# Dependencias a instalar para configurar el proyecto

```
npm install

```
<p>Para ejecutar el proyecto</p>

## Instrucciones para instalar Tailwindcss en Vite

<p>Se deben ejecutar los siguiente comandos en orden. En la carpeta raíz del proyecto ejecuta el siguiente comando:</p>

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```
<p>Configure las rutas de su plantilla
Agregue las rutas a todos sus archivos de plantilla en el archivo tailwind.config.js</p>

```
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

```

<p>Añade las directivas Tailwind a tu CSS
Agregue las @tailwinddirectivas para cada una de las capas de Tailwind a su archivo. ./src/index.css</p>

```
@tailwind base;
@tailwind components;
@tailwind utilities;

```

<p>Comience su proceso de construcción
Ejecute su proceso de compilación con npm run dev.</p>

## Instala el paquete ‘@vitejs/plugin-react’ 
<p>con los siguientes comandos:<p>

```
yarn add @vitejs/plugin-react
```
<p>o<p>

```
npm i -S @vitejs/plugin-react

```

## Instala los paquetes ‘@fortawesome/react-fontawesome’ y ‘@fortawesome/free-solid-svg-icons’ 

<p>con el siguiente comando<p>

```
npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons1

```