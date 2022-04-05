#!/usr/bin/env node

// const utils = require('@ix-cli/utils');
//真正的入口文件

// utils()

const importLocal = require('import-local')

if(importLocal(__filename)){
  require('npmlog').info('cli', '正在使用本地的ix-cli依赖')
}else{
  require('../lib')(process.argv.slice(2))
}
