function fetchData(dataType, time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetching ${dataType} for ${time/1000} sec...`);
            resolve(`Data ${dataType} succesfully fetched!`);
        }, time);
    });
};

async function loadAllData(){
    const profile = fetchData("Profile", 1500);
    const post = fetchData("Post", 2500);
    const comment = fetchData("Comment", 1000);

    const result = await Promise.all([profile, post, comment]);
    console.log(result);
}

loadAllData();