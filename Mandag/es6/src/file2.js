export default {
    firstName: "Kurt",
    lastName: "Wonnegut",
    gender : "Male",
    email: "kurt@wonnegut.dk"
    }


     export const names = [
        {firstName:"Kurt",lastName:"Wonnegut",gender: "Male",email: "k@wonnegut.dk"},
        {firstName:"Jan",lastName:"hansen",gender:"male",email:"jan@hotmail..dk"},
        {firstName:"Janne",lastName: "larsen",gender : "female",email: "larsen@hotmail.dk"},
        ];

    export const males = ["Peter","Jan"];
    export const females = ["Janne","Sarah"];
    export const firstSpread = [...males,...females]
    console.log(firstSpread)
    export const secondSpread = [...males,"Kurt","Helle",...females,"Tina"]
    console.log(secondSpread)