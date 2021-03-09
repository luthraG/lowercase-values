const isObject = value => value !== null && typeof value === 'object';
const isString = value => value !== null && typeof value === 'string';

function toLowercaseValues(obj, deep) {
    var retObj;
    if (isObject(obj)) {
        retObj = {};

        // Get the object keys
        var objKeys = Object.keys(Object(obj));

        for (var idx = 0; idx < objKeys.length; idx++) {
            if (deep && isObject(obj[objKeys[idx]])) {
                retObj[objKeys[idx]] = toLowercaseValues(obj[objKeys[idx]], deep);
            } else {
                retObj[objKeys[idx]] = isString(obj[objKeys[idx]]) ? obj[objKeys[idx]].toLowerCase() : obj[objKeys[idx]];
            }
        }
    } else {
        retObj = obj;
    }

    return retObj;
}

exports = module.exports = {
    toLowerCaseValues: function (obj, opts) {
        if (!opts || !isObject(opts))
            opts = {
                deep : false
            };

        var retObj,
            deep = opts['deep'];

        retObj = toLowercaseValues(obj, deep);

        return retObj;
    }
};