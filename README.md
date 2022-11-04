# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup with example "Todos"  (components, props, state, events)

- Instalar plugin de react para Chrome (React Developer Tools)

- Descargar nodejs (incluye npm): https://nodejs.org/en/download/ para create-react-app

- Crear proyecto en GitHub y clonar en local

- Inicializar en TERMINAL de VS Code
  
```shell
cd listaDeTareas

node —version (18.12)
npm —version.  (8.19.2)

npx create-react-app .
#Si falla: npx clear-npx-cache y relanzar npx create-react-app .
npm start

```

- Revisar index.html: lo más importante <div id="root"></div>, aquí insertaremos todo el código html generado con React.
- Revisar la carpeta src/
  - En src/ podemos eliminar los archivos excepto index.js
- Revisar package.json (ver los paquetes pre-instalados ya por React)
- React nos sirve para programar en JSX, lenguaje muy similar a HTML.

- Se ha visto en esta Single Page Application los siguientes fundamentos básicos que es la base de todo:
  - Propiedades
  - Eventos
  - Hooks (useState, useRef y useEffect)
  - Local storage para añadir persistencia
  - Flujo de comunicación entre componentes: Props de arriba a abajo, y Eventos se disparan o fluyen de abajo a arriba.

### App.js o App.jsx
- Se puede renombrar como App.jsx (opcional para indicar que es un componente de React)

### Crear directorio components y dentro creamos los componentes
- TodoList.jsx
- TodoItem.jsx

- Instalar plugin de VS Code: ES7 React/Redux/... y al escribir rfc y pulsar <intro> nos crea la estructura.

- Instalar plugin de VS COde: Emoji snippets y copiar desde [aquí](https://emojipedia.org/symbols/) y pegar en el código.

- Id automatizado:  `npm i uuid`  (después volvemos a lanzar la Web con `npm start`)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
