'use strict';



const log = require('npmlog')

log.heading = 'ix' // 前缀
log.addLevel('success', 2000, { fg: 'green', bg: 'white', sold: true })  // 添加自定义命令

module.exports = log;