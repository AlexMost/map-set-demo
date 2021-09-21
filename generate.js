const { fake } = require('faker');
const faker = require('faker');
const fs = require('fs');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

function generateBigArray(count, path) {
    const resultArray = [];
    for(let i = 0; i < count; i++) {
        resultArray.push(faker.random.word());
    }
    resultArray.push('worst_case_word');
    fs.writeFileSync(path, JSON.stringify(resultArray));
}

function generateUsersOrders(usersCount, ordersCount, path) {
    const users = [];
    const orders = [];
    for(let i = 0; i < usersCount; i++) {
        const userId = faker.datatype.uuid();
        users.push({
            id: userId,
            name: faker.internet.userName(),
            age: faker.datatype.number(),
            company: faker.company.companyName(),
        })
    };

    for(let i = 0; i < ordersCount; i++) {
        const userIdx = getRandomIntInclusive(0, usersCount - 1);
        const { id } = users[userIdx];
        orders.push({
            id: faker.datatype.uuid(),
            userId: id,
            amount: faker.datatype.number(),
        });
    }

    fs.writeFileSync(path, JSON.stringify({ users, orders }));
}

// generateBigArray(10000, './assets/bigArray.json');
// generateUsersOrders(1000, 1500, './assets/usersOrders.json');
