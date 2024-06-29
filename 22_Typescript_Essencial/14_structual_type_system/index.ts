type User = { username: string, password: string };
type VerifyUser = (user: User, sentUser: User) => boolean;

const verifyUser: VerifyUser = (user, sentUser) => {
  return user.username === sentUser.username && user.password === sentUser.password;
}

const user1 = {
  username: 'Wacko',
  password: '123'
}
const user2 = {
  username: 'Wacko',
  password: '123'
}

type UserSecond = { username: string, password: string, permissions: string };
const user3: UserSecond = {
  username: 'Wacko',
  password: '125',
  permissions: ''
}

console.log(verifyUser(user1, user2));
console.log(verifyUser(user1, user3));

/*
  TypeScript se importa com a estrutura, ou seja, tanto User quanto UserSecond têm a
  mesma estrutura (no caso UserSecond tem tudo que User tem), e por isso as funções os aceitam. 
  Isso é diferente do que ocorre em linguagens como C#, que se importam também com o nome dos tipos.
*/