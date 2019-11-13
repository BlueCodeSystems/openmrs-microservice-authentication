import connection from "./connection";

let getProviderAttributeByAttributeTypeUuid = (connection => async(providerId,attributeTypeUuid) => {

        return await connection.execute(`SELECT value_reference AS value FROM provider_attribute WHERE provider_id = ? AND attribute_type_id =(SELECT provider_attribute_type_id FROM provider_attribute_type WHERE uuid = ?) AND voided = 0`,[providerId, attributeTypeUuid])
})(connection)

let getLocationByUuid = (connection => async(uuid) => {

    return await connection.execute(`SELECT * FROM location WHERE uuid IN (${parseArrayToInQueryString(uuid)}) AND retired = 0`)
})(connection)

let getPersonNameByProviderId = (connection => async(providerId) => await connection.execute(`SELECT person_name.* FROM person_name JOIN provider ON person_name.person_id = provider.person_id WHERE provider_id = ? AND person_name.voided = 0`,[providerId]))(connection)

let getProviderByUser = (connection => async(userUuid) => await connection.execute(`SELECT users.user_id, provider.* FROM provider JOIN users ON users.person_id = provider.person_id WHERE users.uuid = ?`,[userUuid]))(connection)


let parseArrayToInQueryString = elements=> {
        
    if(elements.length > 1){
       let string = ""
       for(let element of elements){

               if(elements.indexOf(element) === elements.length-1)
                   string+=`'${element}'`
               else
                   string+=`'${element}',`
      }
   return string
    }
    else if(elements.length === 1)
       return `'${elements[0]}'`
    else
       return null
}
export default {
    getProviderAttributeByAttributeTypeUuid,
    getLocationByUuid,
    getPersonNameByProviderId,
    getProviderByUser
}