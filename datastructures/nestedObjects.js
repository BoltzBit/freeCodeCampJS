//neted objects = objetos aninhados
let nestedObject = {
    id: 28802695164,
    date: 'December 31, 2016',
    data: {
        totalUsers: 99,
        online: 80,
        onlineStatus: {
            active: 67,
            away: 13
        }
    }
}
console.log(nestedObject)

let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data:{
        totalUsers: 51,
        online: 42,
    }
}

userActivity.data['online'] = 45

console.log(userActivity)