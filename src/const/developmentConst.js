// Log Levels
export const DEBUG =  '--DEBUG--';
export const ERR =  '--ERR--';
export const WARN =  '--WARN--';
export const CRIT =  '--CRIT--';
export const STUB =  '--STUB--';
//

export function makePersonalLevels (name) {
    return {
        debug: `${DEBUG}(${name})`,
        err: `${ERR}(${name})`,
        warn: `${WARN}(${name})`,
        crit: `${CRIT}(${name})`,
        stub: `${STUB}(${name})`,
    }
}