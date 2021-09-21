function track(name, fn) {
    const start = process.hrtime();
    fn();
    const delta = process.hrtime(start);
    const milliseconds = (delta[0] * 1000000000 + delta[1]) / 1000000;
    console.log(`Experiment '${name}' : ${milliseconds} milliseconds\n`);
}

module.exports = { track };
