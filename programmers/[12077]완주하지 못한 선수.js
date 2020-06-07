// https://programmers.co.kr/learn/courses/30/parts/12077

function solution(participant, completion) {
    participant.sort();
    completion.sort();
    return participant.find((person, idx) => person != completion[idx]);
}