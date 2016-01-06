function miniQuery(selector){

  var selector = document.querySelectorAll(selector)


  selector.hide = function(){
    for (var i = 0; i < selector.length; i++){
      selector[i].style.visibility = "hidden"
    }
  }

  selector.show = function(){
    for (var i = 0; i < selector.length; i++){
      selector[i].style.visibility = "visible"
    }
  }

  selector.addClass = function(className){
    for (var i = 0; i < selector.length; i++){
      selector[i].classList.add(className)
    }
  }
  selector.removeClass = function(className){
    for (var i = 0; i < selector.length; i++){
      selector[i].classList.remove(className)
    }
  }
  selector.on = function(eventName, eventHandler) {
    for (var i = 0; i < selector.length; i++) {
      selector[i].addEventListener(eventName, eventHandler)
    }
  }
  selector.trigger = function(eventName) {
    var event = new Event(eventName)
    for (var i = 0; i < selector.length; i++) {
      selector[i].dispatchEvent(event);
    }
  }

  selector.ajax = function(options){
    var url = options["url"];
    var type = options["type"];
    var data = options["data"];
    var promise = new Promise(function(resolve, reject){
      var query = new XMLHttpRequest();
      query.open(type, url, true);

      query.onload = function() {
        if (query.status >= 200 && query.status < 400) {
          resolve(query.response);
        } else {
          reject(query.response);
        }
      }
      query.send(data)
    })
    return promise
  }
  return selector
}

var $ = function(selector) {
  return miniQuery(selector)
}


$.ready = function(fn){
  if ( document.readyState === 'complete' ){
    return fn()
  }
  document.addEventListener( 'DOMContentLoaded', fn, false );
};
