const doWorkPromis = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve([3, 2, 4]);
        reject('something went wrong')
    }, 2000);
});

doWorkPromis.then((result) => {
        console.log('Success', result);
    }).catch((e) => {
        console.log('Error', e);
    });


    //promise can only execute one call, either resolve or reject. 




    //                                     Fulfilled
    //                                   /              
    // Promise        ----- Pending -->
    //                                   \
    //                                     rejected