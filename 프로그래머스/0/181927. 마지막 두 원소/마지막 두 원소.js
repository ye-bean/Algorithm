function solution(num_list) {
    const n = num_list.length - 1;
    if(num_list[n-1] < num_list[n]) num_list.push(num_list[n]-num_list[n-1]);
    else num_list.push(num_list[n]*2);
    return num_list;
}