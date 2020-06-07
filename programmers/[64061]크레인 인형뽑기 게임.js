// https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
    let result = [];
    let answer = 0;
    moves.forEach(index => {
        for (let i = 0; i < board.length; i++) {
            if (board[i][index - 1] > 0) {
                result.push(board[i][index - 1]);
                board[i][index - 1] = 0;
                break;
            }
        }

        if (result.length > 1) {
            let lastIndex = result.length - 1;
            if (result[lastIndex-1] === result[lastIndex]) {
                result.splice(lastIndex-1, 2);
                answer += 2;
            }
        }
    });

    return answer;
}