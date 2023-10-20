## Proyecto de un File Upload Local

#### Tecnologias usadas en el Frontend:
Use **React** [🚩](https://react.dev/) con un tool llamado **Vite** [🚩](https://vitejs.dev/) que me facilita la construcción del frontend

Para la construcción de componentes use **NextUI** [🚩](https://nextui.org/), la creación de rutas con **React-Router-dom** [🚩](https://reactrouter.com/en/main) y **Tailwind CSS** [🚩](https://tailwindcss.com/) para dar algunos estilos.

#### Tecnologías usadas en el Backend:
Use Nodejs con su framework **Express** [🚩](https://expressjs.com/), además use Typescript para la realización implementado ts-node.
**Multer** para la carga de imágenes, y **TypeORM** [🚩](https://typeorm.io/). Además usamos un servicio cloud llamado Cloudinary, servicio para guardar imagenes.





## Uso
Primero se tiene que crear en la carpeta **backend** un archivo .env
```.env
PORT= 3000 -> El puerto que usted necesite.
DATABASE_USER=user -> El usuario de la base de datos
DATABASE_PASSWORD=**** -> La contraseña de la base de datos
DATABASE_NAME=storage-image -> Nombre de la base de datos
NODE_MODE=Production
CLOUD_NAME=namecloud -> Nombre de cloud 
API_KEY_CLOUD=keycloud -> Llave de cloud
API_SECRET_CLOUD=secret -> Api secreto del cloud
```

Para poder correr el programa debes abrir dos consolas (cada una correrá sus servidores correspondientes).
Cuando en ambas se encuentren en el archivo (File Upload) deben hacer esto: 
```bash
//Para el archivo de backend

cd ./backend           /* Para entrar a la carpeta */
npm run dev            /* Para correr el servidor integrado */


//Para el archivo de frontend-upload

cd ./frontend-upload  /* Para entrar a la carpeta */
npm run dev           /* Para correr el servidor integrado */
```

Entonces ambos servidores estarán corriendo el programa y podrás usarlo con normalidad.   