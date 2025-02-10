/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

function checkPlans(yourScore, friendScore) {
    if (yourScore > 80) {
        if (friendScore > 80) {
            return "Go for a lunch!";
        } else if (friendScore >= 60) {
            return "Tell your friend: Good luck next time!";
        } else if (friendScore >= 40) {
            return "Keep your friend's message unseen.";
        } else {
            return "Block your friend.";
        }
    } else {
        return "Go home, sleep, and act sad.";
    }
}

// উদাহরণ রান করুন:
console.log(checkPlans(85, 90)); // Output: Go for a lunch!
console.log(checkPlans(85, 75)); // Output: Tell your friend: Good luck next time!
console.log(checkPlans(85, 50)); // Output: Keep your friend's message unseen.
console.log(checkPlans(85, 30)); // Output: Block your friend.
console.log(checkPlans(70, 90)); // Output: Go home, sleep, and act sad.

