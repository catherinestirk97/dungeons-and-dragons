function returnRandomEncounter(encounter) {
    return encounter[Math.floor(Math.random()*encounter.length)];
}

function getRoadsideEncounter(){
    let roadsideEncounters = [
        "A huge nest has fallen from a tree on the side of the road. There are strange-looking eggs within it. If investigated, party realises they are a source of food which give 1D6 healing.",
        "A dwarf falls from the sky onto the road with a splat. (Did a creature drop it, was he launched into the air, did he fall from a floating fortress?)",
        "A crazed halfling, starved out of his mind, jumps to the backs of the PCs and rips their packs apart with his teeth in search of food. If not fought, party will lose all of their food.",
        "A lush garden is filled with ripe vegetables. It is protected by a magical ward, need a successful arcana roll of 14 or more to be able to detect the magic and reach the fruit. If players try to take the fruit before checking, it turns mouldy when touched.",
        "A bridle ties a well-groomed speckled horse to a nearby tree. The horse is fitted with an elegant but empty saddle. If taken, players can carry heavy items.",
        "A naked bard asks for a lift to the nearest inn where he left his clothes and money. If helped he gives you 20GP.",
        "A well-spoken bugbear wearing fine studded leather armor is trapped under a fallen tree. He begs the party to come to his aid. If helped, he attacks.",
        "You find the remains of a pouch that contains coins from a land you do not recognize.",
        "Orcs gather twigs and berries along the road and it’s clear they have non-hostile purpose. Will the PCs attack just because they are orcs?",
        "The PCs mysteriously repeat a piece of road they already passed, though the route has been perfectly straight to this point. The road even includes their footprints.",
        "A person fleeing arranged marriage seeks refuge with the PCs. If offered, they can join the party as a cleric.",
        "A strange old man offers the PCs a scroll in a language they cannot read.",
        "A drunken dwarf staggers along, challenging everyone to a wrestling match.A drunken dwarf challenges the strongest looking party member to a wrestling match. A DC15 Strength check beats her, and she gives the party member 5gp. The party member gains a level of exhaustion on a failure.",
        "The road is lined with snakes sleeping in the sun. If the party are not stealthy, they will deal 1d6 poison damage.",
        "A monk, collapsed and bleeding on the roadside, pushes an unremarkable ring into a PC’s hands and desperately whispers, “You must…” before exhaling his last breath.",
        "You find a small leather bag. It smells of moisture, and contains a set of keys and a vellum map to the location of a small keep. If the party decides to go there and use the key, they find 100GP and 2 greater healing potions.",
        "As the road passes through a hilly region, you spy a cave, from which can be heard the voice of a singing female. If the party goes towards the sound, they will fall unconscious and lose 10GP each. ",
        "A dead raven lies on the road, pierced by a bright blue fletched arrow.",
        "A player (whoever does the roll) trips over, takes 1D4 bludgeoning damage.",
        "A stranger asks to be escorted to a town, but gives the party nothing for doing it.",
        "A mystery key is found laying in the road. If used on a locked door, roll a D20. A 20 will unlock the door, after which the key is lost.",
        "The party stumble across a bard. They play a song of healing. Regain up to half your max HP.",
        "The party stumble across a bard. They play a song of pain. Lose 1D8 HP (after the bard has long since passed).",
        "The party stumble across a bard. They play a song. Nothing special happens.",
        "A cupcake lays in the middle of the road. If the party approaches, they trigger a pitfall into spikes. 3D6 piercing damage.",
        "The party come across a door in the middle of the path. If opened, a Hobgoblin is on the other side and gets a surprise attack. If walked around, the Hobgoblin flees.",
        "A majestic elk sprints past with something golden caught in its antlers. If killed, the golden crown (worth 250GP) is retrieved. If not killed, the elk will run away faster than the party can catch up."
    ];
    document.getElementById("generatedEncounter").innerHTML = `" ${returnRandomEncounter(roadsideEncounters)}"`;
}

function getCityEncounter(){
    let cityEncounters = [
        "Two guards hold a wanted poster. They carefully study the party as they pass by. Persuasion check of 9 or higher to see if the guards can be persuaded the posters don't match the party. Otherwise a fight ensues.",
        "An attractive maiden flirts with you. Her very large husband notices.",
        "While haggling in the market the PCs notice people vanish for a few heartbeats then reappear. Nobody finds it strange.",
        "A back alley hides a sinkhole that chutes the party on a slalom slide down into the old pirate’s cove hidden beneath the city. Party gains a treasure map.",
        "The PCs must babysit the teenage daughter of the mayor and she’s always looking for trouble.",
        "A powerful fighter hires the characters to lock him up for the night. He has contracted lycanthropy and is afraid he will do something he will regret. If helped, he will be missing from the chains in the morning, with footprints leading back to where the party came from.",
        "Upon returning to your room at the inn, you discover a body on the floor with a dagger just adjacent. You hear guards storming up the stairs. Persuasion check of 10 or higher to convince the guards your party didn't do it. Otherwise a fight ensues.",
        "Gnomes are holding a sidewalk sale! They have any number of strange and fascinating contraptions. If the party buys them, they do nothing except make noise.",
        "Townsfolk have been reporting sightings of strange creatures around town. But when questioned about it the next day, it’s like they didn’t see anything.",
        "A young boy has gone missing from his home. Everyone assumes him dead, except his mother swears she can still hear him. Turns out, there’s a tunnel system under the city where a creature is holding him hostage.",
        "Shiny objects have been disappearing all over town. There seem to be an awful lot of crows hanging around lately, but it couldn’t possibly be them. Could it?",
        "Under the bridge downtown, a body has been found. Exotic spices and peppers surround the crime scene.",
        "The local innkeeper has baked the MOST DELICIOUS strawberry rhubarb pie. Nobody can stop eating once they start.",
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
    let forestEncounters = ["A flutter of crimson butterflies blocks the dirt path to the creek, going into a maddening frenzy whenever someone approaches. Suddenly, the butterflies then open and close their wings, dealing 1d8 piercing damage.",
    "In the middle of a deep forest, a well sits among what appears to have once been a lovely glade. If investigated, party find arrows in the well. ",
    "Local children have been going missing. They’re found wandering on the edge of the woods. They seem altered somehow and they tell stories of a witch who has been using them in her strange magics.",
    "A bounty hunter tracks his target. Do you help the target? Or the bounty hunter in hopes of a share of the reward...",
    "A door has appeared in the base of a mighty willow tree. The door has been locked for centuries, but one morning the door is wide open. If approached a pack of 5 goblins will spring out to attack with advantage.",
    "As you walk down a forest trail, you hear whistles that repeat throughout the trees. When a member of your party steps off the trail, the whistling stops. If off the trail too long, party member will take 1d4 damage.",
    "There is a mysterious flicker, and one member of your party suddenly stops, paralyzed.",
    "In the middle of a forest, it is said, stands a man made of Stone. Carved from Nature’s Cradle, he watches in silent vigil and guards the birthplace of the natural spirits. If an offering is made, party receives inspiration.",
    "You see a man-sized shadow just up the trail waving its arms at you. “Over here, quickly, I’ve caught one!”",
    "Alleged bandits have created a small community of tents in the forest. They have very low internal crime, and the mayor wants you to learn their secrets.",
    "A tree trunk blocks the forest path. Its diameter isn’t wide, but it’s unnaturally heavy and hard to move. Strength roll of 15 or higher to move it. There is nothing underneath it.",
    "A message in a bottle washes up along the forest stream. It contains a map to a legendary treasure, but the starting location isn’t clear at all.",
    "As your party approaches a clearing, they are met by a group of what they initially thought to be wild horses. Upon closer look, these horses are all wearing saddles. One saddle still has what appears to be a human leg attached.",
    "A talking parrot squawks on the edge of the trees, complimenting everyone who comes near.",
    "A new, bright purple mushroom has sprouted from the base of a hemlock tree. Every several seconds, it puffs out a cloud of spores. If investigated, spores are found out to give 1d4 healing.",
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

