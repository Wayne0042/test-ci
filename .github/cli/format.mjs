import { CONTEXT } from "./constant.mjs";
import { executeSubProcess } from "./execute-subprocess.mjs";

function format(context) {
    switch (context) {
        case CONTEXT.ai_bu:
            executeSubProcess("echo", ["execute ai_bu format"]);
            break;

        case CONTEXT.jutor_job:
            console.log("execute jutor_job format");
            break;
    
        default:
            exitWithError("invalid context");
            break;
    }
};

export { format }
