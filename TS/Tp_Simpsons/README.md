# Trabajo Practico: Consumo de The Simpsons API con TypeScript

Aplicacion web que consume The Simpsons API y muestra personajes de la serie con su imagen, nombre y una frase.

## 1. Configuracion inicial

### `npm init -y`

El comando `npm init -y` inicializa un proyecto de Node.js usando los valores predeterminados de npm. Como resultado genera el archivo `package.json`, donde se guardan los datos basicos del proyecto, los scripts y las dependencias.

### Instalacion de TypeScript

```bash
npm install typescript --save-dev
```

Se usa `--save-dev` porque TypeScript se necesita durante el desarrollo para comprobar tipos y compilar el archivo `.ts` a JavaScript. La aplicacion que se ejecuta en el navegador utiliza el JavaScript compilado, por lo que TypeScript no es una dependencia necesaria en tiempo de ejecucion.

## 2. Configuracion de TypeScript

El proyecto utiliza `tsconfig.json`.

- `strict`: activa las comprobaciones estrictas de tipos de TypeScript y ayuda a detectar errores antes de ejecutar el programa.
- `target`: indica a que version de JavaScript se compila el codigo TypeScript. En este proyecto se usa `ES2020`.
- `outDir`: define la carpeta donde TypeScript guarda los archivos JavaScript compilados. En este caso es `dist`.

Tambien se configura `rootDir` como `src`, se incluye la biblioteca `DOM` para trabajar con elementos HTML y se excluye `node_modules` de la compilacion.

## 3. Scripts de npm

```json
"scripts": {
  "build": "tsc",
  "watch": "tsc --watch"
}
```

- `npm run build`: ejecuta el compilador una vez y genera el JavaScript dentro de `dist`.
- `npm run watch`: deja el compilador observando los archivos TypeScript y vuelve a compilar automaticamente cada vez que se guarda un cambio.

`build` sirve para hacer una compilacion puntual. `watch` es mas comodo mientras se esta desarrollando.

## 4. Documentacion de la API

Endpoint utilizado:

```text
GET https://thesimpsonsapi.com/api/characters
```

La respuesta principal contiene:

- `count`: cantidad total de personajes.
- `next`: URL de la pagina siguiente o `null`.
- `prev`: URL de la pagina anterior o `null`.
- `pages`: cantidad total de paginas.
- `results`: array con los personajes.

Cada personaje se representa en TypeScript mediante la interfaz `SimpsonCharacter` y utiliza los siguientes datos:

- `id`: identificador numerico.
- `age`: edad del personaje o `null`.
- `birthdate`: fecha de nacimiento o `null`.
- `gender`: genero.
- `name`: nombre.
- `occupation`: ocupacion.
- `portrait_path`: ruta de la imagen.
- `phrases`: array de frases.
- `status`: estado del personaje.

La respuesta completa se representa con la interfaz `IResponseApi`.

Para construir la URL de la imagen se concatena:

```text
https://cdn.thesimpsonsapi.com/500 + portrait_path
```

Por ejemplo, si `portrait_path` vale `/character/1.webp`, la aplicacion arma la URL completa de la imagen automaticamente.

## 5. Funcionalidades implementadas

El proyecto incluye las funciones solicitadas:

- `showLoading(): void`
- `hideLoading(): void`
- `showError(message: string): void`
- `createCharacterCard(character: SimpsonCharacter): HTMLElement`
- `renderCharacters(characters: SimpsonCharacter[]): void`
- `fetchCharacters(): Promise<void>`

Tambien valida `response.ok`, comprueba que `results` sea un array, maneja errores con `try/catch`, utiliza `console.error` para depuracion y oculta los mensajes de error automaticamente despues de 5 segundos.

## 6. Como ejecutar el proyecto

Primero instalar las dependencias:

```bash
npm install
```

Compilar una vez:

```bash
npm run build
```

O trabajar en modo watch:

```bash
npm run watch
```

Despues se debe servir la carpeta con un servidor local. En VS Code puede utilizarse la extension Live Server y abrir `index.html` desde alli.

## 7. Pruebas

Antes de entregar conviene comprobar:

- que el boton `Cargar Personajes` muestre el loading;
- que los personajes aparezcan con imagen, nombre y frase;
- que el loading desaparezca cuando termina la peticion;
- que un error de red muestre un mensaje descriptivo;
- que el mensaje de error desaparezca despues de 5 segundos;
- que no haya errores inesperados en la consola;
- que la grilla se adapte a distintos tamanos de pantalla.
