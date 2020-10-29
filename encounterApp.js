function returnRandomEncounter(encounter) {
    return encounter[Math.floor(Math.random()*encounter.length)];
}

function getForestEncounter(){
    let forestEncounters = ["A flutter of crimson butterflies blocks the dirt path to the creek, going into a maddening frenzy whenever someone approaches. Suddenly, the butterflies then open and close their wings, spelling out the word “Teeth” before flying away",
    "The local alchemist has been discarding expired potion bottles by mixing them into his garden compost and dumping them into the stagnant pond behind his house. Not only are the crops gigantic, but the pond’s surface is a thick sludge. Now a large bubble is rising to the surface…",
    "In the middle of a deep forest, a well sits among what appears to have once been a lovely glade. Now, the trees around it are dying and rotting on the spot, and light appears to struggle to reach the glade.",
    "Local children have been going missing. They’re found wandering on the edge of the woods. They seem altered somehow and they tell stories of a witch who has been using them in her strange magics.",
    "A child asks the PCs to help him find his pet dog. But this simple task leads them somewhere where they don’t belong.",
    "A bounty hunter tracks his target. Do you help the target? Or the bounty hunter in hopes of a share of the reward...",
    "A homestead has delicious apples drooping just over a fence. The house is protected by a magical ward, but what is triggered when a single apple is taken?",
    "A door has appeared in the base of a mighty willow tree. The door has been locked for centuries, but one morning the door is wide open. Is it an invitation to enter? Or did something exit?",
    "The PCs feel like they are being followed as they stroll through the woods. Who is hunting them?",
    "As you walk down a forest trail, you hear whistles that repeat throughout the trees. When a member of your party steps off the trail, the whistling stops.",
    " An arrow strikes a tree trunk just above you, a message wrapped around the shaft.",
    "There is a mysterious flicker, and one member of your party suddenly stops, paralyzed.",
    " In the middle of a forest, it is said, stands a man made of Stone. Carved from Nature’s Cradle, he watches in silent vigil and guards the birthplace of the natural spirits.",
    "You see a man-sized shadow just up the trail waving its arms at you. “Over here, quickly, I’ve caught one!”",
    "Alleged bandits have created a small community of tents in the forest. They have very low internal crime, and the mayor wants you to learn their secrets.",
    "Rumor is spreading of a huge centipede that’s been devouring wolves and deer. It hides in the forest, sleeping by day.",
    " A tree trunk blocks the forest path. Its diameter isn’t wide, but it’s unnaturally heavy and hard to move.",
    "A fish wriggles about on the forest path. Nobody is sure where it came from, but it’s definitely alive.",
    "A message in a bottle washes up along the forest stream. It contains a map to a legendary treasure, but the starting location isn’t clear at all.",
    "As your party approaches a clearing, they are met by a group of what they initially thought to be wild horses. Upon closer look, these horses are all wearing saddles. One saddle still has what appears to be a human leg attached.",
    "A talking parrot squawks on the edge of the trees, complimenting everyone who comes near.",
    "A new, bright purple mushroom has sprouted from the base of a hemlock tree. Every several seconds, it puffs out a cloud of spores.",
    "Thirteen leaves are arranged in a circle in a forest glade.",
    "A little girl is watching you from the trees. The next time you glance over, you see she has vanished",
    "The local forest beekeeper is searching for some rare hybrids that lie deeper within the forest. Rumor has it that they will make the best honey in all the land, but they are incredibly poisonous."
    ]
    document.getElementById("generatedEncounter").innerHTML = `" ${returnRandomEncounter(forestEncounters)}"`;
}