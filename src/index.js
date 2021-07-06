import * as lib from './lib'
import config from './config'
import {
    postData,
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

                if (typeof lib[fetchData] === 'function') {
                    lib[fetchData]()
                }
            }

            postData(config.sevopixelSendData, sessionStorage.getItem(config.sevopixelSavedDataKey))
        },
    }

    return publicScope
})(lib, config);

module.exports = {
    enrich
}