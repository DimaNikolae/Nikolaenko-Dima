console.log(undefined + 1); // NaN
//так як undefined у числовому значенні буде NaN а всі операції з NaN будуть NaN 
console.log('true' == true); //false
// буде false так як строка не дорівнює true
console.log(false == 'false'); //false
//буде false так як строка не дорівнює false
console.log(null == ''); //false
//буде false так як строка не дорівнює null  тобіж 0
console.log(3 ** (9 / 3)); //27
//9/3=3 3**3 тут ми проводемо взведеня до ступеню то буде 27
console.log(!!'false' == !!'true'); //true
//
console.log(0 || '0' && 1); //1
console.log(1 < 2 < 3); //true
//буде true так як 1 менше 2 і 2 менше 3
console.log('foo'+ + +'bar'); //fooNaN
//
console.log(3 ** 2 / 3);// 3
//переводімо до ступеню 3*3=9 і 9/3=3
console.log(1 < 2 > 3); //буде false
// так як 1 менше 2 тут згоден а от 2 не більше 3 тому false
console.log((+null == false) < 1); //false
console.log(+null == false);
console.log(false && true || true);

console.log(false && (true || true));

console.log((+null == false) < 1 ** 5);