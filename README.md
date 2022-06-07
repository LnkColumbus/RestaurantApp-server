# App Restaurant
The Rest Server for the application of restaurant. The technologies used were NodeJS, Typescript, Express, MongoDB, Mongoose, Docker.

Set up the local database
```
    docker-compose up -d
```

Local MongoDB URL:
```
    mongodb://localhost:27017/restodb
```

## Set environment variables
Rename file __.env.template__ to __.env__

* Rebuild node modules and start project
```
npm install
npm run dev
```