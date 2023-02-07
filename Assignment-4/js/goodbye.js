(function (window){
    var goodbyePrinter = {};
    var printWord = "Good Bye";
    
    goodbyePrinter.print = function (names) {
      console.log(printWord + " " + names);
    }
     
     window.goodbyePrinter = goodbyePrinter;
    })(window);
