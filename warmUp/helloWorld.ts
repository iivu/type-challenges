/**
 *  Change the following code to make the tests pass (no type check errors).
 * 
 *  type HelloWorld = any
 *  type test = Expect<Equal<HelloWorld,string>>
 */


 import type { Equal, Expect, NotAny } from '@type-challenges/utils'

 type HelloWorld  = string;

 type cases = [
    Expect<NotAny<HelloWorld>>,
    Expect<Equal<HelloWorld,string>>
 ]