var greeting = 'Privet, ';
var name = "Katerina";
var message = '! Please, check your order:';
var welcome = greeting + name + message;

var sign = 'Internet';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

var el = document.getElementById('greeting');
el.textContent = welcome;

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = subTotal + ' Rub';

var elShipping = document.getElementById('shipping');
elShipping.textContent = shipping + ' Rub';

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = grandTotal + " Rub";
