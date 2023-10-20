# MaxApp Proyecto

![MaxLogo-dark](src/assets/maxautoslogoblanco.png#gh-dark-mode-only)![MaxLogo-light](src/assets/maxautoslogoblanco.png#gh-dark-mode-only#gh-light-mode-only)

Aplicación para la concesionaria MaxAutos como proyecto final de Fundamentos Web desarrollada en colaboración por [shogunIncognito](https://github.com/shogunIncognito) y [EmersonR14-dev](https://github.com/EmersonR14-dev).

### Herramientas utilizadas
- **Next.js**: Framework de React para renderizado del lado del servidor y en el cliente.
- **Tailwind CSS**: Framework de CSS utilitario para diseñar interfaces de usuario rápidamente.
- **MySQL**: Sistema de administración de bases de datos relacionales
- **Prisma**: Prisma es un ORM de próxima generación para Node.js y TypeScript 
- **Firebase**: Servicio de almacenamiento de objetos potente, simple y rentable para almacenamiento de imagenes

## Clonar repositorio en tu maquina
```bash
git clone https://github.com/shogunIncognito/simplemaxapp-pWeb.git
```

## Accede al repositorio
```bash
cd simplemaxapp-pWeb
```


## Instalar dependencias
```bash
npm install
# o
yarn install
```

## Ingresa las credenciales en el archivo `.env`
En el archivo [`.env`](.env) ubicado en la raíz del proyecto para las variables de entorno y para lograr el funcionamiento del proyecto. Dentro de las comillas coloca tu url de la base de datos de MySQL PlanetScale y las credenciales de Firebase para el almacenamiento de imagenes

```env
DATABASE_URL = ""

# firebase credentials
NEXT_PUBLIC_APIKEY = ""
NEXT_PUBLIC_AUTHDOMAIN = ""
NEXT_PUBLIC_PROJECTID = ""
NEXT_PUBLIC_STORAGEBUCKET = "" 
NEXT_PUBLIC_MESSAGINGSENDERID = "" 
NEXT_PUBLIC_APPID = ""
```

## Inserta tablas a la base de datos de PlanetScale
Crea las tablas en la base de datos de **PlanetScale** en base a los modelos especificados en el archivo [schema.prisma](prisma/schema.prisma)

```bash
npx prisma db push
```

## Iniciar proyecto
```bash
npm run dev
# o
yarn run dev
```

### Accede a la aplicación en tu navegador
Abre tu navegador web y ve a http://localhost:3000 para utilizar la aplicación.
