"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spawnBasicHarvester = exports.spawnBuilder = void 0;
function spawnBuilder() {
    var newName = 'Builder' + Game.time;
    Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName, { memory: { role: 'builder' } });
}
exports.spawnBuilder = spawnBuilder;
function spawnBasicHarvester() {
    var newName = 'Harvester' + Game.time;
    Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName, { memory: { role: 'harvester' } });
}
exports.spawnBasicHarvester = spawnBasicHarvester;
