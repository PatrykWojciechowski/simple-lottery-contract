const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(_dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Lottery']