// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj){
    var helperFunc = function(obj){
        if(Array.isArray(obj)){
            return '[' + obj.map(helperFunc) + ']';
        }
        else if(typeof(obj) === "number" | typeof(obj) === "boolean"){
            return obj.toString();
        }
        else if(obj === null){
            return "null";
        }
        else if(typeof(obj) === "string"){
            return '"' + obj.toString() + '"';
        }
        else if(typeof(obj) === "object"){
            function objHelper(obj){
                var str = '';
                var len = Object.keys(obj).length;
                for (key in obj){
                        if(!(typeof(obj[key]) === "function" | typeof(obj[key]) === "undefined")){
                            if (len > 1){
                                str += helperFunc(key) + ":" + helperFunc(obj[key]) + ',';
                            }
                            else {
                                str += helperFunc(key) + ":" + helperFunc(obj[key]);
                            }
                        }
                len = len-1;
                }
                return str;
            }
            return  '{' + objHelper(obj) + '}';
        }
        else{
            return '';
        }
    };
    var result = helperFunc(obj);
    return result;
};


