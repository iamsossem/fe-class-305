/**
 * 배열 메서드
 * for( let i=0; i<colors.length ; i++ ){
      console.log( colors[i] );
   }
 * 배열명.forEach((value,index,array)=>{});
 */
const colors = ['red','green','blue'];
document.write('<ul>');
colors.forEach((data)=>{
  //value, index, arr  를 이용해서 문장을 작성
  // console.log( data );
  // console.log( idx );
  let style = `color:${data}`;
  document.write(`<li style=${style}>${data}</li>`);
});
document.write('</ul>');