let devilFruit = "gomu-gomu";
let effect = "";
if (devilFruit === "gomu-gomu") {
    effect = "Gear 5 Unlocked!";
} else if (devilFruit === "mera-mera") {
    effect = "Flame Control!";
} else if (devilFruit === "ope-ope") {
    effect = "Room & Ope!";
} else if (devilFruit === "none") {
    effect = "Normal Human";
} else {
    effect = "Unknown Devil Fruit";
}

console.log(`Devil Fruit: ${devilFruit}, Effect: ${effect}`);

