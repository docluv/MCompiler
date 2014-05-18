isFunction = function (actual, message) {
    
	QUnit.push( (typeof actual === "function"), actual, true, message );
    
};


isObject = function (actual, message) {
    
	QUnit.push( (typeof actual === "object"), actual, true, message );
    
};

isEmptyObject = function (actual, message) {

    QUnit.push((Object.keys(actual).length === 0), actual, true, message);

};