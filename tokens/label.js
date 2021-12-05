function padRight ( str, len = 0 ) {
    return str + ' '.repeat( Math.max( len - str.length, 0 ) );
}

function label( { method, params: [len] } ) {
    if (method.toUpperCase() == 'INFO')
        return padRight( `\x1b[36m[${method.toUpperCase()}]\x1b[0m`, len );
    else if (method.toUpperCase() == 'ERROR')
        return padRight( `\x1b[31m[${method.toUpperCase()}]\x1b[0m`, len );
    else if (method.toUpperCase() == 'WARN')
        return padRight( `\x1b[33m[${method.toUpperCase()}]\x1b[0m`, len );
    else
        return padRight( `[${method.toUpperCase()}]`, len );
}

module.exports = {
    padRight,
    label
};
