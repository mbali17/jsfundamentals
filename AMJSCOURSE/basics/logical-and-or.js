let isGuest1Vegan = false;
let isGuest2Vegan = false;
if (isGuest1Vegan && isGuest2Vegan) {
  console.log('Serve only vegan food.');
} else if (isGuest1Vegan || isGuest2Vegan) {
  console.log('Serve some vegan food.');
} else {
  console.log('serve anything on the menu.');
}
