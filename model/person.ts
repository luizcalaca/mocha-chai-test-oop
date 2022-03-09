
export class Person{
    private _name: string
    private _age: number

    constructor(){
        this._name = ''
        this._age = 0
    }

    set age(age:number){
        this._age = age
    }

    get age(){
        return this._age
    }

    set name (name:string){
        this._name = name
    }

    get name(){
        return this._name
    }
}