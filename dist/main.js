"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});function o(){let e="Harvester"+Game.time;Game.spawns.Spawn1.spawnCreep([WORK,CARRY,MOVE],e,{memory:{role:"harvester"}})}function a(e){if(e.store.getFreeCapacity()>0){var r=e.room.find(FIND_SOURCES);console.log(r),e.harvest(r[0])==ERR_NOT_IN_RANGE&&e.moveTo(r[0])}else e.transfer(Game.spawns.Spawn1,RESOURCE_ENERGY)==ERR_NOT_IN_RANGE&&e.moveTo(Game.spawns.Spawn1)}function n(e){a(e)}function s(){o();for(var e in Memory.creeps)Game.creeps[e]||(delete Memory.creeps[e],console.log("Clearing non-existing creep memory:",e));for(let r in Game.creeps)Game.creeps[r].memory.role==="harvester"&&n(Game.creeps[r])}exports.loop=s;