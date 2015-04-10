//
//  Action.js
//  Find
//
//  Created by Andrew Brandt on 3/3/15.
//  Copyright (c) 2015 dorystudios. All rights reserved.
//

var Action = function() {};

Action.prototype = {
    
    run: function(arguments) {
        // Here, you can run code that modifies the document and/or prepares
        // things to pass to your action's native code.
        alert("hello");
        
        var string = prompt("Enter text to find", "");
        
        if (string.length > 0) {
            
            //var new_string = '<a class="ctrl-f-found" style="font-weight:bold;">'+string+'>></a>'
            var new_string = '<span style="background-color: red;">'+string+'</span>'
            var old_string = new RegExp(string, "g")
            document.body.innerHTML = document.body.innerHTML.replace(old_string,new_string)
            
            var arr = document.body.getElementByClassName("ctrl-f-found")
            var count = 0;
            var c = true;
            Array.prototype.forEach.call(arr, function(el) {
                var stringID = "ctrl-f-"+count
                count += 1
                count %= arr.length
                el.id = stringID
                var hashString = "./#ctrl-f-"+count
                el.hr ef = hashString
                if (c) { alert(el.href); c=false; }
            })
            
        } else {
            alert("no text")
        }
        
        
        arguments.completionFunction({ "currentBackgroundColor" : document.body.style.backgroundColor })
    },
    
    finalize: function(arguments) {
        // This method is run after the native code completes.
        
        // We'll see if the native code has passed us a new background style,
        // and set it on the body.
        
        var newBackgroundColor = arguments["newBackgroundColor"]
        if (newBackgroundColor) {
            // We'll set document.body.style.background, to override any
            // existing background.
            document.body.style.background = newBackgroundColor
        } else {
            // If nothing's been returned to us, we'll set the background to
            // blue.
            document.body.style.background= "blue"
        }
    }
    
};
    
var ExtensionPreprocessingJS = new Action
