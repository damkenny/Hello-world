# My Introduction to JavaScript

Live Demo![image](https://user-images.githubusercontent.com/50354600/114382325-c6970200-9b7b-11eb-93a3-633c5b8fe45a.png)

JavaScript for me is a langauge that has a large syntax and also has a way of writing it.

I realized JavaScript has a very similar datatype to Python which data types also include boolean, strings, null value, undefined, symbol,object.

Now i am getting used to learning Javascript Function like 

# Alert, Console.log, let, confirm, prompt, Var

Creating web page using HTML and incorporating javaScript using the <script></script> tag.

Shortcut to creating an HTML 
              
              
              <!DOCTYPE html>
               <html>
               <body>
                   <script>
                    'use strict';
                      let name = prompt("What is your name?", "");
                     alert(name);
                   </script>
                </body>
                </html>


Using the function #alert automatically converts any value to a string to show it.

for the string conversion and numeric conversion

input
          
          let value = true;
          alert(typeof value);
 output      
  
           boolean
What i find amazing using Javsscript is the magic using the same language with other language like HTML and CSS.

Example of this is using JavaScript HTML methods:
      
          getElementById()
  Input--
    
        <! DOCTYPPE html>
         <html>
         <body>
      
        <h1> My name is Adeniye Kehinde.</h1>
 
        <p id="demo"> I am a technology enthusiast who loves to code. </>
        
        <button type="button" onclick='document.getElementbyId("demo").innerHTML= "gotcha"'>want to know more!</button>
        
        </body>
        </html>
   Output---
   
    My name is Adeniye Kehinde
    I am a technology enthusiast who loves to code.
    what to know more!
    --gotcha!---
  
    Writing into;
    
    an HTML element, using innerHTML.
    HTML output using document.write().
    alert box, using window.alert().
    browser console, using console.log().

JavaScript does have print function like Python but has a function window.print used to print the content of the current window.

Single line comments start with //.Multi-line comments start with /* and end with */.
          
          
 




