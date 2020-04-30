/* Basics of callback
steps 02 and 03 are called AFTER the timeout!!*/

const doWorkcallBack = (callback) => {
    console.log('01: function definition')
    setTimeout(() => {
        //callback('This is my error!0, undefined)
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