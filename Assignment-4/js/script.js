(function () {

    var names = ["Yaakov", "Johnathan", "Jenson", "Peter", "Frank", "Larry", "Paula", "Jimmy", "Linda"];
    
    for (var i = 0; i < names.length; i++) {
    
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        goodbyePrinter.print(names[i]);
      } 
      else {
        helloPrinter.print(names[i]);
      }
    }
    
    })();
