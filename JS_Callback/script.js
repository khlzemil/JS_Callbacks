const mail = "emil@gmail.com";
const pass = 1234;
const data = {id: 3090};
var isLegal = false;
const beverageID = {ID: 5690};
const beverageList = ["Yeni Raki", "Proper Twelve", "Martini"];


function getIdForAuth(checkMail, checkPass, succesCase, errorCase){
    setTimeout(() => {
        if(checkMail=== mail && checkPass === pass ){
            return succesCase(data);
        }
        else{
            return errorCase({error: "Invalid input"});
        }
    }, 1000)
}

function getUserInfo(id ,name, surname, age, succesCase, errorCase){
    setTimeout(() => {
        if(id === data.ID){
            name = prompt("Please enter your name");
            surname = prompt("Please enter your surname");
            age = prompt("Please enter your age"); 
            const userInfo = {Name: name, Surname: surname, Age: age};
            return succesCase(userInfo);
        }
        else{
            return errorCase({error: "Invalid ID"});
        }
    }, 3000)
}

function getAgeForLegalty(age, succesCase, errorCase){
    setTimeout(() => {
        if(age >= 18 && age <= 100){
            isLegal = true;
            return succesCase(isLegal)
        }
        else if(age < 18 && 0 < age){
            isLegal = false;
            return succesCase(isLegal)
        }
        else{
            return errorCase({error: "Invalid age input"});
        }
    }, 1000)
}

function checkAgeForLegalty( age, succesCase, errorCase){ // Age is not used, but if I don't declare it, the function doesn't work properly.
    setTimeout(() => {
        if(isLegal){
            return succesCase(beverageList);
        }
        else{
            return errorCase({error: "Not allowed for drink"})
        }
        
    }, 1000)
}


function getBeverageID(beverageName, succesCase, errorCase){
    setTimeout(() =>{
        if(beverageName){
            return succesCase(beverageID);
        }
        else{
            console.log(beverageName);
            return errorCase({errorname: "There is not beverage with this ID"})
        }
    }, 2000)
}

function postBeverageInfo(trueBeverageID, succesCase, errorCase){
    setTimeout(() =>{
        if(trueBeverageID){
            return succesCase({Beverage: beverageList[0], Origin: "Turkey", Alcohol_volume: "40-50%"});
        }
        else{
            console.log(trueBeverageID)
            return errorCase({errorname: "Beverage was not found"})
        }
    }, 2000)
}



getIdForAuth(
    mail,
    pass,
    (data) =>{
    getUserInfo( 
        data.ID, 
        data.Name,
        data.Surname, 
        data.Age, 
        (info)=>{
        getAgeForLegalty(
            info.Age, 
            (check)=>{
            checkAgeForLegalty(
                check,
                (beverage_id)=>{
                getBeverageID(
                    beverage_id[0], 
                    (check_beverage)=>{
                    postBeverageInfo(
                        check_beverage.ID, 
                        (post)=>{
                        console.log("Beverage: ", post)
                    }, 
                    (error)=> console.log("Error", error))
                }, 
                (error)=> console.log("Error", error))
            }, 
            (error)=> console.log("Error", error))
        }, 
        (error)=> console.log("Error", error))
    }, 
    (error)=> console.log("Error", error))
}, 
(error)=> console.log("Error", error));