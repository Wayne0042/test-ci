function exitWithError(message) {
  console.log(`${message}, exit`);
  process.exit(1);
}

export { exitWithError };
