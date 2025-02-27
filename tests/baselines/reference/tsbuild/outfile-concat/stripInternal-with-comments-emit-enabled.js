currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/first/first_PART1.ts]
/*@internal*/ interface TheFirst {
    none: any;
}

const s = "Hello, world";

interface NoJsForHereEither {
    none: any;
}

console.log(s);


//// [/src/first/first_part2.ts]
console.log(f());


//// [/src/first/first_part3.ts]
function f() {
    return "JS does hoists";
}


//// [/src/first/tsconfig.json]
{
  "compilerOptions": {
    "target": "es5",
    "composite": true,
    "removeComments": false,
    "strict": false,
    "sourceMap": true,
    "declarationMap": true,
    "outFile": "./bin/first-output.js",
    "skipDefaultLibCheck": true
  },
  "files": [
    "first_PART1.ts",
    "first_part2.ts",
    "first_part3.ts"
  ],
  "references": []
}

//// [/src/second/second_part1.ts]
namespace N {
    // Comment text
}

namespace N {
    function f() {
        console.log('testing');
    }

    f();
}

class normalC {
    /*@internal*/ constructor() { }
    /*@internal*/ prop: string;
    /*@internal*/ method() { }
    /*@internal*/ get c() { return 10; }
    /*@internal*/ set c(val: number) { }
}
namespace normalN {
    /*@internal*/ export class C { }
    /*@internal*/ export function foo() {}
    /*@internal*/ export namespace someNamespace { export class C {} }
    /*@internal*/ export namespace someOther.something { export class someClass {} }
    /*@internal*/ export import someImport = someNamespace.C;
    /*@internal*/ export type internalType = internalC;
    /*@internal*/ export const internalConst = 10;
    /*@internal*/ export enum internalEnum { a, b, c }
}
/*@internal*/ class internalC {}
/*@internal*/ function internalfoo() {}
/*@internal*/ namespace internalNamespace { export class someClass {} }
/*@internal*/ namespace internalOther.something { export class someClass {} }
/*@internal*/ import internalImport = internalNamespace.someClass;
/*@internal*/ type internalType = internalC;
/*@internal*/ const internalConst = 10;
/*@internal*/ enum internalEnum { a, b, c }

//// [/src/second/second_part2.ts]
class C {
    doSomething() {
        console.log("something got done");
    }
}


//// [/src/second/tsconfig.json]
{
  "compilerOptions": {
    "ignoreDeprecations": "5.0",
    "target": "es5",
    "composite": true,
    "removeComments": false,
    "strict": false,
    "sourceMap": true,
    "declarationMap": true,
    "declaration": true,
    "outFile": "../2/second-output.js",
    "skipDefaultLibCheck": true
  },
  "references": []
}

//// [/src/third/third_part1.ts]
var c = new C();
c.doSomething();


//// [/src/third/tsconfig.json]
{
  "compilerOptions": {
    "ignoreDeprecations": "5.0",
    "target": "es5",
    "composite": true,
    "removeComments": false,
    "strict": false,
    "sourceMap": true,
    "declarationMap": true,
    "declaration": true,
    "stripInternal": true,
    "outFile": "./thirdjs/output/third-output.js",
    "skipDefaultLibCheck": true
  },
  "files": [
    "third_part1.ts"
  ],
  "references": [
    {
      "path": "../first",
      "prepend": true
    },
    {
      "path": "../second",
      "prepend": true
    }
  ]
}



Output::
/lib/tsc --b /src/third --verbose
[[90m12:00:24 AM[0m] Projects in this build: 
    * src/first/tsconfig.json
    * src/second/tsconfig.json
    * src/third/tsconfig.json

[[90m12:00:25 AM[0m] Project 'src/first/tsconfig.json' is out of date because output file 'src/first/bin/first-output.tsbuildinfo' does not exist

[[90m12:00:26 AM[0m] Building project '/src/first/tsconfig.json'...

[[90m12:00:36 AM[0m] Project 'src/second/tsconfig.json' is out of date because output file 'src/2/second-output.tsbuildinfo' does not exist

[[90m12:00:37 AM[0m] Building project '/src/second/tsconfig.json'...

[[90m12:00:47 AM[0m] Project 'src/third/tsconfig.json' is out of date because output file 'src/third/thirdjs/output/third-output.tsbuildinfo' does not exist

[[90m12:00:48 AM[0m] Building project '/src/third/tsconfig.json'...

[96msrc/third/tsconfig.json[0m:[93m19[0m:[93m5[0m - [91merror[0m[90m TS5102: [0mOption 'prepend' has been removed. Please remove it from your configuration.

[7m19[0m     {
[7m  [0m [91m    ~[0m
[7m20[0m       "path": "../first",
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m21[0m       "prepend": true
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~[0m
[7m22[0m     },
[7m  [0m [91m~~~~~[0m

[96msrc/third/tsconfig.json[0m:[93m23[0m:[93m5[0m - [91merror[0m[90m TS5102: [0mOption 'prepend' has been removed. Please remove it from your configuration.

[7m23[0m     {
[7m  [0m [91m    ~[0m
[7m24[0m       "path": "../second",
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m25[0m       "prepend": true
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~[0m
[7m26[0m     }
[7m  [0m [91m~~~~~[0m


Found 2 errors.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated


//// [/src/2/second-output.d.ts]
declare namespace N {
}
declare namespace N {
}
declare class normalC {
    constructor();
    prop: string;
    method(): void;
    get c(): number;
    set c(val: number);
}
declare namespace normalN {
    class C {
    }
    function foo(): void;
    namespace someNamespace {
        class C {
        }
    }
    namespace someOther.something {
        class someClass {
        }
    }
    export import someImport = someNamespace.C;
    type internalType = internalC;
    const internalConst = 10;
    enum internalEnum {
        a = 0,
        b = 1,
        c = 2
    }
}
declare class internalC {
}
declare function internalfoo(): void;
declare namespace internalNamespace {
    class someClass {
    }
}
declare namespace internalOther.something {
    class someClass {
    }
}
import internalImport = internalNamespace.someClass;
type internalType = internalC;
declare const internalConst = 10;
declare enum internalEnum {
    a = 0,
    b = 1,
    c = 2
}
declare class C {
    doSomething(): void;
}
//# sourceMappingURL=second-output.d.ts.map

//// [/src/2/second-output.d.ts.map]
{"version":3,"file":"second-output.d.ts","sourceRoot":"","sources":["../second/second_part1.ts","../second/second_part2.ts"],"names":[],"mappings":"AAAA,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;AAED,cAAM,OAAO;;IAEK,IAAI,EAAE,MAAM,CAAC;IACb,MAAM;IACN,IAAI,CAAC,IACM,MAAM,CADK;IACtB,IAAI,CAAC,CAAC,KAAK,MAAM,EAAK;CACvC;AACD,kBAAU,OAAO,CAAC;IACA,MAAa,CAAC;KAAI;IAClB,SAAgB,GAAG,SAAK;IACxB,UAAiB,aAAa,CAAC;QAAE,MAAa,CAAC;SAAG;KAAE;IACpD,UAAiB,SAAS,CAAC,SAAS,CAAC;QAAE,MAAa,SAAS;SAAG;KAAE;IAClE,MAAM,QAAQ,UAAU,GAAG,aAAa,CAAC,CAAC,CAAC;IAC3C,KAAY,YAAY,GAAG,SAAS,CAAC;IAC9B,MAAM,aAAa,KAAK,CAAC;IAChC,KAAY,YAAY;QAAG,CAAC,IAAA;QAAE,CAAC,IAAA;QAAE,CAAC,IAAA;KAAE;CACrD;AACa,cAAM,SAAS;CAAG;AAClB,iBAAS,WAAW,SAAK;AACzB,kBAAU,iBAAiB,CAAC;IAAE,MAAa,SAAS;KAAG;CAAE;AACzD,kBAAU,aAAa,CAAC,SAAS,CAAC;IAAE,MAAa,SAAS;KAAG;CAAE;AAC/D,OAAO,cAAc,GAAG,iBAAiB,CAAC,SAAS,CAAC;AACpD,KAAK,YAAY,GAAG,SAAS,CAAC;AAC9B,QAAA,MAAM,aAAa,KAAK,CAAC;AACzB,aAAK,YAAY;IAAG,CAAC,IAAA;IAAE,CAAC,IAAA;IAAE,CAAC,IAAA;CAAE;ACpC3C,cAAM,CAAC;IACH,WAAW;CAGd"}

//// [/src/2/second-output.d.ts.map.baseline.txt]
===================================================================
JsFile: second-output.d.ts
mapUrl: second-output.d.ts.map
sourceRoot: 
sources: ../second/second_part1.ts,../second/second_part2.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/2/second-output.d.ts
sourceFile:../second/second_part1.ts
-------------------------------------------------------------------
>>>declare namespace N {
1 >
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1 >
2 >namespace 
3 >                  N
4 >                    
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 19) Source(1, 11) + SourceIndex(0)
3 >Emitted(1, 20) Source(1, 12) + SourceIndex(0)
4 >Emitted(1, 21) Source(1, 13) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^->
1 >{
  >    // Comment text
  >}
1 >Emitted(2, 2) Source(3, 2) + SourceIndex(0)
---
>>>declare namespace N {
1->
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1->
  >
  >
2 >namespace 
3 >                  N
4 >                    
1->Emitted(3, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(3, 19) Source(5, 11) + SourceIndex(0)
3 >Emitted(3, 20) Source(5, 12) + SourceIndex(0)
4 >Emitted(3, 21) Source(5, 13) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^->
1 >{
  >    function f() {
  >        console.log('testing');
  >    }
  >
  >    f();
  >}
1 >Emitted(4, 2) Source(11, 2) + SourceIndex(0)
---
>>>declare class normalC {
1->
2 >^^^^^^^^^^^^^^
3 >              ^^^^^^^
1->
  >
  >
2 >class 
3 >              normalC
1->Emitted(5, 1) Source(13, 1) + SourceIndex(0)
2 >Emitted(5, 15) Source(13, 7) + SourceIndex(0)
3 >Emitted(5, 22) Source(13, 14) + SourceIndex(0)
---
>>>    constructor();
>>>    prop: string;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^^^^
5 >                ^
6 >                 ^^->
1 > {
  >    /*@internal*/ constructor() { }
  >    /*@internal*/ 
2 >    prop
3 >        : 
4 >          string
5 >                ;
1 >Emitted(7, 5) Source(15, 19) + SourceIndex(0)
2 >Emitted(7, 9) Source(15, 23) + SourceIndex(0)
3 >Emitted(7, 11) Source(15, 25) + SourceIndex(0)
4 >Emitted(7, 17) Source(15, 31) + SourceIndex(0)
5 >Emitted(7, 18) Source(15, 32) + SourceIndex(0)
---
>>>    method(): void;
1->^^^^
2 >    ^^^^^^
3 >          ^^^^^^^^^^->
1->
  >    /*@internal*/ 
2 >    method
1->Emitted(8, 5) Source(16, 19) + SourceIndex(0)
2 >Emitted(8, 11) Source(16, 25) + SourceIndex(0)
---
>>>    get c(): number;
1->^^^^
2 >    ^^^^
3 >        ^
4 >         ^^^^
5 >             ^^^^^^
6 >                   ^
7 >                    ^^^->
1->() { }
  >    /*@internal*/ 
2 >    get 
3 >        c
4 >         () { return 10; }
  >             /*@internal*/ set c(val: 
5 >             number
6 >                   
1->Emitted(9, 5) Source(17, 19) + SourceIndex(0)
2 >Emitted(9, 9) Source(17, 23) + SourceIndex(0)
3 >Emitted(9, 10) Source(17, 24) + SourceIndex(0)
4 >Emitted(9, 14) Source(18, 30) + SourceIndex(0)
5 >Emitted(9, 20) Source(18, 36) + SourceIndex(0)
6 >Emitted(9, 21) Source(17, 41) + SourceIndex(0)
---
>>>    set c(val: number);
1->^^^^
2 >    ^^^^
3 >        ^
4 >         ^
5 >          ^^^^^
6 >               ^^^^^^
7 >                     ^^
1->
  >    /*@internal*/ 
2 >    set 
3 >        c
4 >         (
5 >          val: 
6 >               number
7 >                     ) { }
1->Emitted(10, 5) Source(18, 19) + SourceIndex(0)
2 >Emitted(10, 9) Source(18, 23) + SourceIndex(0)
3 >Emitted(10, 10) Source(18, 24) + SourceIndex(0)
4 >Emitted(10, 11) Source(18, 25) + SourceIndex(0)
5 >Emitted(10, 16) Source(18, 30) + SourceIndex(0)
6 >Emitted(10, 22) Source(18, 36) + SourceIndex(0)
7 >Emitted(10, 24) Source(18, 41) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(11, 2) Source(19, 2) + SourceIndex(0)
---
>>>declare namespace normalN {
1->
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^^^^^^^
4 >                         ^
1->
  >
2 >namespace 
3 >                  normalN
4 >                          
1->Emitted(12, 1) Source(20, 1) + SourceIndex(0)
2 >Emitted(12, 19) Source(20, 11) + SourceIndex(0)
3 >Emitted(12, 26) Source(20, 18) + SourceIndex(0)
4 >Emitted(12, 27) Source(20, 19) + SourceIndex(0)
---
>>>    class C {
1 >^^^^
2 >    ^^^^^^
3 >          ^
1 >{
  >    /*@internal*/ 
2 >    export class 
3 >          C
1 >Emitted(13, 5) Source(21, 19) + SourceIndex(0)
2 >Emitted(13, 11) Source(21, 32) + SourceIndex(0)
3 >Emitted(13, 12) Source(21, 33) + SourceIndex(0)
---
>>>    }
1 >^^^^^
2 >     ^^^^^^^^^^^^^^^^^^^^->
1 > { }
1 >Emitted(14, 6) Source(21, 37) + SourceIndex(0)
---
>>>    function foo(): void;
1->^^^^
2 >    ^^^^^^^^^
3 >             ^^^
4 >                ^^^^^^^^^
5 >                         ^^^^->
1->
  >    /*@internal*/ 
2 >    export function 
3 >             foo
4 >                () {}
1->Emitted(15, 5) Source(22, 19) + SourceIndex(0)
2 >Emitted(15, 14) Source(22, 35) + SourceIndex(0)
3 >Emitted(15, 17) Source(22, 38) + SourceIndex(0)
4 >Emitted(15, 26) Source(22, 43) + SourceIndex(0)
---
>>>    namespace someNamespace {
1->^^^^
2 >    ^^^^^^^^^^
3 >              ^^^^^^^^^^^^^
4 >                           ^
1->
  >    /*@internal*/ 
2 >    export namespace 
3 >              someNamespace
4 >                            
1->Emitted(16, 5) Source(23, 19) + SourceIndex(0)
2 >Emitted(16, 15) Source(23, 36) + SourceIndex(0)
3 >Emitted(16, 28) Source(23, 49) + SourceIndex(0)
4 >Emitted(16, 29) Source(23, 50) + SourceIndex(0)
---
>>>        class C {
1 >^^^^^^^^
2 >        ^^^^^^
3 >              ^
1 >{ 
2 >        export class 
3 >              C
1 >Emitted(17, 9) Source(23, 52) + SourceIndex(0)
2 >Emitted(17, 15) Source(23, 65) + SourceIndex(0)
3 >Emitted(17, 16) Source(23, 66) + SourceIndex(0)
---
>>>        }
1 >^^^^^^^^^
1 > {}
1 >Emitted(18, 10) Source(23, 69) + SourceIndex(0)
---
>>>    }
1 >^^^^^
2 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 > }
1 >Emitted(19, 6) Source(23, 71) + SourceIndex(0)
---
>>>    namespace someOther.something {
1->^^^^
2 >    ^^^^^^^^^^
3 >              ^^^^^^^^^
4 >                       ^
5 >                        ^^^^^^^^^
6 >                                 ^
1->
  >    /*@internal*/ 
2 >    export namespace 
3 >              someOther
4 >                       .
5 >                        something
6 >                                  
1->Emitted(20, 5) Source(24, 19) + SourceIndex(0)
2 >Emitted(20, 15) Source(24, 36) + SourceIndex(0)
3 >Emitted(20, 24) Source(24, 45) + SourceIndex(0)
4 >Emitted(20, 25) Source(24, 46) + SourceIndex(0)
5 >Emitted(20, 34) Source(24, 55) + SourceIndex(0)
6 >Emitted(20, 35) Source(24, 56) + SourceIndex(0)
---
>>>        class someClass {
1 >^^^^^^^^
2 >        ^^^^^^
3 >              ^^^^^^^^^
1 >{ 
2 >        export class 
3 >              someClass
1 >Emitted(21, 9) Source(24, 58) + SourceIndex(0)
2 >Emitted(21, 15) Source(24, 71) + SourceIndex(0)
3 >Emitted(21, 24) Source(24, 80) + SourceIndex(0)
---
>>>        }
1 >^^^^^^^^^
1 > {}
1 >Emitted(22, 10) Source(24, 83) + SourceIndex(0)
---
>>>    }
1 >^^^^^
2 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 > }
1 >Emitted(23, 6) Source(24, 85) + SourceIndex(0)
---
>>>    export import someImport = someNamespace.C;
1->^^^^
2 >    ^^^^^^
3 >          ^^^^^^^^
4 >                  ^^^^^^^^^^
5 >                            ^^^
6 >                               ^^^^^^^^^^^^^
7 >                                            ^
8 >                                             ^
9 >                                              ^
1->
  >    /*@internal*/ 
2 >    export
3 >           import 
4 >                  someImport
5 >                             = 
6 >                               someNamespace
7 >                                            .
8 >                                             C
9 >                                              ;
1->Emitted(24, 5) Source(25, 19) + SourceIndex(0)
2 >Emitted(24, 11) Source(25, 25) + SourceIndex(0)
3 >Emitted(24, 19) Source(25, 33) + SourceIndex(0)
4 >Emitted(24, 29) Source(25, 43) + SourceIndex(0)
5 >Emitted(24, 32) Source(25, 46) + SourceIndex(0)
6 >Emitted(24, 45) Source(25, 59) + SourceIndex(0)
7 >Emitted(24, 46) Source(25, 60) + SourceIndex(0)
8 >Emitted(24, 47) Source(25, 61) + SourceIndex(0)
9 >Emitted(24, 48) Source(25, 62) + SourceIndex(0)
---
>>>    type internalType = internalC;
1 >^^^^
2 >    ^^^^^
3 >         ^^^^^^^^^^^^
4 >                     ^^^
5 >                        ^^^^^^^^^
6 >                                 ^
1 >
  >    /*@internal*/ 
2 >    export type 
3 >         internalType
4 >                      = 
5 >                        internalC
6 >                                 ;
1 >Emitted(25, 5) Source(26, 19) + SourceIndex(0)
2 >Emitted(25, 10) Source(26, 31) + SourceIndex(0)
3 >Emitted(25, 22) Source(26, 43) + SourceIndex(0)
4 >Emitted(25, 25) Source(26, 46) + SourceIndex(0)
5 >Emitted(25, 34) Source(26, 55) + SourceIndex(0)
6 >Emitted(25, 35) Source(26, 56) + SourceIndex(0)
---
>>>    const internalConst = 10;
1 >^^^^
2 >    ^^^^^^
3 >          ^^^^^^^^^^^^^
4 >                       ^^^^^
5 >                            ^
1 >
  >    /*@internal*/ export 
2 >    const 
3 >          internalConst
4 >                        = 10
5 >                            ;
1 >Emitted(26, 5) Source(27, 26) + SourceIndex(0)
2 >Emitted(26, 11) Source(27, 32) + SourceIndex(0)
3 >Emitted(26, 24) Source(27, 45) + SourceIndex(0)
4 >Emitted(26, 29) Source(27, 50) + SourceIndex(0)
5 >Emitted(26, 30) Source(27, 51) + SourceIndex(0)
---
>>>    enum internalEnum {
1 >^^^^
2 >    ^^^^^
3 >         ^^^^^^^^^^^^
1 >
  >    /*@internal*/ 
2 >    export enum 
3 >         internalEnum
1 >Emitted(27, 5) Source(28, 19) + SourceIndex(0)
2 >Emitted(27, 10) Source(28, 31) + SourceIndex(0)
3 >Emitted(27, 22) Source(28, 43) + SourceIndex(0)
---
>>>        a = 0,
1 >^^^^^^^^
2 >        ^
3 >         ^^^^
4 >             ^->
1 > { 
2 >        a
3 >         
1 >Emitted(28, 9) Source(28, 46) + SourceIndex(0)
2 >Emitted(28, 10) Source(28, 47) + SourceIndex(0)
3 >Emitted(28, 14) Source(28, 47) + SourceIndex(0)
---
>>>        b = 1,
1->^^^^^^^^
2 >        ^
3 >         ^^^^
1->, 
2 >        b
3 >         
1->Emitted(29, 9) Source(28, 49) + SourceIndex(0)
2 >Emitted(29, 10) Source(28, 50) + SourceIndex(0)
3 >Emitted(29, 14) Source(28, 50) + SourceIndex(0)
---
>>>        c = 2
1 >^^^^^^^^
2 >        ^
3 >         ^^^^
1 >, 
2 >        c
3 >         
1 >Emitted(30, 9) Source(28, 52) + SourceIndex(0)
2 >Emitted(30, 10) Source(28, 53) + SourceIndex(0)
3 >Emitted(30, 14) Source(28, 53) + SourceIndex(0)
---
>>>    }
1 >^^^^^
1 > }
1 >Emitted(31, 6) Source(28, 55) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(32, 2) Source(29, 2) + SourceIndex(0)
---
>>>declare class internalC {
1->
2 >^^^^^^^^^^^^^^
3 >              ^^^^^^^^^
1->
  >/*@internal*/ 
2 >class 
3 >              internalC
1->Emitted(33, 1) Source(30, 15) + SourceIndex(0)
2 >Emitted(33, 15) Source(30, 21) + SourceIndex(0)
3 >Emitted(33, 24) Source(30, 30) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 > {}
1 >Emitted(34, 2) Source(30, 33) + SourceIndex(0)
---
>>>declare function internalfoo(): void;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^^^^^^^^^^^
4 >                            ^^^^^^^^^
1->
  >/*@internal*/ 
2 >function 
3 >                 internalfoo
4 >                            () {}
1->Emitted(35, 1) Source(31, 15) + SourceIndex(0)
2 >Emitted(35, 18) Source(31, 24) + SourceIndex(0)
3 >Emitted(35, 29) Source(31, 35) + SourceIndex(0)
4 >Emitted(35, 38) Source(31, 40) + SourceIndex(0)
---
>>>declare namespace internalNamespace {
1 >
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^^^^^^^^^^^^^^^^^
4 >                                   ^
1 >
  >/*@internal*/ 
2 >namespace 
3 >                  internalNamespace
4 >                                    
1 >Emitted(36, 1) Source(32, 15) + SourceIndex(0)
2 >Emitted(36, 19) Source(32, 25) + SourceIndex(0)
3 >Emitted(36, 36) Source(32, 42) + SourceIndex(0)
4 >Emitted(36, 37) Source(32, 43) + SourceIndex(0)
---
>>>    class someClass {
1 >^^^^
2 >    ^^^^^^
3 >          ^^^^^^^^^
1 >{ 
2 >    export class 
3 >          someClass
1 >Emitted(37, 5) Source(32, 45) + SourceIndex(0)
2 >Emitted(37, 11) Source(32, 58) + SourceIndex(0)
3 >Emitted(37, 20) Source(32, 67) + SourceIndex(0)
---
>>>    }
1 >^^^^^
1 > {}
1 >Emitted(38, 6) Source(32, 70) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 > }
1 >Emitted(39, 2) Source(32, 72) + SourceIndex(0)
---
>>>declare namespace internalOther.something {
1->
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^^^^^^^^^^^^^
4 >                               ^
5 >                                ^^^^^^^^^
6 >                                         ^
1->
  >/*@internal*/ 
2 >namespace 
3 >                  internalOther
4 >                               .
5 >                                something
6 >                                          
1->Emitted(40, 1) Source(33, 15) + SourceIndex(0)
2 >Emitted(40, 19) Source(33, 25) + SourceIndex(0)
3 >Emitted(40, 32) Source(33, 38) + SourceIndex(0)
4 >Emitted(40, 33) Source(33, 39) + SourceIndex(0)
5 >Emitted(40, 42) Source(33, 48) + SourceIndex(0)
6 >Emitted(40, 43) Source(33, 49) + SourceIndex(0)
---
>>>    class someClass {
1 >^^^^
2 >    ^^^^^^
3 >          ^^^^^^^^^
1 >{ 
2 >    export class 
3 >          someClass
1 >Emitted(41, 5) Source(33, 51) + SourceIndex(0)
2 >Emitted(41, 11) Source(33, 64) + SourceIndex(0)
3 >Emitted(41, 20) Source(33, 73) + SourceIndex(0)
---
>>>    }
1 >^^^^^
1 > {}
1 >Emitted(42, 6) Source(33, 76) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 > }
1 >Emitted(43, 2) Source(33, 78) + SourceIndex(0)
---
>>>import internalImport = internalNamespace.someClass;
1->
2 >^^^^^^^
3 >       ^^^^^^^^^^^^^^
4 >                     ^^^
5 >                        ^^^^^^^^^^^^^^^^^
6 >                                         ^
7 >                                          ^^^^^^^^^
8 >                                                   ^
1->
  >/*@internal*/ 
2 >import 
3 >       internalImport
4 >                      = 
5 >                        internalNamespace
6 >                                         .
7 >                                          someClass
8 >                                                   ;
1->Emitted(44, 1) Source(34, 15) + SourceIndex(0)
2 >Emitted(44, 8) Source(34, 22) + SourceIndex(0)
3 >Emitted(44, 22) Source(34, 36) + SourceIndex(0)
4 >Emitted(44, 25) Source(34, 39) + SourceIndex(0)
5 >Emitted(44, 42) Source(34, 56) + SourceIndex(0)
6 >Emitted(44, 43) Source(34, 57) + SourceIndex(0)
7 >Emitted(44, 52) Source(34, 66) + SourceIndex(0)
8 >Emitted(44, 53) Source(34, 67) + SourceIndex(0)
---
>>>type internalType = internalC;
1 >
2 >^^^^^
3 >     ^^^^^^^^^^^^
4 >                 ^^^
5 >                    ^^^^^^^^^
6 >                             ^
7 >                              ^^^->
1 >
  >/*@internal*/ 
2 >type 
3 >     internalType
4 >                  = 
5 >                    internalC
6 >                             ;
1 >Emitted(45, 1) Source(35, 15) + SourceIndex(0)
2 >Emitted(45, 6) Source(35, 20) + SourceIndex(0)
3 >Emitted(45, 18) Source(35, 32) + SourceIndex(0)
4 >Emitted(45, 21) Source(35, 35) + SourceIndex(0)
5 >Emitted(45, 30) Source(35, 44) + SourceIndex(0)
6 >Emitted(45, 31) Source(35, 45) + SourceIndex(0)
---
>>>declare const internalConst = 10;
1->
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^^^^^^^^^^^^^
5 >                           ^^^^^
6 >                                ^
1->
  >/*@internal*/ 
2 >
3 >        const 
4 >              internalConst
5 >                            = 10
6 >                                ;
1->Emitted(46, 1) Source(36, 15) + SourceIndex(0)
2 >Emitted(46, 9) Source(36, 15) + SourceIndex(0)
3 >Emitted(46, 15) Source(36, 21) + SourceIndex(0)
4 >Emitted(46, 28) Source(36, 34) + SourceIndex(0)
5 >Emitted(46, 33) Source(36, 39) + SourceIndex(0)
6 >Emitted(46, 34) Source(36, 40) + SourceIndex(0)
---
>>>declare enum internalEnum {
1 >
2 >^^^^^^^^^^^^^
3 >             ^^^^^^^^^^^^
1 >
  >/*@internal*/ 
2 >enum 
3 >             internalEnum
1 >Emitted(47, 1) Source(37, 15) + SourceIndex(0)
2 >Emitted(47, 14) Source(37, 20) + SourceIndex(0)
3 >Emitted(47, 26) Source(37, 32) + SourceIndex(0)
---
>>>    a = 0,
1 >^^^^
2 >    ^
3 >     ^^^^
4 >         ^->
1 > { 
2 >    a
3 >     
1 >Emitted(48, 5) Source(37, 35) + SourceIndex(0)
2 >Emitted(48, 6) Source(37, 36) + SourceIndex(0)
3 >Emitted(48, 10) Source(37, 36) + SourceIndex(0)
---
>>>    b = 1,
1->^^^^
2 >    ^
3 >     ^^^^
1->, 
2 >    b
3 >     
1->Emitted(49, 5) Source(37, 38) + SourceIndex(0)
2 >Emitted(49, 6) Source(37, 39) + SourceIndex(0)
3 >Emitted(49, 10) Source(37, 39) + SourceIndex(0)
---
>>>    c = 2
1 >^^^^
2 >    ^
3 >     ^^^^
1 >, 
2 >    c
3 >     
1 >Emitted(50, 5) Source(37, 41) + SourceIndex(0)
2 >Emitted(50, 6) Source(37, 42) + SourceIndex(0)
3 >Emitted(50, 10) Source(37, 42) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^->
1 > }
1 >Emitted(51, 2) Source(37, 44) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/2/second-output.d.ts
sourceFile:../second/second_part2.ts
-------------------------------------------------------------------
>>>declare class C {
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^->
1->
2 >class 
3 >              C
1->Emitted(52, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(52, 15) Source(1, 7) + SourceIndex(1)
3 >Emitted(52, 16) Source(1, 8) + SourceIndex(1)
---
>>>    doSomething(): void;
1->^^^^
2 >    ^^^^^^^^^^^
1-> {
  >    
2 >    doSomething
1->Emitted(53, 5) Source(2, 5) + SourceIndex(1)
2 >Emitted(53, 16) Source(2, 16) + SourceIndex(1)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >() {
  >        console.log("something got done");
  >    }
  >}
1 >Emitted(54, 2) Source(5, 2) + SourceIndex(1)
---
>>>//# sourceMappingURL=second-output.d.ts.map

//// [/src/2/second-output.js]
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
var normalC = /** @class */ (function () {
    /*@internal*/ function normalC() {
    }
    /*@internal*/ normalC.prototype.method = function () { };
    Object.defineProperty(normalC.prototype, "c", {
        /*@internal*/ get: function () { return 10; },
        /*@internal*/ set: function (val) { },
        enumerable: false,
        configurable: true
    });
    return normalC;
}());
var normalN;
(function (normalN) {
    /*@internal*/ var C = /** @class */ (function () {
        function C() {
        }
        return C;
    }());
    normalN.C = C;
    /*@internal*/ function foo() { }
    normalN.foo = foo;
    /*@internal*/ var someNamespace;
    (function (someNamespace) {
        var C = /** @class */ (function () {
            function C() {
            }
            return C;
        }());
        someNamespace.C = C;
    })(someNamespace = normalN.someNamespace || (normalN.someNamespace = {}));
    /*@internal*/ var someOther;
    (function (someOther) {
        var something;
        (function (something) {
            var someClass = /** @class */ (function () {
                function someClass() {
                }
                return someClass;
            }());
            something.someClass = someClass;
        })(something = someOther.something || (someOther.something = {}));
    })(someOther = normalN.someOther || (normalN.someOther = {}));
    /*@internal*/ normalN.someImport = someNamespace.C;
    /*@internal*/ normalN.internalConst = 10;
    /*@internal*/ var internalEnum;
    (function (internalEnum) {
        internalEnum[internalEnum["a"] = 0] = "a";
        internalEnum[internalEnum["b"] = 1] = "b";
        internalEnum[internalEnum["c"] = 2] = "c";
    })(internalEnum = normalN.internalEnum || (normalN.internalEnum = {}));
})(normalN || (normalN = {}));
/*@internal*/ var internalC = /** @class */ (function () {
    function internalC() {
    }
    return internalC;
}());
/*@internal*/ function internalfoo() { }
/*@internal*/ var internalNamespace;
(function (internalNamespace) {
    var someClass = /** @class */ (function () {
        function someClass() {
        }
        return someClass;
    }());
    internalNamespace.someClass = someClass;
})(internalNamespace || (internalNamespace = {}));
/*@internal*/ var internalOther;
(function (internalOther) {
    var something;
    (function (something) {
        var someClass = /** @class */ (function () {
            function someClass() {
            }
            return someClass;
        }());
        something.someClass = someClass;
    })(something = internalOther.something || (internalOther.something = {}));
})(internalOther || (internalOther = {}));
/*@internal*/ var internalImport = internalNamespace.someClass;
/*@internal*/ var internalConst = 10;
/*@internal*/ var internalEnum;
(function (internalEnum) {
    internalEnum[internalEnum["a"] = 0] = "a";
    internalEnum[internalEnum["b"] = 1] = "b";
    internalEnum[internalEnum["c"] = 2] = "c";
})(internalEnum || (internalEnum = {}));
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());
//# sourceMappingURL=second-output.js.map

//// [/src/2/second-output.js.map]
{"version":3,"file":"second-output.js","sourceRoot":"","sources":["../second/second_part1.ts","../second/second_part2.ts"],"names":[],"mappings":"AAIA,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;AAED;IACI,aAAa,CAAC;IAAgB,CAAC;IAE/B,aAAa,CAAC,wBAAM,GAAN,cAAW,CAAC;IACZ,sBAAI,sBAAC;QAAnB,aAAa,MAAC,cAAU,OAAO,EAAE,CAAC,CAAC,CAAC;QACpC,aAAa,MAAC,UAAM,GAAW,IAAI,CAAC;;;OADA;IAExC,cAAC;AAAD,CAAC,AAND,IAMC;AACD,IAAU,OAAO,CAShB;AATD,WAAU,OAAO;IACb,aAAa,CAAC;QAAA;QAAiB,CAAC;QAAD,QAAC;IAAD,CAAC,AAAlB,IAAkB;IAAL,SAAC,IAAI,CAAA;IAChC,aAAa,CAAC,SAAgB,GAAG,KAAI,CAAC;IAAR,WAAG,MAAK,CAAA;IACtC,aAAa,CAAC,IAAiB,aAAa,CAAsB;IAApD,WAAiB,aAAa;QAAG;YAAA;YAAgB,CAAC;YAAD,QAAC;QAAD,CAAC,AAAjB,IAAiB;QAAJ,eAAC,IAAG,CAAA;IAAC,CAAC,EAAnC,aAAa,GAAb,qBAAa,KAAb,qBAAa,QAAsB;IAClE,aAAa,CAAC,IAAiB,SAAS,CAAwC;IAAlE,WAAiB,SAAS;QAAC,IAAA,SAAS,CAA8B;QAAvC,WAAA,SAAS;YAAG;gBAAA;gBAAwB,CAAC;gBAAD,gBAAC;YAAD,CAAC,AAAzB,IAAyB;YAAZ,mBAAS,YAAG,CAAA;QAAC,CAAC,EAAvC,SAAS,GAAT,mBAAS,KAAT,mBAAS,QAA8B;IAAD,CAAC,EAAjD,SAAS,GAAT,iBAAS,KAAT,iBAAS,QAAwC;IAChF,aAAa,CAAe,kBAAU,GAAG,aAAa,CAAC,CAAC,CAAC;IAEzD,aAAa,CAAc,qBAAa,GAAG,EAAE,CAAC;IAC9C,aAAa,CAAC,IAAY,YAAwB;IAApC,WAAY,YAAY;QAAG,yCAAC,CAAA;QAAE,yCAAC,CAAA;QAAE,yCAAC,CAAA;IAAC,CAAC,EAAxB,YAAY,GAAZ,oBAAY,KAAZ,oBAAY,QAAY;AACtD,CAAC,EATS,OAAO,KAAP,OAAO,QAShB;AACD,aAAa,CAAC;IAAA;IAAiB,CAAC;IAAD,gBAAC;AAAD,CAAC,AAAlB,IAAkB;AAChC,aAAa,CAAC,SAAS,WAAW,KAAI,CAAC;AACvC,aAAa,CAAC,IAAU,iBAAiB,CAA8B;AAAzD,WAAU,iBAAiB;IAAG;QAAA;QAAwB,CAAC;QAAD,gBAAC;IAAD,CAAC,AAAzB,IAAyB;IAAZ,2BAAS,YAAG,CAAA;AAAC,CAAC,EAA/C,iBAAiB,KAAjB,iBAAiB,QAA8B;AACvE,aAAa,CAAC,IAAU,aAAa,CAAwC;AAA/D,WAAU,aAAa;IAAC,IAAA,SAAS,CAA8B;IAAvC,WAAA,SAAS;QAAG;YAAA;YAAwB,CAAC;YAAD,gBAAC;QAAD,CAAC,AAAzB,IAAyB;QAAZ,mBAAS,YAAG,CAAA;IAAC,CAAC,EAAvC,SAAS,GAAT,uBAAS,KAAT,uBAAS,QAA8B;AAAD,CAAC,EAArD,aAAa,KAAb,aAAa,QAAwC;AAC7E,aAAa,CAAC,IAAO,cAAc,GAAG,iBAAiB,CAAC,SAAS,CAAC;AAElE,aAAa,CAAC,IAAM,aAAa,GAAG,EAAE,CAAC;AACvC,aAAa,CAAC,IAAK,YAAwB;AAA7B,WAAK,YAAY;IAAG,yCAAC,CAAA;IAAE,yCAAC,CAAA;IAAE,yCAAC,CAAA;AAAC,CAAC,EAAxB,YAAY,KAAZ,YAAY,QAAY;ACpC3C;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC"}

//// [/src/2/second-output.js.map.baseline.txt]
===================================================================
JsFile: second-output.js
mapUrl: second-output.js.map
sourceRoot: 
sources: ../second/second_part1.ts,../second/second_part2.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/2/second-output.js
sourceFile:../second/second_part1.ts
-------------------------------------------------------------------
>>>var N;
1 >
2 >^^^^
3 >    ^
4 >     ^
5 >      ^^^^^^^^^->
1 >namespace N {
  >    // Comment text
  >}
  >
  >
2 >namespace 
3 >    N
4 >      {
  >         function f() {
  >             console.log('testing');
  >         }
  >     
  >         f();
  >     }
1 >Emitted(1, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(1, 5) Source(5, 11) + SourceIndex(0)
3 >Emitted(1, 6) Source(5, 12) + SourceIndex(0)
4 >Emitted(1, 7) Source(11, 2) + SourceIndex(0)
---
>>>(function (N) {
1->
2 >^^^^^^^^^^^
3 >           ^
4 >            ^^^^^^->
1->
2 >namespace 
3 >           N
1->Emitted(2, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(2, 12) Source(5, 11) + SourceIndex(0)
3 >Emitted(2, 13) Source(5, 12) + SourceIndex(0)
---
>>>    function f() {
1->^^^^
2 >    ^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^^^^^^^^->
1-> {
  >    
2 >    function 
3 >             f
1->Emitted(3, 5) Source(6, 5) + SourceIndex(0)
2 >Emitted(3, 14) Source(6, 14) + SourceIndex(0)
3 >Emitted(3, 15) Source(6, 15) + SourceIndex(0)
---
>>>        console.log('testing');
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^
7 >                             ^
8 >                              ^
1->() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    'testing'
7 >                             )
8 >                              ;
1->Emitted(4, 9) Source(7, 9) + SourceIndex(0)
2 >Emitted(4, 16) Source(7, 16) + SourceIndex(0)
3 >Emitted(4, 17) Source(7, 17) + SourceIndex(0)
4 >Emitted(4, 20) Source(7, 20) + SourceIndex(0)
5 >Emitted(4, 21) Source(7, 21) + SourceIndex(0)
6 >Emitted(4, 30) Source(7, 30) + SourceIndex(0)
7 >Emitted(4, 31) Source(7, 31) + SourceIndex(0)
8 >Emitted(4, 32) Source(7, 32) + SourceIndex(0)
---
>>>    }
1 >^^^^
2 >    ^
3 >     ^^^->
1 >
  >    
2 >    }
1 >Emitted(5, 5) Source(8, 5) + SourceIndex(0)
2 >Emitted(5, 6) Source(8, 6) + SourceIndex(0)
---
>>>    f();
1->^^^^
2 >    ^
3 >     ^^
4 >       ^
5 >        ^^^^^^^^^^->
1->
  >
  >    
2 >    f
3 >     ()
4 >       ;
1->Emitted(6, 5) Source(10, 5) + SourceIndex(0)
2 >Emitted(6, 6) Source(10, 6) + SourceIndex(0)
3 >Emitted(6, 8) Source(10, 8) + SourceIndex(0)
4 >Emitted(6, 9) Source(10, 9) + SourceIndex(0)
---
>>>})(N || (N = {}));
1->
2 >^
3 > ^^
4 >   ^
5 >    ^^^^^
6 >         ^
7 >          ^^^^^^^^
8 >                  ^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >}
3 > 
4 >   N
5 >    
6 >         N
7 >           {
  >              function f() {
  >                  console.log('testing');
  >              }
  >          
  >              f();
  >          }
1->Emitted(7, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(7, 2) Source(11, 2) + SourceIndex(0)
3 >Emitted(7, 4) Source(5, 11) + SourceIndex(0)
4 >Emitted(7, 5) Source(5, 12) + SourceIndex(0)
5 >Emitted(7, 10) Source(5, 11) + SourceIndex(0)
6 >Emitted(7, 11) Source(5, 12) + SourceIndex(0)
7 >Emitted(7, 19) Source(11, 2) + SourceIndex(0)
---
>>>var normalC = /** @class */ (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
  >
1->Emitted(8, 1) Source(13, 1) + SourceIndex(0)
---
>>>    /*@internal*/ function normalC() {
1->^^^^
2 >    ^^^^^^^^^^^^^
3 >                 ^
1->class normalC {
  >    
2 >    /*@internal*/
3 >                  
1->Emitted(9, 5) Source(14, 5) + SourceIndex(0)
2 >Emitted(9, 18) Source(14, 18) + SourceIndex(0)
3 >Emitted(9, 19) Source(14, 19) + SourceIndex(0)
---
>>>    }
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >constructor() { 
2 >    }
1 >Emitted(10, 5) Source(14, 35) + SourceIndex(0)
2 >Emitted(10, 6) Source(14, 36) + SourceIndex(0)
---
>>>    /*@internal*/ normalC.prototype.method = function () { };
1->^^^^
2 >    ^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^^^^^^^^^^^^^^^^^^^^^
5 >                                          ^^^
6 >                                             ^^^^^^^^^^^^^^
7 >                                                           ^
1->
  >    /*@internal*/ prop: string;
  >    
2 >    /*@internal*/
3 >                  
4 >                  method
5 >                                          
6 >                                             method() { 
7 >                                                           }
1->Emitted(11, 5) Source(16, 5) + SourceIndex(0)
2 >Emitted(11, 18) Source(16, 18) + SourceIndex(0)
3 >Emitted(11, 19) Source(16, 19) + SourceIndex(0)
4 >Emitted(11, 43) Source(16, 25) + SourceIndex(0)
5 >Emitted(11, 46) Source(16, 19) + SourceIndex(0)
6 >Emitted(11, 60) Source(16, 30) + SourceIndex(0)
7 >Emitted(11, 61) Source(16, 31) + SourceIndex(0)
---
>>>    Object.defineProperty(normalC.prototype, "c", {
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^
3 >                          ^^^^^^^^^^^^^^^^^^^^^^
4 >                                                ^^^^^^->
1 >
  >    /*@internal*/ 
2 >    get 
3 >                          c
1 >Emitted(12, 5) Source(17, 19) + SourceIndex(0)
2 >Emitted(12, 27) Source(17, 23) + SourceIndex(0)
3 >Emitted(12, 49) Source(17, 24) + SourceIndex(0)
---
>>>        /*@internal*/ get: function () { return 10; },
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^
3 >                     ^^^^^^
4 >                           ^^^^^^^^^^^^^^
5 >                                         ^^^^^^^
6 >                                                ^^
7 >                                                  ^
8 >                                                   ^
9 >                                                    ^
1->
2 >        /*@internal*/
3 >                      
4 >                           get c() { 
5 >                                         return 
6 >                                                10
7 >                                                  ;
8 >                                                    
9 >                                                    }
1->Emitted(13, 9) Source(17, 5) + SourceIndex(0)
2 >Emitted(13, 22) Source(17, 18) + SourceIndex(0)
3 >Emitted(13, 28) Source(17, 19) + SourceIndex(0)
4 >Emitted(13, 42) Source(17, 29) + SourceIndex(0)
5 >Emitted(13, 49) Source(17, 36) + SourceIndex(0)
6 >Emitted(13, 51) Source(17, 38) + SourceIndex(0)
7 >Emitted(13, 52) Source(17, 39) + SourceIndex(0)
8 >Emitted(13, 53) Source(17, 40) + SourceIndex(0)
9 >Emitted(13, 54) Source(17, 41) + SourceIndex(0)
---
>>>        /*@internal*/ set: function (val) { },
1 >^^^^^^^^
2 >        ^^^^^^^^^^^^^
3 >                     ^^^^^^
4 >                           ^^^^^^^^^^
5 >                                     ^^^
6 >                                        ^^^^
7 >                                            ^
1 >
  >    
2 >        /*@internal*/
3 >                      
4 >                           set c(
5 >                                     val: number
6 >                                        ) { 
7 >                                            }
1 >Emitted(14, 9) Source(18, 5) + SourceIndex(0)
2 >Emitted(14, 22) Source(18, 18) + SourceIndex(0)
3 >Emitted(14, 28) Source(18, 19) + SourceIndex(0)
4 >Emitted(14, 38) Source(18, 25) + SourceIndex(0)
5 >Emitted(14, 41) Source(18, 36) + SourceIndex(0)
6 >Emitted(14, 45) Source(18, 40) + SourceIndex(0)
7 >Emitted(14, 46) Source(18, 41) + SourceIndex(0)
---
>>>        enumerable: false,
>>>        configurable: true
>>>    });
1 >^^^^^^^
2 >       ^^^^^^^^^^^^->
1 >
1 >Emitted(17, 8) Source(17, 41) + SourceIndex(0)
---
>>>    return normalC;
1->^^^^
2 >    ^^^^^^^^^^^^^^
1->
  >    /*@internal*/ set c(val: number) { }
  >
2 >    }
1->Emitted(18, 5) Source(19, 1) + SourceIndex(0)
2 >Emitted(18, 19) Source(19, 2) + SourceIndex(0)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^->
1 >
2 >}
3 > 
4 > class normalC {
  >     /*@internal*/ constructor() { }
  >     /*@internal*/ prop: string;
  >     /*@internal*/ method() { }
  >     /*@internal*/ get c() { return 10; }
  >     /*@internal*/ set c(val: number) { }
  > }
1 >Emitted(19, 1) Source(19, 1) + SourceIndex(0)
2 >Emitted(19, 2) Source(19, 2) + SourceIndex(0)
3 >Emitted(19, 2) Source(13, 1) + SourceIndex(0)
4 >Emitted(19, 6) Source(19, 2) + SourceIndex(0)
---
>>>var normalN;
1->
2 >^^^^
3 >    ^^^^^^^
4 >           ^
5 >            ^^^^^^^^^->
1->
  >
2 >namespace 
3 >    normalN
4 >            {
  >               /*@internal*/ export class C { }
  >               /*@internal*/ export function foo() {}
  >               /*@internal*/ export namespace someNamespace { export class C {} }
  >               /*@internal*/ export namespace someOther.something { export class someClass {} }
  >               /*@internal*/ export import someImport = someNamespace.C;
  >               /*@internal*/ export type internalType = internalC;
  >               /*@internal*/ export const internalConst = 10;
  >               /*@internal*/ export enum internalEnum { a, b, c }
  >           }
1->Emitted(20, 1) Source(20, 1) + SourceIndex(0)
2 >Emitted(20, 5) Source(20, 11) + SourceIndex(0)
3 >Emitted(20, 12) Source(20, 18) + SourceIndex(0)
4 >Emitted(20, 13) Source(29, 2) + SourceIndex(0)
---
>>>(function (normalN) {
1->
2 >^^^^^^^^^^^
3 >           ^^^^^^^
4 >                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >namespace 
3 >           normalN
1->Emitted(21, 1) Source(20, 1) + SourceIndex(0)
2 >Emitted(21, 12) Source(20, 11) + SourceIndex(0)
3 >Emitted(21, 19) Source(20, 18) + SourceIndex(0)
---
>>>    /*@internal*/ var C = /** @class */ (function () {
1->^^^^
2 >    ^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^->
1-> {
  >    
2 >    /*@internal*/
3 >                  
1->Emitted(22, 5) Source(21, 5) + SourceIndex(0)
2 >Emitted(22, 18) Source(21, 18) + SourceIndex(0)
3 >Emitted(22, 19) Source(21, 19) + SourceIndex(0)
---
>>>        function C() {
1->^^^^^^^^
2 >        ^->
1->
1->Emitted(23, 9) Source(21, 19) + SourceIndex(0)
---
>>>        }
1->^^^^^^^^
2 >        ^
3 >         ^^^^^^^^->
1->export class C { 
2 >        }
1->Emitted(24, 9) Source(21, 36) + SourceIndex(0)
2 >Emitted(24, 10) Source(21, 37) + SourceIndex(0)
---
>>>        return C;
1->^^^^^^^^
2 >        ^^^^^^^^
1->
2 >        }
1->Emitted(25, 9) Source(21, 36) + SourceIndex(0)
2 >Emitted(25, 17) Source(21, 37) + SourceIndex(0)
---
>>>    }());
1 >^^^^
2 >    ^
3 >     
4 >     ^^^^
5 >         ^^^^^^^^^->
1 >
2 >    }
3 >     
4 >     export class C { }
1 >Emitted(26, 5) Source(21, 36) + SourceIndex(0)
2 >Emitted(26, 6) Source(21, 37) + SourceIndex(0)
3 >Emitted(26, 6) Source(21, 19) + SourceIndex(0)
4 >Emitted(26, 10) Source(21, 37) + SourceIndex(0)
---
>>>    normalN.C = C;
1->^^^^
2 >    ^^^^^^^^^
3 >             ^^^^
4 >                 ^
5 >                  ^^^^^^^^^^^^^^^^^^->
1->
2 >    C
3 >              { }
4 >                 
1->Emitted(27, 5) Source(21, 32) + SourceIndex(0)
2 >Emitted(27, 14) Source(21, 33) + SourceIndex(0)
3 >Emitted(27, 18) Source(21, 37) + SourceIndex(0)
4 >Emitted(27, 19) Source(21, 37) + SourceIndex(0)
---
>>>    /*@internal*/ function foo() { }
1->^^^^
2 >    ^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^^^^^^
5 >                           ^^^
6 >                              ^^^^^
7 >                                   ^
1->
  >    
2 >    /*@internal*/
3 >                  
4 >                  export function 
5 >                           foo
6 >                              () {
7 >                                   }
1->Emitted(28, 5) Source(22, 5) + SourceIndex(0)
2 >Emitted(28, 18) Source(22, 18) + SourceIndex(0)
3 >Emitted(28, 19) Source(22, 19) + SourceIndex(0)
4 >Emitted(28, 28) Source(22, 35) + SourceIndex(0)
5 >Emitted(28, 31) Source(22, 38) + SourceIndex(0)
6 >Emitted(28, 36) Source(22, 42) + SourceIndex(0)
7 >Emitted(28, 37) Source(22, 43) + SourceIndex(0)
---
>>>    normalN.foo = foo;
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^
4 >                     ^
5 >                      ^^^^^^^^^^^^^^->
1 >
2 >    foo
3 >               () {}
4 >                     
1 >Emitted(29, 5) Source(22, 35) + SourceIndex(0)
2 >Emitted(29, 16) Source(22, 38) + SourceIndex(0)
3 >Emitted(29, 22) Source(22, 43) + SourceIndex(0)
4 >Emitted(29, 23) Source(22, 43) + SourceIndex(0)
---
>>>    /*@internal*/ var someNamespace;
1->^^^^
2 >    ^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^
5 >                      ^^^^^^^^^^^^^
6 >                                   ^
1->
  >    
2 >    /*@internal*/
3 >                  
4 >                  export namespace 
5 >                      someNamespace
6 >                                    { export class C {} }
1->Emitted(30, 5) Source(23, 5) + SourceIndex(0)
2 >Emitted(30, 18) Source(23, 18) + SourceIndex(0)
3 >Emitted(30, 19) Source(23, 19) + SourceIndex(0)
4 >Emitted(30, 23) Source(23, 36) + SourceIndex(0)
5 >Emitted(30, 36) Source(23, 49) + SourceIndex(0)
6 >Emitted(30, 37) Source(23, 71) + SourceIndex(0)
---
>>>    (function (someNamespace) {
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^^^^^
4 >                            ^^^^^^^^^^^^^^^^->
1 >
2 >    export namespace 
3 >               someNamespace
1 >Emitted(31, 5) Source(23, 19) + SourceIndex(0)
2 >Emitted(31, 16) Source(23, 36) + SourceIndex(0)
3 >Emitted(31, 29) Source(23, 49) + SourceIndex(0)
---
>>>        var C = /** @class */ (function () {
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^->
1-> { 
1->Emitted(32, 9) Source(23, 52) + SourceIndex(0)
---
>>>            function C() {
1->^^^^^^^^^^^^
2 >            ^->
1->
1->Emitted(33, 13) Source(23, 52) + SourceIndex(0)
---
>>>            }
1->^^^^^^^^^^^^
2 >            ^
3 >             ^^^^^^^^->
1->export class C {
2 >            }
1->Emitted(34, 13) Source(23, 68) + SourceIndex(0)
2 >Emitted(34, 14) Source(23, 69) + SourceIndex(0)
---
>>>            return C;
1->^^^^^^^^^^^^
2 >            ^^^^^^^^
1->
2 >            }
1->Emitted(35, 13) Source(23, 68) + SourceIndex(0)
2 >Emitted(35, 21) Source(23, 69) + SourceIndex(0)
---
>>>        }());
1 >^^^^^^^^
2 >        ^
3 >         
4 >         ^^^^
5 >             ^^^^^^^^^^^^^^^->
1 >
2 >        }
3 >         
4 >         export class C {}
1 >Emitted(36, 9) Source(23, 68) + SourceIndex(0)
2 >Emitted(36, 10) Source(23, 69) + SourceIndex(0)
3 >Emitted(36, 10) Source(23, 52) + SourceIndex(0)
4 >Emitted(36, 14) Source(23, 69) + SourceIndex(0)
---
>>>        someNamespace.C = C;
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^
3 >                       ^^^^
4 >                           ^
5 >                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >        C
3 >                        {}
4 >                           
1->Emitted(37, 9) Source(23, 65) + SourceIndex(0)
2 >Emitted(37, 24) Source(23, 66) + SourceIndex(0)
3 >Emitted(37, 28) Source(23, 69) + SourceIndex(0)
4 >Emitted(37, 29) Source(23, 69) + SourceIndex(0)
---
>>>    })(someNamespace = normalN.someNamespace || (normalN.someNamespace = {}));
1->^^^^
2 >    ^
3 >     ^^
4 >       ^^^^^^^^^^^^^
5 >                    ^^^
6 >                       ^^^^^^^^^^^^^^^^^^^^^
7 >                                            ^^^^^
8 >                                                 ^^^^^^^^^^^^^^^^^^^^^
9 >                                                                      ^^^^^^^^
1-> 
2 >    }
3 >     
4 >       someNamespace
5 >                    
6 >                       someNamespace
7 >                                            
8 >                                                 someNamespace
9 >                                                                       { export class C {} }
1->Emitted(38, 5) Source(23, 70) + SourceIndex(0)
2 >Emitted(38, 6) Source(23, 71) + SourceIndex(0)
3 >Emitted(38, 8) Source(23, 36) + SourceIndex(0)
4 >Emitted(38, 21) Source(23, 49) + SourceIndex(0)
5 >Emitted(38, 24) Source(23, 36) + SourceIndex(0)
6 >Emitted(38, 45) Source(23, 49) + SourceIndex(0)
7 >Emitted(38, 50) Source(23, 36) + SourceIndex(0)
8 >Emitted(38, 71) Source(23, 49) + SourceIndex(0)
9 >Emitted(38, 79) Source(23, 71) + SourceIndex(0)
---
>>>    /*@internal*/ var someOther;
1 >^^^^
2 >    ^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^
5 >                      ^^^^^^^^^
6 >                               ^
1 >
  >    
2 >    /*@internal*/
3 >                  
4 >                  export namespace 
5 >                      someOther
6 >                               .something { export class someClass {} }
1 >Emitted(39, 5) Source(24, 5) + SourceIndex(0)
2 >Emitted(39, 18) Source(24, 18) + SourceIndex(0)
3 >Emitted(39, 19) Source(24, 19) + SourceIndex(0)
4 >Emitted(39, 23) Source(24, 36) + SourceIndex(0)
5 >Emitted(39, 32) Source(24, 45) + SourceIndex(0)
6 >Emitted(39, 33) Source(24, 85) + SourceIndex(0)
---
>>>    (function (someOther) {
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^
1 >
2 >    export namespace 
3 >               someOther
1 >Emitted(40, 5) Source(24, 19) + SourceIndex(0)
2 >Emitted(40, 16) Source(24, 36) + SourceIndex(0)
3 >Emitted(40, 25) Source(24, 45) + SourceIndex(0)
---
>>>        var something;
1 >^^^^^^^^
2 >        ^^^^
3 >            ^^^^^^^^^
4 >                     ^
5 >                      ^^^^^^^^^->
1 >.
2 >        
3 >            something
4 >                      { export class someClass {} }
1 >Emitted(41, 9) Source(24, 46) + SourceIndex(0)
2 >Emitted(41, 13) Source(24, 46) + SourceIndex(0)
3 >Emitted(41, 22) Source(24, 55) + SourceIndex(0)
4 >Emitted(41, 23) Source(24, 85) + SourceIndex(0)
---
>>>        (function (something) {
1->^^^^^^^^
2 >        ^^^^^^^^^^^
3 >                   ^^^^^^^^^
4 >                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >        
3 >                   something
1->Emitted(42, 9) Source(24, 46) + SourceIndex(0)
2 >Emitted(42, 20) Source(24, 46) + SourceIndex(0)
3 >Emitted(42, 29) Source(24, 55) + SourceIndex(0)
---
>>>            var someClass = /** @class */ (function () {
1->^^^^^^^^^^^^
2 >            ^^^^^^^^^^^^^^^^^^^^^^^^^^->
1-> { 
1->Emitted(43, 13) Source(24, 58) + SourceIndex(0)
---
>>>                function someClass() {
1->^^^^^^^^^^^^^^^^
2 >                ^->
1->
1->Emitted(44, 17) Source(24, 58) + SourceIndex(0)
---
>>>                }
1->^^^^^^^^^^^^^^^^
2 >                ^
3 >                 ^^^^^^^^^^^^^^^^->
1->export class someClass {
2 >                }
1->Emitted(45, 17) Source(24, 82) + SourceIndex(0)
2 >Emitted(45, 18) Source(24, 83) + SourceIndex(0)
---
>>>                return someClass;
1->^^^^^^^^^^^^^^^^
2 >                ^^^^^^^^^^^^^^^^
1->
2 >                }
1->Emitted(46, 17) Source(24, 82) + SourceIndex(0)
2 >Emitted(46, 33) Source(24, 83) + SourceIndex(0)
---
>>>            }());
1 >^^^^^^^^^^^^
2 >            ^
3 >             
4 >             ^^^^
5 >                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >            }
3 >             
4 >             export class someClass {}
1 >Emitted(47, 13) Source(24, 82) + SourceIndex(0)
2 >Emitted(47, 14) Source(24, 83) + SourceIndex(0)
3 >Emitted(47, 14) Source(24, 58) + SourceIndex(0)
4 >Emitted(47, 18) Source(24, 83) + SourceIndex(0)
---
>>>            something.someClass = someClass;
1->^^^^^^^^^^^^
2 >            ^^^^^^^^^^^^^^^^^^^
3 >                               ^^^^^^^^^^^^
4 >                                           ^
5 >                                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >            someClass
3 >                                {}
4 >                                           
1->Emitted(48, 13) Source(24, 71) + SourceIndex(0)
2 >Emitted(48, 32) Source(24, 80) + SourceIndex(0)
3 >Emitted(48, 44) Source(24, 83) + SourceIndex(0)
4 >Emitted(48, 45) Source(24, 83) + SourceIndex(0)
---
>>>        })(something = someOther.something || (someOther.something = {}));
1->^^^^^^^^
2 >        ^
3 >         ^^
4 >           ^^^^^^^^^
5 >                    ^^^
6 >                       ^^^^^^^^^^^^^^^^^^^
7 >                                          ^^^^^
8 >                                               ^^^^^^^^^^^^^^^^^^^
9 >                                                                  ^^^^^^^^
1-> 
2 >        }
3 >         
4 >           something
5 >                    
6 >                       something
7 >                                          
8 >                                               something
9 >                                                                   { export class someClass {} }
1->Emitted(49, 9) Source(24, 84) + SourceIndex(0)
2 >Emitted(49, 10) Source(24, 85) + SourceIndex(0)
3 >Emitted(49, 12) Source(24, 46) + SourceIndex(0)
4 >Emitted(49, 21) Source(24, 55) + SourceIndex(0)
5 >Emitted(49, 24) Source(24, 46) + SourceIndex(0)
6 >Emitted(49, 43) Source(24, 55) + SourceIndex(0)
7 >Emitted(49, 48) Source(24, 46) + SourceIndex(0)
8 >Emitted(49, 67) Source(24, 55) + SourceIndex(0)
9 >Emitted(49, 75) Source(24, 85) + SourceIndex(0)
---
>>>    })(someOther = normalN.someOther || (normalN.someOther = {}));
1 >^^^^
2 >    ^
3 >     ^^
4 >       ^^^^^^^^^
5 >                ^^^
6 >                   ^^^^^^^^^^^^^^^^^
7 >                                    ^^^^^
8 >                                         ^^^^^^^^^^^^^^^^^
9 >                                                          ^^^^^^^^
1 >
2 >    }
3 >     
4 >       someOther
5 >                
6 >                   someOther
7 >                                    
8 >                                         someOther
9 >                                                          .something { export class someClass {} }
1 >Emitted(50, 5) Source(24, 84) + SourceIndex(0)
2 >Emitted(50, 6) Source(24, 85) + SourceIndex(0)
3 >Emitted(50, 8) Source(24, 36) + SourceIndex(0)
4 >Emitted(50, 17) Source(24, 45) + SourceIndex(0)
5 >Emitted(50, 20) Source(24, 36) + SourceIndex(0)
6 >Emitted(50, 37) Source(24, 45) + SourceIndex(0)
7 >Emitted(50, 42) Source(24, 36) + SourceIndex(0)
8 >Emitted(50, 59) Source(24, 45) + SourceIndex(0)
9 >Emitted(50, 67) Source(24, 85) + SourceIndex(0)
---
>>>    /*@internal*/ normalN.someImport = someNamespace.C;
1 >^^^^
2 >    ^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^^^^^^^^^^^^^^^
5 >                                    ^^^
6 >                                       ^^^^^^^^^^^^^
7 >                                                    ^
8 >                                                     ^
9 >                                                      ^
1 >
  >    
2 >    /*@internal*/
3 >                  export import 
4 >                  someImport
5 >                                     = 
6 >                                       someNamespace
7 >                                                    .
8 >                                                     C
9 >                                                      ;
1 >Emitted(51, 5) Source(25, 5) + SourceIndex(0)
2 >Emitted(51, 18) Source(25, 18) + SourceIndex(0)
3 >Emitted(51, 19) Source(25, 33) + SourceIndex(0)
4 >Emitted(51, 37) Source(25, 43) + SourceIndex(0)
5 >Emitted(51, 40) Source(25, 46) + SourceIndex(0)
6 >Emitted(51, 53) Source(25, 59) + SourceIndex(0)
7 >Emitted(51, 54) Source(25, 60) + SourceIndex(0)
8 >Emitted(51, 55) Source(25, 61) + SourceIndex(0)
9 >Emitted(51, 56) Source(25, 62) + SourceIndex(0)
---
>>>    /*@internal*/ normalN.internalConst = 10;
1 >^^^^
2 >    ^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^^^^^^^^^^^^^^^^^^
5 >                                       ^^^
6 >                                          ^^
7 >                                            ^
1 >
  >    /*@internal*/ export type internalType = internalC;
  >    
2 >    /*@internal*/
3 >                  export const 
4 >                  internalConst
5 >                                        = 
6 >                                          10
7 >                                            ;
1 >Emitted(52, 5) Source(27, 5) + SourceIndex(0)
2 >Emitted(52, 18) Source(27, 18) + SourceIndex(0)
3 >Emitted(52, 19) Source(27, 32) + SourceIndex(0)
4 >Emitted(52, 40) Source(27, 45) + SourceIndex(0)
5 >Emitted(52, 43) Source(27, 48) + SourceIndex(0)
6 >Emitted(52, 45) Source(27, 50) + SourceIndex(0)
7 >Emitted(52, 46) Source(27, 51) + SourceIndex(0)
---
>>>    /*@internal*/ var internalEnum;
1 >^^^^
2 >    ^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^
5 >                      ^^^^^^^^^^^^
1 >
  >    
2 >    /*@internal*/
3 >                  
4 >                  export enum 
5 >                      internalEnum { a, b, c }
1 >Emitted(53, 5) Source(28, 5) + SourceIndex(0)
2 >Emitted(53, 18) Source(28, 18) + SourceIndex(0)
3 >Emitted(53, 19) Source(28, 19) + SourceIndex(0)
4 >Emitted(53, 23) Source(28, 31) + SourceIndex(0)
5 >Emitted(53, 35) Source(28, 55) + SourceIndex(0)
---
>>>    (function (internalEnum) {
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^^^^
4 >                           ^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >    export enum 
3 >               internalEnum
1 >Emitted(54, 5) Source(28, 19) + SourceIndex(0)
2 >Emitted(54, 16) Source(28, 31) + SourceIndex(0)
3 >Emitted(54, 28) Source(28, 43) + SourceIndex(0)
---
>>>        internalEnum[internalEnum["a"] = 0] = "a";
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                 ^
1-> { 
2 >        a
3 >                                                 
1->Emitted(55, 9) Source(28, 46) + SourceIndex(0)
2 >Emitted(55, 50) Source(28, 47) + SourceIndex(0)
3 >Emitted(55, 51) Source(28, 47) + SourceIndex(0)
---
>>>        internalEnum[internalEnum["b"] = 1] = "b";
1 >^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                 ^
1 >, 
2 >        b
3 >                                                 
1 >Emitted(56, 9) Source(28, 49) + SourceIndex(0)
2 >Emitted(56, 50) Source(28, 50) + SourceIndex(0)
3 >Emitted(56, 51) Source(28, 50) + SourceIndex(0)
---
>>>        internalEnum[internalEnum["c"] = 2] = "c";
1 >^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                 ^
4 >                                                  ^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >, 
2 >        c
3 >                                                 
1 >Emitted(57, 9) Source(28, 52) + SourceIndex(0)
2 >Emitted(57, 50) Source(28, 53) + SourceIndex(0)
3 >Emitted(57, 51) Source(28, 53) + SourceIndex(0)
---
>>>    })(internalEnum = normalN.internalEnum || (normalN.internalEnum = {}));
1->^^^^
2 >    ^
3 >     ^^
4 >       ^^^^^^^^^^^^
5 >                   ^^^
6 >                      ^^^^^^^^^^^^^^^^^^^^
7 >                                          ^^^^^
8 >                                               ^^^^^^^^^^^^^^^^^^^^
9 >                                                                   ^^^^^^^^
1-> 
2 >    }
3 >     
4 >       internalEnum
5 >                   
6 >                      internalEnum
7 >                                          
8 >                                               internalEnum
9 >                                                                    { a, b, c }
1->Emitted(58, 5) Source(28, 54) + SourceIndex(0)
2 >Emitted(58, 6) Source(28, 55) + SourceIndex(0)
3 >Emitted(58, 8) Source(28, 31) + SourceIndex(0)
4 >Emitted(58, 20) Source(28, 43) + SourceIndex(0)
5 >Emitted(58, 23) Source(28, 31) + SourceIndex(0)
6 >Emitted(58, 43) Source(28, 43) + SourceIndex(0)
7 >Emitted(58, 48) Source(28, 31) + SourceIndex(0)
8 >Emitted(58, 68) Source(28, 43) + SourceIndex(0)
9 >Emitted(58, 76) Source(28, 55) + SourceIndex(0)
---
>>>})(normalN || (normalN = {}));
1 >
2 >^
3 > ^^
4 >   ^^^^^^^
5 >          ^^^^^
6 >               ^^^^^^^
7 >                      ^^^^^^^^
8 >                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
3 > 
4 >   normalN
5 >          
6 >               normalN
7 >                       {
  >                          /*@internal*/ export class C { }
  >                          /*@internal*/ export function foo() {}
  >                          /*@internal*/ export namespace someNamespace { export class C {} }
  >                          /*@internal*/ export namespace someOther.something { export class someClass {} }
  >                          /*@internal*/ export import someImport = someNamespace.C;
  >                          /*@internal*/ export type internalType = internalC;
  >                          /*@internal*/ export const internalConst = 10;
  >                          /*@internal*/ export enum internalEnum { a, b, c }
  >                      }
1 >Emitted(59, 1) Source(29, 1) + SourceIndex(0)
2 >Emitted(59, 2) Source(29, 2) + SourceIndex(0)
3 >Emitted(59, 4) Source(20, 11) + SourceIndex(0)
4 >Emitted(59, 11) Source(20, 18) + SourceIndex(0)
5 >Emitted(59, 16) Source(20, 11) + SourceIndex(0)
6 >Emitted(59, 23) Source(20, 18) + SourceIndex(0)
7 >Emitted(59, 31) Source(29, 2) + SourceIndex(0)
---
>>>/*@internal*/ var internalC = /** @class */ (function () {
1->
2 >^^^^^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^^^->
1->
  >
2 >/*@internal*/
3 >              
1->Emitted(60, 1) Source(30, 1) + SourceIndex(0)
2 >Emitted(60, 14) Source(30, 14) + SourceIndex(0)
3 >Emitted(60, 15) Source(30, 15) + SourceIndex(0)
---
>>>    function internalC() {
1->^^^^
2 >    ^->
1->
1->Emitted(61, 5) Source(30, 15) + SourceIndex(0)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^^->
1->class internalC {
2 >    }
1->Emitted(62, 5) Source(30, 32) + SourceIndex(0)
2 >Emitted(62, 6) Source(30, 33) + SourceIndex(0)
---
>>>    return internalC;
1->^^^^
2 >    ^^^^^^^^^^^^^^^^
1->
2 >    }
1->Emitted(63, 5) Source(30, 32) + SourceIndex(0)
2 >Emitted(63, 21) Source(30, 33) + SourceIndex(0)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class internalC {}
1 >Emitted(64, 1) Source(30, 32) + SourceIndex(0)
2 >Emitted(64, 2) Source(30, 33) + SourceIndex(0)
3 >Emitted(64, 2) Source(30, 15) + SourceIndex(0)
4 >Emitted(64, 6) Source(30, 33) + SourceIndex(0)
---
>>>/*@internal*/ function internalfoo() { }
1->
2 >^^^^^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^
5 >                       ^^^^^^^^^^^
6 >                                  ^^^^^
7 >                                       ^
1->
  >
2 >/*@internal*/
3 >              
4 >              function 
5 >                       internalfoo
6 >                                  () {
7 >                                       }
1->Emitted(65, 1) Source(31, 1) + SourceIndex(0)
2 >Emitted(65, 14) Source(31, 14) + SourceIndex(0)
3 >Emitted(65, 15) Source(31, 15) + SourceIndex(0)
4 >Emitted(65, 24) Source(31, 24) + SourceIndex(0)
5 >Emitted(65, 35) Source(31, 35) + SourceIndex(0)
6 >Emitted(65, 40) Source(31, 39) + SourceIndex(0)
7 >Emitted(65, 41) Source(31, 40) + SourceIndex(0)
---
>>>/*@internal*/ var internalNamespace;
1 >
2 >^^^^^^^^^^^^^
3 >             ^
4 >              ^^^^
5 >                  ^^^^^^^^^^^^^^^^^
6 >                                   ^
1 >
  >
2 >/*@internal*/
3 >              
4 >              namespace 
5 >                  internalNamespace
6 >                                    { export class someClass {} }
1 >Emitted(66, 1) Source(32, 1) + SourceIndex(0)
2 >Emitted(66, 14) Source(32, 14) + SourceIndex(0)
3 >Emitted(66, 15) Source(32, 15) + SourceIndex(0)
4 >Emitted(66, 19) Source(32, 25) + SourceIndex(0)
5 >Emitted(66, 36) Source(32, 42) + SourceIndex(0)
6 >Emitted(66, 37) Source(32, 72) + SourceIndex(0)
---
>>>(function (internalNamespace) {
1 >
2 >^^^^^^^^^^^
3 >           ^^^^^^^^^^^^^^^^^
4 >                            ^^^^^^^^^^^^^^^^^^^^->
1 >
2 >namespace 
3 >           internalNamespace
1 >Emitted(67, 1) Source(32, 15) + SourceIndex(0)
2 >Emitted(67, 12) Source(32, 25) + SourceIndex(0)
3 >Emitted(67, 29) Source(32, 42) + SourceIndex(0)
---
>>>    var someClass = /** @class */ (function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^->
1-> { 
1->Emitted(68, 5) Source(32, 45) + SourceIndex(0)
---
>>>        function someClass() {
1->^^^^^^^^
2 >        ^->
1->
1->Emitted(69, 9) Source(32, 45) + SourceIndex(0)
---
>>>        }
1->^^^^^^^^
2 >        ^
3 >         ^^^^^^^^^^^^^^^^->
1->export class someClass {
2 >        }
1->Emitted(70, 9) Source(32, 69) + SourceIndex(0)
2 >Emitted(70, 10) Source(32, 70) + SourceIndex(0)
---
>>>        return someClass;
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^
1->
2 >        }
1->Emitted(71, 9) Source(32, 69) + SourceIndex(0)
2 >Emitted(71, 25) Source(32, 70) + SourceIndex(0)
---
>>>    }());
1 >^^^^
2 >    ^
3 >     
4 >     ^^^^
5 >         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >    }
3 >     
4 >     export class someClass {}
1 >Emitted(72, 5) Source(32, 69) + SourceIndex(0)
2 >Emitted(72, 6) Source(32, 70) + SourceIndex(0)
3 >Emitted(72, 6) Source(32, 45) + SourceIndex(0)
4 >Emitted(72, 10) Source(32, 70) + SourceIndex(0)
---
>>>    internalNamespace.someClass = someClass;
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                               ^^^^^^^^^^^^
4 >                                           ^
5 >                                            ^^^^^^->
1->
2 >    someClass
3 >                                {}
4 >                                           
1->Emitted(73, 5) Source(32, 58) + SourceIndex(0)
2 >Emitted(73, 32) Source(32, 67) + SourceIndex(0)
3 >Emitted(73, 44) Source(32, 70) + SourceIndex(0)
4 >Emitted(73, 45) Source(32, 70) + SourceIndex(0)
---
>>>})(internalNamespace || (internalNamespace = {}));
1->
2 >^
3 > ^^
4 >   ^^^^^^^^^^^^^^^^^
5 >                    ^^^^^
6 >                         ^^^^^^^^^^^^^^^^^
7 >                                          ^^^^^^^^
1-> 
2 >}
3 > 
4 >   internalNamespace
5 >                    
6 >                         internalNamespace
7 >                                           { export class someClass {} }
1->Emitted(74, 1) Source(32, 71) + SourceIndex(0)
2 >Emitted(74, 2) Source(32, 72) + SourceIndex(0)
3 >Emitted(74, 4) Source(32, 25) + SourceIndex(0)
4 >Emitted(74, 21) Source(32, 42) + SourceIndex(0)
5 >Emitted(74, 26) Source(32, 25) + SourceIndex(0)
6 >Emitted(74, 43) Source(32, 42) + SourceIndex(0)
7 >Emitted(74, 51) Source(32, 72) + SourceIndex(0)
---
>>>/*@internal*/ var internalOther;
1 >
2 >^^^^^^^^^^^^^
3 >             ^
4 >              ^^^^
5 >                  ^^^^^^^^^^^^^
6 >                               ^
1 >
  >
2 >/*@internal*/
3 >              
4 >              namespace 
5 >                  internalOther
6 >                               .something { export class someClass {} }
1 >Emitted(75, 1) Source(33, 1) + SourceIndex(0)
2 >Emitted(75, 14) Source(33, 14) + SourceIndex(0)
3 >Emitted(75, 15) Source(33, 15) + SourceIndex(0)
4 >Emitted(75, 19) Source(33, 25) + SourceIndex(0)
5 >Emitted(75, 32) Source(33, 38) + SourceIndex(0)
6 >Emitted(75, 33) Source(33, 78) + SourceIndex(0)
---
>>>(function (internalOther) {
1 >
2 >^^^^^^^^^^^
3 >           ^^^^^^^^^^^^^
1 >
2 >namespace 
3 >           internalOther
1 >Emitted(76, 1) Source(33, 15) + SourceIndex(0)
2 >Emitted(76, 12) Source(33, 25) + SourceIndex(0)
3 >Emitted(76, 25) Source(33, 38) + SourceIndex(0)
---
>>>    var something;
1 >^^^^
2 >    ^^^^
3 >        ^^^^^^^^^
4 >                 ^
5 >                  ^^^^^^^^^->
1 >.
2 >    
3 >        something
4 >                  { export class someClass {} }
1 >Emitted(77, 5) Source(33, 39) + SourceIndex(0)
2 >Emitted(77, 9) Source(33, 39) + SourceIndex(0)
3 >Emitted(77, 18) Source(33, 48) + SourceIndex(0)
4 >Emitted(77, 19) Source(33, 78) + SourceIndex(0)
---
>>>    (function (something) {
1->^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^
4 >                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >    
3 >               something
1->Emitted(78, 5) Source(33, 39) + SourceIndex(0)
2 >Emitted(78, 16) Source(33, 39) + SourceIndex(0)
3 >Emitted(78, 25) Source(33, 48) + SourceIndex(0)
---
>>>        var someClass = /** @class */ (function () {
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^^^^^->
1-> { 
1->Emitted(79, 9) Source(33, 51) + SourceIndex(0)
---
>>>            function someClass() {
1->^^^^^^^^^^^^
2 >            ^->
1->
1->Emitted(80, 13) Source(33, 51) + SourceIndex(0)
---
>>>            }
1->^^^^^^^^^^^^
2 >            ^
3 >             ^^^^^^^^^^^^^^^^->
1->export class someClass {
2 >            }
1->Emitted(81, 13) Source(33, 75) + SourceIndex(0)
2 >Emitted(81, 14) Source(33, 76) + SourceIndex(0)
---
>>>            return someClass;
1->^^^^^^^^^^^^
2 >            ^^^^^^^^^^^^^^^^
1->
2 >            }
1->Emitted(82, 13) Source(33, 75) + SourceIndex(0)
2 >Emitted(82, 29) Source(33, 76) + SourceIndex(0)
---
>>>        }());
1 >^^^^^^^^
2 >        ^
3 >         
4 >         ^^^^
5 >             ^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >        }
3 >         
4 >         export class someClass {}
1 >Emitted(83, 9) Source(33, 75) + SourceIndex(0)
2 >Emitted(83, 10) Source(33, 76) + SourceIndex(0)
3 >Emitted(83, 10) Source(33, 51) + SourceIndex(0)
4 >Emitted(83, 14) Source(33, 76) + SourceIndex(0)
---
>>>        something.someClass = someClass;
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^
3 >                           ^^^^^^^^^^^^
4 >                                       ^
5 >                                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >        someClass
3 >                            {}
4 >                                       
1->Emitted(84, 9) Source(33, 64) + SourceIndex(0)
2 >Emitted(84, 28) Source(33, 73) + SourceIndex(0)
3 >Emitted(84, 40) Source(33, 76) + SourceIndex(0)
4 >Emitted(84, 41) Source(33, 76) + SourceIndex(0)
---
>>>    })(something = internalOther.something || (internalOther.something = {}));
1->^^^^
2 >    ^
3 >     ^^
4 >       ^^^^^^^^^
5 >                ^^^
6 >                   ^^^^^^^^^^^^^^^^^^^^^^^
7 >                                          ^^^^^
8 >                                               ^^^^^^^^^^^^^^^^^^^^^^^
9 >                                                                      ^^^^^^^^
1-> 
2 >    }
3 >     
4 >       something
5 >                
6 >                   something
7 >                                          
8 >                                               something
9 >                                                                       { export class someClass {} }
1->Emitted(85, 5) Source(33, 77) + SourceIndex(0)
2 >Emitted(85, 6) Source(33, 78) + SourceIndex(0)
3 >Emitted(85, 8) Source(33, 39) + SourceIndex(0)
4 >Emitted(85, 17) Source(33, 48) + SourceIndex(0)
5 >Emitted(85, 20) Source(33, 39) + SourceIndex(0)
6 >Emitted(85, 43) Source(33, 48) + SourceIndex(0)
7 >Emitted(85, 48) Source(33, 39) + SourceIndex(0)
8 >Emitted(85, 71) Source(33, 48) + SourceIndex(0)
9 >Emitted(85, 79) Source(33, 78) + SourceIndex(0)
---
>>>})(internalOther || (internalOther = {}));
1 >
2 >^
3 > ^^
4 >   ^^^^^^^^^^^^^
5 >                ^^^^^
6 >                     ^^^^^^^^^^^^^
7 >                                  ^^^^^^^^
8 >                                          ^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 >   internalOther
5 >                
6 >                     internalOther
7 >                                  .something { export class someClass {} }
1 >Emitted(86, 1) Source(33, 77) + SourceIndex(0)
2 >Emitted(86, 2) Source(33, 78) + SourceIndex(0)
3 >Emitted(86, 4) Source(33, 25) + SourceIndex(0)
4 >Emitted(86, 17) Source(33, 38) + SourceIndex(0)
5 >Emitted(86, 22) Source(33, 25) + SourceIndex(0)
6 >Emitted(86, 35) Source(33, 38) + SourceIndex(0)
7 >Emitted(86, 43) Source(33, 78) + SourceIndex(0)
---
>>>/*@internal*/ var internalImport = internalNamespace.someClass;
1->
2 >^^^^^^^^^^^^^
3 >             ^
4 >              ^^^^
5 >                  ^^^^^^^^^^^^^^
6 >                                ^^^
7 >                                   ^^^^^^^^^^^^^^^^^
8 >                                                    ^
9 >                                                     ^^^^^^^^^
10>                                                              ^
1->
  >
2 >/*@internal*/
3 >              
4 >              import 
5 >                  internalImport
6 >                                 = 
7 >                                   internalNamespace
8 >                                                    .
9 >                                                     someClass
10>                                                              ;
1->Emitted(87, 1) Source(34, 1) + SourceIndex(0)
2 >Emitted(87, 14) Source(34, 14) + SourceIndex(0)
3 >Emitted(87, 15) Source(34, 15) + SourceIndex(0)
4 >Emitted(87, 19) Source(34, 22) + SourceIndex(0)
5 >Emitted(87, 33) Source(34, 36) + SourceIndex(0)
6 >Emitted(87, 36) Source(34, 39) + SourceIndex(0)
7 >Emitted(87, 53) Source(34, 56) + SourceIndex(0)
8 >Emitted(87, 54) Source(34, 57) + SourceIndex(0)
9 >Emitted(87, 63) Source(34, 66) + SourceIndex(0)
10>Emitted(87, 64) Source(34, 67) + SourceIndex(0)
---
>>>/*@internal*/ var internalConst = 10;
1 >
2 >^^^^^^^^^^^^^
3 >             ^
4 >              ^^^^
5 >                  ^^^^^^^^^^^^^
6 >                               ^^^
7 >                                  ^^
8 >                                    ^
1 >
  >/*@internal*/ type internalType = internalC;
  >
2 >/*@internal*/
3 >              
4 >              const 
5 >                  internalConst
6 >                                = 
7 >                                  10
8 >                                    ;
1 >Emitted(88, 1) Source(36, 1) + SourceIndex(0)
2 >Emitted(88, 14) Source(36, 14) + SourceIndex(0)
3 >Emitted(88, 15) Source(36, 15) + SourceIndex(0)
4 >Emitted(88, 19) Source(36, 21) + SourceIndex(0)
5 >Emitted(88, 32) Source(36, 34) + SourceIndex(0)
6 >Emitted(88, 35) Source(36, 37) + SourceIndex(0)
7 >Emitted(88, 37) Source(36, 39) + SourceIndex(0)
8 >Emitted(88, 38) Source(36, 40) + SourceIndex(0)
---
>>>/*@internal*/ var internalEnum;
1 >
2 >^^^^^^^^^^^^^
3 >             ^
4 >              ^^^^
5 >                  ^^^^^^^^^^^^
1 >
  >
2 >/*@internal*/
3 >              
4 >              enum 
5 >                  internalEnum { a, b, c }
1 >Emitted(89, 1) Source(37, 1) + SourceIndex(0)
2 >Emitted(89, 14) Source(37, 14) + SourceIndex(0)
3 >Emitted(89, 15) Source(37, 15) + SourceIndex(0)
4 >Emitted(89, 19) Source(37, 20) + SourceIndex(0)
5 >Emitted(89, 31) Source(37, 44) + SourceIndex(0)
---
>>>(function (internalEnum) {
1 >
2 >^^^^^^^^^^^
3 >           ^^^^^^^^^^^^
4 >                       ^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >enum 
3 >           internalEnum
1 >Emitted(90, 1) Source(37, 15) + SourceIndex(0)
2 >Emitted(90, 12) Source(37, 20) + SourceIndex(0)
3 >Emitted(90, 24) Source(37, 32) + SourceIndex(0)
---
>>>    internalEnum[internalEnum["a"] = 0] = "a";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                             ^
1-> { 
2 >    a
3 >                                             
1->Emitted(91, 5) Source(37, 35) + SourceIndex(0)
2 >Emitted(91, 46) Source(37, 36) + SourceIndex(0)
3 >Emitted(91, 47) Source(37, 36) + SourceIndex(0)
---
>>>    internalEnum[internalEnum["b"] = 1] = "b";
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                             ^
1 >, 
2 >    b
3 >                                             
1 >Emitted(92, 5) Source(37, 38) + SourceIndex(0)
2 >Emitted(92, 46) Source(37, 39) + SourceIndex(0)
3 >Emitted(92, 47) Source(37, 39) + SourceIndex(0)
---
>>>    internalEnum[internalEnum["c"] = 2] = "c";
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                             ^
1 >, 
2 >    c
3 >                                             
1 >Emitted(93, 5) Source(37, 41) + SourceIndex(0)
2 >Emitted(93, 46) Source(37, 42) + SourceIndex(0)
3 >Emitted(93, 47) Source(37, 42) + SourceIndex(0)
---
>>>})(internalEnum || (internalEnum = {}));
1 >
2 >^
3 > ^^
4 >   ^^^^^^^^^^^^
5 >               ^^^^^
6 >                    ^^^^^^^^^^^^
7 >                                ^^^^^^^^
1 > 
2 >}
3 > 
4 >   internalEnum
5 >               
6 >                    internalEnum
7 >                                 { a, b, c }
1 >Emitted(94, 1) Source(37, 43) + SourceIndex(0)
2 >Emitted(94, 2) Source(37, 44) + SourceIndex(0)
3 >Emitted(94, 4) Source(37, 20) + SourceIndex(0)
4 >Emitted(94, 16) Source(37, 32) + SourceIndex(0)
5 >Emitted(94, 21) Source(37, 20) + SourceIndex(0)
6 >Emitted(94, 33) Source(37, 32) + SourceIndex(0)
7 >Emitted(94, 41) Source(37, 44) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/2/second-output.js
sourceFile:../second/second_part2.ts
-------------------------------------------------------------------
>>>var C = /** @class */ (function () {
1 >
2 >^^^^^^^^^^^^^^^^^^->
1 >
1 >Emitted(95, 1) Source(1, 1) + SourceIndex(1)
---
>>>    function C() {
1->^^^^
2 >    ^->
1->
1->Emitted(96, 5) Source(1, 1) + SourceIndex(1)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->class C {
  >    doSomething() {
  >        console.log("something got done");
  >    }
  >
2 >    }
1->Emitted(97, 5) Source(5, 1) + SourceIndex(1)
2 >Emitted(97, 6) Source(5, 2) + SourceIndex(1)
---
>>>    C.prototype.doSomething = function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^
3 >                           ^^^
4 >                              ^^^^^^^^^^^^->
1->
2 >    doSomething
3 >                           
1->Emitted(98, 5) Source(2, 5) + SourceIndex(1)
2 >Emitted(98, 28) Source(2, 16) + SourceIndex(1)
3 >Emitted(98, 31) Source(2, 5) + SourceIndex(1)
---
>>>        console.log("something got done");
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^^^^^^^^^^^^
7 >                                        ^
8 >                                         ^
1->doSomething() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    "something got done"
7 >                                        )
8 >                                         ;
1->Emitted(99, 9) Source(3, 9) + SourceIndex(1)
2 >Emitted(99, 16) Source(3, 16) + SourceIndex(1)
3 >Emitted(99, 17) Source(3, 17) + SourceIndex(1)
4 >Emitted(99, 20) Source(3, 20) + SourceIndex(1)
5 >Emitted(99, 21) Source(3, 21) + SourceIndex(1)
6 >Emitted(99, 41) Source(3, 41) + SourceIndex(1)
7 >Emitted(99, 42) Source(3, 42) + SourceIndex(1)
8 >Emitted(99, 43) Source(3, 43) + SourceIndex(1)
---
>>>    };
1 >^^^^
2 >    ^
3 >     ^^^^^^^^->
1 >
  >    
2 >    }
1 >Emitted(100, 5) Source(4, 5) + SourceIndex(1)
2 >Emitted(100, 6) Source(4, 6) + SourceIndex(1)
---
>>>    return C;
1->^^^^
2 >    ^^^^^^^^
1->
  >
2 >    }
1->Emitted(101, 5) Source(5, 1) + SourceIndex(1)
2 >Emitted(101, 13) Source(5, 2) + SourceIndex(1)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class C {
  >     doSomething() {
  >         console.log("something got done");
  >     }
  > }
1 >Emitted(102, 1) Source(5, 1) + SourceIndex(1)
2 >Emitted(102, 2) Source(5, 2) + SourceIndex(1)
3 >Emitted(102, 2) Source(1, 1) + SourceIndex(1)
4 >Emitted(102, 6) Source(5, 2) + SourceIndex(1)
---
>>>//# sourceMappingURL=second-output.js.map

//// [/src/2/second-output.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"../second","sourceFiles":["../second/second_part1.ts","../second/second_part2.ts"],"js":{"sections":[{"pos":0,"end":3315,"kind":"text"}],"mapHash":"-2464084269-{\"version\":3,\"file\":\"second-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../second/second_part1.ts\",\"../second/second_part2.ts\"],\"names\":[],\"mappings\":\"AAIA,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;AAED;IACI,aAAa,CAAC;IAAgB,CAAC;IAE/B,aAAa,CAAC,wBAAM,GAAN,cAAW,CAAC;IACZ,sBAAI,sBAAC;QAAnB,aAAa,MAAC,cAAU,OAAO,EAAE,CAAC,CAAC,CAAC;QACpC,aAAa,MAAC,UAAM,GAAW,IAAI,CAAC;;;OADA;IAExC,cAAC;AAAD,CAAC,AAND,IAMC;AACD,IAAU,OAAO,CAShB;AATD,WAAU,OAAO;IACb,aAAa,CAAC;QAAA;QAAiB,CAAC;QAAD,QAAC;IAAD,CAAC,AAAlB,IAAkB;IAAL,SAAC,IAAI,CAAA;IAChC,aAAa,CAAC,SAAgB,GAAG,KAAI,CAAC;IAAR,WAAG,MAAK,CAAA;IACtC,aAAa,CAAC,IAAiB,aAAa,CAAsB;IAApD,WAAiB,aAAa;QAAG;YAAA;YAAgB,CAAC;YAAD,QAAC;QAAD,CAAC,AAAjB,IAAiB;QAAJ,eAAC,IAAG,CAAA;IAAC,CAAC,EAAnC,aAAa,GAAb,qBAAa,KAAb,qBAAa,QAAsB;IAClE,aAAa,CAAC,IAAiB,SAAS,CAAwC;IAAlE,WAAiB,SAAS;QAAC,IAAA,SAAS,CAA8B;QAAvC,WAAA,SAAS;YAAG;gBAAA;gBAAwB,CAAC;gBAAD,gBAAC;YAAD,CAAC,AAAzB,IAAyB;YAAZ,mBAAS,YAAG,CAAA;QAAC,CAAC,EAAvC,SAAS,GAAT,mBAAS,KAAT,mBAAS,QAA8B;IAAD,CAAC,EAAjD,SAAS,GAAT,iBAAS,KAAT,iBAAS,QAAwC;IAChF,aAAa,CAAe,kBAAU,GAAG,aAAa,CAAC,CAAC,CAAC;IAEzD,aAAa,CAAc,qBAAa,GAAG,EAAE,CAAC;IAC9C,aAAa,CAAC,IAAY,YAAwB;IAApC,WAAY,YAAY;QAAG,yCAAC,CAAA;QAAE,yCAAC,CAAA;QAAE,yCAAC,CAAA;IAAC,CAAC,EAAxB,YAAY,GAAZ,oBAAY,KAAZ,oBAAY,QAAY;AACtD,CAAC,EATS,OAAO,KAAP,OAAO,QAShB;AACD,aAAa,CAAC;IAAA;IAAiB,CAAC;IAAD,gBAAC;AAAD,CAAC,AAAlB,IAAkB;AAChC,aAAa,CAAC,SAAS,WAAW,KAAI,CAAC;AACvC,aAAa,CAAC,IAAU,iBAAiB,CAA8B;AAAzD,WAAU,iBAAiB;IAAG;QAAA;QAAwB,CAAC;QAAD,gBAAC;IAAD,CAAC,AAAzB,IAAyB;IAAZ,2BAAS,YAAG,CAAA;AAAC,CAAC,EAA/C,iBAAiB,KAAjB,iBAAiB,QAA8B;AACvE,aAAa,CAAC,IAAU,aAAa,CAAwC;AAA/D,WAAU,aAAa;IAAC,IAAA,SAAS,CAA8B;IAAvC,WAAA,SAAS;QAAG;YAAA;YAAwB,CAAC;YAAD,gBAAC;QAAD,CAAC,AAAzB,IAAyB;QAAZ,mBAAS,YAAG,CAAA;IAAC,CAAC,EAAvC,SAAS,GAAT,uBAAS,KAAT,uBAAS,QAA8B;AAAD,CAAC,EAArD,aAAa,KAAb,aAAa,QAAwC;AAC7E,aAAa,CAAC,IAAO,cAAc,GAAG,iBAAiB,CAAC,SAAS,CAAC;AAElE,aAAa,CAAC,IAAM,aAAa,GAAG,EAAE,CAAC;AACvC,aAAa,CAAC,IAAK,YAAwB;AAA7B,WAAK,YAAY;IAAG,yCAAC,CAAA;IAAE,yCAAC,CAAA;IAAE,yCAAC,CAAA;AAAC,CAAC,EAAxB,YAAY,KAAZ,YAAY,QAAY;ACpC3C;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC\"}","hash":"-11392275315-var N;\n(function (N) {\n    function f() {\n        console.log('testing');\n    }\n    f();\n})(N || (N = {}));\nvar normalC = /** @class */ (function () {\n    /*@internal*/ function normalC() {\n    }\n    /*@internal*/ normalC.prototype.method = function () { };\n    Object.defineProperty(normalC.prototype, \"c\", {\n        /*@internal*/ get: function () { return 10; },\n        /*@internal*/ set: function (val) { },\n        enumerable: false,\n        configurable: true\n    });\n    return normalC;\n}());\nvar normalN;\n(function (normalN) {\n    /*@internal*/ var C = /** @class */ (function () {\n        function C() {\n        }\n        return C;\n    }());\n    normalN.C = C;\n    /*@internal*/ function foo() { }\n    normalN.foo = foo;\n    /*@internal*/ var someNamespace;\n    (function (someNamespace) {\n        var C = /** @class */ (function () {\n            function C() {\n            }\n            return C;\n        }());\n        someNamespace.C = C;\n    })(someNamespace = normalN.someNamespace || (normalN.someNamespace = {}));\n    /*@internal*/ var someOther;\n    (function (someOther) {\n        var something;\n        (function (something) {\n            var someClass = /** @class */ (function () {\n                function someClass() {\n                }\n                return someClass;\n            }());\n            something.someClass = someClass;\n        })(something = someOther.something || (someOther.something = {}));\n    })(someOther = normalN.someOther || (normalN.someOther = {}));\n    /*@internal*/ normalN.someImport = someNamespace.C;\n    /*@internal*/ normalN.internalConst = 10;\n    /*@internal*/ var internalEnum;\n    (function (internalEnum) {\n        internalEnum[internalEnum[\"a\"] = 0] = \"a\";\n        internalEnum[internalEnum[\"b\"] = 1] = \"b\";\n        internalEnum[internalEnum[\"c\"] = 2] = \"c\";\n    })(internalEnum = normalN.internalEnum || (normalN.internalEnum = {}));\n})(normalN || (normalN = {}));\n/*@internal*/ var internalC = /** @class */ (function () {\n    function internalC() {\n    }\n    return internalC;\n}());\n/*@internal*/ function internalfoo() { }\n/*@internal*/ var internalNamespace;\n(function (internalNamespace) {\n    var someClass = /** @class */ (function () {\n        function someClass() {\n        }\n        return someClass;\n    }());\n    internalNamespace.someClass = someClass;\n})(internalNamespace || (internalNamespace = {}));\n/*@internal*/ var internalOther;\n(function (internalOther) {\n    var something;\n    (function (something) {\n        var someClass = /** @class */ (function () {\n            function someClass() {\n            }\n            return someClass;\n        }());\n        something.someClass = someClass;\n    })(something = internalOther.something || (internalOther.something = {}));\n})(internalOther || (internalOther = {}));\n/*@internal*/ var internalImport = internalNamespace.someClass;\n/*@internal*/ var internalConst = 10;\n/*@internal*/ var internalEnum;\n(function (internalEnum) {\n    internalEnum[internalEnum[\"a\"] = 0] = \"a\";\n    internalEnum[internalEnum[\"b\"] = 1] = \"b\";\n    internalEnum[internalEnum[\"c\"] = 2] = \"c\";\n})(internalEnum || (internalEnum = {}));\nvar C = /** @class */ (function () {\n    function C() {\n    }\n    C.prototype.doSomething = function () {\n        console.log(\"something got done\");\n    };\n    return C;\n}());\n//# sourceMappingURL=second-output.js.map"},"dts":{"sections":[{"pos":0,"end":72,"kind":"text"},{"pos":72,"end":173,"kind":"internal"},{"pos":174,"end":204,"kind":"text"},{"pos":204,"end":578,"kind":"internal"},{"pos":579,"end":581,"kind":"text"},{"pos":581,"end":968,"kind":"internal"},{"pos":969,"end":1014,"kind":"text"}],"mapHash":"-11613291547-{\"version\":3,\"file\":\"second-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../second/second_part1.ts\",\"../second/second_part2.ts\"],\"names\":[],\"mappings\":\"AAAA,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;AAED,cAAM,OAAO;;IAEK,IAAI,EAAE,MAAM,CAAC;IACb,MAAM;IACN,IAAI,CAAC,IACM,MAAM,CADK;IACtB,IAAI,CAAC,CAAC,KAAK,MAAM,EAAK;CACvC;AACD,kBAAU,OAAO,CAAC;IACA,MAAa,CAAC;KAAI;IAClB,SAAgB,GAAG,SAAK;IACxB,UAAiB,aAAa,CAAC;QAAE,MAAa,CAAC;SAAG;KAAE;IACpD,UAAiB,SAAS,CAAC,SAAS,CAAC;QAAE,MAAa,SAAS;SAAG;KAAE;IAClE,MAAM,QAAQ,UAAU,GAAG,aAAa,CAAC,CAAC,CAAC;IAC3C,KAAY,YAAY,GAAG,SAAS,CAAC;IAC9B,MAAM,aAAa,KAAK,CAAC;IAChC,KAAY,YAAY;QAAG,CAAC,IAAA;QAAE,CAAC,IAAA;QAAE,CAAC,IAAA;KAAE;CACrD;AACa,cAAM,SAAS;CAAG;AAClB,iBAAS,WAAW,SAAK;AACzB,kBAAU,iBAAiB,CAAC;IAAE,MAAa,SAAS;KAAG;CAAE;AACzD,kBAAU,aAAa,CAAC,SAAS,CAAC;IAAE,MAAa,SAAS;KAAG;CAAE;AAC/D,OAAO,cAAc,GAAG,iBAAiB,CAAC,SAAS,CAAC;AACpD,KAAK,YAAY,GAAG,SAAS,CAAC;AAC9B,QAAA,MAAM,aAAa,KAAK,CAAC;AACzB,aAAK,YAAY;IAAG,CAAC,IAAA;IAAE,CAAC,IAAA;IAAE,CAAC,IAAA;CAAE;ACpC3C,cAAM,CAAC;IACH,WAAW;CAGd\"}","hash":"-21418946771-declare namespace N {\n}\ndeclare namespace N {\n}\ndeclare class normalC {\n    constructor();\n    prop: string;\n    method(): void;\n    get c(): number;\n    set c(val: number);\n}\ndeclare namespace normalN {\n    class C {\n    }\n    function foo(): void;\n    namespace someNamespace {\n        class C {\n        }\n    }\n    namespace someOther.something {\n        class someClass {\n        }\n    }\n    export import someImport = someNamespace.C;\n    type internalType = internalC;\n    const internalConst = 10;\n    enum internalEnum {\n        a = 0,\n        b = 1,\n        c = 2\n    }\n}\ndeclare class internalC {\n}\ndeclare function internalfoo(): void;\ndeclare namespace internalNamespace {\n    class someClass {\n    }\n}\ndeclare namespace internalOther.something {\n    class someClass {\n    }\n}\nimport internalImport = internalNamespace.someClass;\ntype internalType = internalC;\ndeclare const internalConst = 10;\ndeclare enum internalEnum {\n    a = 0,\n    b = 1,\n    c = 2\n}\ndeclare class C {\n    doSomething(): void;\n}\n//# sourceMappingURL=second-output.d.ts.map"}},"program":{"fileNames":["../../lib/lib.d.ts","../second/second_part1.ts","../second/second_part2.ts"],"fileInfos":["3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","48997088700-namespace N {\n    // Comment text\n}\n\nnamespace N {\n    function f() {\n        console.log('testing');\n    }\n\n    f();\n}\n\nclass normalC {\n    /*@internal*/ constructor() { }\n    /*@internal*/ prop: string;\n    /*@internal*/ method() { }\n    /*@internal*/ get c() { return 10; }\n    /*@internal*/ set c(val: number) { }\n}\nnamespace normalN {\n    /*@internal*/ export class C { }\n    /*@internal*/ export function foo() {}\n    /*@internal*/ export namespace someNamespace { export class C {} }\n    /*@internal*/ export namespace someOther.something { export class someClass {} }\n    /*@internal*/ export import someImport = someNamespace.C;\n    /*@internal*/ export type internalType = internalC;\n    /*@internal*/ export const internalConst = 10;\n    /*@internal*/ export enum internalEnum { a, b, c }\n}\n/*@internal*/ class internalC {}\n/*@internal*/ function internalfoo() {}\n/*@internal*/ namespace internalNamespace { export class someClass {} }\n/*@internal*/ namespace internalOther.something { export class someClass {} }\n/*@internal*/ import internalImport = internalNamespace.someClass;\n/*@internal*/ type internalType = internalC;\n/*@internal*/ const internalConst = 10;\n/*@internal*/ enum internalEnum { a, b, c }","3642692259-class C {\n    doSomething() {\n        console.log(\"something got done\");\n    }\n}\n"],"root":[2,3],"options":{"composite":true,"declaration":true,"declarationMap":true,"outFile":"./second-output.js","removeComments":false,"skipDefaultLibCheck":true,"sourceMap":true,"strict":false,"target":1},"outSignature":"-18721653870-declare namespace N {\n}\ndeclare namespace N {\n}\ndeclare class normalC {\n    constructor();\n    prop: string;\n    method(): void;\n    get c(): number;\n    set c(val: number);\n}\ndeclare namespace normalN {\n    class C {\n    }\n    function foo(): void;\n    namespace someNamespace {\n        class C {\n        }\n    }\n    namespace someOther.something {\n        class someClass {\n        }\n    }\n    export import someImport = someNamespace.C;\n    type internalType = internalC;\n    const internalConst = 10;\n    enum internalEnum {\n        a = 0,\n        b = 1,\n        c = 2\n    }\n}\ndeclare class internalC {\n}\ndeclare function internalfoo(): void;\ndeclare namespace internalNamespace {\n    class someClass {\n    }\n}\ndeclare namespace internalOther.something {\n    class someClass {\n    }\n}\nimport internalImport = internalNamespace.someClass;\ntype internalType = internalC;\ndeclare const internalConst = 10;\ndeclare enum internalEnum {\n    a = 0,\n    b = 1,\n    c = 2\n}\ndeclare class C {\n    doSomething(): void;\n}\n","latestChangedDtsFile":"./second-output.d.ts"},"version":"FakeTSVersion"}

//// [/src/2/second-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/2/second-output.js
----------------------------------------------------------------------
text: (0-3315)
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
var normalC = /** @class */ (function () {
    /*@internal*/ function normalC() {
    }
    /*@internal*/ normalC.prototype.method = function () { };
    Object.defineProperty(normalC.prototype, "c", {
        /*@internal*/ get: function () { return 10; },
        /*@internal*/ set: function (val) { },
        enumerable: false,
        configurable: true
    });
    return normalC;
}());
var normalN;
(function (normalN) {
    /*@internal*/ var C = /** @class */ (function () {
        function C() {
        }
        return C;
    }());
    normalN.C = C;
    /*@internal*/ function foo() { }
    normalN.foo = foo;
    /*@internal*/ var someNamespace;
    (function (someNamespace) {
        var C = /** @class */ (function () {
            function C() {
            }
            return C;
        }());
        someNamespace.C = C;
    })(someNamespace = normalN.someNamespace || (normalN.someNamespace = {}));
    /*@internal*/ var someOther;
    (function (someOther) {
        var something;
        (function (something) {
            var someClass = /** @class */ (function () {
                function someClass() {
                }
                return someClass;
            }());
            something.someClass = someClass;
        })(something = someOther.something || (someOther.something = {}));
    })(someOther = normalN.someOther || (normalN.someOther = {}));
    /*@internal*/ normalN.someImport = someNamespace.C;
    /*@internal*/ normalN.internalConst = 10;
    /*@internal*/ var internalEnum;
    (function (internalEnum) {
        internalEnum[internalEnum["a"] = 0] = "a";
        internalEnum[internalEnum["b"] = 1] = "b";
        internalEnum[internalEnum["c"] = 2] = "c";
    })(internalEnum = normalN.internalEnum || (normalN.internalEnum = {}));
})(normalN || (normalN = {}));
/*@internal*/ var internalC = /** @class */ (function () {
    function internalC() {
    }
    return internalC;
}());
/*@internal*/ function internalfoo() { }
/*@internal*/ var internalNamespace;
(function (internalNamespace) {
    var someClass = /** @class */ (function () {
        function someClass() {
        }
        return someClass;
    }());
    internalNamespace.someClass = someClass;
})(internalNamespace || (internalNamespace = {}));
/*@internal*/ var internalOther;
(function (internalOther) {
    var something;
    (function (something) {
        var someClass = /** @class */ (function () {
            function someClass() {
            }
            return someClass;
        }());
        something.someClass = someClass;
    })(something = internalOther.something || (internalOther.something = {}));
})(internalOther || (internalOther = {}));
/*@internal*/ var internalImport = internalNamespace.someClass;
/*@internal*/ var internalConst = 10;
/*@internal*/ var internalEnum;
(function (internalEnum) {
    internalEnum[internalEnum["a"] = 0] = "a";
    internalEnum[internalEnum["b"] = 1] = "b";
    internalEnum[internalEnum["c"] = 2] = "c";
})(internalEnum || (internalEnum = {}));
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());

======================================================================
======================================================================
File:: /src/2/second-output.d.ts
----------------------------------------------------------------------
text: (0-72)
declare namespace N {
}
declare namespace N {
}
declare class normalC {

----------------------------------------------------------------------
internal: (72-173)
    constructor();
    prop: string;
    method(): void;
    get c(): number;
    set c(val: number);
----------------------------------------------------------------------
text: (174-204)
}
declare namespace normalN {

----------------------------------------------------------------------
internal: (204-578)
    class C {
    }
    function foo(): void;
    namespace someNamespace {
        class C {
        }
    }
    namespace someOther.something {
        class someClass {
        }
    }
    export import someImport = someNamespace.C;
    type internalType = internalC;
    const internalConst = 10;
    enum internalEnum {
        a = 0,
        b = 1,
        c = 2
    }
----------------------------------------------------------------------
text: (579-581)
}

----------------------------------------------------------------------
internal: (581-968)
declare class internalC {
}
declare function internalfoo(): void;
declare namespace internalNamespace {
    class someClass {
    }
}
declare namespace internalOther.something {
    class someClass {
    }
}
import internalImport = internalNamespace.someClass;
type internalType = internalC;
declare const internalConst = 10;
declare enum internalEnum {
    a = 0,
    b = 1,
    c = 2
}
----------------------------------------------------------------------
text: (969-1014)
declare class C {
    doSomething(): void;
}

======================================================================

//// [/src/2/second-output.tsbuildinfo.readable.baseline.txt]
{
  "bundle": {
    "commonSourceDirectory": "../second",
    "sourceFiles": [
      "../second/second_part1.ts",
      "../second/second_part2.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 3315,
          "kind": "text"
        }
      ],
      "hash": "-11392275315-var N;\n(function (N) {\n    function f() {\n        console.log('testing');\n    }\n    f();\n})(N || (N = {}));\nvar normalC = /** @class */ (function () {\n    /*@internal*/ function normalC() {\n    }\n    /*@internal*/ normalC.prototype.method = function () { };\n    Object.defineProperty(normalC.prototype, \"c\", {\n        /*@internal*/ get: function () { return 10; },\n        /*@internal*/ set: function (val) { },\n        enumerable: false,\n        configurable: true\n    });\n    return normalC;\n}());\nvar normalN;\n(function (normalN) {\n    /*@internal*/ var C = /** @class */ (function () {\n        function C() {\n        }\n        return C;\n    }());\n    normalN.C = C;\n    /*@internal*/ function foo() { }\n    normalN.foo = foo;\n    /*@internal*/ var someNamespace;\n    (function (someNamespace) {\n        var C = /** @class */ (function () {\n            function C() {\n            }\n            return C;\n        }());\n        someNamespace.C = C;\n    })(someNamespace = normalN.someNamespace || (normalN.someNamespace = {}));\n    /*@internal*/ var someOther;\n    (function (someOther) {\n        var something;\n        (function (something) {\n            var someClass = /** @class */ (function () {\n                function someClass() {\n                }\n                return someClass;\n            }());\n            something.someClass = someClass;\n        })(something = someOther.something || (someOther.something = {}));\n    })(someOther = normalN.someOther || (normalN.someOther = {}));\n    /*@internal*/ normalN.someImport = someNamespace.C;\n    /*@internal*/ normalN.internalConst = 10;\n    /*@internal*/ var internalEnum;\n    (function (internalEnum) {\n        internalEnum[internalEnum[\"a\"] = 0] = \"a\";\n        internalEnum[internalEnum[\"b\"] = 1] = \"b\";\n        internalEnum[internalEnum[\"c\"] = 2] = \"c\";\n    })(internalEnum = normalN.internalEnum || (normalN.internalEnum = {}));\n})(normalN || (normalN = {}));\n/*@internal*/ var internalC = /** @class */ (function () {\n    function internalC() {\n    }\n    return internalC;\n}());\n/*@internal*/ function internalfoo() { }\n/*@internal*/ var internalNamespace;\n(function (internalNamespace) {\n    var someClass = /** @class */ (function () {\n        function someClass() {\n        }\n        return someClass;\n    }());\n    internalNamespace.someClass = someClass;\n})(internalNamespace || (internalNamespace = {}));\n/*@internal*/ var internalOther;\n(function (internalOther) {\n    var something;\n    (function (something) {\n        var someClass = /** @class */ (function () {\n            function someClass() {\n            }\n            return someClass;\n        }());\n        something.someClass = someClass;\n    })(something = internalOther.something || (internalOther.something = {}));\n})(internalOther || (internalOther = {}));\n/*@internal*/ var internalImport = internalNamespace.someClass;\n/*@internal*/ var internalConst = 10;\n/*@internal*/ var internalEnum;\n(function (internalEnum) {\n    internalEnum[internalEnum[\"a\"] = 0] = \"a\";\n    internalEnum[internalEnum[\"b\"] = 1] = \"b\";\n    internalEnum[internalEnum[\"c\"] = 2] = \"c\";\n})(internalEnum || (internalEnum = {}));\nvar C = /** @class */ (function () {\n    function C() {\n    }\n    C.prototype.doSomething = function () {\n        console.log(\"something got done\");\n    };\n    return C;\n}());\n//# sourceMappingURL=second-output.js.map",
      "mapHash": "-2464084269-{\"version\":3,\"file\":\"second-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../second/second_part1.ts\",\"../second/second_part2.ts\"],\"names\":[],\"mappings\":\"AAIA,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;AAED;IACI,aAAa,CAAC;IAAgB,CAAC;IAE/B,aAAa,CAAC,wBAAM,GAAN,cAAW,CAAC;IACZ,sBAAI,sBAAC;QAAnB,aAAa,MAAC,cAAU,OAAO,EAAE,CAAC,CAAC,CAAC;QACpC,aAAa,MAAC,UAAM,GAAW,IAAI,CAAC;;;OADA;IAExC,cAAC;AAAD,CAAC,AAND,IAMC;AACD,IAAU,OAAO,CAShB;AATD,WAAU,OAAO;IACb,aAAa,CAAC;QAAA;QAAiB,CAAC;QAAD,QAAC;IAAD,CAAC,AAAlB,IAAkB;IAAL,SAAC,IAAI,CAAA;IAChC,aAAa,CAAC,SAAgB,GAAG,KAAI,CAAC;IAAR,WAAG,MAAK,CAAA;IACtC,aAAa,CAAC,IAAiB,aAAa,CAAsB;IAApD,WAAiB,aAAa;QAAG;YAAA;YAAgB,CAAC;YAAD,QAAC;QAAD,CAAC,AAAjB,IAAiB;QAAJ,eAAC,IAAG,CAAA;IAAC,CAAC,EAAnC,aAAa,GAAb,qBAAa,KAAb,qBAAa,QAAsB;IAClE,aAAa,CAAC,IAAiB,SAAS,CAAwC;IAAlE,WAAiB,SAAS;QAAC,IAAA,SAAS,CAA8B;QAAvC,WAAA,SAAS;YAAG;gBAAA;gBAAwB,CAAC;gBAAD,gBAAC;YAAD,CAAC,AAAzB,IAAyB;YAAZ,mBAAS,YAAG,CAAA;QAAC,CAAC,EAAvC,SAAS,GAAT,mBAAS,KAAT,mBAAS,QAA8B;IAAD,CAAC,EAAjD,SAAS,GAAT,iBAAS,KAAT,iBAAS,QAAwC;IAChF,aAAa,CAAe,kBAAU,GAAG,aAAa,CAAC,CAAC,CAAC;IAEzD,aAAa,CAAc,qBAAa,GAAG,EAAE,CAAC;IAC9C,aAAa,CAAC,IAAY,YAAwB;IAApC,WAAY,YAAY;QAAG,yCAAC,CAAA;QAAE,yCAAC,CAAA;QAAE,yCAAC,CAAA;IAAC,CAAC,EAAxB,YAAY,GAAZ,oBAAY,KAAZ,oBAAY,QAAY;AACtD,CAAC,EATS,OAAO,KAAP,OAAO,QAShB;AACD,aAAa,CAAC;IAAA;IAAiB,CAAC;IAAD,gBAAC;AAAD,CAAC,AAAlB,IAAkB;AAChC,aAAa,CAAC,SAAS,WAAW,KAAI,CAAC;AACvC,aAAa,CAAC,IAAU,iBAAiB,CAA8B;AAAzD,WAAU,iBAAiB;IAAG;QAAA;QAAwB,CAAC;QAAD,gBAAC;IAAD,CAAC,AAAzB,IAAyB;IAAZ,2BAAS,YAAG,CAAA;AAAC,CAAC,EAA/C,iBAAiB,KAAjB,iBAAiB,QAA8B;AACvE,aAAa,CAAC,IAAU,aAAa,CAAwC;AAA/D,WAAU,aAAa;IAAC,IAAA,SAAS,CAA8B;IAAvC,WAAA,SAAS;QAAG;YAAA;YAAwB,CAAC;YAAD,gBAAC;QAAD,CAAC,AAAzB,IAAyB;QAAZ,mBAAS,YAAG,CAAA;IAAC,CAAC,EAAvC,SAAS,GAAT,uBAAS,KAAT,uBAAS,QAA8B;AAAD,CAAC,EAArD,aAAa,KAAb,aAAa,QAAwC;AAC7E,aAAa,CAAC,IAAO,cAAc,GAAG,iBAAiB,CAAC,SAAS,CAAC;AAElE,aAAa,CAAC,IAAM,aAAa,GAAG,EAAE,CAAC;AACvC,aAAa,CAAC,IAAK,YAAwB;AAA7B,WAAK,YAAY;IAAG,yCAAC,CAAA;IAAE,yCAAC,CAAA;IAAE,yCAAC,CAAA;AAAC,CAAC,EAAxB,YAAY,KAAZ,YAAY,QAAY;ACpC3C;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC\"}"
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 72,
          "kind": "text"
        },
        {
          "pos": 72,
          "end": 173,
          "kind": "internal"
        },
        {
          "pos": 174,
          "end": 204,
          "kind": "text"
        },
        {
          "pos": 204,
          "end": 578,
          "kind": "internal"
        },
        {
          "pos": 579,
          "end": 581,
          "kind": "text"
        },
        {
          "pos": 581,
          "end": 968,
          "kind": "internal"
        },
        {
          "pos": 969,
          "end": 1014,
          "kind": "text"
        }
      ],
      "hash": "-21418946771-declare namespace N {\n}\ndeclare namespace N {\n}\ndeclare class normalC {\n    constructor();\n    prop: string;\n    method(): void;\n    get c(): number;\n    set c(val: number);\n}\ndeclare namespace normalN {\n    class C {\n    }\n    function foo(): void;\n    namespace someNamespace {\n        class C {\n        }\n    }\n    namespace someOther.something {\n        class someClass {\n        }\n    }\n    export import someImport = someNamespace.C;\n    type internalType = internalC;\n    const internalConst = 10;\n    enum internalEnum {\n        a = 0,\n        b = 1,\n        c = 2\n    }\n}\ndeclare class internalC {\n}\ndeclare function internalfoo(): void;\ndeclare namespace internalNamespace {\n    class someClass {\n    }\n}\ndeclare namespace internalOther.something {\n    class someClass {\n    }\n}\nimport internalImport = internalNamespace.someClass;\ntype internalType = internalC;\ndeclare const internalConst = 10;\ndeclare enum internalEnum {\n    a = 0,\n    b = 1,\n    c = 2\n}\ndeclare class C {\n    doSomething(): void;\n}\n//# sourceMappingURL=second-output.d.ts.map",
      "mapHash": "-11613291547-{\"version\":3,\"file\":\"second-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../second/second_part1.ts\",\"../second/second_part2.ts\"],\"names\":[],\"mappings\":\"AAAA,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;AAED,cAAM,OAAO;;IAEK,IAAI,EAAE,MAAM,CAAC;IACb,MAAM;IACN,IAAI,CAAC,IACM,MAAM,CADK;IACtB,IAAI,CAAC,CAAC,KAAK,MAAM,EAAK;CACvC;AACD,kBAAU,OAAO,CAAC;IACA,MAAa,CAAC;KAAI;IAClB,SAAgB,GAAG,SAAK;IACxB,UAAiB,aAAa,CAAC;QAAE,MAAa,CAAC;SAAG;KAAE;IACpD,UAAiB,SAAS,CAAC,SAAS,CAAC;QAAE,MAAa,SAAS;SAAG;KAAE;IAClE,MAAM,QAAQ,UAAU,GAAG,aAAa,CAAC,CAAC,CAAC;IAC3C,KAAY,YAAY,GAAG,SAAS,CAAC;IAC9B,MAAM,aAAa,KAAK,CAAC;IAChC,KAAY,YAAY;QAAG,CAAC,IAAA;QAAE,CAAC,IAAA;QAAE,CAAC,IAAA;KAAE;CACrD;AACa,cAAM,SAAS;CAAG;AAClB,iBAAS,WAAW,SAAK;AACzB,kBAAU,iBAAiB,CAAC;IAAE,MAAa,SAAS;KAAG;CAAE;AACzD,kBAAU,aAAa,CAAC,SAAS,CAAC;IAAE,MAAa,SAAS;KAAG;CAAE;AAC/D,OAAO,cAAc,GAAG,iBAAiB,CAAC,SAAS,CAAC;AACpD,KAAK,YAAY,GAAG,SAAS,CAAC;AAC9B,QAAA,MAAM,aAAa,KAAK,CAAC;AACzB,aAAK,YAAY;IAAG,CAAC,IAAA;IAAE,CAAC,IAAA;IAAE,CAAC,IAAA;CAAE;ACpC3C,cAAM,CAAC;IACH,WAAW;CAGd\"}"
    }
  },
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "../second/second_part1.ts",
      "../second/second_part2.ts"
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "../second/second_part1.ts": "48997088700-namespace N {\n    // Comment text\n}\n\nnamespace N {\n    function f() {\n        console.log('testing');\n    }\n\n    f();\n}\n\nclass normalC {\n    /*@internal*/ constructor() { }\n    /*@internal*/ prop: string;\n    /*@internal*/ method() { }\n    /*@internal*/ get c() { return 10; }\n    /*@internal*/ set c(val: number) { }\n}\nnamespace normalN {\n    /*@internal*/ export class C { }\n    /*@internal*/ export function foo() {}\n    /*@internal*/ export namespace someNamespace { export class C {} }\n    /*@internal*/ export namespace someOther.something { export class someClass {} }\n    /*@internal*/ export import someImport = someNamespace.C;\n    /*@internal*/ export type internalType = internalC;\n    /*@internal*/ export const internalConst = 10;\n    /*@internal*/ export enum internalEnum { a, b, c }\n}\n/*@internal*/ class internalC {}\n/*@internal*/ function internalfoo() {}\n/*@internal*/ namespace internalNamespace { export class someClass {} }\n/*@internal*/ namespace internalOther.something { export class someClass {} }\n/*@internal*/ import internalImport = internalNamespace.someClass;\n/*@internal*/ type internalType = internalC;\n/*@internal*/ const internalConst = 10;\n/*@internal*/ enum internalEnum { a, b, c }",
      "../second/second_part2.ts": "3642692259-class C {\n    doSomething() {\n        console.log(\"something got done\");\n    }\n}\n"
    },
    "root": [
      [
        2,
        "../second/second_part1.ts"
      ],
      [
        3,
        "../second/second_part2.ts"
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "declarationMap": true,
      "outFile": "./second-output.js",
      "removeComments": false,
      "skipDefaultLibCheck": true,
      "sourceMap": true,
      "strict": false,
      "target": 1
    },
    "outSignature": "-18721653870-declare namespace N {\n}\ndeclare namespace N {\n}\ndeclare class normalC {\n    constructor();\n    prop: string;\n    method(): void;\n    get c(): number;\n    set c(val: number);\n}\ndeclare namespace normalN {\n    class C {\n    }\n    function foo(): void;\n    namespace someNamespace {\n        class C {\n        }\n    }\n    namespace someOther.something {\n        class someClass {\n        }\n    }\n    export import someImport = someNamespace.C;\n    type internalType = internalC;\n    const internalConst = 10;\n    enum internalEnum {\n        a = 0,\n        b = 1,\n        c = 2\n    }\n}\ndeclare class internalC {\n}\ndeclare function internalfoo(): void;\ndeclare namespace internalNamespace {\n    class someClass {\n    }\n}\ndeclare namespace internalOther.something {\n    class someClass {\n    }\n}\nimport internalImport = internalNamespace.someClass;\ntype internalType = internalC;\ndeclare const internalConst = 10;\ndeclare enum internalEnum {\n    a = 0,\n    b = 1,\n    c = 2\n}\ndeclare class C {\n    doSomething(): void;\n}\n",
    "latestChangedDtsFile": "./second-output.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 11757
}

//// [/src/first/bin/first-output.d.ts]
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;
//# sourceMappingURL=first-output.d.ts.map

//// [/src/first/bin/first-output.d.ts.map]
{"version":3,"file":"first-output.d.ts","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":"AAAc,UAAU,QAAQ;IAC5B,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AERD,iBAAS,CAAC,WAET"}

//// [/src/first/bin/first-output.d.ts.map.baseline.txt]
===================================================================
JsFile: first-output.d.ts
mapUrl: first-output.d.ts.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.d.ts
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>interface TheFirst {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^
1 >/*@internal*/ 
2 >interface 
3 >          TheFirst
1 >Emitted(1, 1) Source(1, 15) + SourceIndex(0)
2 >Emitted(1, 11) Source(1, 25) + SourceIndex(0)
3 >Emitted(1, 19) Source(1, 33) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(2, 5) Source(2, 5) + SourceIndex(0)
2 >Emitted(2, 9) Source(2, 9) + SourceIndex(0)
3 >Emitted(2, 11) Source(2, 11) + SourceIndex(0)
4 >Emitted(2, 14) Source(2, 14) + SourceIndex(0)
5 >Emitted(2, 15) Source(2, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(3, 2) Source(3, 2) + SourceIndex(0)
---
>>>declare const s = "Hello, world";
1->
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^
5 >               ^^^^^^^^^^^^^^^^^
6 >                                ^
1->
  >
  >
2 >
3 >        const 
4 >              s
5 >                = "Hello, world"
6 >                                ;
1->Emitted(4, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(4, 9) Source(5, 1) + SourceIndex(0)
3 >Emitted(4, 15) Source(5, 7) + SourceIndex(0)
4 >Emitted(4, 16) Source(5, 8) + SourceIndex(0)
5 >Emitted(4, 33) Source(5, 25) + SourceIndex(0)
6 >Emitted(4, 34) Source(5, 26) + SourceIndex(0)
---
>>>interface NoJsForHereEither {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^^^^^^^^^^
1 >
  >
  >
2 >interface 
3 >          NoJsForHereEither
1 >Emitted(5, 1) Source(7, 1) + SourceIndex(0)
2 >Emitted(5, 11) Source(7, 11) + SourceIndex(0)
3 >Emitted(5, 28) Source(7, 28) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(6, 5) Source(8, 5) + SourceIndex(0)
2 >Emitted(6, 9) Source(8, 9) + SourceIndex(0)
3 >Emitted(6, 11) Source(8, 11) + SourceIndex(0)
4 >Emitted(6, 14) Source(8, 14) + SourceIndex(0)
5 >Emitted(6, 15) Source(8, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(7, 2) Source(9, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.d.ts
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>declare function f(): string;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^^^^^^^^
5 >                             ^^^^^^^^^^^^->
1->
2 >function 
3 >                 f
4 >                  () {
  >                      return "JS does hoists";
  >                  }
1->Emitted(8, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(8, 18) Source(1, 10) + SourceIndex(2)
3 >Emitted(8, 19) Source(1, 11) + SourceIndex(2)
4 >Emitted(8, 30) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.d.ts.map

//// [/src/first/bin/first-output.js]
var s = "Hello, world";
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}
//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.js.map]
{"version":3,"file":"first-output.js","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":"AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACVf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC"}

//// [/src/first/bin/first-output.js.map.baseline.txt]
===================================================================
JsFile: first-output.js
mapUrl: first-output.js.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >/*@internal*/ interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(1, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(1, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(1, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(1, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(1, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(1, 24) Source(5, 26) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(2, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(2, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(2, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(2, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(2, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(2, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(2, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(2, 16) Source(11, 16) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(3, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(3, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(3, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(3, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(3, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(3, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(3, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(3, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(3, 18) Source(1, 18) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(4, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(4, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(4, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(5, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(5, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(5, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(5, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(6, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(6, 2) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"..","sourceFiles":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"js":{"sections":[{"pos":0,"end":104,"kind":"text"}],"mapHash":"-22423542495-{\"version\":3,\"file\":\"first-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACVf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC\"}","hash":"4999315210-var s = \"Hello, world\";\nconsole.log(s);\nconsole.log(f());\nfunction f() {\n    return \"JS does hoists\";\n}\n//# sourceMappingURL=first-output.js.map"},"dts":{"sections":[{"pos":0,"end":37,"kind":"internal"},{"pos":38,"end":149,"kind":"text"}],"mapHash":"36580418620-{\"version\":3,\"file\":\"first-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AAAc,UAAU,QAAQ;IAC5B,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AERD,iBAAS,CAAC,WAET\"}","hash":"-14898761250-interface TheFirst {\n    none: any;\n}\ndeclare const s = \"Hello, world\";\ninterface NoJsForHereEither {\n    none: any;\n}\ndeclare function f(): string;\n//# sourceMappingURL=first-output.d.ts.map"}},"program":{"fileNames":["../../../lib/lib.d.ts","../first_part1.ts","../first_part2.ts","../first_part3.ts"],"fileInfos":["3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","6800247997-/*@internal*/ interface TheFirst {\n    none: any;\n}\n\nconst s = \"Hello, world\";\n\ninterface NoJsForHereEither {\n    none: any;\n}\n\nconsole.log(s);\n","6007494133-console.log(f());\n","4357625305-function f() {\n    return \"JS does hoists\";\n}\n"],"root":[[2,4]],"options":{"composite":true,"declarationMap":true,"outFile":"./first-output.js","removeComments":false,"skipDefaultLibCheck":true,"sourceMap":true,"strict":false,"target":1},"outSignature":"-15957783529-interface TheFirst {\n    none: any;\n}\ndeclare const s = \"Hello, world\";\ninterface NoJsForHereEither {\n    none: any;\n}\ndeclare function f(): string;\n","latestChangedDtsFile":"./first-output.d.ts"},"version":"FakeTSVersion"}

//// [/src/first/bin/first-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/first/bin/first-output.js
----------------------------------------------------------------------
text: (0-104)
var s = "Hello, world";
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}

======================================================================
======================================================================
File:: /src/first/bin/first-output.d.ts
----------------------------------------------------------------------
internal: (0-37)
interface TheFirst {
    none: any;
}
----------------------------------------------------------------------
text: (38-149)
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;

======================================================================

//// [/src/first/bin/first-output.tsbuildinfo.readable.baseline.txt]
{
  "bundle": {
    "commonSourceDirectory": "..",
    "sourceFiles": [
      "../first_PART1.ts",
      "../first_part2.ts",
      "../first_part3.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 104,
          "kind": "text"
        }
      ],
      "hash": "4999315210-var s = \"Hello, world\";\nconsole.log(s);\nconsole.log(f());\nfunction f() {\n    return \"JS does hoists\";\n}\n//# sourceMappingURL=first-output.js.map",
      "mapHash": "-22423542495-{\"version\":3,\"file\":\"first-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACVf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC\"}"
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 37,
          "kind": "internal"
        },
        {
          "pos": 38,
          "end": 149,
          "kind": "text"
        }
      ],
      "hash": "-14898761250-interface TheFirst {\n    none: any;\n}\ndeclare const s = \"Hello, world\";\ninterface NoJsForHereEither {\n    none: any;\n}\ndeclare function f(): string;\n//# sourceMappingURL=first-output.d.ts.map",
      "mapHash": "36580418620-{\"version\":3,\"file\":\"first-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AAAc,UAAU,QAAQ;IAC5B,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AERD,iBAAS,CAAC,WAET\"}"
    }
  },
  "program": {
    "fileNames": [
      "../../../lib/lib.d.ts",
      "../first_part1.ts",
      "../first_part2.ts",
      "../first_part3.ts"
    ],
    "fileInfos": {
      "../../../lib/lib.d.ts": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "../first_part1.ts": "6800247997-/*@internal*/ interface TheFirst {\n    none: any;\n}\n\nconst s = \"Hello, world\";\n\ninterface NoJsForHereEither {\n    none: any;\n}\n\nconsole.log(s);\n",
      "../first_part2.ts": "6007494133-console.log(f());\n",
      "../first_part3.ts": "4357625305-function f() {\n    return \"JS does hoists\";\n}\n"
    },
    "root": [
      [
        [
          2,
          4
        ],
        [
          "../first_part1.ts",
          "../first_part2.ts",
          "../first_part3.ts"
        ]
      ]
    ],
    "options": {
      "composite": true,
      "declarationMap": true,
      "outFile": "./first-output.js",
      "removeComments": false,
      "skipDefaultLibCheck": true,
      "sourceMap": true,
      "strict": false,
      "target": 1
    },
    "outSignature": "-15957783529-interface TheFirst {\n    none: any;\n}\ndeclare const s = \"Hello, world\";\ninterface NoJsForHereEither {\n    none: any;\n}\ndeclare function f(): string;\n",
    "latestChangedDtsFile": "./first-output.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 2661
}



Change:: incremental-declaration-doesnt-change
Input::
//// [/src/first/first_PART1.ts]
/*@internal*/ interface TheFirst {
    none: any;
}

const s = "Hello, world";

interface NoJsForHereEither {
    none: any;
}

console.log(s);
console.log(s);



Output::
/lib/tsc --b /src/third --verbose
[[90m12:00:54 AM[0m] Projects in this build: 
    * src/first/tsconfig.json
    * src/second/tsconfig.json
    * src/third/tsconfig.json

[[90m12:00:55 AM[0m] Project 'src/first/tsconfig.json' is out of date because output 'src/first/bin/first-output.tsbuildinfo' is older than input 'src/first/first_PART1.ts'

[[90m12:00:56 AM[0m] Building project '/src/first/tsconfig.json'...

[[90m12:01:04 AM[0m] Project 'src/second/tsconfig.json' is up to date because newest input 'src/second/second_part1.ts' is older than output 'src/2/second-output.tsbuildinfo'

[[90m12:01:05 AM[0m] Project 'src/third/tsconfig.json' is out of date because output file 'src/third/thirdjs/output/third-output.tsbuildinfo' does not exist

[[90m12:01:06 AM[0m] Building project '/src/third/tsconfig.json'...

[96msrc/third/tsconfig.json[0m:[93m19[0m:[93m5[0m - [91merror[0m[90m TS5102: [0mOption 'prepend' has been removed. Please remove it from your configuration.

[7m19[0m     {
[7m  [0m [91m    ~[0m
[7m20[0m       "path": "../first",
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m21[0m       "prepend": true
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~[0m
[7m22[0m     },
[7m  [0m [91m~~~~~[0m

[96msrc/third/tsconfig.json[0m:[93m23[0m:[93m5[0m - [91merror[0m[90m TS5102: [0mOption 'prepend' has been removed. Please remove it from your configuration.

[7m23[0m     {
[7m  [0m [91m    ~[0m
[7m24[0m       "path": "../second",
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m25[0m       "prepend": true
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~[0m
[7m26[0m     }
[7m  [0m [91m~~~~~[0m


Found 2 errors.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated


//// [/src/first/bin/first-output.d.ts.map] file written with same contents
//// [/src/first/bin/first-output.d.ts.map.baseline.txt] file written with same contents
//// [/src/first/bin/first-output.js]
var s = "Hello, world";
console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}
//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.js.map]
{"version":3,"file":"first-output.js","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":"AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACXf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC"}

//// [/src/first/bin/first-output.js.map.baseline.txt]
===================================================================
JsFile: first-output.js
mapUrl: first-output.js.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >/*@internal*/ interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(1, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(1, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(1, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(1, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(1, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(1, 24) Source(5, 26) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(2, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(2, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(2, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(2, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(2, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(2, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(2, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(2, 16) Source(11, 16) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^->
1 >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(3, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(3, 8) Source(12, 8) + SourceIndex(0)
3 >Emitted(3, 9) Source(12, 9) + SourceIndex(0)
4 >Emitted(3, 12) Source(12, 12) + SourceIndex(0)
5 >Emitted(3, 13) Source(12, 13) + SourceIndex(0)
6 >Emitted(3, 14) Source(12, 14) + SourceIndex(0)
7 >Emitted(3, 15) Source(12, 15) + SourceIndex(0)
8 >Emitted(3, 16) Source(12, 16) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(4, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(4, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(4, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(4, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(4, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(4, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(4, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(4, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(4, 18) Source(1, 18) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(5, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(5, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(5, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(6, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(6, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(6, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(6, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(7, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(7, 2) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"..","sourceFiles":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"js":{"sections":[{"pos":0,"end":120,"kind":"text"}],"mapHash":"-2702861355-{\"version\":3,\"file\":\"first-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACXf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC\"}","hash":"-20052626506-var s = \"Hello, world\";\nconsole.log(s);\nconsole.log(s);\nconsole.log(f());\nfunction f() {\n    return \"JS does hoists\";\n}\n//# sourceMappingURL=first-output.js.map"},"dts":{"sections":[{"pos":0,"end":37,"kind":"internal"},{"pos":38,"end":149,"kind":"text"}],"mapHash":"36580418620-{\"version\":3,\"file\":\"first-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AAAc,UAAU,QAAQ;IAC5B,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AERD,iBAAS,CAAC,WAET\"}","hash":"-14898761250-interface TheFirst {\n    none: any;\n}\ndeclare const s = \"Hello, world\";\ninterface NoJsForHereEither {\n    none: any;\n}\ndeclare function f(): string;\n//# sourceMappingURL=first-output.d.ts.map"}},"program":{"fileNames":["../../../lib/lib.d.ts","../first_part1.ts","../first_part2.ts","../first_part3.ts"],"fileInfos":["3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","3002800511-/*@internal*/ interface TheFirst {\n    none: any;\n}\n\nconst s = \"Hello, world\";\n\ninterface NoJsForHereEither {\n    none: any;\n}\n\nconsole.log(s);\nconsole.log(s);","6007494133-console.log(f());\n","4357625305-function f() {\n    return \"JS does hoists\";\n}\n"],"root":[[2,4]],"options":{"composite":true,"declarationMap":true,"outFile":"./first-output.js","removeComments":false,"skipDefaultLibCheck":true,"sourceMap":true,"strict":false,"target":1},"outSignature":"-15957783529-interface TheFirst {\n    none: any;\n}\ndeclare const s = \"Hello, world\";\ninterface NoJsForHereEither {\n    none: any;\n}\ndeclare function f(): string;\n","latestChangedDtsFile":"./first-output.d.ts"},"version":"FakeTSVersion"}

//// [/src/first/bin/first-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/first/bin/first-output.js
----------------------------------------------------------------------
text: (0-120)
var s = "Hello, world";
console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}

======================================================================
======================================================================
File:: /src/first/bin/first-output.d.ts
----------------------------------------------------------------------
internal: (0-37)
interface TheFirst {
    none: any;
}
----------------------------------------------------------------------
text: (38-149)
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;

======================================================================

//// [/src/first/bin/first-output.tsbuildinfo.readable.baseline.txt]
{
  "bundle": {
    "commonSourceDirectory": "..",
    "sourceFiles": [
      "../first_PART1.ts",
      "../first_part2.ts",
      "../first_part3.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 120,
          "kind": "text"
        }
      ],
      "hash": "-20052626506-var s = \"Hello, world\";\nconsole.log(s);\nconsole.log(s);\nconsole.log(f());\nfunction f() {\n    return \"JS does hoists\";\n}\n//# sourceMappingURL=first-output.js.map",
      "mapHash": "-2702861355-{\"version\":3,\"file\":\"first-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACXf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC\"}"
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 37,
          "kind": "internal"
        },
        {
          "pos": 38,
          "end": 149,
          "kind": "text"
        }
      ],
      "hash": "-14898761250-interface TheFirst {\n    none: any;\n}\ndeclare const s = \"Hello, world\";\ninterface NoJsForHereEither {\n    none: any;\n}\ndeclare function f(): string;\n//# sourceMappingURL=first-output.d.ts.map",
      "mapHash": "36580418620-{\"version\":3,\"file\":\"first-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AAAc,UAAU,QAAQ;IAC5B,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AERD,iBAAS,CAAC,WAET\"}"
    }
  },
  "program": {
    "fileNames": [
      "../../../lib/lib.d.ts",
      "../first_part1.ts",
      "../first_part2.ts",
      "../first_part3.ts"
    ],
    "fileInfos": {
      "../../../lib/lib.d.ts": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "../first_part1.ts": "3002800511-/*@internal*/ interface TheFirst {\n    none: any;\n}\n\nconst s = \"Hello, world\";\n\ninterface NoJsForHereEither {\n    none: any;\n}\n\nconsole.log(s);\nconsole.log(s);",
      "../first_part2.ts": "6007494133-console.log(f());\n",
      "../first_part3.ts": "4357625305-function f() {\n    return \"JS does hoists\";\n}\n"
    },
    "root": [
      [
        [
          2,
          4
        ],
        [
          "../first_part1.ts",
          "../first_part2.ts",
          "../first_part3.ts"
        ]
      ]
    ],
    "options": {
      "composite": true,
      "declarationMap": true,
      "outFile": "./first-output.js",
      "removeComments": false,
      "skipDefaultLibCheck": true,
      "sourceMap": true,
      "strict": false,
      "target": 1
    },
    "outSignature": "-15957783529-interface TheFirst {\n    none: any;\n}\ndeclare const s = \"Hello, world\";\ninterface NoJsForHereEither {\n    none: any;\n}\ndeclare function f(): string;\n",
    "latestChangedDtsFile": "./first-output.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 2734
}



Change:: incremental-headers-change-without-dts-changes
Input::
//// [/src/first/first_PART1.ts]
interface TheFirst {
    none: any;
}

const s = "Hello, world";

interface NoJsForHereEither {
    none: any;
}

console.log(s);
console.log(s);



Output::
/lib/tsc --b /src/third --verbose
[[90m12:01:10 AM[0m] Projects in this build: 
    * src/first/tsconfig.json
    * src/second/tsconfig.json
    * src/third/tsconfig.json

[[90m12:01:11 AM[0m] Project 'src/first/tsconfig.json' is out of date because output 'src/first/bin/first-output.tsbuildinfo' is older than input 'src/first/first_PART1.ts'

[[90m12:01:12 AM[0m] Building project '/src/first/tsconfig.json'...

[[90m12:01:20 AM[0m] Project 'src/second/tsconfig.json' is up to date because newest input 'src/second/second_part1.ts' is older than output 'src/2/second-output.tsbuildinfo'

[[90m12:01:21 AM[0m] Project 'src/third/tsconfig.json' is out of date because output file 'src/third/thirdjs/output/third-output.tsbuildinfo' does not exist

[[90m12:01:22 AM[0m] Building project '/src/third/tsconfig.json'...

[96msrc/third/tsconfig.json[0m:[93m19[0m:[93m5[0m - [91merror[0m[90m TS5102: [0mOption 'prepend' has been removed. Please remove it from your configuration.

[7m19[0m     {
[7m  [0m [91m    ~[0m
[7m20[0m       "path": "../first",
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m21[0m       "prepend": true
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~[0m
[7m22[0m     },
[7m  [0m [91m~~~~~[0m

[96msrc/third/tsconfig.json[0m:[93m23[0m:[93m5[0m - [91merror[0m[90m TS5102: [0mOption 'prepend' has been removed. Please remove it from your configuration.

[7m23[0m     {
[7m  [0m [91m    ~[0m
[7m24[0m       "path": "../second",
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[7m25[0m       "prepend": true
[7m  [0m [91m~~~~~~~~~~~~~~~~~~~~~[0m
[7m26[0m     }
[7m  [0m [91m~~~~~[0m


Found 2 errors.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated


//// [/src/first/bin/first-output.d.ts.map]
{"version":3,"file":"first-output.d.ts","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":"AAAA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AERD,iBAAS,CAAC,WAET"}

//// [/src/first/bin/first-output.d.ts.map.baseline.txt]
===================================================================
JsFile: first-output.d.ts
mapUrl: first-output.d.ts.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.d.ts
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>interface TheFirst {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^
1 >
2 >interface 
3 >          TheFirst
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 11) Source(1, 11) + SourceIndex(0)
3 >Emitted(1, 19) Source(1, 19) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(2, 5) Source(2, 5) + SourceIndex(0)
2 >Emitted(2, 9) Source(2, 9) + SourceIndex(0)
3 >Emitted(2, 11) Source(2, 11) + SourceIndex(0)
4 >Emitted(2, 14) Source(2, 14) + SourceIndex(0)
5 >Emitted(2, 15) Source(2, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(3, 2) Source(3, 2) + SourceIndex(0)
---
>>>declare const s = "Hello, world";
1->
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^
5 >               ^^^^^^^^^^^^^^^^^
6 >                                ^
1->
  >
  >
2 >
3 >        const 
4 >              s
5 >                = "Hello, world"
6 >                                ;
1->Emitted(4, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(4, 9) Source(5, 1) + SourceIndex(0)
3 >Emitted(4, 15) Source(5, 7) + SourceIndex(0)
4 >Emitted(4, 16) Source(5, 8) + SourceIndex(0)
5 >Emitted(4, 33) Source(5, 25) + SourceIndex(0)
6 >Emitted(4, 34) Source(5, 26) + SourceIndex(0)
---
>>>interface NoJsForHereEither {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^^^^^^^^^^
1 >
  >
  >
2 >interface 
3 >          NoJsForHereEither
1 >Emitted(5, 1) Source(7, 1) + SourceIndex(0)
2 >Emitted(5, 11) Source(7, 11) + SourceIndex(0)
3 >Emitted(5, 28) Source(7, 28) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(6, 5) Source(8, 5) + SourceIndex(0)
2 >Emitted(6, 9) Source(8, 9) + SourceIndex(0)
3 >Emitted(6, 11) Source(8, 11) + SourceIndex(0)
4 >Emitted(6, 14) Source(8, 14) + SourceIndex(0)
5 >Emitted(6, 15) Source(8, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(7, 2) Source(9, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.d.ts
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>declare function f(): string;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^^^^^^^^
5 >                             ^^^^^^^^^^^^->
1->
2 >function 
3 >                 f
4 >                  () {
  >                      return "JS does hoists";
  >                  }
1->Emitted(8, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(8, 18) Source(1, 10) + SourceIndex(2)
3 >Emitted(8, 19) Source(1, 11) + SourceIndex(2)
4 >Emitted(8, 30) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.d.ts.map

//// [/src/first/bin/first-output.js] file written with same contents
//// [/src/first/bin/first-output.js.map] file written with same contents
//// [/src/first/bin/first-output.js.map.baseline.txt]
===================================================================
JsFile: first-output.js
mapUrl: first-output.js.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(1, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(1, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(1, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(1, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(1, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(1, 24) Source(5, 26) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(2, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(2, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(2, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(2, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(2, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(2, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(2, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(2, 16) Source(11, 16) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^->
1 >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(3, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(3, 8) Source(12, 8) + SourceIndex(0)
3 >Emitted(3, 9) Source(12, 9) + SourceIndex(0)
4 >Emitted(3, 12) Source(12, 12) + SourceIndex(0)
5 >Emitted(3, 13) Source(12, 13) + SourceIndex(0)
6 >Emitted(3, 14) Source(12, 14) + SourceIndex(0)
7 >Emitted(3, 15) Source(12, 15) + SourceIndex(0)
8 >Emitted(3, 16) Source(12, 16) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(4, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(4, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(4, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(4, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(4, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(4, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(4, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(4, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(4, 18) Source(1, 18) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(5, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(5, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(5, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(6, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(6, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(6, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(6, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(7, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(7, 2) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"..","sourceFiles":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"js":{"sections":[{"pos":0,"end":120,"kind":"text"}],"mapHash":"-2702861355-{\"version\":3,\"file\":\"first-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACXf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC\"}","hash":"-20052626506-var s = \"Hello, world\";\nconsole.log(s);\nconsole.log(s);\nconsole.log(f());\nfunction f() {\n    return \"JS does hoists\";\n}\n//# sourceMappingURL=first-output.js.map"},"dts":{"sections":[{"pos":0,"end":149,"kind":"text"}],"mapHash":"28957120071-{\"version\":3,\"file\":\"first-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AAAA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AERD,iBAAS,CAAC,WAET\"}","hash":"-14898761250-interface TheFirst {\n    none: any;\n}\ndeclare const s = \"Hello, world\";\ninterface NoJsForHereEither {\n    none: any;\n}\ndeclare function f(): string;\n//# sourceMappingURL=first-output.d.ts.map"}},"program":{"fileNames":["../../../lib/lib.d.ts","../first_part1.ts","../first_part2.ts","../first_part3.ts"],"fileInfos":["3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","-20304251376-interface TheFirst {\n    none: any;\n}\n\nconst s = \"Hello, world\";\n\ninterface NoJsForHereEither {\n    none: any;\n}\n\nconsole.log(s);\nconsole.log(s);","6007494133-console.log(f());\n","4357625305-function f() {\n    return \"JS does hoists\";\n}\n"],"root":[[2,4]],"options":{"composite":true,"declarationMap":true,"outFile":"./first-output.js","removeComments":false,"skipDefaultLibCheck":true,"sourceMap":true,"strict":false,"target":1},"outSignature":"-15957783529-interface TheFirst {\n    none: any;\n}\ndeclare const s = \"Hello, world\";\ninterface NoJsForHereEither {\n    none: any;\n}\ndeclare function f(): string;\n","latestChangedDtsFile":"./first-output.d.ts"},"version":"FakeTSVersion"}

//// [/src/first/bin/first-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/first/bin/first-output.js
----------------------------------------------------------------------
text: (0-120)
var s = "Hello, world";
console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}

======================================================================
======================================================================
File:: /src/first/bin/first-output.d.ts
----------------------------------------------------------------------
text: (0-149)
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;

======================================================================

//// [/src/first/bin/first-output.tsbuildinfo.readable.baseline.txt]
{
  "bundle": {
    "commonSourceDirectory": "..",
    "sourceFiles": [
      "../first_PART1.ts",
      "../first_part2.ts",
      "../first_part3.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 120,
          "kind": "text"
        }
      ],
      "hash": "-20052626506-var s = \"Hello, world\";\nconsole.log(s);\nconsole.log(s);\nconsole.log(f());\nfunction f() {\n    return \"JS does hoists\";\n}\n//# sourceMappingURL=first-output.js.map",
      "mapHash": "-2702861355-{\"version\":3,\"file\":\"first-output.js\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACXf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC\"}"
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 149,
          "kind": "text"
        }
      ],
      "hash": "-14898761250-interface TheFirst {\n    none: any;\n}\ndeclare const s = \"Hello, world\";\ninterface NoJsForHereEither {\n    none: any;\n}\ndeclare function f(): string;\n//# sourceMappingURL=first-output.d.ts.map",
      "mapHash": "28957120071-{\"version\":3,\"file\":\"first-output.d.ts\",\"sourceRoot\":\"\",\"sources\":[\"../first_PART1.ts\",\"../first_part2.ts\",\"../first_part3.ts\"],\"names\":[],\"mappings\":\"AAAA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AERD,iBAAS,CAAC,WAET\"}"
    }
  },
  "program": {
    "fileNames": [
      "../../../lib/lib.d.ts",
      "../first_part1.ts",
      "../first_part2.ts",
      "../first_part3.ts"
    ],
    "fileInfos": {
      "../../../lib/lib.d.ts": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "../first_part1.ts": "-20304251376-interface TheFirst {\n    none: any;\n}\n\nconst s = \"Hello, world\";\n\ninterface NoJsForHereEither {\n    none: any;\n}\n\nconsole.log(s);\nconsole.log(s);",
      "../first_part2.ts": "6007494133-console.log(f());\n",
      "../first_part3.ts": "4357625305-function f() {\n    return \"JS does hoists\";\n}\n"
    },
    "root": [
      [
        [
          2,
          4
        ],
        [
          "../first_part1.ts",
          "../first_part2.ts",
          "../first_part3.ts"
        ]
      ]
    ],
    "options": {
      "composite": true,
      "declarationMap": true,
      "outFile": "./first-output.js",
      "removeComments": false,
      "skipDefaultLibCheck": true,
      "sourceMap": true,
      "strict": false,
      "target": 1
    },
    "outSignature": "-15957783529-interface TheFirst {\n    none: any;\n}\ndeclare const s = \"Hello, world\";\ninterface NoJsForHereEither {\n    none: any;\n}\ndeclare function f(): string;\n",
    "latestChangedDtsFile": "./first-output.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 2683
}

