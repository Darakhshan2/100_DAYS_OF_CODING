//Q15 - Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite:
/*
Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

Print a second set of invitation messages, one for each person who is still in your list.*/
var guestsList = ["Ali", "Darak", "laiba"];
console.log("Unupdate guestlist");
guestsList.forEach((function (guestsList) {
    console.log(guestsList);
}));
var deleted = guestsList.splice(2, 1, "Mustufa");
console.log("updated guestlist");
guestsList.forEach((function (guestsList) {
    console.log(guestsList);
}));
guestsList.forEach((function (guestsList) {
    console.log("\n".concat(guestsList, " YOU ARE INVITED FOR DINNER"));
}));
console.log("\nUnfortunately,".concat(deleted[0], " is the one who can't make the dinner"));
