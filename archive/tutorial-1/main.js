"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var role_harvester_1 = require("./role.harvester");
module.exports.loop = function () {
    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        (0, role_harvester_1.roleHarvesterRun)(creep);
    }
};
