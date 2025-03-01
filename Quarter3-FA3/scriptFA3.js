function startMission() {
    let num1 = Math.ceil(Math.random() * 20);
    let num2 = Math.ceil(Math.random() * 20);
    let num3 = Math.ceil(Math.random() * 20);

    let highestNumber = Math.max(num1, num2, num3);
    let outcome = "";

    if (highestNumber % 3 === 0) {
        outcome = "Mission Compromised ❌ - Abort!";
    } else if (highestNumber % 2 === 0) {
        outcome = "Mission Accomplished ✅ - Target Secured!";
    } else {
        outcome = "Black Ops Success 🏆 - CIA Asset Recovered!";
    }

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let secretLetter = alphabet[(num1 - 1) % 26];

    let totalMinutes = num2 * num3;
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;

    document.getElementById("random-numbers").innerHTML = "<span class='highlight'>Encrypted Mission Codes:</span> " + num1 + ", " + num2 + ", " + num3;
    document.getElementById("largest-number").innerHTML = "<span class='highlight'>CIA Priority Level:</span> " + highestNumber;
    document.getElementById("mission-outcome").innerHTML = "<span class='highlight'>Mission Status:</span> " + outcome;
    document.getElementById("secret-code").innerHTML = "<span class='highlight'>Decryption Key Found:</span> " + secretLetter;
    document.getElementById("mission-time").innerHTML = "<span class='highlight'>Total Covert Op Time:</span> " + totalMinutes + " minutes (" + hours + " hours and " + minutes + " minutes).";
}
