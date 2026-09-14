function upgradeCrew() {

    const pirates = [
        {
            name: "A",
            bounty: 1500000000,
            strength: 200
        },
        {
            name: "B",
            bounty: 20000000,
            strength: 500
        },
        {
            name: "C",
            bounty: 4000000000,
            strength: 800
        }
    ];

    const awakenedPirates = pirates.map(pirate => ({
        name: pirate.name.toUpperCase(),
        bounty: pirate.bounty * 2,
        strength: pirate.strength * 1.5
    }));

    const available = awakenedPirates.filter(pirate => pirate.strength > 500);


    const monsterTrioCandidates = available.map(pirate => ({
        name: pirate.name,
        bounty: pirate.bounty,
        strength: pirate.strength
    }));

    console.log("Monster Trio Candidates - strength > 500:", monsterTrioCandidates);


}

const crewList = [
    { name: "Luffy", bounty: 1500000000, strength: 300 },
    { name: "Zoro", bounty: 320000000, strength: 500 },
    { name: "Sanji", bounty: 330000000, strength: 400 },
    { name: "Nami", bounty: 66000000, strength: 200 },      
    { name: "Chopper", bounty: 1000, strength: 100 }
];

function printBountyLeaderBoard(crewList) {
    const icons = ['🥇 ', '🥈 ', '🥉 '];
    crewList.sort((a, b) => b.bounty - a.bounty);
    console.log("Bounty Leaderboard:");
    for (let i = 0; i < crewList.length; i++) {
        const member = crewList[i];
        const icon = icons[i] || '';
        console.log(`Name: ${icon}${member.name} - Bounty: ${member.bounty}`);
    };
};

upgradeCrew();
printBountyLeaderBoard(crewList);
