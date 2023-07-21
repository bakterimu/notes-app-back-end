const as = {
  id: 'haha',
  password: 'asdf',
};

function hehe(password) {
  const { id, password: hashedPass } = as;
  console.log(id, password, hashedPass);
}

hehe('asxxxx');
