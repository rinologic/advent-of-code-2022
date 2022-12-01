import * as fs from 'fs';

class Elf {
    id: number = 0;
    calories: number = 0;
}

class Day1 {

    // Keep tracks of the elves Elf ID and total calories
    elves: Elf[] = [];

    readData(fileName: string) {
        // Open the test file and read in the data
        let data = fs.readFileSync(fileName).toString('utf-8');
        {
            let lines = data.split("\n");
            let totalCalories = 0;

            let elf = 0;
            for (let line of lines) {
                if (line == "") { // Got a break point, process total, if any
                    if (totalCalories != 0) {
                        let myElf = new Elf();
                        myElf.id = elf;
                        myElf.calories = totalCalories;
                        this.elves.push(myElf);
                        elf++;
                        totalCalories = 0;
                    }
                } else {
                    totalCalories = totalCalories + Number(line);
                }
            }
        }
    }
    displayElves(){
        for(let elf of this.elves) {
            console.log(elf.calories);
        }
    }
    getHighestCalories() {
        let sortedElves = this.elves.sort(
            (a, b) => (
                a.calories < b.calories ? 1 : -1)
        );
        console.log(sortedElves[0].calories);
    }
}

console.log("Day 1");
const day1 = new Day1();
console.log("Data Result");
day1.readData('data.txt');
day1.getHighestCalories();
