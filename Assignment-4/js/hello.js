(function (window) {  
    var helloPrinter = {};
    var printWord = "Hello";
    
    helloPrinter.print = function (names) {
      console.log(printWord + " " + names);
    }
        window.helloPrinter = helloPrinter;
    })(window);
