// function addressMaker(city,state){
//     const newAdress = {city,state};
//     console.log(newAdress);
// }

// addressMaker("Abidjan","Cocody Blockhauss");

function addressMaker(address){
    const {city,state,country}=address;
    const newAddress = {
        city,
        state,
        country
    };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}

addressMaker({city:'Austin',state:'Texas',country:'Abidjan'});