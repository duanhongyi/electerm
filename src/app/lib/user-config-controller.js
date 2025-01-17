/**
 * user-controll.json controll
 */

const { dbAction } = require('./nedb')
const { userConfigId } = require('../common/constants')

exports.saveUserConfig = (userConfig) => {
  const q = {
    _id: userConfigId
  }
  delete userConfig.host
  delete userConfig.terminalTypes
  delete userConfig.tokenElecterm
  Object.assign(
    global.et.config,
    userConfig
  )
  dbAction('data', 'update', q, {
    ...q,
    ...userConfig
  }, {
    upsert: true
  })
}
