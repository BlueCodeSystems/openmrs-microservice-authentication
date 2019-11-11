import express from 'express';
import {openmrsAuthorization, requestSessionToken} from './controllers/authentication';


let app = express();

const PORT = process.env.PORT || 8087;

app.get('/session', openmrsAuthorization,requestSessionToken);

app.listen(PORT, function () {
    console.log(`openmrs authentication service listening on port ${PORT}`);
});
