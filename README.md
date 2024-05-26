# BigOh Assignment

The following table shows overview of the Rest APIs that will be exported:

- GET     `/`	                        server health
- GET     `/fill_data/?title=USER`	  get filled data by title
- POST    `/fill_data/?title=USER`    creating data entry in given title form
- POST    `/form`                     create new form 

### POSTGRES SETUP
setup postgres credential in "app/config/db.config.js".  

### Test the APIs
install all the dependency module : `npm install`
Run Node.js application with command: `node server.js`

Using Postman, we're gonna test all the Apis above.
You can find postman collection named "postman_collection_BIGOH.json"

## Project setup
```
npm install
```

### Run
```
node server.js
```
