class Character {
    constructor() {
        this.name = null
        this.race = null
        this.age = null
        this.gender = null
        this.history = {
            origin: null,
            past: null,
            encounter: null
        }
        this.rank = null
        this.physicalTraits = {
            description: null, //string
            hair: null, //string
            eyes: null //string
        }
        this.abilityScores = {
            strength: null,
            psyche: null,
            technique: null,
            intelligence: null,
            focus: null,
            endurence: null,
            reflex: null
        }
        this.characterAppearence = null /*character appearence will be added after AWS research */
        this.experincePoints = {
            cumulative: null,
            current: null
        }
        this.adventures = {
            active: null,
            complete: null
        }
        this.adventureLevel = null
        this.advancementPoints = null
        this.status = {
            lifeForce: null/*needs a doubling method */,
            movementSpeed: null,
            spellUses: null,
            baseSpellResistance: null /*calculated from Ability Scores */,
            wounds: null /*string*/
        }
        this.classes = {
            fighter: null,
            monk: null,
            ranger: null,
            scout: null,
            sorcerer: null,
            dragonPriest: null,
            shaman: null
        }
        this.fatigue = null /*will be a method */
        this.attritionTracker = null /*will be a method */
        this.adventurerSkills = {} /* will be filled with objects of {name, masteryGrade, Effect, referencePage} */
        this.generalSkills = {} /* will be filled with objects of {name, masteryGrade, Effect, referencePage} */
    }
}

let bob = new Character()

console.log(bob)