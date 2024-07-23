//type employeee
type Employeee = {
    name: string,
    startDate: Date
}

//type manager
type Manager =  {
    name : string,
    department: string
}

//3rd type that has name also, startDate also and department also 
//1st syntax
type TechLead = Employeee & Manager;

//2nd syntax
// type TechLead = { 
//     name: string,
//     startDate: Date,
//     department: string
// }

const t : TechLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software Developer"
}
