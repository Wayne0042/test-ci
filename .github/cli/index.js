import { spawn } from 'child_process';
import { convertEnum } from './convert.mjs';

const COMMAND = {
    format: 'format',
    lint: 'lint',
    type: 'type',
    unit_test: 'unit_test',
    integration_test: 'integration_test',
    build: 'build',
    deploy: 'deploy',
};

const CONTEXT = {
    ai_bu: 'ai_bu',
    jutor_job: 'jutor_job',
};

function exitWithError(message) {
    console.log(`${message}, exit`);
    process.exit(1);
};

function format(context) {
    switch (context) {
        case CONTEXT.ai_bu:
            const subCommand = "echo";
            const subArgs = ["execute ai_bu format"];
            const subProcess = spawn(subCommand, subArgs);
            subProcess.stdout.on("data", (data) => {
                console.log(`stdout: ${data}`);
            });

            subProcess.stderr.on('data', (data) => {
                console.error(`stderr: ${data}`);
              });

            subProcess.on('close', (code) => {
                if (code === 0) {
                    console.log('format succeeded');
                } else {
                    console.error(`format failed with code ${code}`);
                }
            });
            // console.log("execute ai_bu format");
            break;

        case CONTEXT.jutor_job:
            console.log("execute jutor_job format");
            break;
    
        default:
            exitWithError("invalid context");
            break;
    }
};

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
};

function type(context) {
    switch (context) {
        case CONTEXT.ai_bu:
            break;

        case CONTEXT.jutor_job:
            break;
    
        default:
            exitWithError("invalid context");
            break;
    }
};

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
};

function integrationTest(context) {
    switch (context) {
        case CONTEXT.ai_bu:
            break;

        case CONTEXT.jutor_job:
            break;
    
        default:
            exitWithError("invalid context");
            break;
    }
};

function build(context) {
    switch (context) {
        case CONTEXT.ai_bu:
            break;

        case CONTEXT.jutor_job:
            break;
    
        default:
            exitWithError("invalid context");
            break;
    }
};

function deploy(context) {
    switch (context) {
        case CONTEXT.ai_bu:
            break;

        case CONTEXT.jutor_job:
            break;
    
        default:
            exitWithError("invalid context");
            break;
    }
};

function executeCommand(command, context) {
    switch (command) {
        case COMMAND.format:
            format(context);
            break;
    
        case COMMAND.lint:
            lint(context);
            break;

        case COMMAND.type:
            type(context);
            break;

        case COMMAND.unit_test:
            unitTest(context);
            break;
    
        case COMMAND.integration_test:
            integrationTest(context);
            break;

        case COMMAND.build:
            build(context);
            break;

        case COMMAND.deploy:
            deploy(context);
            break;
    
        default:
            exitWithError("invalid command");
            break;
    }
};


function main() {
    console.log(`Node.js version: ${process.version}`);

    const args = process.argv.slice(2);
    console.log(`args: ${args}`);

    if (args.length < 2) {
        exitWithError(`args should greater than 2, args:${args}`);
    }

    const command = convertEnum(COMMAND, args[0]);
    if (!command) {
        exitWithError("invalid command");
    }

    const context = convertEnum(CONTEXT, args[1]);
    if (!context) {
        exitWithError("invalid context");
    }

    executeCommand(command, context);
};

main();
