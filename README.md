## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Test de CRUD Gimnasio, Usuario y Miembro

### IMPORTANTE: Recordar que luego de haber realizado un git pull a esta rama, es necesario hacer un npm install al proyecto para instalar todos los modulos necesarios.

1- Importar el archivo ./bd_mysql_export/gym.sql en tu Mysql Workbench local.

2- Una vez instalda la BD gym, se debe modificar el ".env" dentro del proyeto y configurar el "DATABASE_URL" con su configuracion local:
DATABASE_URL="mysql://usuario:password@localhost:3306/gym"

3- Correr el proyecto con npm run start:dev

4- En cada carpeta "gimnasio", "usuario" y "miembro " se encuentra un archivo "api.http" que sirve para relizar solicitudes HTTP y visualizar respuestas. (Es importante que el proyecto este corriendo antes de realizar estas solicitudes.)