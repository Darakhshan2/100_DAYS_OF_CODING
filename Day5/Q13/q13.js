//Q13 - Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transport = ["BMW", "ROYAL ROYCE", "CIVIC", "LAMBORGINI"];
for (var _i = 0, transport_1 = transport; _i < transport_1.length; _i++) {
    var char = transport_1[_i];
    console.log("I would like to own a ", char);
}
