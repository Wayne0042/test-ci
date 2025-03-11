import { COMMAND, CONTEXT } from "./config.mjs";
import { exitWithError } from "./common/exit-with-error.mjs";
import { AiBuHandler } from "./handler/ai-bu-handler.mjs";
import { JutorJobHandler } from "./handler/jutor-job-handler.mjs";
import { getMatchedContext } from "./common/get-matched-context.mjs";

function convertEnum(type, value) {
  return type[value] || null;
}

function generateHandler(context) {
  switch (context) {
    case CONTEXT.ai_bu:
      return new AiBuHandler();

    case CONTEXT.jutor_job:
      return new JutorJobHandler();

    default:
      exitWithError("invalid context");
      break;
  }
}

async function executeCommand(handler, command) {
  switch (command) {
    case COMMAND.get_matched_context:
      await getMatchedContext();
      break

    case COMMAND.format:
      handler.format();
      break;

    case COMMAND.lint:
      handler.lint();
      break;

    case COMMAND.type:
      handler.type();
      break;

    case COMMAND.unit_test:
      handler.unitTest();
      break;

    case COMMAND.integration_test:
      handler.integrationTest();
      break;

    case COMMAND.build:
      handler.build();
      break;

    case COMMAND.deploy:
      handler.deploy();
      break;

    default:
      exitWithError("invalid command");
      break;
  }
}

async function main() {
  console.log(`Node.js version: ${process.version}`);

  const args = process.argv.slice(2);
  console.log(`args: ${args}`);

  if (args.length < 2) {
    exitWithError(`args length should greater than 2, args: ${args}`);
  }

  const context = convertEnum(CONTEXT, args[0]);
  if (!context) {
    exitWithError("invalid context");
  }

  const handler = generateHandler(context);

  const command = convertEnum(COMMAND, args[1]);
  if (!command) {
    exitWithError("invalid command");
  }

  await executeCommand(handler, command);
}

main();
