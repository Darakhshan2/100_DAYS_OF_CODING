//Q15 - Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite:
/*
Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
Print a second set of invitation messages, one for each person who is still in your list.*/

let guestsList:string[] = ["Ali","Darak","laiba"];
// before changes guestlist
console.log(`Unupdated guestlist`);
guestsList.forEach((guestsList =>{
    console.log(guestsList);
}))
//  after changes
let deleted = guestsList.splice(2,1,"Mustufa");
console.log(`updated guestlist`);

guestsList.forEach((guestsList =>{
    console.log(guestsList);
}))
// print message for updated guestlist
guestsList.forEach((guestsList =>{
    console.log(`\n${guestsList} YOU ARE INVITED FOR DINNER`);
}))
// the one who cant make dinner
console.log(`\nUnfortunately,${deleted[0]} is the one who can't make the dinner`)