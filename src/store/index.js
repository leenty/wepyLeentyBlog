import {storeModules} from './storeCreater'

import status from './status'

// export const status = storeCreater(STAUTS)
export default new storeModules({
  modules: {
    status
  }
}) 
