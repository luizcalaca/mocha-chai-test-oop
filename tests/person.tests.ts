import { expect } from 'chai';
import { Person } from '../model/person';

// class Person{
//     name: string = ""
//     age: number = 0
//     public getName(){
//         return ""
//     }
// }

describe('Testing person Model', () => {
    it('Checking if Person is a Class' , () => {
        const objectPerson = new Person()
        expect(objectPerson).to.be.an('object')
    })
    it('Checking Person Model constructor and its attributes', () => {
        const objectPerson = new Person()

        expect(objectPerson).to.be.an("object")
            .to.have.property("name").to.equal(""); 
        expect(objectPerson.name).to.be.equal("")
        expect(objectPerson.age).to.be.equal(0)
    })
})

describe(('Person getName'), () => {
    it('should get the name', () =>
    {
      let person = new Person();
      expect(person.getName()).to.equal("");
    });
})
