export function spawnBuilder() {
    let newName = 'Builder' + Game.time;
    Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName,
        {memory: {role: 'builder'}});
}



export function getClosestSource(creep: Creep) {
    return creep.pos.findClosestByPath(creep.room.find(FIND_SOURCES))
}

export function findClosestNotFullSpawn(creep: Creep) {
    return creep.pos.findClosestByPath(creep.room.find(FIND_MY_SPAWNS, {filter: x => x.store.getFreeCapacity(RESOURCE_ENERGY) > 0}))
}

export function checkCargoCreep(creep: Creep) {
    if (creep.store.getFreeCapacity() === creep.store.getCapacity()) {
        return 'empty cargo'
    }
    if (creep.store.getFreeCapacity() === 0) {
        return 'full cargo'
    }
    return 'partial cargo'

}