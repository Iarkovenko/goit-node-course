const validateProductPostData = (keydefaultObj,incomingObj) => {
    // keydefaultObj its Array
    // const keydefaultObj = ["name", "description", "price", "currency", "categories"];
    const keyincomingObj = Object.keys(incomingObj);
    let arr = [];
    keydefaultObj.forEach(keydefault => {
        if (!keyincomingObj.includes(keydefault)) {
            arr.push(keydefault);
        }
    })
    return arr;
}

module.exports = validateProductPostData;
