// test.js
const { generateUniqueID, addAccount } = require("./index");

// Test generateUniqueID function
console.log("Generated ID:", generateUniqueID("Alan", "Turing"));

// Test addAccount function
const user1 = ["Alan", "Turing", "aturing@w3c.com", 58];
const user2 = ["Tim", "Berners-Lee", "tim@w3c.com", 25];
const user3 = ["Ted", "Nelson", "ted.n@w3c.com", 43];

console.log("Adding User 1:", addAccount(user1));
console.log("Adding User 2:", addAccount(user2));
console.log("Adding User 3:", addAccount(user3));
