import { CONTEXT } from "./constant.mjs";
import { executeSubProcess } from "./execute-subprocess.mjs";

function lint(context) {
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

export { lint };
