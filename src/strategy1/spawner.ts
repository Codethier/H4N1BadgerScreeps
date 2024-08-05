import {constants} from "./main";

export function spawnHarvester() {
    spawnBasicHarvester()
}

export function spawnBasicHarvester() {
    let newName = 'Harvester' + Game.time;
    Game.spawns['Spawn1'].spawnCreep(constants.harvesterLevels.lvl1, newName,
        {memory: {role: 'harvester'}});
}

export function spawnBuilder() {
    let newName = 'Builder' + Game.time;
    Game.spawns['Spawn1'].spawnCreep(constants.builderLevels.lvl1, newName,
        {memory: {role: 'builder'}});
}