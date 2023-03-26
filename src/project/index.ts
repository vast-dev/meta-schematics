import {
  apply,
  mergeWith,
  move,
  Rule,
  template,
  url,
} from "@angular-devkit/schematics";
import { normalizeToKebabOrSnakeCase } from "../utils/formatting";
import { ProjectOptions } from "./project.schema";

export function project(_options: ProjectOptions): Rule {
  const options = {
    ..._options,
  };
  options.name = normalizeToKebabOrSnakeCase(options.name.toString());

  const path =
    !options.directory || options.directory === "undefined"
      ? options.name
      : options.directory;

  return mergeWith(
    apply(url("./files"), [
      template({
        ...options,
      }),
      move(path),
    ])
  );
}
