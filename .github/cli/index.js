console.log(`Node.js version: ${process.version}`);

const args = process.argv.slice(2);
console.log(args);
const command = args[0];

if (command === "hello") {
    const name = args[1];
    console.log(`hello ${name} from node.js`);
} else {
    console.log(`invalid command: ${command}`);
}
