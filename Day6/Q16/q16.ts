/*Q16 - More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner:
Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
Add one new guest to the beginning of your array.
Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
Print a new set of invitation messages, one for each person in your list.*/

let mehman:string[] = ["Ali","Darak","Mustufa"];
console.log(`\n This is my old guest list`);

console.log("\n",mehman);

console.log("\n Congratulations , I invited more guest beacuase i have a bigger dinner table");

mehman.unshift("Subhan");
mehman.splice(2,0,"Ilsa");
mehman.push("Malaika");
console.log("/n this is my updated guest list");

console.log(mehman);

mehman.forEach(mehman=>{
    console.log(`\n Welcome! ${mehman} I have to inform you that you are invited for dinner`);
})
