const add = (a, b) => {
    return new Promise((resolve, reject) => {
        // throw new Error("Something went wrong")
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative')
            }

            resolve(a + b)
        }, 2000)
    })
}

// using "await" the 
const doWork = async () => {
    const sum = await add(1, 99) // >>> without 'await' it breaks
    const sum2 = await add(sum, 50)
    const sum3 = await add(sum2, 3)
    return sum3
}

doWork().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log('e', e)
})

/*
1)
const doWork = () => { return "ciao"}
console.log(doWork() )} 
>> returns "ciao"

2)
const doWork = ASYNC () => { return "ciao"}
console.log(doWork() )} 
>> returns Promise("ciao")

3)
doWork().then(... 
*/