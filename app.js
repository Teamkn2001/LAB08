// import { sayGoodbye as Bye,ya } from "./module1.js"
import * as say from "./module1.js"
import helloJS from "./module2.js"

export function sayHi(){
    console.log('Hello module')
}
// sayHi()
// Bye()
// ya()
sayHi()
say.sayGoodbye()
say.ya()
helloJS()