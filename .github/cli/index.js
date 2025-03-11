import { convertEnum } from "./convert.mjs";
import { COMMAND, CONTEXT } from "./constant.mjs";
import { format } from "./format.mjs";
import { lint } from "./lint.mjs";
import { type } from "./type.mjs";
import { unitTest } from "./unit-test.mjs";
import { integrationTest } from "./integration-test.mjs";
import { build } from "./build.mjs";
import { deploy } from "./deploy.mjs";

function exitWithError(message) {
  console.log(`${message}, exit`);
  process.exit(1);
}

function executeCommand(command, context) {
  switch (command) {
    case COMMAND.format:
      format(context);
      break;

    case COMMAND.lint:
      lint(context);
      break;

    case COMMAND.type:
      type(context);
      break;

    case COMMAND.unit_test:
      unitTest(context);
      break;

    case COMMAND.integration_test:
      integrationTest(context);
      break;

    case COMMAND.build:
      build(context);
      break;

    case COMMAND.deploy:
      deploy(context);
      break;

    default:
      exitWithError("invalid command");
      break;
  }
}

function main() {
  console.log(`Node.js version: ${process.version}`);

  const args = process.argv.slice(2);
  console.log(`args: ${args}`);

  if (args.length < 2) {
    exitWithError(`args should greater than 2, args:${args}`);
  }

  const command = convertEnum(COMMAND, args[0]);
  if (!command) {
    exitWithError("invalid command");
  }

  const context = convertEnum(CONTEXT, args[1]);
  if (!context) {
    exitWithError("invalid context");
  }

  executeCommand(command, context);
}

main();
