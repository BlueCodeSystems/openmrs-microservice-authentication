import express from 'express';
import {openmrsAuthorization, requestSessionToken, getProviderData} from './controllers/controller';


let app = express();

const PORT = process.env.PORT || 8087;

app.get('/session',openmrsAuthorization,requestSessionToken,getProviderData);

app.listen(PORT, function () {
    console.log(`openmrs authentication service listening on port ${PORT}`);
});
