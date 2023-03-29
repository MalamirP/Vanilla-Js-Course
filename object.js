// const blogs = [
//     { title: 'Why mac & cheese rules', likes: 30 },
//     { title: '10 things to make with marmarite', likes: 50 }
// ]

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@abv.bg',
    location: 'berlin',
    blogs: [{ title: 'Why mac & cheese rules', likes: 30 },
    { title: '10 things to make with marmarite', likes: 50 }
    ],
    // ['Why mac & cheese rules', '10 things to make with marmarite'],1
    login: function () {
        console.log('The user logged in');
    },
    logout: function () {
        console.log('The user logged out');
    },
    logBlogs: function () {
        console.log('User has written the following blogs:')
        this.blogs.forEach(blog => {
            // console.log(blog);1
            console.log(blog.title, blog.likes);
        })
    }
};

// basic intro in obj
//  We have property ( kay and value pair) = Key = age:  value = 30

// console.log(user);
// console.log(user.name);

// // user.age = 35;
// console.log(user.age);
// console.log(user['name']);
// console.log(typeof user);


// METHODS declaring

// user.login();
// user.logout();

// This !!!!
// !!!we are using this whe we have a array in our obj to access it
// When our obj have a property array (blogs: [.....]) and we want to use smth(function) with him
//  we should use this.property.(methods like: for,forEach etc.)
//  WE CAN"T USE this with arrow function bcs is return window.obj

//Function call
// user.logBlogs()
// console.log(user.blogs);





