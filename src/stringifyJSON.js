// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj){
    var helperFunc = function(obj){
        if(Array.isArray(obj)){
            console.log(obj, "hit array..."); 
            if (obj.length === 0){
                return '[]';
            }
            else {
                return '[' + helperFunc(obj[0]) + ']';
            }
        }
        else if(Object.prototype.toString.call(obj) === "[object Array]"){
            console.log(obj, 'hit an object...');
            return;
        }
        else if(typeof(obj) === "number" | typeof(obj) === "boolean"){
            console.log(obj, 'hit boolean or number...')
            return obj.toString();
        }
        else if(obj === null){
            console.log(obj, "hit null...")
            return "null";
        }
        else if(typeof(obj) === "string"){
            console.log(obj, 'hit string...')
            return '"' + obj.toString() + '"';
        }
        else{
            console.log(obj, 'hit other...');
            return '';
        }
    };
    var result = helperFunc(obj);
    console.log(result);
    return result;

};


