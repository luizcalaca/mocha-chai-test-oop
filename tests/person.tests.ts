import { expect } from 'chai';
import { Person } from '../model/person';

// class Person{
//     name: string = ""
//     age: number = 0
//     public getName(){
//         return ""
//     }
// }

describe('1 - Testing person Model', () => {
    it('Checking if Person is a Class' , () => {
        const objectPerson = new Person()
        expect(objectPerson).to.be.an('object')
    })
    
    it('Checking Person Model constructor and its attributes', () => {
        const objectPerson = new Person()

        expect(objectPerson).to.be.an("object")
            .to.have.property("name").to.equal(''); 
        expect(objectPerson.name).to.be.equal('')
        expect(objectPerson.age).to.be.equal(0)
    })
})

describe(('2 - Person get Name'), () => {
    it('should get the name', () =>
    {
      let person = new Person();
      person.name = "Teste"
      expect(person.name).to.equal("Teste");
    });
})

describe(('3 - Person get Age'), () => {
    it('should get the age', () =>
    {
      let person = new Person();
      person.age = 10
      expect(person.age).to.equal(10);
    });
})

