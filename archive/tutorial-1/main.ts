import { roleHarvesterRun} from "./role.harvester";


module.exports.loop = function () {

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        roleHarvesterRun(creep);
    }
}