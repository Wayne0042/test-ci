import { spawn } from "child_process";

function executeSubProcess(command, args) {
  const subProcess = spawn(command, args);

  subProcess.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  subProcess.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  subProcess.on("close", (code) => {
    if (code === 0) {
      console.log("command succeeded");
    } else {
      console.error(`failed with code ${code}`);
    }
  });
}

export { executeSubProcess };
