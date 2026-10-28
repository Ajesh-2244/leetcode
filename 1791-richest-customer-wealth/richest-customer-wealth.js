/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {


    let maxwealth = 0;

    for (let i = 0; i < accounts.length; i++) {
        let total = 0;

        for (let j = 0; j < accounts[i].length; j++) {
            total = total + accounts[i][j];
        }

        if (total > maxwealth) {
            maxwealth = total;
        }
    }

    return maxwealth;


 };