// function to create random variables
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

// fight function
var fight = function(enemy) {
    // repeat and execute as long as enemy-robot is alive
    while(playerInfo.health > 0 && enemy.health > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
        // if player chooses to skip:
        if(promptFight === "SKIP" || promptFight === "skip") {
            // confirm player wants to skip the game
            var confirmSkip = window.confirm("Are you'd sure you'd like to quit?");

            // is yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip the fight. Goodbye!");
                // subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
        }

        // generate random damage value based on players attack
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );

        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");

            // award player money for winning
            playerInfo.money = playerInfo.money + 20;

            // leave while loop since enemy is dead
            break;
        }
        
        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        var damage = randomNumber(enemy.attack - 3, enemy.attack)
        // remove player's health by subtracting the amount set in the enemy.attack variable
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );
    
        // check player's health
        if(playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            // leave while loop if player is dead
            break;
        }
        
        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
};

// function to start a new game
var startGame = function() {
    // resets player stats
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            // let player know what round they're in
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            // pick new enemy based on index of enemy.names array
            var pickedEnemyObj = enemyInfo[i];
    
            // reset enemy health before round
            pickedEnemyObj.health = randomNumber(40, 60);
    
            // pass the pickedenemy.name variable's value into fight function
            fight(pickedEnemyObj);

            // if we're not at the last enemy of the array:
            if (playerInfo.health > 0 && i < enemy.names.length -1) {
                // ask player if they want to go to shop before the next round
                var storeConfirm = window.confirm("The fight is over. Visit the store before the next round?");

                // if yes, take them to the store() function
                if (storeConfirm) {    
                    shop();
                }                
            }
        }

        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    // after loop ends, player is either out of health or enemies to fight. Start endGame function
    endGame();
};


// function to end the game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you!");

    // if player is still alive, player wins
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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

// go to shop between rounds
var shop = function() {
    // ask player what they would choose to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 'REFILL' 'UPGRADE' OR 'LEAVE' to make a choice"
    );

    // use a switch to carry out action
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            playerInfo.refillHealth();
            break;

        case "upgrade":
        case "UPGRADE":
            playerInfo.upgradeAttack();
            break;

        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.");
            // do nothing, so the function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            // call shop() again to force player to choose a valid option
            shop();
            break;
    }
};

// get player name function
var getPlayerName = function() {
    var name = "";
    debugger;
    // loop to ask player for a name
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is " + name);
    return name;
};

// defines playerInfo and enemyInfo
var playerInfo = { 
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 money.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function () {
        if (this.money >= 7) {
            window.alert("Upgrading players attack by 6 for 7 money ");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

console.log(playerInfo.name);

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);

// calls startGame function
startGame()
