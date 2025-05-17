    const testFunction = (userName = 'default') => {
        console.log(`${userName}`)
    }

    testFunction('')  // Output: ''
    testFunction() // Output: undefined


    const calculatePrice = (val1, val2, ...num) => {   
        return num;   
    }

    console.log(calculatePrice(10, 220, 432, 11))   
    // Output: [ 432, 11 ]
    console.log(calculatePrice(10, 220))
    // Output: []

    const user = {
        username: 'John',
        price: 2000
    }

    const handleObject = (anyObject) => {
        console.log(anyObject.username); //john
        console.log(anyObject.price);  //2000
    }

    console.log(handleObject(user)) //Since handleObject doesn't return anything 
    // (i.e., returns undefined by default)
