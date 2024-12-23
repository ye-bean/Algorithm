function solution(phone_number) {
    let arr = phone_number.split('');
    const n = arr.length;
    for(let i = 0; i < n - 4 ; i++){
        arr[i] = '*';
    }
    return arr.join('');
}