// Code your solutions in this file
//functin to write thank yo casrd 
function writeCards(names, event) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`);

}
 writeCards(["Guadalupe","Ollie","Aki"]);
//function to count down
function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}
countDown(10);
countDown(4);