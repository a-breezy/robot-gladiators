var playerName = window.prompt("What's your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames)
console.log(enemyNames.length)
console.log(enemyNames[0])
console.log(enemyNames[3])

var fight = function(enemyName) {
    // repeat and execute as long as enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight)
        
        // if player chooses to skip:
        if(promptFight === "SKIP" || promptFight === "skip") {
            // confirm player wants to skip the game
            var confirmSkip = window.confirm("Are you'd sure you'd like to quit?");

            // is yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip the fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        // remove  enemy's health by subtracting the amount set in  the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.")

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            // award player money for winning
            playerMoney = playerMoney + 20

            // leave while loop since enemy is dead
            break;
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
            // leave while loop if player is dead
            break;
        }
        
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

// for (var i = 0; i < enemyNames.length; i++) {
//     debugger;
//     // call fight function with enemy-robot
//     fight(enemyNames[i]);
// }

for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        // let player know what round they're in
        window.alert("Welcome to Robot Gladiators! Round " + (1 + 1));

        // pick new enemy based on index of enemyNames array
        var pickedEnemyName = enemyNames[1];

        // reset enemy health before round
        enemyHealth = 50;

        // use debugger to check what's going on with the code
        // debugger;

        // pass the pickedEnemyName variable's value into fight function
        fight(pickedEnemyName);
    }
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}