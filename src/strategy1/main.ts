import {spawnBasicHarvester} from "./utils";
import {harvesterRUN} from "./roles/harvester";
import _ = require("lodash");


// this overwrites the default memory declaration in the package huh... useful for adding custom properties to packages
declare global {
    interface CreepMemory {
        role: 'harvester' | 'builder' | 'upgrader';
    }

    interface FlagMemory {
        [name: string]: any
    }

    interface SpawnMemory {
        [name: string]: any
    }

    interface RoomMemory {
        [name: string]: any
    }
}


let constants = {
    harvestersTarget: 4,
    harvesterLevels:{
        lvl1: [WORK, CARRY, MOVE],
        lvl2: [WORK,WORK,CARRY,CARRY,MOVE]
    },
    buildersTarget: 2,
}

export function loop() {
    let harvesters = _.filter(Game.creeps, (creep: Creep) => creep.memory.role === 'harvester');
    console.log('Harvesters: ' + harvesters.length);


    if (harvesters.length < constants.harvestersTarget) {
        spawnBasicHarvester()
    }

    // clear memory, because auto assign can overflow memory
    for (var name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }


    for (let creep in Game.creeps) {
        if (Game.creeps[creep].memory.role === 'harvester') {
            harvesterRUN(Game.creeps[creep])
        }
    }
}