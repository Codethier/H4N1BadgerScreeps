import {getClosestSource} from "./utils";

export function harvestNormal(creep: Creep) {
    if (creep.store.getFreeCapacity() > 0) {
        let closestSource = getClosestSource(creep)
        if (closestSource) {
            if (creep.harvest(closestSource) == ERR_NOT_IN_RANGE) {
                creep.moveTo(closestSource);
                return 'moving to mine'
            }else {
                return 'harvesting'
            }
        } else {
            if (creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1']);
                return 'moving to spawn'
            }
            else {
                return 'transferring'
            }
        }
    } else {
        return 'idle'
    }
}

export function upgradeControllerNormal(creep: Creep) {
    if (creep.store.getUsedCapacity() > 0) {
        if (creep.upgradeController(creep.room.controller!) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller!);
        }
    }
}