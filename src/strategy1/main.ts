import {spawnBasicHarvester} from "./utils";
import {harvesterRUN} from "./roles/harvester";

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
    harvestersTarget: 2,
    buildersTarget: 2,
}

export function loop() {

    spawnBasicHarvester()
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