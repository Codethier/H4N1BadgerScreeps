"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loop = void 0;
var utils_1 = require("./utils");
var harvester_1 = require("./roles/harvester");
var constants = {
    harvestersTarget: 2,
    buildersTarget: 2,
};
function loop() {
    (0, utils_1.spawnBasicHarvester)();
    // clear memory, because auto assign can overflow memory
    for (var name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
    for (var creep in Game.creeps) {
        if (Game.creeps[creep].memory.role === 'harvester') {
            (0, harvester_1.roleHarvesterRun)(Game.creeps[creep]);
        }
    }
}
exports.loop = loop;
