
         Func = function() {
         var x=document.querySelector("#myid");
         li1=document.createElement("li");
         var cbox=document.createElement("input");
         cbox.type="checkbox";contents2=document.createTextNode(document.querySelector("#a").value);        
         li1.appendChild(cbox);
         li1.appendChild(contents2);
         x.appendChild(li1);
         }
