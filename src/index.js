import { log } from "./logger";
import { name , version } from '../package.json'
import _ from 'loadsh'
import commonjs from './common'

const logClone = _.deepClone(log)
console.log('[ logClone ]-6', logClone)

export function indexFn() {
   log('hhhhhh')
   _.camelCase('hello world')
   log(name)
   log(version)
   log(commonjs)
}
