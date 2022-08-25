const mail = "emil@gmail.com";
const pass = 1234;
const data = {id: 3090};
var isLegal = false;
const beverageID = {ID: 5690};
const beverageList = ["Yeni Raki", "Proper Twelve", "Martini"];


function getIdForAuth(checkMail, checkPass){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(checkMail=== mail && checkPass === pass ){
                return resolve(data);
            }
            else{
                return reject({error: "Invalid input"});
            }
        }, 1000)
    })
    
}

function getUserInfo(id ,name, surname, age){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(id === data.ID){
                name = prompt("Please enter your name");
                surname = prompt("Please enter your surname");
                age = prompt("Please enter your age"); 
                const userInfo = {Name: name, Surname: surname, Age: age};
                return resolve(userInfo);
            }
            else{
                return reject({error: "Invalid ID"});
            }
        }, 3000)
    })
    
}

function getAgeForLegalty(age){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(age >= 18 && age <= 100){
                isLegal = true;
                return resolve(isLegal)
            }
            else if(age < 18 && 0 < age){
                isLegal = false;
                return resolve(isLegal)
            }
            else{
                return reject({error: "Invalid age input"});
            }
        }, 1000)
    })
    
}

function checkAgeForLegalty(age){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(isLegal){
                return resolve(beverageList);
            }
            else{
                return reject({error: "Not allowed for drink"})
            }
            
        }, 1000)
    })
    
}


function getBeverageID(beverageName){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(beverageName){
                return resolve(beverageID);
            }
            else{
                console.log(beverageName);
                return reject({errorname: "There is not beverage with this ID"})
            }
        }, 2000)
    })
    
}

function postBeverageInfo(trueBeverageID){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(trueBeverageID){
                return resolve({Beverage: beverageList[0], Origin: "Turkey", Alcohol_volume: "40-50%"});
            }
            else{
                console.log(trueBeverageID)
                return reject({errorname: "Beverage was not found"})
            }
        }, 2000)
    })
    
}



getIdForAuth(mail, pass)
        .then(
            (data) => getUserInfo(data.ID, data.Name, data.Surname, data.Age))
            .then(
                (info) => getAgeForLegalty(info.Age))
                .then(
                    (check) => checkAgeForLegalty(check.age))
                    .then(
                        (beverage_id) =>getBeverageID(beverage_id[0]))
                        .then(
                            (check_beverage) =>postBeverageInfo(check_beverage.ID))
                            .then((post) => console.log(post))
                            .catch((error) => console.log(error)
                        )
                        .catch((error) => console.log(error)
                        )
                        .catch((error) => console.log(error)
                )
                .catch((error) => console.log(error)
                ) 
                .catch((error) => console.log(error)
        )
        .catch((error) => console.log(error))