import { ConsoleInputManager } from './consoleInputManager.mjs';


class PeopleInfoManager extends ConsoleInputManager {
    constructor() {
        super();    // 부모 생성자 실행
        this.peopleData = [];
        this.numberOfPeople = 0;
    }

    async setInputCount() {
        while (true) {
            const input = await this.getUserInput("몇 명의 입력을 받을까요? ");
            this.numberOfPeople = parseInt(input, 10);

            if (isNaN(this.numberOfPeople) || this.numberOfPeople <= 0) {
                console.log("유효한 양수를 입력해주세요.\n");
                continue;
            }

            console.log(`${this.numberOfPeople}명의 입력을 받겠습니다.`);
            break;
        }
    }

    async getPersonInfo(personNumber){
        console.log(`--- ${personNumber+1}번째 사람 정보 입력 ---`);
        let name, age;

        name = await this.getUserInput("이름: ");
        age = await this.getUserInput("나이: ");

        return {id: personNumber, name, age };
    }

    async collectPeopleInfo() {
        for (let i = 0; i < this.numberOfPeople; i++) {
            this.count++;
            const personInfo = await this.getPersonInfo(i);
            this.peopleData.push(personInfo);
        }        
    }

    displayPeopleInfo() {
        console.log("\n입력된 사람 정보:");
        this.peopleData.forEach(person => {
            console.log(`ID: ${person.id}, 이름: ${person.name}, 나이: ${person.age}`);
        });
    }

    getAverageAge() {
        const totalAge = this.peopleData.reduce((sum, person) => sum + parseInt(person.age, 10), 0);
        const averageAge = totalAge / this.numberOfPeople;
        console.log(`평균 나이: ${averageAge.toFixed(2)}`);
    }

    async start() {
        console.log("=== 콘솔 입력 관리자 시작 ===");
        try {
            await this.setInputCount();
            await this.collectPeopleInfo();
            return this.peopleData;
        } catch (error) {   // 호출부에서 에러 처리 할 필요 없게
            console.error("⛔ 입력 처리 중 오류 발생:", error);
            console.log("빈 배열을 반환합니다.");
            // 빈 배열 반환
            return [];
        } finally {
            this.rl.close();
        }
    }
}



const manager = new PeopleInfoManager();

await manager.start();
manager.displayPeopleInfo();
manager.getAverageAge();