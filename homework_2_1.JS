console.log('number' + 23 + 32);  
//так як namber в скобках і після скобок + то 'namber'+23=namber23+32 буде namber2332

console.log(41 + 1 + 'number'); 
// 41+1=42 і 42+'namber'= 42namber

console.log(null + 1); 
// так як у нас null = 0 то буде 0+1=1

console.log('five' + + 'two'); 
//буде fivetwo

console.log(2 && 7); 
//

console.log(+'40' + +'2'); 
//

console.log('10' - 5 === 6); 
// так як 10-5=5 а 5 не строго = 6 тобу буде false

console.log(true + false); 
// true = 1 false = 0 отже 1+0=1

console.log('4px' - 3); 
// так як '4px' не може стати нормальним чіслом то він буде NaN а всі операції з NaN буде NaN

console.log('4' - 3); 
// так як '4' стає просто чіслом тому 4-3=1

console.log('2' + 3 ** 2); 
// по правилам математики 1 дія * то 3*3=9 це ми возвели до ступеня отже '2'+9 буде 29

console.log(12 / '6'); 
// так як '6' стає чіслом а не строкой то 12/6=2

console.log(23 + 42 + 'number'); 
// 23+42 = 65 отже 65 +'namber' буде 65namber

console.log('10' + (5 === 6)); 
// перша дія в душках а 5 не строго = 6 то буде false '10'+false буде 10false

console.log('number' + 15 + 3); 
//так як namber в скобках і після скобок + то 'namber'+15=namber15+3 буде namber153