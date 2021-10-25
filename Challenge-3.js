const getObjectValue = (object, key) => {

    if (!key) {
        console.log('No Key')
    }

    let newObj = {...object}
    let error = ''

    key.split('/').forEach(element => {
        if (Object.keys(newObj).indexOf(element) != -1) {
            newObj = newObj[element]
        } else {
            console.log('improper key format')
            error = 'improper Format';
        }
    });
    console.log (error || newObj)
}

getObjectValue(JSON.parse('{"a":{"b":{"c":"d"}}}'), 'a/c')