import { CONTEXT } from "./constant.mjs";
// import { executeSubProcess } from "./execute-subprocess.mjs";
import { exitWithError } from "./exit-with-error.mjs";

function unitTest(context) {
  switch (context) {
    case CONTEXT.ai_bu:
      break;

    case CONTEXT.jutor_job:
      break;

    default:
      exitWithError("invalid context");
      break;
  }
}

export { unitTest };
