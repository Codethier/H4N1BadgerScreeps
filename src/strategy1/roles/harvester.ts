import {harvestNormal, storeNormal} from "../behaviours";
import {tickSuicideIfIdle} from "../utils";

export function harvesterRUN(creep: Creep) {
    harvestNormal(creep)
    storeNormal(creep)

    // tickSuicideIfIdle(creep)
}