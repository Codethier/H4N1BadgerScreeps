import {harvestNormal, upgradeControllerNormal} from "../behaviours";

export function harvesterRUN(creep: Creep) {
    if (harvestNormal(creep) === 'idle'){
        upgradeControllerNormal(creep)
    }
    else {

    }
}