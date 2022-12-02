import * as fs from 'fs';

class Day2 {

    getWinTieLoss(letterA: string, letterB: string) {
        if (letterA == "A") { // rock
            if(letterB == "X") { // rock
                return "T";
            }
            if(letterB == "Y") { // paper
                return "W"
            }
            if(letterB == "Z") { // scissors
                return "L"
            }
        }
        if (letterA == "B") { // paper
            if(letterB == "X") { // rock
                return "L";
            }
            if(letterB == "Y") { // paper
                return "T"
            }
            if(letterB == "Z") { // scissors
                return "W"
            }
        }
        if (letterA == "C") { // scissors
            if(letterB == "X") { // rock
                return "W";
            }
            if(letterB == "Y") { // paper
                return "L"
            }
            if(letterB == "Z") { // scissors
                return "T"
            }
        }

    }

    partOne(fileName: string) {
        // Open the test file and read in the data
        let data = fs.readFileSync(fileName).toString('utf-8');
        {
            let lines = data.split("\n");
            let points = 0;
            let totalPoints = 0;
            for (let line of lines) {
                let split = line.split(" ", 2)
                let wtl = this.getWinTieLoss(split[0], split[1]);
                //console.log(split[0] +"," + split[1])
                //console.log(wtl);
                if (wtl == "W") {  // win
                    points += 6;
                    if (split[1] == "X") {  // rock
                        points += 1;
                    }
                    if (split[1] == "Y") {  // paper
                        points += 2;
                    }
                    if (split[1] == "Z") {  // scissors
                        points += 3;
                    }
                }
                if (wtl == "T") { // tie
                    points += 3;
                    if (split[1] == "X") {  // rock
                        points += 1;
                    }
                    if (split[1] == "Y") {  // paper
                        points += 2;
                    }
                    if (split[1] == "Z") {  // scissors
                        points += 3;
                    }
                }
                if (wtl == "L") {  // loss
                    points += 0;
                    if (split[1] == "X") {  // rock
                        points += 1;
                    }
                    if (split[1] == "Y") {  // paper
                        points += 2;
                    }
                    if (split[1] == "Z") {  // scissors
                        points += 3;
                    }
                }
                totalPoints += points;
                points = 0;
            }
            console.log(totalPoints);
        }
    }

    partTwo(fileName: string) {
        // Open the test file and read in the data
        let data = fs.readFileSync(fileName).toString('utf-8');
        {
            let lines = data.split("\n");
            let points = 0;
            let totalPoints = 0;
            let myOutcome = "";
            let myChoice = "";
            for (let line of lines) {
                //console.log(line);
                if(line !== "") {
                    let split = line.split(" ", 2)
                    // For Part Two, we need to modify our call accordingly
                    if(split[1] == "X") { // lose
                        myOutcome = "L";
                        if(split[0] == "A") {
                            myChoice ="Z"
                        }
                        if(split[0] == "B") {
                            myChoice ="X"
                        }
                        if(split[0] == "C") {
                            myChoice ="Y"
                        }
                    }
                    if(split[1] == "Y") { // draw
                        myOutcome = "T";
                        if(split[0] == "A") {
                            myChoice ="X"
                        }
                        if(split[0] == "B") {
                            myChoice ="Y"
                        }
                        if(split[0] == "C") {
                            myChoice ="Z"
                        }
                    }
                    if(split[1] == "Z") {  // win
                        myOutcome = "W";
                        if(split[0] == "A") {
                            myChoice ="Y"
                        }
                        if(split[0] == "B") {
                            myChoice ="Z"
                        }
                        if(split[0] == "C") {
                            myChoice ="X"
                        }
                    }
                    let wtl = myOutcome;
                    //console.log(wtl);
                    if (wtl == "W") {  // win
                        points += 6;
                        if (myChoice == "X") {  // rock
                            points += 1;
                        }
                        if (myChoice == "Y") {  // paper
                            points += 2;
                        }
                        if (myChoice == "Z") {  // scissors
                            points += 3;
                        }
                    }
                    if (wtl == "T") { // tie
                        points += 3;
                        if (myChoice == "X") {  // rock
                            points += 1;
                        }
                        if (myChoice == "Y") {  // paper
                            points += 2;
                        }
                        if (myChoice == "Z") {  // scissors
                            points += 3;
                        }
                    }
                    if (wtl == "L") {  // loss
                        points += 0;
                        if (myChoice == "X") {  // rock
                            points += 1;
                        }
                        if (myChoice == "Y") {  // paper
                            points += 2;
                        }
                        if (myChoice == "Z") {  // scissors
                            points += 3;
                        }
                    }
                }

                totalPoints += points;
                points = 0;
            }
            console.log(totalPoints);
        }
    }
}

console.log("Day 2");
const day2 = new Day2();
day2.partOne('data.txt');
day2.partTwo('data.txt');

