'use strict';
alert("don't use this app.js - it's not in bower component")
(function(document) {
    var Loader = function () { }
    Loader.prototype = {
        require: function (scripts, callback) {
            this.loadCount      = 0;
            this.totalRequired  = scripts.length;
            this.callback       = callback;

            for (var i = 0; i < scripts.length; i++) {
                this.writeScript(scripts[i]);
            }
        },
        loaded: function (evt) {
            this.loadCount++;

            if (this.loadCount == this.totalRequired && typeof this.callback == 'function') this.callback.call();
        },
        writeScript: function (src) {
            var self = this;
            var s = document.createElement('script');
            s.type = "text/javascript";
            s.async = true;
            s.src = src;
            s.addEventListener('load', function (e) { self.loaded(e); }, false);
            var head = document.getElementsByTagName('head')[0];
            head.appendChild(s);
        }
    }

    var isMagnetCmsEditMode=function(){
        var ngAppElem = document.querySelectorAll('[ng-app]');
        if(ngAppElem.length>1)alert("Multiple ng-app definitions in html!")
        if(ngAppElem!=null || ngAppElem[0]!=null && ngAppElem[0].classList!=null ){
            return ngAppElem[0].classList.contains("tagy-cms-edit-mode")
        }
        return false
        /*var $ngAppElem = $("[ng-app]");
         if($ngAppElem.length>1)alert("Multiple ng-app definitions in html!")
         return $ngAppElem.hasClass("tagy-cms-edit-mode")*/
    }

    var loadScripts=function(){
     setTimeout(function(){
     var l=new Loader();
     l.require(['//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js'
     ,'//ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min.js'
     ],function(){
     initApp(angular)
     var l1=new Loader();
     l1.require(['files/script.js'],function(){
     $(document).foundation()
     })
     })

     },0)
     }
    var initApp=function(angular){
        angular.module('tagyCmsClientApp',['cnvrtlyComponents'])
    }

    var isDevMode=function(){
        return window._isDevEnvironment==true
        /*var htmlElem = document.querySelectorAll('html');
         return htmlElem[0].classList.contains("development")*/
    }
    console.log("TEMPLATE INIT app.js isDev=",isDevMode())
    if(!isMagnetCmsEditMode() && !isDevMode()){
        loadScripts()
        //console.log("TEMPLATE APP INITEDDD")
    }else if(isDevMode()){
        initApp(angular)
    }
}(document));
