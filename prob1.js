//1. 함수 로직 작성 문제

function solution(num, total) {

  let answer = [];
  let avg= total/num;
  let start = avg- (num-1)/2;
  
  for(let i=0;i<num;i++){
     answer[i]= start+i;
  }
  return answer;
}

console.log(solution(3,12));