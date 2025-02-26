// index.js
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const validator = require("validator");

/**
 * generates a unique ID based on first name, last name, and a random UUID.
 * @param {string} firstName - The users first name.
 * @param {string} lastName - The users last name.
 * @returns {string} - The generated unique ID.
 */
function generateUniqueID(firstName, lastName) {
    if (!firstName || !lastName) return null;
    const uniqueStr = uuidv4().replace(/-/g, "").substring(0, 8);
    return `${firstName[0].toLowerCase()}${lastName.toLowerCase()}${uniqueStr}`;
}

/**
 * adds a new user account if valid.
 * @param {Array} userDetails - aray containing [firstName, lastName, email, age].
 * @returns {boolean} - returns true if user was saved successfully otherwise false.
 */
function addAccount(userDetails) {
    if (userDetails.length !== 4) return false;
    
    const [firstName, lastName, email, age] = userDetails;
    
    if (
        typeof firstName !== "string" || firstName.trim() === "" ||
        typeof lastName !== "string" || lastName.trim() === "" ||
        typeof email !== "string" || !validator.isEmail(email) ||
        typeof age !== "number" || age < 18
    ) {
        return false;
    }
    
    const uniqueID = generateUniqueID(firstName, lastName);
    const userData = `${firstName},${lastName},${email},${age},${uniqueID}\n`;
    
    try {
        fs.appendFileSync("users.txt", userData, "utf8");
        return true;
    } catch (err) {
        console.error("Error writing to file:", err);
        return false;
    }
}

module.exports = { generateUniqueID, addAccount };
