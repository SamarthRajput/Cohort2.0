interface manage {
    name: string
}

interface useR{
    age: number
}

//interface BigPerson which extends a User which means it will have all the properties of user plus something extra
interface BigPerson extends useR, manage {
    name: string
}