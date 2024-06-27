let x;
if (typeof x === 'undefined') x = 20;
console.log(x);

type person = {
  firstName: string,
  lastName?: string
}
function createPerson(firstName: string, lastName?: string): person {
  if (lastName)
    return { firstName, lastName };
  else
    return { firstName };
}

console.log(createPerson('alex', 'coletti'));