# Next.js OpenJira App

Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

- el -d significa **detached**

* MongoDB URL Local:

```
mongodb://localhost:27017/entriesdb
```

## Configurar las variables de entorno

renombrar en archivo **.env.template** a **.env**

## Llenar la base de datos con informacion de pruebas

Llamar a:

```
    http:localhost:3000/api/seed
```
