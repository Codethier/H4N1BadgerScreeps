export function spawnBuilder() {
    let newName = 'Builder' + Game.time;
    Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName,
        {memory: {role: 'builder'}});
}

export function spawnBasicHarvester() {
    let newName = 'Harvester' + Game.time;
    Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName,
        {memory: {role: 'harvester'}});
}
export function getClosestSource(creep:Creep){
    return creep.pos.findClosestByPath(creep.room.find(FIND_SOURCES))
}