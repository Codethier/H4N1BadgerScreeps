import {checkCargoCreep, findClosestNotFullSpawn, getClosestSource} from "./utils";

export function harvestNormal(creep: Creep) {
    let creepStore = checkCargoCreep(creep)
    if (creepStore === 'empty cargo' && !creep.memory.decision) {
        creep.memory.decision = 'harvesting'
    }
    if (creepStore === 'full cargo') {
        creep.memory.decision = 'storing'
    }

    if (creep.memory.decision === 'harvesting') {
        let closestSource = getClosestSource(creep)
        if (closestSource) {
            if (creep.harvest(closestSource) == ERR_NOT_IN_RANGE) {
                creep.moveTo(closestSource);
            }
            if (creep.store.getFreeCapacity() === 0) {
                creep.memory.decision = undefined
            }
        }
    }
    if (creep.memory.decision === 'storing') {
        let spawn = findClosestNotFullSpawn(creep)
        if (spawn) {
            creep.memory.decision = 'storing to spawn'
        } else {
            creep.memory.decision = 'upgrading controller'
        }
    }
    if (creep.memory.decision === 'storing to spawn') {
        storeInClosestSpawn(creep)
    }
    if (creep.memory.decision === 'upgrading controller') {
        upgradeControllerNormal(creep)
    }
}

export function storeInClosestSpawn(creep: Creep) {
    let spawn = findClosestNotFullSpawn(creep)!
    if (creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(spawn);
    }
    if (creep.transfer(spawn, RESOURCE_ENERGY) === ERR_NOT_ENOUGH_RESOURCES || ERR_FULL) {
        creep.memory.decision = undefined
    }

}

export function upgradeControllerNormal(creep: Creep) {
    if (creep.store.getUsedCapacity() > 0) {
        if (creep.upgradeController(creep.room.controller!) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller!);
        }
    } else {
        creep.memory.decision = undefined
    }
}

export function buildNormal(creep: Creep) {
    let creepStore = checkCargoCreep(creep)

}
