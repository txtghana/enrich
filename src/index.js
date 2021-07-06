import * as lib from './lib'
import config from './config'
import {
    toCamelCase
} from './utils'

const enrich = (function (lib, config) {
    const publicScope = {
        init: () => {
            window.addEventListener('beforeunload', publicScope.sendData)
        },

        sendData: () => {
            for (const enrichable of config.enrichable) {
                const canEnrich = 'can' + toCamelCase(enrichable)

                if (typeof lib[canEnrich] === 'function' && !lib[canEnrich]()) {
                    continue;
                }

                const fetchData = 'get' + toCamelCase(enrichable)

                lib[fetchData]()
            }
        },
    }

    return publicScope
})(lib, config);

module.exports = {
    enrich
}