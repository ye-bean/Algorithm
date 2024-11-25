function solution(n, control) {
    const n_arr = control.split('');
    for(let i = 0; i<=n_arr.length; i++){
        if(n_arr[i] === 'w'){
            n+=1;
        } else if(n_arr[i] === 's'){
            n-=1;
        } else if(n_arr[i] === 'd'){
            n+=10;
        } else if(n_arr[i] === 'a'){
            n-=10;
        }
    }
    return n;
}