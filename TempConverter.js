// temperature converter script

// TEMPERATURE CONVERTER

// parseFloat() method parses a value as string and returns the first number - parseFloat(string)
// toFixed() method rounds string to specified number of decimals
// oninput - event that occurs when value of an <input> <textarea> element is changed
// getElementById - method returns an element with specified values


// declare variables
let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');

// function for celsius to fahrenheit
celsius.oninput = function() {
    let f = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(2));
  
}
//convert celsius to fahrenheit and store it in variable f
//take the value from the celsius(user input) and convert it to floating-point number
//then multiply by 9, divide by 5 and add 32 
//then convert string to a float and round to two decimal places.


// function for fahrenheit to celsius
fahrenheit.oninput = function() {
    let c = (parseFloat(fahrenheit.value) - 32) * 5 / 9;
    celsius.value = parseFloat(c.toFixed(2));
}
//convert fahrenheit to celsius and store it in variable f
//take the value from the fahrenheit(user input) and convert it to floating-point number
//then subtract by 32), multpily by 5, then divide by 9 
//then convert string to a float and round to two decimal places


// WEIGHT CONVERTER

let kilograms = document.getElementById('kilograms');
let pounds = document.getElementById('pounds');
let ounces = document.getElementById('ounces');
let grams = document.getElementById('grams');
let stones = document.getElementById('stones');

// kilograms to ->
kilograms.oninput = function() {
    let kg = (parseFloat(kilograms.value) * 2.2);
    let oz = (parseFloat(kilograms.value) * 35.274);
    let g = (parseFloat(kilograms.value) * 1000);
    let st = (parseFloat(kilograms.value) * 0.157);
    pounds.value = parseFloat(kg.toFixed(2));
    ounces.value = parseFloat(oz.toFixed(2));
    grams.value = parseFloat(g.toFixed(2));
    stones.value = parseFloat(st.toFixed(2));
}

// pounds to ->
pounds.oninput = function() {
    let lbs = (parseFloat(pounds.value) / 2.2);
    let oz = (parseFloat(pounds.value) * 16);
    let g = (parseFloat(pounds.value) / 0.0022);
    let st = (parseFloat(pounds.value) * 0.0714);
    kilograms.value = parseFloat(lbs.toFixed(2));
    ounces.value = parseFloat(oz.toFixed(2));
    grams.value = parseFloat(g.toFixed(2));
    stones.value = parseFloat(st.toFixed(2));
}

// ounces to ->
ounces.oninput = function() {
    let oz = (parseFloat(ounces.value) / 35.274);
    let lbs = (parseFloat(ounces.value) * 0.0625);
    let g = (parseFloat(ounces.value) / 0.0352);
    let st = (parseFloat(ounces.value) * 0.00446);
    kilograms.value = parseFloat(oz.toFixed(2));
    pounds.value = parseFloat(lbs.toFixed(2));
    grams.value = parseFloat(g.toFixed(2));
    stones.value = parseFloat(st.toFixed(2));
}

// grams to ->
grams.oninput = function() {
    let g = (parseFloat(grams.value) / 1000);
    let lbs = (parseFloat(grams.value) * 0.0022);
    let oz = (parseFloat(grams.value) * 0.0352);
    let st = (parseFloat(grams.value) * 0.000157);
    kilograms.value = parseFloat(g.toFixed(2));
    pounds.value = parseFloat(lbs.toFixed(2));
    ounces.value = parseFloat(oz.toFixed(2));
    stones.value = parseFloat(st.toFixed(2));
}
// stones to ->
stones.oninput = function() {
    let st = (parseFloat(stones.value) / 0.157);
    let lbs = (parseFloat(stones.value) * 14);
    let oz = (parseFloat(stones.value) * 224);
    let g = (parseFloat(stones.value) / 0.000157);
    kilograms.value = parseFloat(st.toFixed(2));
    pounds.value = parseFloat(lbs.toFixed(2));
    ounces.value = parseFloat(oz.toFixed(2));
    grams.value = parseFloat(g.toFixed(2));
}

// LENGTH


let millimetres = document.getElementById('millimetres');
let centimetres = document.getElementById('centimetres');
let metres = document.getElementById('metres');
let kilometres = document.getElementById('kilometres');
let inches = document.getElementById('inches');
let feet = document.getElementById('feet');
let yards = document.getElementById('yards');
let miles = document.getElementById('miles');

// millimetres to ->
millimetres.oninput = function() {
    let cm = (parseFloat(millimetres.value) / 10);
    let m = (parseFloat(millimetres.value) / 1000);
    let km = (parseFloat(millimetres.value) / 1000000);
    let inc = (parseFloat(millimetres.value) / 25.4);
    let ft = (parseFloat(millimetres.value) / 304.8);
    let yd = (parseFloat(millimetres.value) / 914.4);
    let mi = (parseFloat(millimetres.value) / 1609344);
    
    centimetres.value = parseFloat(cm.toFixed(2));
    metres.value = parseFloat(m.toFixed(2));
    kilometres.value = parseFloat(km.toFixed(2));
    inches.value = parseFloat(inc.toFixed(2));
    feet.value = parseFloat(ft.toFixed(2));
    yards.value = parseFloat(yd.toFixed(2));
    miles.value = parseFloat(mi.toFixed(2));
}
// centimetres to ->
centimetres.oninput = function() {
    let mm = (parseFloat(centimetres.value) * 10);
    let m = (parseFloat(centimetres.value) / 100);
    let km = (parseFloat(centimetres.value) / 100000);
    let inc = (parseFloat(centimetres.value) / 2.54);
    let ft = (parseFloat(centimetres.value) / 30.48);
    let yd = (parseFloat(centimetres.value) / 91.44);
    let mi = (parseFloat(centimetres.value) / 160934.4);
    
    millimetres.value = parseFloat(mm.toFixed(2));
    metres.value = parseFloat(m.toFixed(2));
    kilometres.value = parseFloat(km.toFixed(2));
    inches.value = parseFloat(inc.toFixed(2));
    feet.value = parseFloat(ft.toFixed(2));
    yards.value = parseFloat(yd.toFixed(2));
    miles.value = parseFloat(mi.toFixed(2));
}
// metres to ->
metres.oninput = function() {
    let mm = (parseFloat(metres.value) * 1000);
    let cm = (parseFloat(metres.value) * 100);
    let km = (parseFloat(metres.value) / 1000);
    let inc = (parseFloat(metres.value) / 0.0254);
    let ft = (parseFloat(metres.value) / 0.3048);
    let yd = (parseFloat(metres.value) / 0.9144);
    let mi = (parseFloat(metres.value) / 1609.344);
    
    millimetres.value = parseFloat(mm.toFixed(2));
    centimetres.value = parseFloat(cm.toFixed(2));
    kilometres.value = parseFloat(km.toFixed(2));
    inches.value = parseFloat(inc.toFixed(2));
    feet.value = parseFloat(ft.toFixed(2));
    yards.value = parseFloat(yd.toFixed(2));
    miles.value = parseFloat(mi.toFixed(2));
}
// kilometres to ->
kilometres.oninput = function() {
    let mm = (parseFloat(kilometres.value) * 1000000);
    let cm = (parseFloat(kilometres.value) * 100000);
    let m = (parseFloat(kilometres.value) * 1000);
    let inc = (parseFloat(kilometres.value) * 39370.1);
    let ft = (parseFloat(kilometres.value) * 3280.84);
    let yd = (parseFloat(kilometres.value) / 0.0009144);
    let mi = (parseFloat(kilometres.value) / 1.609344);
    
    millimetres.value = parseFloat(mm.toFixed(2));
    centimetres.value = parseFloat(cm.toFixed(2));
    metres.value = parseFloat(m.toFixed(2));
    inches.value = parseFloat(inc.toFixed(2));
    feet.value = parseFloat(ft.toFixed(2));
    yards.value = parseFloat(yd.toFixed(2));
    miles.value = parseFloat(mi.toFixed(2));
}




