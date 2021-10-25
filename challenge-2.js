import { request } from "http"

const getMetaData = (ip, key) => {
    const uri = ip + '/latest/meta-data' + key

    request(uri, {
        'method': 'GET',
        'Accept': 'application/json',
        'content-type': 'application/json' 
    }).then((resp) => {
        console.log(JSON.stringify(resp))
    }).catch(() => {
        console.log('error is getting the meta data')
    })
}

getMetaData(ip, key)