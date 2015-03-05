// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
    var elements = [];
    var helperFunc = function(html){
        console.log(html);
        if(_.contains(html.classList, className)){
            elements.push(html);
        };
        _.each(html.childNodes, function(node){ helperFunc(node) });
    };
    helperFunc(document.body);
    return elements;
};
