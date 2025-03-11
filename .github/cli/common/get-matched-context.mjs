import { spawn } from "child_process";
import { FILE_CONFIG } from "../config.mjs";

function getChangedFiles() {
  return new Promise((resolve, reject) => {
    const gitDiff = spawn("git", ["diff", "--name-only", "HEAD"]);

    let output = "";
    gitDiff.stdout.on("data", (data) => {
      output += data.toString();
    });

    gitDiff.stderr.on("data", (data) => {
      reject(new Error(`git diff error: ${data.toString()}`));
    });

    gitDiff.on("close", (code) => {
      if (code !== 0) {
        reject(new Error(`git diff process exited with code ${code}`));
      } else {
        resolve(
          output
            .split("\n")
            .map((line) => line.trim())
            .filter(Boolean)
        );
      }
    });
  });
}

function patternToRegex(pattern) {
  if (pattern.endsWith("/")) {
    return null; // 資料夾匹配不需要 regex
  }

  let regexStr = pattern
    .replace(/\./g, "\\.") // 轉義 `.`
    .replace(/\*\*/g, ".*") // `**` 變成 `.*`（匹配任意路徑）
    .replace(/\*/g, "[^/]*"); // `*` 變成 `[^/]*`（匹配單層級字串）
  return new RegExp(`^${regexStr}$`);
}

function matchConfig(files) {
  const matchedKeys = new Set();

  for (const [key, patterns] of Object.entries(FILE_CONFIG)) {
    for (const pattern of patterns) {
      if (pattern.endsWith("/")) {
        // 如果 pattern 是資料夾，則直接比對 `startsWith`
        if (files.some((file) => file.startsWith(pattern))) {
          matchedKeys.add(key);
          break;
        }
      } else {
        // 一般 pattern 轉成 regex 再比對
        const regex = patternToRegex(pattern);
        if (regex && files.some((file) => regex.test(file))) {
          matchedKeys.add(key);
          break;
        }
      }
    }
  }

  return Array.from(matchedKeys);
}

async function getMatchedContext() {
  try {
    const changedFiles = await getChangedFiles();
    return matchConfig(changedFiles);
  } catch (error) {
    console.error(`Error: ${error.mesage}`);
  }
}

export { getMatchedContext };
