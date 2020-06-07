//https://programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
    var answer = [];
    var finishSchedule = [];
    progresses.forEach((progressTask, taskIdx) => {
        finishSchedule.push(Math.ceil((100 - progressTask) / speeds[taskIdx]));
        var finishScheduleIdx = finishSchedule.length;
        if (taskIdx > 0 &&
            (finishSchedule[finishScheduleIdx - 2] >= finishSchedule[finishScheduleIdx - 1])
        ) {
            answer[answer.length - 1] += 1;
            finishSchedule.pop();
        } else {
            answer.push(1);
        }
    });
    return answer;
}