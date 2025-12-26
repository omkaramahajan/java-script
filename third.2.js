let gamenum=25;
let username=prompt("guess a number");
while(username != gamenum)
{
    username=prompt("you guess wrong number, try again");
}
console.log("congratulations! you guess the correct number");
