Example of a consumer importing this package:
```ts
import * as tsesm from 'ts-esm-output';
import { subModule } from 'ts-esm-output/subModule.js';

console.log(tsesm.subModule, subModule);
```

Submodule imports are handled using the `exports` field in package.json and the types are handled using the `typesVersions` field:
```json
"exports": {
  "./*": "./dist/*"
},
"typesVersions": {
  "*": {
    "*.js": ["./dist/*.d.ts"]
  }
}
```

In this example, submodules must include the `.js` file extension. This is configurable. The idea behind this pattern is to allow importing submodules of different file types like `.css`.

[exports info](https://nodejs.org/api/packages.html#packages_package_entry_points)

[typeVersions info](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#version-selection-with-typesversions)

[TypeScript support for package exports](https://github.com/microsoft/TypeScript/issues/33079)
