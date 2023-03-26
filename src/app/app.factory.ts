import {
  externalSchematic,
  Rule,
} from "@angular-devkit/schematics";

import { SubAppOptions, NestSubAppOptions } from "./app.schema.d";

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function main(_options: SubAppOptions): Rule {
  const options: NestSubAppOptions = {
    ..._options,
    language: 'ts',
  };
  return externalSchematic("@nestjs/schematics", "sub-app", options);
}
