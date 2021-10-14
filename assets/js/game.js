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

// wrap game in startGame() function
// when player is defeated or wins call endGame() function
    // alerts final stats
    // asks to play again
        // if yes calls startGame()
// when player skips or defeats enemy:
    // ask player if they want to shop
        // if no, continue as normal
        // if yes, call shop()function
            // in shop() ask player if they want to: 
                // refill health
                    //if yes: subtract money and refill health to 100
                // upgrade attack
                    // if yes: subtract money and add attack points
                // leave the shop
                    // if leave, alert "goodbye" and exit shop() function
                // if response is invalid, repeat shop() function
        


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

// function to start a new game
var startGame = function() {
    // resets player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // let player know what round they're in
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    
            // pick new enemy based on index of enemyNames array
            var pickedEnemyName = enemyNames[1];
    
            // reset enemy health before round
            enemyHealth = 50;
    
            // pass the pickedEnemyName variable's value into fight function
            fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    // after loop ends, player is either out of health or enemies to fight. Start endGame function
    endGame();
    }

    // play again
    startGame();
};

// function to end the game
var endGame = function() {
    // if player is still alive, player wins
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
         window.alert("Your robot lost in battle.");
    }

    // ask player if they would like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back Soon!");
    }
};
// calls startGame function
startGame()