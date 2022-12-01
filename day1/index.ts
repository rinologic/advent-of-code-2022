import * as fs from 'fs';

// Simple class to represent an Elf
class Elf {
    id: number = 0;
    calories: number = 0;
}

class Day1 {

    // Create an array of Elf objects
    elves: Elf[] = [];

    readData(fileName: string) {
        // Open the test file and read in the data
        let data = fs.readFileSync(fileName).toString('utf-8');
        {
            let lines = data.split("\n");
            let totalCalories = 0;

            let elf = 0;
            for (let line of lines) {
                // Empty line, push elf to array
                // Note: This code assumes there is an empty line at the end of the file. This almost got me!
                if (line == "") {
                    if (totalCalories != 0) {
                        let myElf = new Elf();
                        myElf.id = elf;
                        myElf.calories = totalCalories;
                        this.elves.push(myElf);
                        elf++;
                        totalCalories = 0;
                    }
                } else {
                    // keep appending to total calories
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
    getTopThreeTotalCalories() {
        let sortedElves = this.elves.sort(
            (a, b) => (
                a.calories < b.calories ? 1 : -1)
        );
        console.log(
            sortedElves[0].calories +
            sortedElves[1].calories +
            sortedElves[2].calories
        );
    }
}

console.log("Day 1");
const day1 = new Day1();
day1.readData('data.txt');
day1.getHighestCalories();
day1.getTopThreeTotalCalories();
