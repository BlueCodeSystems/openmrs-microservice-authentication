import jwt from "jsonwebtoken";
import axios from "axios";

let openmrsAuthorization = async(req, res, next) => {

    const CREDINTIALS = req.headers.authorization;
    const SESSION_ROUTE = '/ws/rest/v1/session';

    if(CREDINTIALS == null)
        return res.sendStatus(401);

    const AUTH_STATUS = await axios.get(`${process.env.OPENMRS_SITE}${SESSION_ROUTE}`,
        {
            headers:{Authorization: CREDINTIALS}
        }
    );

    req.authorizationStatus = AUTH_STATUS.data;

    next();
}

let requestSessionToken = async(req, res) => {

    if(req.authorizationStatus == null)
        return res.sendStatus(401);

    const authorizationStatus = req.authorizationStatus;

    if(authorizationStatus.authenticated){

        let userdetails = authorizationStatus.user;

        const user = {
            uuid: userdetails.uuid,
		    display: userdetails.display,
		    username: userdetails.username,
		    systemId: userdetails.systemId
        }

        const token = jwt.sign({user}, `${process.env.SECRET_KEY}`, { expiresIn: Number(process.env.SESSION_EXPIRATION) });
        return res.json({user,token});
    }
    else
         return res.sendStatus(401);
}

export {openmrsAuthorization, requestSessionToken}
