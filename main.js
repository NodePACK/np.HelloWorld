
const ART = require('ascii-art');
const CHALK = require('chalk');


ART.font('Hello World!', 'Doom', function (rendered) {
    process.stdout.write(CHALK.red.bgWhite.bold(rendered) + "\n");
});
