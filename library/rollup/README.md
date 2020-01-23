# Building a library with Rollup

Rollup builds into CommonJS, ES Module, UDM:

In this simple case `npm build` translates to `rollup -c `[`./rollup.config.js`](./rollup.config.js).

## Build output

```
./src/index.js, ./src/components/OtherCmp/index.js, ./src/components/SomeCmp/index.js → ./dist/cjs...
-----------------------------
Rollup File Analysis
-----------------------------
bundle size:    248 Bytes
original size:  575 Bytes
code reduction: 56.87 %
module count:   6

/home/khala/Documents/git/karelhala/devconf-build-tools-101/library/webpack/src/components/OtherCmp/index.js
██████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 44.76 % (111 Bytes)
/home/khala/Documents/git/karelhala/devconf-build-tools-101/library/webpack/src/components/SomeCmp/SomeCmp.js
█████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 42.74 % (106 Bytes)
/home/khala/Documents/git/karelhala/devconf-build-tools-101/library/webpack/src/components/SomeCmp/config.js
██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 12.5 % (31 Bytes)
/home/khala/Documents/git/karelhala/devconf-build-tools-101/library/webpack/src/components/SomeCmp/index.js
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0 % (0 Byte)
/home/khala/Documents/git/karelhala/devconf-build-tools-101/library/webpack/src/components/index.js
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0 % (0 Byte)
/home/khala/Documents/git/karelhala/devconf-build-tools-101/library/webpack/src/index.js
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0 % (0 Byte)

created ./dist/cjs in 697ms

./src/index.js, ./src/components/OtherCmp/index.js, ./src/components/SomeCmp/index.js → ./dist/esm...
-----------------------------
Rollup File Analysis
-----------------------------
bundle size:    228 Bytes
original size:  575 Bytes
code reduction: 60.35 %
module count:   6

/home/khala/Documents/git/karelhala/devconf-build-tools-101/library/webpack/src/components/OtherCmp/index.js
██████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 44.3 % (101 Bytes)
/home/khala/Documents/git/karelhala/devconf-build-tools-101/library/webpack/src/components/SomeCmp/SomeCmp.js
█████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 42.11 % (96 Bytes)
/home/khala/Documents/git/karelhala/devconf-build-tools-101/library/webpack/src/components/SomeCmp/config.js
██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 13.6 % (31 Bytes)
/home/khala/Documents/git/karelhala/devconf-build-tools-101/library/webpack/src/components/SomeCmp/index.js
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0 % (0 Byte)
/home/khala/Documents/git/karelhala/devconf-build-tools-101/library/webpack/src/components/index.js
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0 % (0 Byte)
/home/khala/Documents/git/karelhala/devconf-build-tools-101/library/webpack/src/index.js
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0 % (0 Byte)

created ./dist/esm in 167ms

./src/index.js → ./dist/umd/index.js...
-----------------------------
Rollup File Analysis
-----------------------------
bundle size:    248 Bytes
original size:  575 Bytes
code reduction: 56.87 %
module count:   6

/home/khala/Documents/git/karelhala/devconf-build-tools-101/library/webpack/src/components/OtherCmp/index.js
██████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 44.76 % (111 Bytes)
/home/khala/Documents/git/karelhala/devconf-build-tools-101/library/webpack/src/components/SomeCmp/SomeCmp.js
█████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 42.74 % (106 Bytes)
/home/khala/Documents/git/karelhala/devconf-build-tools-101/library/webpack/src/components/SomeCmp/config.js
██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 12.5 % (31 Bytes)
/home/khala/Documents/git/karelhala/devconf-build-tools-101/library/webpack/src/components/SomeCmp/index.js
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0 % (0 Byte)
/home/khala/Documents/git/karelhala/devconf-build-tools-101/library/webpack/src/components/index.js
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0 % (0 Byte)
/home/khala/Documents/git/karelhala/devconf-build-tools-101/library/webpack/src/index.js
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0 % (0 Byte)

created ./dist/umd/index.js in 178ms

./src/components/OtherCmp/index.js → ./dist/umd/OtherCmp.js...
-----------------------------
Rollup File Analysis
-----------------------------
bundle size:    111 Bytes
original size:  169 Bytes
code reduction: 34.32 %
module count:   1

/home/khala/Documents/git/karelhala/devconf-build-tools-101/library/webpack/src/components/OtherCmp/index.js
██████████████████████████████████████████████████ 100 % (111 Bytes)

created ./dist/umd/OtherCmp.js in 165ms

./src/components/SomeCmp/index.js → ./dist/umd/SomeCmp.js...
-----------------------------
Rollup File Analysis
-----------------------------
bundle size:    137 Bytes
original size:  321 Bytes
code reduction: 57.32 %
module count:   3

/home/khala/Documents/git/karelhala/devconf-build-tools-101/library/webpack/src/components/SomeCmp/SomeCmp.js
██████████████████████████████████████░░░░░░░░░░░░ 77.37 % (106 Bytes)
/home/khala/Documents/git/karelhala/devconf-build-tools-101/library/webpack/src/components/SomeCmp/config.js
███████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 22.63 % (31 Bytes)
/home/khala/Documents/git/karelhala/devconf-build-tools-101/library/webpack/src/components/SomeCmp/index.js
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0 % (0 Byte)


```
