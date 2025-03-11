# The-Converter
Conversion of units - Temperature, weight and length using HTML, CSS, JavaScript

A small project of converting units of tempserature ( degree celsius to fahrenheit ), weight ( kilograms, grams, pounds, stones, ounces ) and then length ( millimetres, centimetres, metres, kilometres, inches, feet, yards, miles ( metric and imperial)).

I found the project challenging. the HTML was pretty straight forward. Most of the CSS was simple however i had to go back to my notes on using the grid layout. However i perservered i figured it out.
The Javascript was a bit overwhelming. I got stuck when it came to requesting the value of the input and then changing all of the values at the same time. Quick search on MDN web docs and W3schools i managed to figure it out and get it working fin.
Lessons learnt - parseFloat () method parses a value as a string and returns the first number -   
                 parseFloat(string).
                - oninput - event that occurs when a value of an <input> or <textarea> element is 
                 changed.
                - to Fixed() method rounds the string to a specified number of decimals
                - getElemetById - method returns an element with specified values

//convert celsius to fahrenheit and store it in variable f
//take the value from the celsius(user input) and convert it to floating-point number
//then multiply by 9, divide by 5 and add 32 
//then convert string to a float and round to two decimal places.

//convert fahrenheit to celsius and store it in variable f
//take the value from the fahrenheit(user input) and convert it to floating-point number
//then subtract by 32), multpily by 5, then divide by 9 
//then convert string to a float and round to two decimal places

** resources used - MDN web docs, W3Schools, Brad Traversey online course
              
