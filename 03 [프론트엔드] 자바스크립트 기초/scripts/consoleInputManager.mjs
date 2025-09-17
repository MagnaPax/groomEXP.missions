import * as readline from "node:readline/promises";

/** 사용자 콘솔 입력 받기 - 호출 시 콜백방식, Promise방식 둘 다 가능 */
class ConsoleInputManager {
    constructor() {
        this.rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        this.inputs = [];
        this.numberOfInputs = 0;
        this.count = 0;
    }

    // 입력 요청 (간결화)
    async getUserInput(query) {
        const answer = await this.rl.question(query);
        console.log("[사용자 입력]➡️", answer);
        return answer.trim();
    }

    // 입력 개수 설정
    async setInputCount() {
        while (true) {
            const input = await this.getUserInput("몇 개의 입력을 받을까요? ");
            this.numberOfInputs = parseInt(input, 10);

            if (isNaN(this.numberOfInputs) || this.numberOfInputs <= 0) {
                console.log("유효한 양수를 입력해주세요.\n");
                continue;
            }

            console.log(`${this.numberOfInputs}개의 입력을 받겠습니다.`);
            break;
        }
    }

    // 입력값 수집
    async collectInputs() {
        for (let i = 0; i < this.numberOfInputs; i++) {
            this.count++;
            const input = await this.getUserInput(`${this.count}번째 입력입니다: `);
            this.inputs.push(input);
        }
    }

    // 실행
    /** 콜백, Promise 반환값 둘 다 제공하여 사용자가 원하는 방식 선택 */
    async start(callback) {
        console.log("=== 콘솔 입력 관리자 시작 ===");
        try {
            await this.setInputCount();
            await this.collectInputs();
            console.log("모든 입력이 완료되었습니다.");

            // 콜백이 있으면 실행(입력값들을 매개변수로 전달)
            if (callback) callback(this.inputs);
            // Promise 해결값으로 동일한 입력값들 반환
            return this.inputs;
        } catch (error) {   // 호출부에서 에러 처리 할 필요 없게
            console.error("⛔ 입력 처리 중 오류 발생:", error);
            console.log("빈 배열을 반환합니다.");

            // 콜백으로 호출됐다면 빈 배열 전달
            if (callback) callback([]);
            // 빈 배열 반환
            return [];
        } finally {
            this.rl.close();
        }
    }
}

export { ConsoleInputManager };



/* 

// 사용 예시
const manager = new ConsoleInputManager();


// [[실행법 1]]
// 콜백 방식(동기적)
manager.start((result) => {
    console.log("입력된 값들:", result);
});


// [[실행법 2]]
// Promise 방식(비동기적)
const result = await manager.start();
console.log("입력된 값들:", result);

*/