function solution(s){
    const answer = true;
    const string = s.toLowerCase().split('');
    const p = string.filter(v => v === 'p');
    const y = string.filter(v => v === 'y');
    
   return p.length !== y.length ? false : true;
}