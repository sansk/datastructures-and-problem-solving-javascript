import { execSync } from 'child_process';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { bRed, bBlu, red, blu, log } from './utils/constants.js';

const arg1 = process.argv[2],
    arg2 = process.argv[3];
let arg = '';

if (isNaN(+(arg1))) {
    log(bRed("Input(Arg) Error: ") + "\n" + red("Please check your 1st argument in 'npm start' - It should refer to a folder Number. Eg: 'npm start 01' to start problem from folder 01-Basic."));
} else if (!arg2) {
    log(bRed("Input(Arg) Error: ") + "\n" + red("Please check your 2nd argument in 'npm start' - It should refer to a Problem folder. Eg: 'npm start 01 PlusMinus' to start problem 01-Basic\\PlusMinus."));
} else {
    if (arg1 === '01' || arg1 === '1') {
        arg = '01-Basic\\' + arg2;
    } else if (arg1 === '02' || arg1 === '2') {
        arg = '02-Intermediate\\' + arg2;
    } else if (arg1 === '03' || arg1 === '3') {
        arg = '03-Advanced\\' + arg2;
    } else if (arg1 === '04' || arg1 === '4') {
        arg = '04-Expert\\' + arg2;
    }

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const file = __dirname + '\\' + arg + '\\index.js';

    try {
        const stats = fs.statSync(file);

        if (stats.isFile()) {
            log(bBlu("Executing Problem #" + arg + "..."));
            log(blu("-----------------------------------------------"));
            execSync('node ./' + arg + '/index.js', { stdio: [0, 1, 2] });
        }
    } catch (err) {
        log(red("~~~~~~~~~~~~ Node Error Code & Descp ~~~~~~~~~~~~"));
        log(err);
        log(red("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
        log(bRed("Access Error: ") + "\n" + red("Problem Solution Doesn't Exist! or Node Error!\nPlease check your Problem Number or Node Error Description."));
    }
}