[33mcommit a9fe5dc9d75272c97e051d62ba21f90042af2c59[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m)[m
Author: statik0 <isc.antonio.escobedo@gmail.com>
Date:   Wed May 20 21:16:28 2020 -0500

    Se agrega configuración de outdir

[1mdiff --git a/dist/hello.js b/dist/hello.js[m
[1mnew file mode 100644[m
[1mindex 0000000..0a0fa71[m
[1m--- /dev/null[m
[1m+++ b/dist/hello.js[m
[36m@@ -0,0 +1,2 @@[m
[32m+[m[32m"use strict";[m
[32m+[m[32mconsole.log('Hola Munduki');[m
[1mdiff --git a/src/hello.ts b/src/hello.ts[m
[1mnew file mode 100644[m
[1mindex 0000000..f354077[m
[1m--- /dev/null[m
[1m+++ b/src/hello.ts[m
[36m@@ -0,0 +1 @@[m
[32m+[m[32mconsole.log('Hola Munduki');[m
\ No newline at end of file[m
[1mdiff --git a/tsconfig.json b/tsconfig.json[m
[1mnew file mode 100644[m
[1mindex 0000000..5464257[m
[1m--- /dev/null[m
[1m+++ b/tsconfig.json[m
[36m@@ -0,0 +1,69 @@[m
[32m+[m[32m{[m
[32m+[m[32m  "compilerOptions": {[m
[32m+[m[32m    /* Visit https://aka.ms/tsconfig.json to read more about this file */[m
[32m+[m
[32m+[m[32m    /* Basic Options */[m
[32m+[m[32m    // "incremental": true,                   /* Enable incremental compilation */[m
[32m+[m[32m    "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */[m
[32m+[m[32m    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */[m
[32m+[m[32m    // "lib": [],                             /* Specify library files to be included in the compilation. */[m
[32m+[m[32m    // "allowJs": true,                       /* Allow javascript files to be compiled. */[m
[32m+[m[32m    // "checkJs": true,                       /* Report errors in .js files. */[m
[32m+[m[32m    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */[m
[32m+[m[32m    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */[m
[32m+[m[32m    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */[m
[32m+[m[32m    // "sourceMap": true,                     /* Generates corresponding '.map' file. */[m
[32m+[m[32m    // "outFile": "./",                       /* Concatenate and emit output to single file. */[m
[32m+[m[32m    "outDir": "./dist",                        /* Redirect output structure to the directory. */[m
[32m+[m[32m    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */[m
[32m+[m[32m    // "composite": true,                     /* Enable project compilation */[m
[32m+[m[32m    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */[m
[32m+[m[32m    // "removeComments": true,                /* Do not emit comments to output. */[m
[32m+[m[32m    // "noEmit": true,                        /* Do not emit outputs. */[m
[32m+[m[32m    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */[m
[32m+[m[32m    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */[m
[32m+[m[32m    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */[m
[32m+[m
[32m+[m[32m    /* Strict Type-Checking Options */[m
[32m+[m[32m    "strict": true,                           /* Enable all strict type-checking options. */[m
[32m+[m[32m    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */[m
[32m+[m[32m    // "strictNullChecks": true,              /* Enable strict null checks. */[m
[32m+[m[32m    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */[m
[32m+[m[32m    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */[m
[32m+[m[32m    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */[m
[32m+[m[32m    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */[m
[32m+[m[32m    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */[m
[32m+[m
[32m+[m[32m    /* Additional Checks */[m
[32m+[m[32m    // "noUnusedLocals": true,                /* Report errors on unused locals. */[m
[32m+[m[32m    // "noUnusedParameters": true,            /* Report errors on unused parameters. */[m
[32m+[m[32m    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */[m
[32m+[m[32m    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */[m
[32m+[m
[32m+[m[32m    /* Module Resolution Options */[m
[32m+[m[32m    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */[m
[32m+[m[32m    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */[m
[32m+[m[32m    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */[m
[32m+[m[32m    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */[m
[32m+[m[32m    // "typeRoots": [],                       /* List of folders to include type definitions from. */[m
[32m+[m[32m    // "types": [],                           /* Type declaration files to be included in compilation. */[m
[32m+[m[32m    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */[m
[32m+[m[32m    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */[m
[32m+[m[32m    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */[m
[32m+[m[32m    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */[m
[32m+[m
[32m+[m[32m    /* Source Map Options */[m
[32m+[m[32m    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */[m
[32m+[m[32m    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */[m
[32m+[m[32m    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */[m
[32m+[m[32m    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */[m
[32m+[m
[32m+[m[32m    /* Experimental Options */[m
[32m+[m[32m    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */[m
[32m+[m[32m    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */[m
[32m+[m
[32m+[m[32m    /* Advanced Options */[m
[32m+[m[32m    "skipLibCheck": true,                     /* Skip type checking of declaration files. */[m
[32m+[m[32m    "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
