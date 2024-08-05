import {harvesterRUN} from "./roles/harvester";
import _ = require("lodash");
import {spawnBuilder, spawnHarvester,} from "./spawner";


// this overwrites the default memory declaration in the package huh... useful for adding custom properties to packages
declare global {
    interface CreepMemory {
        decision?: 'upgrading controller' | 'harvesting' | 'storing' | 'storing to spawn';
        role: 'harvester' | 'builder' | 'upgrader';
        suicideTicker?: number;
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


export let constants = {
    harvestersTarget: 6,
    harvesterLevels: {
        // base cost 50 + 50 / part
        lvl1: [WORK, CARRY,CARRY, MOVE,MOVE],
        lvl2: [WORK, WORK, CARRY, CARRY, MOVE, MOVE]
    },
    buildersTarget: 2,
    builderLevels: {
        lvl1: [WORK, CARRY,CARRY, MOVE,MOVE],
        lvl2: [WORK, WORK, CARRY, CARRY, MOVE, MOVE]
    }
}

export function loop() {
    // there should probably be miners, builders, carriers, and attack/defenders

    let harvesters = _.filter(Game.creeps, (creep: Creep) => creep.memory.role === 'harvester');
    if (harvesters.length < constants.harvestersTarget) {
        spawnHarvester()
    }
    let builders = _.filter(Game.creeps, (creep: Creep) => creep.memory.role === 'builder');
    if (builders.length < constants.buildersTarget) {
        spawnBuilder()
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