const Character = require('../app').Character; 
const Team = require('../app').Team; 

describe('Team', () => {
    it('надо добавить персонажа в команду', () => {
        const team = new Team();
        const character = new Character('Alice');
        team.add(character);
        expect(team.toArray()).toEqual([character]);
    });

    it('не следует добавлять одного и того же персонажа в команду дважды', () => {
        const team = new Team();
        const character = new Character('Alice');
        team.add(character);
        expect(() => team.add(character)).toThrow();
        expect(team.toArray()).toEqual([character]);
    });

    it('следует добавить в команду несколько персонажей', () => {
        const team = new Team();
        const alice = new Character('Alice');
        const bob = new Character('Bob');
        team.addAll(alice, bob);
        expect(team.toArray()).toEqual([alice, bob]);
    });

    it('не следует добавлять повторяющиеся символы при использовании addAll', () => {
        const team = new Team();
        const alice = new Character('Alice');
        const bob = new Character('Bob');
        team.addAll(alice, bob);
        team.addAll(alice, bob);
        expect(team.toArray()).toEqual([alice, bob]);
    });
});