const COMMAND = {
  get_matched_context: "get_matched_context",
  format: "format",
  lint: "lint",
  type: "type",
  unit_test: "unit_test",
  integration_test: "integration_test",
  build: "build",
  deploy: "deploy",
};

const CONTEXT = {
  ai_bu: "ai_bu",
  jutor_job: "jutor_job",
};

const FILE_CONFIG = {
  ai_bu: [
    ".husky/",
    "apps/ai-bu/",
    "apps/ai-bu-e2e/",
    ".editorconfig",
    ".eslintignore",
    ".eslintrc.json",
    ".prettierignore",
    ".prettierrc",
    "Dockerfile",
    "jest.config.ts",
    "jest.preset.js",
    "Makefile",
    "nx.json",
    "package-lock.json",
    "package.json",
    "tsconfig.base.json",
  ],
  jutor_job: ["apps/jutor-job/"],
};

export { COMMAND, CONTEXT, FILE_CONFIG };
