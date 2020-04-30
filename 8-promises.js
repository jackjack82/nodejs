// https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13729160#overview

/* 01: Basics of callback
steps 02 and 03 are called AFTER the timeout!!

const doWorkcallBack = (callback) => {
    console.log('01: function definition')
    setTimeout(() => {
        //callback('This is my error!0, undefined) // >> rick of calling callback twice!
        console.log('03: Inside timeout')
        callback(undefined, [1,2,3,4]) // callback is the REAL function!!
    }, 1000)
    console.log('02: end of method definition')

}

doWorkcallBack((error, result) => {
    console.log('04: real call of the function')
    if(error){
        return console.log(error)
    }

    console.log(result)
})
*/

/* 02: start with Promise*/

const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Something went wrong') // once reject is called, nothing is executed
        // resolve([7,4,1])
    }, 2000)
})

doWorkPromise.then((result) => {    // runs only if result, i.e. if the funcion has no problem
    console.log('Success', result)
}).catch((error) => {
    console.log('Error', error)
})

/*
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// add(1, 2).then((sum) => {
//     console.log(sum)

//     add(sum, 5).then((sum2) => {
//         console.log(sum2)
//     }).catch((e) => {
//         console.log(e)
//     })
// }).catch((e) => {   
//     console.log(e)
// })

add(1, 1).then((sum) => {
    console.log(sum)
    return add(sum, 4)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})

*/