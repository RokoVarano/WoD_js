class Merit {
  constructor(
    name,
    cost,
    description,
    source,
  ) {
    this.name = name;
    this.cost = cost;
    this.description = description;
    this.source = source;
  }
}

const mortalMerits = {
  physical: {
    acutesenses: new Merit(
      `Acute Sense`,
      1,
      `One of your senses is exceptionally sharp, be it sight, hearing, smell, touch, or taste. The difficulties for all tasks involving the use of this particular sense are reduced by two. This Merit can be combined with the Discipline of Auspex to produce superhuman sensory acuity.`,
      'V20, 479',
    ),
    ambidextrous: new Merit(
      `Abidextrous`,
      1,
      `You have a high degree of off-hand dexterity and can perform tasks with the “wrong” hand at no penalty. The rules for taking multiple actions still apply, but you do not suffer a difficulty penalty if you use two weapons or are forced to use your off hand.`,
      `V20, 480`,
    ),
    bruiser: new Merit(
      `Bruiser`,
      1,
      `Your appearance is sufficiently thug-like to inspire fear (or at least disquiet) in those who see you. While you’re not necessarily ugly, you do radiate a quiet menace, to the point where people cross the street to avoid passing near you. All Intimidation rolls against those who have not demonstrated their physical superiority to you are at -1 difficulty.`,
      `V20, 480`
    ),
    catlikebalance: new Merit(
      `Catlike Balance`,
      1,
      `You possess an innately perfect sense of balance. Characters with this Merit reduce difficulties of all balance-related rolls (e.g., Dexterity + Athletics to walk along a narrow ledge) by two.`,
      `V20, 480`,
    ),
    friendlyface: new Merit(
      `Friendly Face`,
      1,
      `You have a face that reminds everyone of someone, to the point where strangers are inclined to be wellinclined toward you because of it. The effect doesn’t fade even if you explain the “mistake,” leaving you at -1 difficulty on all appropriate Social-based rolls (yesfor Seduction, no for Intimidation, for example) when a stranger is involved. This Merit only functions on a first meeting.`,
      `V20, 480`,
    ),
    enchantingvoice: new Merit(
      `Enchanting Voice`,
      2,
      `There is something about your voice that others cannot ignore. When you command, they are cowed. When you seduce, they swoon. Whether thundering, soothing, persuading, or simply talking, your voice commands attention. The difficulties of all rolls involving the use of the voice to persuade, charm, or command are reduced by two.`,
      `V20, 480`,
    ),
    daredevil: new Merit(
      `Daredevil`,
      3,
      `You are good at taking risks, and even better at surviving them. When attempting exceptionally risky non-combat actions (such as leaping from one moving car to another), characters with this Merit add an additional three dice to their rolls, and negate a single botch die that may result from such a roll. Generally, such actions must be at least difficulty 8 and have the potential to inflict at least three health levels of damage if failed.`,
      `V20, 480`
    ),
    hugesize: new Merit(
      `Huge Size`,
      4,
      `You are abnormally large in size, at least 6’10” and 300 pounds in weight (well over two meters tall and over 130 kgs). Aside from making you extremely noticeable in public, this extra mass bestows an addition al Bruised health level. Characters with this Merit may also gain bonuses to push objects, open barred doors, avoid being knocked down, etc`,
      `V20, 480`,
      ),
    hardofhearing: new Merit(
      `Hard of Hearing`,
      -1,
      `Your hearing is defective. The difficulties of any rolls involving the use of hearing are increased by two.`,
      `V20, 480`,
    ),
    short: new Merit(
      `Short`,
      -1,
      `You are well below average height — four and a half feet (1.5 meters) tall or less. You have difficulty reaching or manipulating objects designed for normal adult size, and your running speed is one-half that of an average human.`,
      `V20, 481`,
    ),
    tictwitch: new Merit(
      `Tic/Twitch`,
      -1,
      `You have some sort of repetitive motion that you make in times of stress, and it’s a dead giveaway as to your identity. Examples include a nervous cough, constantly wringing your hands, cracking your knuckles, and so on. It costs one Willpower to refrain from engaging in your tic.`,
      `V20, 481`
    ),
    badsight1: new Merit(
      `Bad Sight`,
      -1,
      `Your sight is defective. The difficulties of any die rolls involving the use of your eyesight are increased by two. As a one-point Flaw, this condition can be corrected with glasses or contacts; as a three-point Flaw, the condition is too severe to be corrected.`,
      `V20, 481`,
    ),
    badsight2: new Merit(
      `Bad Sight`,
      -2,
      `Your sight is defective. The difficulties of any die rolls involving the use of your eyesight are increased by two. As a one-point Flaw, this condition can be corrected with glasses or contacts; as a three-point Flaw, the condition is too severe to be corrected.`,
      `V20, 481`,
    ),
    badsight3: new Merit(
      `Bad Sight`,
      -3,
      `Your sight is defective. The difficulties of any die rolls involving the use of your eyesight are increased by two. As a one-point Flaw, this condition can be corrected with glasses or contacts; as a three-point Flaw, the condition is too severe to be corrected.`,
      `V20, 481`,
    ),
    disfigured: new Merit(
      `Disfigured`,
      -2,
      `A hideous disfigurement makes your appearance disturbing and memorable. The difficulties of all die rolls relating to social interaction are increased by two. You may not have an Appearance rating greater than 2`,
      `V20, 481`
    ),
    oneeye: new Merit(
      `One Eye`,
      -2,
      `You have only one eye — which eye is missing is up to you. The difficulties of all Perception rolls involving eyesight are increased by two, and the difficulties of all die rolls requiring depth perception are increased by one (this includes ranged combat).`,
      `V20, 481`
    ),
    deformity: new Merit(
      `Deformity`,
      -3,
      `You have some kind of deformity — a misshapen limb, hunchback, or clubfoot, for example — which affects your physical abilities and interactions with others. A hunchback, for instance, would lower a character’s Dexterity by two dots and increase the difficulty of die rolls relating to social skills by one. It is the responsibility of the Storyteller to determine the specific effects of the deformity chosen.`,
      'V20, 482'
    ),
    lame: new Merit(
      `Lame`,
      -3,
      `Your legs are damaged, which prevents you from running or walking easily. You are forced to walk with a cane or possibly leg braces, and you have a pronounced limp to your stride. Your walking speed is one-quarter that of a normal human, and running is impossible`,
      `V20, 482`
    ),
    lazy: new Merit(
      `Lazy`,
      -3,
      `You are simply lazy, avoiding anything that requires effort on your part. Preferring to let others do the hard work, you lounge around. For any action that requires preparation, there’s a good chance you didn’t properly prepare. Difficulty rolls for spontaneous Physical actions (including combat, unless it’s part of a planned offensive) increase by one`,
      `V20, 482`
    ),
    deaf: new Merit(
      `Deaf`,
      -4,
      `You cannot speak. You may communicate with the Storyteller and describe your actions, but cannot talk to player or Storyteller characters unless everyone concerned purchases a commonly understood sign language (via the Language Merit) or you write down what you wish to say.`,
      `V20, 483`,
    ),
    mute: new Merit(
      `Mute`,
      -4,
      `You cannot speak. You may communicate with the Storyteller and describe your actions, but cannot talk to player or Storyteller characters unless everyone concerned purchases a commonly understood sign language (via the Language Merit) or you write down what you wish to say.`,
      `V20, 483`
    ),
    blind: new Merit(
      `Blind`,
      -6,
      `You cannot see. Characters can compensate for the loss of vision by becoming more attuned to other sensory input, but visual cues and images are lost to them. Difficulties of all Dexterity-based rolls are increased by two. Oddly, vampires with Aura Perception (Auspex 2) are still able to use this ability, thought the information is interpreted via the other senses. On the other hand, vampires who need make eye contact to enact powers like Dominate against you are only at a penalty to do so (see the sidebar on p. 152).`,
      `V20, 484`
    ),
  },
  mental: {
    coldlylogical: new Merit(
      `Coldly Logical`,
      1,
      `While some might refer to you as a “cold fish,” you have a knack for separating factual reporting from emotional or hysterical coloration. You may or may not be emotional yourself, but you can see clearly when others   are clouding the facts with their feelings (-1 difficulty on all related rolls)`,
      `V20, 484`
    ),
    commonsense: new Merit(
      `Common Sense`,
      1,
      `You have a significant amount of practical, everyday wisdom. Whenever you are about to act in a way contrary to common sense, the Storyteller can make suggestions or warnings about the implications of said action. This is a very useful Merit for beginning players unfamiliar with the game.`,
      `V20, 484`
    ),
    concentration: new Merit(
      `Concentration`,
      1,
      `You have the ability to focus your mind and shut out any distractions or annoyances. Characters with this Merit are unaffected by any penalties stemming from distracting circumstances (e.g., loud noises, strobe lights, or hanging upside down).`,
      `V20, 484`,
    ),
    introspection: new Merit(
      `Introspection`,
      1,
      `You have keen insight into the ulterior motives of all your actions. Through this nightly exercise, you also have incredible insight into the underlying motives of others’ actions. Add two dice to your Perception dice pool when you must take an action against someone with the same Nature or Demeanor as you.`,
      `V20, 484`,
    ),
    language: new Merit(
      `Language`,
      1,
      `You know a language in addition to your native one.  You can take this Merit multiple times, each reflecting a different language`,
      `V20, 484`
    ),
    timesense: new Merit(
      `Time Sense`,
      1,
      `You have an innate sense of time and are able to estimate the passage of time accurately without using a watch or other mechanical device.`,
      `V20, 484`,
    ),
    codeofhonor: new Merit(
      `Code of Honor`,
      2,
      `You have a personal code of ethics to which you adhere. The specifics of this code must be worked out with the Storyteller prior to play, and the character must follow it strictly. Characters with this Merit gain two additional dice to all Willpower or Virtue rolls when acting in accordance with their code (e.g., defending the helpless) or when attempting to avoid situations that might force them to violate their code`,
      `V20, 484`
    ),
    computeraptitude: new Merit(
      `Computer Aptitude`,
      2,
      `You are familiar with and talented in the uses of computer equipment. Other Characters may not understand computers, but to you they are intuitive. All rolls involving computers are at -2 difficulty for you.`,
      `V20, 484`
    ),
    eideticmemory: new Merit(
      `Eidetic Memory`,
      2,
      `You remember, with perfect detail, things you see and hear. Documents, photographs, conversations, etc., can be committed to memory with only minor concentration. Under stressful conditions involving numerous distractions, you must make a Perception + Alertness roll (difficulty 6) to summon enough concentration to absorb what your senses detect.`,
      `V20, 484`
    ),
    naturallinguist: new Merit(
      `Natural Linguist`,
      2,
      `You have a flair for languages. You may add three dice to any dice pool involving written or spoken languages, and each purchase of the Language Merit (previous page) gives you two languages instead of just one.`,
      `V20, 485`
    ),
    ironwill: new Merit(
      `Iron Will`,
      3,
      `When you are determined and your mind is set, nothing can thwart you from your goals. Characters using Dementation, Dominate, or any other mind-altering magic, spell, or Thaumaturgy path against your character are at +3 difficulty. Elder levels of powers like Dementation and Dominate may overwhelm even this resistance. Against Level Six powers, the expenditure of a Willpower point through Iron Will only raises the difficulty of the Discipline roll by two. Against Level Seven powers, the difficulty is increased by only one. Level Eight and higher powers cannot be resisted with Iron Will. This Merit does not affect Presence or other powers dealing with the emotions. Characters will Willpower scores below 8 cannot take this Merit.`,
      `V20, 485`
    ),
    precocious: new Merit(
      `Precocious`,
      3,
      `You learn quickly. The time for you to pick up a par-
      ticular Ability (or Abilities, at Storyteller discretion) is
      cut in half, as is the experience cost.`,
      `V20, 485`
    ),
    impatient: new Merit(
      `Impatient`,
      -1,
      `You have no patience for standing around and waiting. You want to do things now — fuck those slowpokes trying to hold you back. Every time you are forced to wait around instead of acting, a Self-Control roll is required to see if you go tearing off on your own instead.`,
      `V20, 485`
    ),
    nightmares: new Merit(
      'Nightmares',
      -1,
      `You experience horrendous nightmares every time you sleep, and memories of them haunt you during your waking hours. Upon awakening, you must make a Willpower roll (difficulty 7) or lose a die on all actions for that night. A botched Willpower roll indicates that, even when awake, you still believe that you are locked in a nightmare.`,
      `V20, 485`,
    ),
    shy: new Merit(
      `Shy`,
      -1,
      `You are distinctly ill at ease when dealing with people and try to avoid social situations whenever possible. Difficulties for all rolls involving social interaction with strangers are increased by two. If the character becomes the center of attention in a large group, difficulties are increased by three.`,
      `V20, 485`
    ),
    softhearted: new Merit(
      `Soft-Hearted`,
      -1,
      `You cannot stand to watch others suffer. You avoid any situation that involves causing someone physical or emotional pain, unless you make a Willpower roll (difficulty 8). You must have a Humanity rating of 7 or above to take this Flaw — vampires on Paths of Enlightenment can only take this Flaw with Storyteller approval.`,
      `V20, 485`
    ),
    speechimpediment: new Merit(
      `Speech Impediment`,
      -1,
      `You have a stammer or other speech impediment that hampers verbal communication. The difficulties of all die rolls involving verbal communication are increased by two. This Flaw must be roleplayed whenever possible.`,
      `V20, 485`
    ),
    amnesia: new Merit(
      `Amnesia`,
      -2,
      `You are unable to remember anything about your past, yourself, or your family (whether mortal or vampiric), though your past might well come back to haunt you. Your origins and the circumstances behind your amnesia are for the Storyteller to determine, and she is encouraged to make it as interesting as possible.`,
      `V20, 486`
    ),
    phobia: new Merit(
      `Phobia`,
      -2,
      `You have an overpowering fear of something. Spiders, snakes, crowds, and heights are examples of common phobias. You must make a Courage roll every time you encounter the object of your fear. The difficulty of the roll is determined by the Storyteller. If you fail the roll, you must retreat from the object.`,
      `V20, 486`,
    ),
    vengeful: new Merit(
      `Vengeful`,
      -2,
      `You have a score to settle. You are obsessed with taking your revenge on an individual or group, and it is your overriding priority in any situation where you encounter the object of your revenge. You may temporarily resist your need for vengeance by spending a Willpower point.`,
      `V20, 486`
    ),
    weakwilled: new Merit(
      `Weak-Willed`,
      -3,
      `You are highly susceptible to Dominate and intimidation by others; Dominate attempts automatically affect you unless the Discipline wielder is of higher Genera tion, and your difficulties to resist Social abilities such as Intimidation or Leadership, as well as mind-altering spells or magic, are increased by two. Your Willpower Trait may never rise above 4.`,
      `V20, 486`,
    ),
    flashbacks: new Merit(
      `Flashbacks`,
      -6,
      `You managed to make it through the Creation Rites or other similarly traumatic experience, but not wholly intact. The most insignificant thing can throw you into a different mood or state of mind, and as such your behavior is extremely unpredictable. Because of your precarious emotional state, your Willpower fluctuates. At the beginning of each story, make a Willpower roll (you may not spend Willpower for an automatic success). If you succeed, you may participate in the story as normal. If you fail, however, your Willpower score is considered to be 1 for the duration of that session, and you only have one Willpower point to spend. You may roll again at the beginning of the next session to see if you regain your Willpower.`,
      `V20, 487`,
    )
  },
  social: {
    harmless: new Merit(
      `Harmless`,
      1,
      `Everyone in the city knows you, and knows that you’re no threat to their plans. While that sort of estimation may seem insulting, it’s also what’s kept you from being killed. No one considers you worth their time to deal with, and that low opinion keeps you safe. If you start acting in a way that demonstrates that you are no longer harmless, others’ reactions to you will likely change as a result.`,
      `V20, 487`,
    ),
    naturalleader: new Merit(
      `Natural Leader`,
      1,
      `You are gifted with a certain magnetism to which others naturally defer. You receive two extra dice when making Leadership rolls. You must have a Charisma rating of 3 or greater to purchase this Merit.`,
      `V20, 487`
    ),
    rep: new Merit(
      `Rep`,
      1,
      `Your fame has exceeded the bounds of your Sect. Everyone knows who you are, what you’ve done and what you’re supposed to have done (which might not be the same thing). The publicity can be good or bad; what matters is that everybody knows your name. Whether individuals outside of your immediate social circle know enough to match your face to your name is a different matter.`,
      `V20, 488`
    ),
    bullyboy: new Merit(
      `Bullyboy`,
      2,
      `You’re part of the brute squad the local Sheriff or Bishop calls on when he needs some muscle. As a result, you get in on action that others miss entirely, score points with those in power, and occasionally get a chance to act outside of the law. How far outside the law you can go depends on circumstance and how much the vampire you report to likes you.`,
      `V20, 488`
    ),
    oldpal: new Merit(
      `Old Pal`,
      2,
      `An acquaintance from your breathing days was Embraced at the same time you were. Fortunately, your friendship has endured even death and unlife, and you find a constant source of support and aid in your old friend. She expects the same of you, which isn’t always convenient, but at least you each have someone to hang onto who remembers the good old nights — and days. The Storyteller should play the Old Pal as a very loyal Ally.`,
      `V20, 488`
    ),
    lawmansfriend: new Merit(
      `Lawman's Friend`,
      2,
      `For whatever reason (maybe your winning smile or perhaps just your superb groveling technique), the local Sheriff or Bishop in charge of discipline likes you. He’s inclined to overlook your minor trespasses and let you in on things you’re not supposed to know about. He even gives you warnings about occasional crackdowns and times when the higher-ups aren’t feeling generous. Of course, abusing this connection might well turn a friendly vampire into an enemy — and the change might not be apparent until it’s too late.`,
      `V20, 488`,
    ),
    sanctity: new Merit(
      `Sanctity`,
      2,
      `This Merit is sometimes called the halo effect; everyone considers you pure and innocent, though not necessarily naïve. You have a saint-like quality that is hard to pinpoint but cannot be denied. You are trusted, even if you are not trustworthy. At the Storyteller’s discretion, you tend to receive lesser punishments for wrongdoing, and you are liked by most.`,
      `V20, 488`,
    ),
    scholarofenemies: new Merit(
      `Scholar of Enemies`,
      2,
      `You have taken the time to learn about and specialize in one particular enemy of your Sect. You are aware of at least some of the group’s customs, strategies, abilities, and long-term goals, and can put that knowledge to good use. This Merit is worth a -2 difficulty for all non-combat rolls pertaining specifically to the subject of your specialization. On the other hand, you are at a +1 difficulty when it comes to dealing with other enemies, simply because you’re so thoroughly focused on your field.`,
      `V20, 489`,
    ),
    scholarofothers: new Merit(
      `Scholar of others`,
      2,
      `This Merit functions identically to Scholar of Enemies, except that it applies to a group that is not necessarily inimical to your Sect.`,
      `V20, 489`
    ),
    mole: new Merit(
      `Mole`,
      3,
      `You have an informer buried in one of your Sect’s enemy organizations who funnels you all sorts of information as to what her peers are up to. What you do with the information is up to you, but abusing the knowledge might be a good way to get your informer killed. The other side has spies too....`,
      `V20, 489`,
    ),
    risingstar: new Merit(
      `Rising Star`,
      3,
      `You’re one of the up-and-comers in the city, a rising star in your Sect. Everyone wants to know you and be your friend, even as those in power groom you for positions of greater responsibility. You are at -1 difficulty on all Social rolls against any vampires in your Sect who aren’t actively opposing your ascent.`,
      `V20, 489`,
    ),
    darksecret: new Merit(
      `Dark Secret`,
      -1,
      `You have some sort of secret that, if uncovered, would be of immense embarrassment to you and would make you a pariah in the local community.`,
      `V20, 489`,
    ),
    expendable: new Merit(
      `Expendable`,
      -1,
      `Someone in power doesn’t want you around. Maybe she wants territory you possess, or is jealous of the attention you’re getting from a prize mortal retainer — the details are irrelevant. What does matter is that she has the power to maneuver you into dangerous situations “for the good of the Sect,” and has no compunctions about doing so.`,
      `V20, 489`
    ),
    mistakenidentity: new Merit(
      `Mistaken Identity`,
      -1,
      `You look similar to descriptions of someone else, which cause cases of mistaken identity. This can prompt numerous awkward or even dangerous situations, especially if your “twin” has a terrible reputation or is wanted for some crime.`,
      `V20, 490`
    ),
    newkid: new Merit(
      `New Kid`,
      -1,
      `You’re the newest member or have yet to prove yourself, and everyone knows it. That automatically puts you at the bottom of the social totem pole. Other newbies take every opportunity to demonstrate your inferiority, or rivals constantly test your worthiness. Even if someone else is recruited, you’re still regarded as something as a bit of a geek by your peers — a distinction that can have dangerous consequences if bullets start flying. All Social-related rolls are at +1 difficulty when you are dealing with other newbies.`,
      `V20, 490`,
    ),
    recruitmenttarget: new Merit(
      `Recruitment Target`,
      -1,
      `Someone in one of your Sect’s enemy organizations wants you, and they want you bad. Every effort is being made to recruit you, willing or no, and the press gangs usually show up at the worst possible time.`,
      `V20, 490`,
    ),
    specialresponsibility: new Merit(
      `Special Responsibility`,
      -1,
      `You volunteered for some task in order to gain respect and approval from the vampires around you. Now, you wish you had never opened your damn mouth! While you are not given any special credit for performing this duty, you would lose a lot of respect if you were to stop. The nature and the details of your duty should be worked out with the Storyteller in advance.`,
      `V20, 490`,
    ),
    sympathizer: new Merit(
      `Sympathizer`,
      -1,
      `You have publicly expressed sympathy for some of the goals and policies of the enemies of your organization. Your outspoken views on the subject have made you suspect in the eyes of your organization's hierarchy, and you may be suspected of (or arrested for) treason.`,
      `V20, 490`,
    ),
    enemy1: new Merit(
      `Enemy`,
      -1,
      `You have an enemy, or perhaps a group of enemies, who seek to harm you.`,
      `V20,, 490`
    ),
    enemy2: new Merit(
      `Enemy`,
      -2,
      `You have an enemy, or perhaps a group of enemies, who seek to harm you.`,
      `V20, 490`
    ),
    enemy3: new Merit(
      `Enemy`,
      -3,
      `You have an enemy, or perhaps a group of enemies, who seek to harm you.`,
      `V20, 490`
    ),    
    enemy4: new Merit(
      `Enemy`,
      -4,
      `You have an enemy, or perhaps a group of enemies, who seek to harm you.`,
      `V20, 490`
    ),
    enemy5: new Merit(
      `Enemy`,
      -5,
      `You have an enemy, or perhaps a group of enemies, who seek to harm you.`,
      `V20, 490`
    ),
    catspaw: new Merit(
      `Catspaw`,
      -2,
      `You’ve done dirty work for someone high up in your organization’s hierarchy in the past. However, instead of granting you favor, your deeds have made you an embarrassment or a liability. For the moment, your former employer’s concern is to keep you quiet. In the long term, it’s to get rid of you.`,
      `V20, 490`,
    ),
    failure: new Merit(
      `Failure`,
      -2,
      `You once held a title in your organization, but failed catastrophically in your duties. Now you are branded incompetent, excluded from circles of power and responsibility, and generally ostracized by those on their way up. Your exclusion may make you a target for recruitment by the organization’s enemies (or so the whispers run, making you even more distrusted). Conversely, the consequences of your error might come back to haunt you.`,
      `V20, 491`
    ),
    hunted: new Merit(
      `Hunted`,
      -4,
      `You are pursued by a fanatical who believes (perhaps correctly) that you are a danger to humanity. All those with whom you associate may be hunted as well.`,
      `V20, 491`
    ),
    oldflame: new Merit(
      `Old Flame`,
      -2,
      `Someone you once cared deeply for is now with the enemy. He still attempts to play on your sympathies “for old times’ sake” while working against you. Unless you succeed on a contested Manipulation + Expression roll against your former friend, you cannot act against him unless the situation becomes life-threatening.`,
      `V20, 491`
    ),
    narc: new Merit(
      `Narc`,
      -3,
      `You are known to be a snitch, an informer firmly planted in the pocket of the ones in charge. Those on whom you might yet inform loathe you as a result, feeding you misinformation when they can in an attempt to discredit you. Given the opportunity, they might do you mischief. Regardless, your reputation as a weasel precedes you, putting you at +1 difficulty on all Social rolls against those who don’t agree with your politics.`,
      `V20, 492`,
    ),
    sleepingwiththeenemy: new Merit(
      `Sleeping with the enemy`,
      -3,
      `You have some sort of intimate connection with a member of an opposing organization. You may have a lover, a child, a friend, or a contact working the other side of the fence, but regardless of politics you retain a friendly (or more than friendly) relationship with your putative foe. Your close ties to someone on the other side would be regarded as treason by your superiors within your organization, and if you are discovered, the penalty will surely be extremely severe.`,
      `V20, 492`,
    ),
    overextended: new Merit(
      `Overextended`,
      -4,
      `You’ve got your fingers in too many pies, and people are starting to notice. You have too much power, too many retainers, or too much influence, which means that a lot of people have a vested interest in trimming back your operations. These enemies take every opportunity to reduce your power and influence, and if that means lying, cheating, or killing, so be it. Furthermore, your enemies block every attempt you make to move into new areas of control. You’re boxed in, and the box is getting smaller.`,
      `V20, 492`,
    ),
    probationarymember: new Merit(
      `Probationary member`,
      -4,
      `You are a defector. You turned traitor to your organization, and you still have much to prove before you are accepted in again. Others in the organization treat you with distrust and even hostility, and your reputation might even sully those whom you regularly associate with.`,
      `V20, 492`,
    ),
  },
  supernatural: {
    medium: new Merit(
      `Medium`,
      2,
      `You possess the natural affinity to sense and hear spirits, ghosts, and shades. Though you cannot see them, you can sense them, speak to them and, through pleading or cajoling, draw them to your presence. You may call upon them for aid or advice, but there will always be a price. Also, your difficulty is reduced by two for all Awareness rolls involving the spirits of the dead.`,
      `V20, 493`,
    ),
    lucky: new Merit(
      `Lucky`,
      3,
      `You were born lucky — or else the Devil looks after his own. Either way, you may repeat any three failed rolls per story, including botches, but you may try only once per failed roll.`,
      `V20, 493`,
    ),
    oracularability: new Merit(
      `Oracular Ability`,
      3,
      `You can see and interpret signs and omens. You are able to draw advice from these omens, for they provide hints of the future and warnings of the present. When the Storyteller feels that you are in position to see an omen, you will be required to make a Perception + Awareness roll, with the difficulty relative to how well the omen is concealed. If successful, you may then roll Intelligence + Occult to interpret what you have seen; the difficulty is again relative to the complexity of the omen.`,
      `V20, 493`,
    ),
    spiritmentor: new Merit(
      `Spirit Mentor`,
      3,
      `You have a ghostly companion and guide. The identity and exact powers of this spirit are up to the Storyteller, but it can be called upon in difficult situations for help and guidance`,
      `V20, 493`,
    ),
    truelove: new Merit(
      `True Love`,
      4,
      `You have discovered, perhaps too late, a true love. He or she is mortal, but is the center of your existence, and inspires you to keep going in a world of darkness and despair. Whenever you suffer, the thought of your true love gives you the strength to persevere. This Merit grants you one automatic success on all Willpower rolls, which can be negated only by a botch die. This can be a great gift but also a hindrance, for your true love may require protection and occasionally rescue.`,
      `V20, 493`,
    ),
    unbondable: new Merit(
      `Unbondable`,
      5,
      `You are immune to being blood bound. Tremere cannot take this Merit.`,
      `V20, 494`,
    ),
    truefaith: new Merit(
      `True Faith`,
      7,
      `You have a deep-seated faith in and love for God, or whatever name you choose to call the Almighty. You begin the game with one point of True Faith (see the sidebar on p. 372); this Trait adds one die per point to all Willpower and Virtue rolls. You must have a Humanity of 9 or higher to choose this Merit, and if you lose even a single point, all your Faith points are lost and may be regained only when the lost Humanity is recovered. Individuals with True Faith are capable of performing magical acts akin to miracles, but the exact nature of those acts are up to the Storyteller.`,
      `V20, 494`
    ),
    cursed1: new Merit(
      `Cursed`,
      -1,
      `You are the recipient of a supernatural curse`,
      `V20, 494`
    ),
    cursed2: new Merit(
      `Cursed`,
      -2,
      `You are the recipient of a supernatural curse`,
      `V20, 494`
    ),
    cursed3: new Merit(
      `Cursed`,
      -3,
      `You are the recipient of a supernatural curse`,
      `V20, 494`
    ),
    cursed4: new Merit(
      `Cursed`,
      -4,
      `You are the recipient of a supernatural curse`,
      `V20, 494`
    ),
    cursed5: new Merit(
      `Cursed`,
      -5,
      `You are the recipient of a supernatural curse`,
      `V20, 494`
    ),
    beaconoftheunholy: new Merit(
      `Beacon of the unholy`,
      -2,
      `You radiate palpable evil. Clergy and devout mortals know instinctively that there is something horribly wrong with you, and react accordingly.`,
      `V20, 494`
    ),
    lordoftheflies: new Merit(
      `Lord of the Flies`,
      -2,
      `Buzzing harbingers of decay swirl around you everywhere. Their constant presence makes it difficult for you to interact socially (+1 difficulty when appropriate) and nearly impossible to sneak up on someone or hide effectively. The buzzing of the flies inevitably gives you away — all Stealth rolls are at +2 difficulty.`,
      `V20, 495`
    ),
    haunted: new Merit(
      `Haunted`,
      -3,
      `You are haunted by an angry and tormented spirit. This spirit actively attempts to hinder you, especially when feeding, and does its utmost to vent its anguish upon you and anyone in your presence. The Storyteller determines the  exact nature of the spirit, its powers, and whether or not it can eventually be laid to rest.`,
      `V20, 495`,
    ),
    darkfate: new Merit(
      `Dark Fate`,
      -5,
      `You are doomed to experience death or, worse, suffer eternal agony. No matter what you do, you cannot avoid this terrible fate. At some point during the chronicle, your Dark Fate will come upon you. Even more ghastly is the fact that you occasionally have visions of this fate, and the malaise these images inspire requires an expenditure of a temporary Willpower point to avoid, or else you lose a die from all of your actions for the remainder of the night. It is up to the Storyteller to determine the exact nature of this fate, and when it will occur. This is a difficult Flaw to roleplay; ironically, though it may seem as though it removes all free will, the knowledge of one’s death can be quite liberating.`,
      `V20, 495`
    )
  }
}

export default mortalMerits;