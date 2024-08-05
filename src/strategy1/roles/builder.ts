import {buildNormal, harvestNormal, storeNormal} from "../behaviours";
import {tickSuicideIfIdle} from "../utils";

export function builderRUN(creep: Creep) {
    harvestNormal(creep)
    buildNormal(creep)
    storeNormal(creep)

    // tickSuicideIfIdle(creep)
}