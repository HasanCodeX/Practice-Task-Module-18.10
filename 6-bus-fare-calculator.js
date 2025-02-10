/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

function calculateTicketFare(age, isStudent) {
    const regularFare = 800;

    if (age < 10) {
        return "Free";
    } else if (isStudent) {
        return `Ticket Price: ${regularFare * 0.5} tk (50% Discount for Students)`;
    } else if (age >= 60) {
        return `Ticket Price: ${regularFare * 0.85} tk (15% Discount for Senior Citizens)`;
    } else {
        return `Ticket Price: ${regularFare} tk (Regular Fare)`;
    }
}

// ✅ Test Cases
console.log(calculateTicketFare(8, false));   // Output: Free
console.log(calculateTicketFare(20, true));   // Output: Ticket Price: 400 tk (50% Discount for Students)
console.log(calculateTicketFare(65, false));  // Output: Ticket Price: 680 tk (15% Discount for Senior Citizens)
console.log(calculateTicketFare(30, false));  // Output: Ticket Price: 800 tk (Regular Fare)
