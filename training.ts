const userInfo: IUser = {
    firstName: 'Ranjith',
    lastName: '',
    email: 'ranjith@appknit.io',
    address : {
        street: '35 A',
        city: 'Bangalore'
    },
    qualification: ['as', 'asas']

};


interface IUser {
    firstName: string;
    lastName?: string;
    email: string
    address: Address,
    qualification: string[];
}

interface Address {
    street: string;
    city: string;
}

const printUserInfo = ({ firstName: Fname, lastName = 'Default Value', email, address: {street, ...address}, ...user }: IUser) => {
    // console.log(user.firstName, user.lastName, user.email); legacy way;



    console.log(Fname, lastName, email, {...user}, {...address}); // Ranjith, Prabhu, ranjit@appknit.io

    console.log(street) // 35A
}


printUserInfo(userInfo);


const objectA = {a: 1, b: 2};
const objectB = {c: 5, d: 9};


const objectC = {a : 15, ...objectA, ...objectB}; // { a:15, b: 2, c: 5: d: 9}

setTimeout(function () {
    document.getElementById('content').innerHTML = "Hey I have added something";
}, 1000 )

// const calculate = (a, b) => (a + b) => (c * 2);

// const usingArrow = () => {
//     let a = 5;
//     let b = 3;
//     return a + b;
// }

// calculate(5 , 2)

// 1. 5 + 2 -> 7
// 2. 7 * 2 -> 14
