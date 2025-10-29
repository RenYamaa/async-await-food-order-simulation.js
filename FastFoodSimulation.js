function fetchData(dataType, time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${name} is Cooked in ${time/1000} Sec...`);
            resolve(`Hey ${name}, Your food is succesfully cooked!`);
        }, time);
    });
};

async function processOrder() {
    console.log("Cashier: Order received! Starting to processing order...");

    try {
        const cookingFood1 = await createFood('Burger', 3000);
        console.log('Burger is succesfully cooked!');
        const cookingFood2 = await createFood('Kentang Goreng', 1000);
        console.log('Kentang Goreng is succesfully cooked!');
        const cookingFood3 = await createFood('Minuman', 500);
        console.log('Minuman is succesfully cooked!');
    } catch(error){
        console.error("A Fatal Error Occurred in the Order:", error);
    }

    console.log("Cashier: All of the order has been finished!");
}

processOrder();