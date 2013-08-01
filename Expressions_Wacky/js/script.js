// JavaScript

var myvariable
myvariable = "This is my Wacky World";
alert(myvariable);


var children = prompt("How many children do you have")
var friends = prompt("How many friends do you have")
var family = prompt("How many family members do you have")


var total = (children + friends + family)
alert(total)

if (total < 10){
	document.write("Please find some more friends")
};
alert("Great you know a lot of people, I will send you an invitation to our grand opening of our new clothing store")
if (total > 10){
	document.write("Please bring this invitation for an extra 75% off everything in the store")
}
