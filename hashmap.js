const { track } = require('./utils');
const data = require('./assets/usersOrders.json');

function mergeUsersOrdersNaive(users, orders) {
    const newUsers = users.map((user) => {
        const userOrders = orders.filter(({ userId }) => userId === user.id);
        return { ...user, orders: userOrders };
    })
    return newUsers;
}


function mergeUsersOrdersHashMap(users, orders) {
    const usersToOrdersMap = {};
    orders.forEach((order) => {
        if (!usersToOrdersMap[order.userId]){
            usersToOrdersMap[order.userId] = [];
        } 
        usersToOrdersMap[order.userId].push(order);
    })
    const newUsers = users.map((user) => {
        const userOrders = usersToOrdersMap[user.id];
        return { ...user, orders: userOrders || [] };
    })

    return newUsers;
}

track('naive', () => mergeUsersOrdersNaive(data.users, data.orders));
track('hashMap', () => mergeUsersOrdersHashMap(data.users, data.orders));

