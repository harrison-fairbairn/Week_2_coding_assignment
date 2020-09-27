/// Video Practice
/// IF ELSE STATEMENT
var firstName = 'same'

if (firstName == 'sam') {
    console.log('I am a NOOB')
}  else {
    console.log('Hey, ' + firstName);
}
/// Since "same" has been assigned to variable firstName and the IF statement
/// is trying to say firstName == "sam" The statement is therefore false and 
/// cannot be executed.
/// Forcing the code to move on to the ELSE statement (or condition)


/// ELSE IF STATEMENT
var costOfMilk = 3;

if (costOfMilk < 2) {
    console.log('We will buy 2 gallons');
} else if (costOfMilk < 3) {
    console.log('We will buy only 1 gallon');
} else {
    console.log('No thanks, way too expensive!');
}
/// When the cost of milk is 3, the IF statement will be SKIPPED since 
/// costOFMilk has been ASSIGNED to 3, and 3 is not less than 2.
/// Then the code will move on to the ELSE IF. The ELSE IF shows costOfMilk 
/// to be less than 3. This is not the case, as the costOfMilk is 3.
/// So we are left with the ELSE statement. The console will print 
/// "No thanks, way too expensive!"

/// BEGIN WEEK 2 CODING ASSIGNMENT <|-_o|>

/// QUESTION 1 answered on the word document page, and here below.

true && false == false; 
true || false == true;
false && false == false; 
true && (false || true) == true;
false || (true && false) == false;
false || 1 < 5 == true;
5 >= 4 && 1 > 3 == false;
10 < 4 || 1 > 4 == false;
12 >= 2 && 1 < 24 == true; 
‘Hello’.charAt(0) == ‘h’ == false; // Also syntax error occurs


/// Question 2 

var isHotOutside = yes;
var isWeekday = false; 
var hasMoneyInPocket = true; 

/// Question 3

var costOfMilk = 2.50;
var moneyInWallet = 80;
var thirstLevel = 7;

/// Question 4 
/// Using the variables you created above and Boolean operators, create variables for the following scenarios:
/// A) shouldBuyIcecream – this should be true if it is hot outside and there is money in your pocket
/// A) Answered below:

var shouldBuyIcecream = 3




/// For Loops have 3 pieces/parts. 
/// Variable initialization - Condition that has to be met - Post Iteration
/// Let's take a look at Part 1 below

for (let i = 0; i < 10; i++)  {     /// 3 sections divided by ; 'semi-colon'
    console.log(i);                 /// This will print 1-9 in the console
}                                   /// as long as i is < 10 we have an iteration

for (let i = 0; i < 20; i++)  {     /// We use FORLOOPS when we know how many 
     if (i % 2 == 0)                /// Times we want to iterate , OR...
     console.log(i);                /// If there is an array that we want to 
}                                   /// Iterate over each element with 

/// For example -  
let names = ['Sam', 'Tom', 'Hillary'];
/// So If you want to iterate over each of these NAMES
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
/// The names or ARRAY run off a 0-based index. This means it starts counting
/// at 0. So 'Sam' would be 0, 'Tom' would be 1, etc.

var letterGrade = '?';

switch (letterGrade) {
    case 'A':
        console.log('90 and above');
        break;
    case 'B':
        console.log('80 to 90');
        break;
    case 'C':
        console.log('70 to 80');
        break;
    case 'D':
        console.log('60-70');
    default:
        console.log('below 60');
}

/// WHILE LOOP EXAMPLE 

let a = 110;
while (a < 10) {
console.log(a);
}
/// This is going to print out ZERO INFINITELY - CREATING AN INFINITE LOOP
/// This can cause crashes - be careful of these - I figured it could.
/// Where as below....
let a = 0;
while (a < 10) {
console.log(a);
a++;
}
/// You will see that this prints a value of - 0-9 since each iteration
/// goes up by one due to the a++;

/// Do While Loop Example
/// Don't forget the A value was assigned ABOVE.
do {
   console.log(a);
}  while (a < 10) 
/// So we set A to == 110. Remember in a DO WHILE loop it will iterate at least 
/// once, so it took the one TRUTH of the statement. "That A == 110."" Printed it.
/// Since of course 110 is not < 10. 

/// User Input Example
var name = window.prompt('What is your name?');
window.alert('Welcome, ${name)'); 
/// above code did not work for some reason.

let username = prompt('Username:');
let password = prompt('Password:');

if (username == 'samy123' && password == '12345')  {
    alert('Welcome back, ' + username);
} else {
    alert('Incorrect username or password')
}
/// Pretty cool stuff 