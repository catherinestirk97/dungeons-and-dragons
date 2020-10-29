function returnRandomEncounter(encounter) {
    return encounter[Math.floor(Math.random()*encounter.length)];
}

function getRoadsideEncounter(){
    let roadsideEncounters = [
        "A huge nest has fallen from a tree on the side of the road. The strange-looking eggs within seem on the verge of hatching.",
        "A dwarf falls from the sky onto the road with a splat. (Did a creature drop it, was he launched into the air, did he fall from a floating fortress?)",
        "A row of severed heads on spikes and a warning sign claiming, 'Dis Rode Belong Negan'",
        "A crazed halfling, starved out of his mind, jumps to the backs of the PCs and rips their packs apart with his teeth in search of food.",
        "A lush garden is filled with ripe vegetables. It is protected by a magical ward, but what is triggered when entering the garden?",
        "A bridle ties a well-groomed speckled horse to a nearby tree. The horse is fitted with an elegant but empty saddle. Who does it belong to? Do the PCs take it?",
        "A naked bard asks for a lift to the nearest inn where he left his clothes and money.",
        "A band of orcs runs toward the party. They look over their shoulders and try to run through the party. Something dreadful has terrified them, and the party is heading in its direction!",
        "A well-spoken bugbear wearing fine studded leather armor is trapped under a fallen tree. He begs the party to come to his aid.",
        "You find the remains of a pouch that contains coins from a land you do not recognize.",
        "Orcs gather twigs and berries along the road and it’s clear they have non-hostile purpose. Will the PCs attack just because they are orcs?",
        "The PCs mysteriously repeat a piece of road they already passed, though the route has been perfectly straight to this point. The road even includes their footprints.",
        "A person fleeing arranged marriage seeks refuge with the PCs.",
        "A strange old man offers the PCs a scroll in a language they cannot read.",
        "A drunken dwarf staggers along, challenging everyone to a wrestling match.",
        "The road is lined with snakes sleeping in the sun.",
        "A monk, collapsed and bleeding on the roadside, pushes an unremarkable ring into a PC’s hands and desperately whispers, “You must…” before exhaling his last breath.",
        "You find a small leather bag. It smells of moisture, and contains a set of keys and a vellum map to the location of a small keep.",
        "As the road passes through a hilly region, you spy a cave, from which can be heard the voice of a singing female.",
        "A dead raven lies on the road, pierced by a bright blue fletched arrow.",
        "A player (whoever does the roll) trips over, takes 1D4 bludgeoning damage.",
        "A stranger asks to be escorted to a town, but gives the party nothing for doing it.",
        "A mystery key is found laying in the road. If used on a locked door, roll a D20. A 20 will unlock the door, after which the key is lost.",
        "You stumble across a bard. They play a song of healing. Regain up to half your max HP.",
        "You stumble across a bard. They play a song of pain. Lose 1D8 HP (after the bard has long since passed).",
        "You stumble across a bard. They play a song. Nothing special happens.",
        "A cupcake lays in the middle of the road. If the party approaches, they trigger a pitfall into spikes. 3D6 piercing damage.",
        "Door in the middle of the path. If opened, a Hobgoblin is on the other side and gets a surprise attack. If walked around, the Hobgoblin flees.",
        "A majestic elk sprints past with something golden caught in its antlers."
    ];
    document.getElementById("generatedEncounter").innerHTML = `" ${returnRandomEncounter(roadsideEncounters)}"`;
}

function getCityEncounter(){
    let cityEncounters = [
        "A child asks the PCs to help him find his pet dog. But this simple task leads them somewhere where they don’t belong.",
        "Two guards hold a wanted poster. They carefully study the party as they pass by.",
        "A group of kobolds found a home in the sewers beneath an alchemist’s shop. The chemicals have done strange things to them…",
        "An attractive maiden flirts with you. Her very large husband notices.",
        "While haggling in the market the PCs notice people vanish for a few heartbeats then reappear. Nobody finds it strange.",
        "An overweight town guard, panting heavily, chases someone who nears the PCs.",
        "A back alley hides a sinkhole that chutes the party on a slalom slide down into the old pirate’s cove hidden beneath the city.",
        "The PCs must babysit the teenage daughter of the mayor and she’s always looking for trouble.",
        "The local wizard tower is glowing orange.",
        "A powerful fighter hires the characters to lock him up for the night. He has contracted lycanthropy and is afraid he will do something he will regret.",
        "Upon returning to your room at the inn, you discover a body on the floor with a dagger just adjacent. You hear guards storming up the stairs.",
        "Gnomes are holding a sidewalk sale! They have any number of strange and fascinating contraptions.",
        "Townsfolk have been reporting sightings of strange creatures around town. But when questioned about it the next day, it’s like they didn’t see anything.",
        "A young boy has gone missing from his home. Everyone assumes him dead, except his mother swears she can still hear him. Turns out, there’s a tunnel system under the city where a creature is holding him hostage.",
        "Shiny objects have been disappearing all over town. There seem to be an awful lot of crows hanging around lately, but it couldn’t possibly be them. Could it?",
        "Under the bridge downtown, a body has been found. Exotic spices and peppers surround the crime scene.",
        "The local innkeeper has baked the MOST DELICIOUS strawberry rhubarb pie. Nobody can stop eating once they start.",
        "When a strange island floats into view, the town is torn about investigating it. The sailors are eager to explore the new land, but the shaman warns against rushing in too hastily.",
        "One of the town wells allegedly has curative properties. 1D8 healing if investigated",
        "The party finds 100gp in a chest in the middle of the road.",
        "A mirror image of the party walks towards them, but disappears before reaching them.",
        "A vagrant asks for money. They get triple what they give back if they give him some.",
        "A vagrant asks for money. Nothing happens if they give him some.",
        "You find a merchant who is selling five healing potions, 30gp each. ",
        "The party finds a sword in a stone. A DC15 Strength check pulls it out. It is a +1 Longsword.",
        "A drunken dwarf challenges the strongest looking party member to a wrestling match. A DC15 Strength check beats her, and she gives the party member 5gp. The party member gains a level of exhaustion on a failure.",
        "The party comes across a shrine to Tymora - If the party makes an offering, they all gain inspiration",
        "A vagrant asks for food. Nothing happens if they give him some."
    ];
    document.getElementById("generatedEncounter").innerHTML = `" ${returnRandomEncounter(cityEncounters)}"`;
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
    "An arrow strikes a tree trunk just above you, a message wrapped around the shaft.",
    "There is a mysterious flicker, and one member of your party suddenly stops, paralyzed.",
    "In the middle of a forest, it is said, stands a man made of Stone. Carved from Nature’s Cradle, he watches in silent vigil and guards the birthplace of the natural spirits.",
    "You see a man-sized shadow just up the trail waving its arms at you. “Over here, quickly, I’ve caught one!”",
    "Alleged bandits have created a small community of tents in the forest. They have very low internal crime, and the mayor wants you to learn their secrets.",
    "Rumor is spreading of a huge centipede that’s been devouring wolves and deer. It hides in the forest, sleeping by day.",
    "A tree trunk blocks the forest path. Its diameter isn’t wide, but it’s unnaturally heavy and hard to move.",
    "A fish wriggles about on the forest path. Nobody is sure where it came from, but it’s definitely alive.",
    "A message in a bottle washes up along the forest stream. It contains a map to a legendary treasure, but the starting location isn’t clear at all.",
    "As your party approaches a clearing, they are met by a group of what they initially thought to be wild horses. Upon closer look, these horses are all wearing saddles. One saddle still has what appears to be a human leg attached.",
    "A talking parrot squawks on the edge of the trees, complimenting everyone who comes near.",
    "A new, bright purple mushroom has sprouted from the base of a hemlock tree. Every several seconds, it puffs out a cloud of spores.",
    "Thirteen leaves are arranged in a circle in a forest glade.",
    "A little girl is watching you from the trees. The next time you glance over, you see she has vanished",
    "You stumble across a bard. They play a song of rest. Lose any debuffs.",
    "You stumble across a bard. They play a song of good health. Gain 1D8 temporary hitpoints.",
    "You stumble across a bard. They play a song of misery. All party members with inspiration lose it.",
    "There is an unusually vocal chorus of birdsong. Druids, Hunters, Clerics gain inspiration.",
    "A stranger asks for directions from the party to the last town they left. If they help him, he gives them 1D6x10 gold when they next appear in town, if ever.",
    "A man is trapped under a log. If the party helps him, he disappears - it was an illusion.",
    "A man is trapped under a log. If the party helps him, do a DC15 check. A failure drops the log and crushes the man. He has nothing of value on him, but the saviour gets inspiration if they succeed.",
    "The local forest beekeeper is searching for some rare hybrids that lie deeper within the forest. Rumor has it that they will make the best honey in all the land, but they are incredibly poisonous."
    ]
    document.getElementById("generatedEncounter").innerHTML = `" ${returnRandomEncounter(forestEncounters)}"`;
}

