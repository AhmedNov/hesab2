var sum=0
let x
for(i=1;i<=10;i++)
{
  if(i%2==0)
  {
     x= Math.pow(i, 2)
     sum = sum + x  
  }
}
console.log(sum)