var playerName = window.prompt("What's your robot's name?")
var playerHealth = 100;
var playerAttack = 10;

// you can log multiple things at once:
console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // subtracts value of playerAttack from value of enemyHealth
    enemyHealth = enemyHealth - playerAttack

    // log resulting message to the console so that we know that it worked
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.")

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // subtracts value of enemyAttack from value of playerHealth
    playerHealth = playerHealth - enemyAttack

    // log resulting message to the console so that we know that it worked
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")

    // check player's health
    if(playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}

fight();