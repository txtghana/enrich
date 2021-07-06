import * as lib from './lib'
import config from './config'
import {
    postData,
    toPascalCase
} from './utils'

const enrich = (function (lib, config) {
    const publicScope = {
        init: () => {
            window.addEventListener('beforeunload', publicScope.sendData)
        },
        sendData: () => {
            let canContinue = false;

            for (const enrichable of config.enrichable) {
                const canEnrich = 'canGet' + toPascalCase(enrichable)

                if (typeof lib[canEnrich] === 'function' && !lib[canEnrich]()) {
                    continue;
                }

                const fetchData = 'get' + toPascalCase(enrichable)

                if (typeof lib[fetchData] === 'function') {
                    canContinue = lib[fetchData]()

                    if (canContinue === false) {
                        break;
                    }
                }
            }

            if (canContinue) {
                postData(
                    config.sevopixelSendData,
                    sessionStorage.getItem(config.sevopixelSavedDataKey)
                )
            }
        },
    }

    return publicScope
})(lib, config);

enrich.sendData()

export default { enrich }