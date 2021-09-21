const arrayData = require('./assets/bigArray.json');
const { track } = require('./utils');

const ITERATIONS = 1000;
const iterationsArray = [...Array(ITERATIONS).keys()];
const WORD = 'test';

track('Array.find O(n * m)', () => {
    for (let i = 0; i < ITERATIONS; i++) {
        arrayData.find((el) => el === WORD); // ITERATIONS * arrayData.length O(n * m)
    }
});

track('Array.includes O(n * m)', () => {
    for (let i = 0; i < ITERATIONS; i++) { // ITERATIONS * arrayData.length O(n * m)
        arrayData.includes(WORD);
    }
});

track('Array.indexOf O(n * m)', () => {
    for (let i = 0; i < ITERATIONS; i++) { // ITERATIONS * arrayData.length O(n * m)
        arrayData.indexOf(WORD) !== -1;
    }
});

track('hashmap O(n + m)', () => {
    const hashmap = {};
    for(let i = 0; i <= arrayData.length; i++) {
        hashmap[arrayData[i]] = null;
    }
    for (let i = 0; i < ITERATIONS; i++) { // ITERATIONS + arrayData.length O(n + m)
        hashmap[WORD] !== null;
    }
})

track('set O(n + m)', () => {
    const setFromArray = new Set(arrayData);
    for (let i = 0; i < ITERATIONS; i++) { // ITERATIONS + arrayData.length O(n + m)
        setFromArray.has(WORD);
    }
});

track('set forEach O(n + m)', () => {
    const setFromArray = new Set(arrayData);
    iterationsArray.forEach((i) => {
        setFromArray.has(WORD);
    });
});
