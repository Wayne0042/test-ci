import { executeSubProcess } from "../common/execute-subprocess.mjs";

class JutorJobHandler {
  format() {
    executeSubProcess("echo", ["execute jutor_job format"]);
  }

  lint() {
    console.log("Not yet implemented");
  }

  type() {
    console.log("Not yet implemented");
  }

  unitTest() {
    console.log("Not yet implemented");
  }

  integrationTest() {
    console.log("Not yet implemented");
  }

  build() {
    console.log("Not yet implemented");
  }

  deploy() {
    console.log("Not yet implemented");
  }
}

export { JutorJobHandler };
