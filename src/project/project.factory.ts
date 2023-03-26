import { externalSchematic, Rule } from "@angular-devkit/schematics";
import { ProjectOptions } from "./project.schema.d";

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function main(options: ProjectOptions): Rule {
  const normalizedOptions = normalizeOptions(options);
  return externalSchematic("@nestjs/schematics", "application", {
    ...normalizedOptions,
    strict: true,
  });
}

function normalizeOptions(options: ProjectOptions): ProjectOptions {
  return {
    ...options,
  };
}
