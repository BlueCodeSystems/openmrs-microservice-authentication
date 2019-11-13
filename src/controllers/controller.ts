import jwt from "jsonwebtoken";
import axios from "axios";
import dao from "../dao/dao";



let openmrsAuthorization = async(req, res, next) => {

    try{
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
    }catch(e){
        console.log(e)
    }
}

let requestSessionToken = async(req, res, next) => {

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
            req.data = {user,token}
            next()
        }
        else
            return res.sendStatus(401);
}

let getProviderData  = (doa => async(req, res) => {

        let user = req.data.user
        user.provider = (await doa.getProviderByUser(user.uuid))[0][0]
        user.providerId = user.provider.provider_id
        user.userId = user.provider.user_id
        let attributes = ((await doa.getProviderAttributeByAttributeTypeUuid(user.providerId,'c34fac13-9c48-4f29-beb1-04c8d0a86754'))[0]).map(result => result.value)
        user.location = (await doa.getLocationByUuid(attributes))[0]
        user.personName = (await doa.getPersonNameByProviderId(user.providerId))[0][0]
        user.personId = user.personName.person_id;
        req.data.timeZone = process.env.TZ
        res.json(req.data)
})(dao)

export {openmrsAuthorization,requestSessionToken, getProviderData }
