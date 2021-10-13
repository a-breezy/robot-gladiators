/* Game States:
"Win" - Player robot has defeated all enemy robots
    -Fight all enemy robots
    -Defeat all enemy robots
"Lose" - Player robot health is zero or less
    -determine how to make the lose game state
        -is there a losing prompt
        -is there a prompt to restart
*/ 

var playerName = window.prompt("What's your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can log multiple things at once:
// console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// console.log(enemyNames)
// console.log(enemyNames.length)
// console.log(enemyNames[1])
// console.log(enemyNames[2])
// console.log(enemyNames[3])

// for(var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index");
// }

var fight = function(enemyName) {
    // alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight)
    
    // if player chooses to fight
    if(promptFight === "FIGHT" || promptFight === "fight") {
        // remove  enemy's health by subtracting the amount set in  the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.")

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")
    
        // check player's health
        if(playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
        // if player chooses to skip:
        else if(promptFight === "SKIP" || promptFight === "skip") {
        // confirm player wants to skip the game
        var confirmSkip = window.confirm("Are you'd sure you'd like to quit?");

        // is yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip the fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }

        // if no (false), ask question again by running fight() again
        else {
            fight();
        }
    }
    else {
        window.alert("You need to choose a valid response. Try again.")
    }

}

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}