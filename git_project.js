
const compound = ["Push-ups","Pull-ups","Squats","Sit-up","Chin-ups","Inverted Rows","Slick Floor Bridge Curls","Reverse Lunges", "Ab Halos","V-up Tucks","Reverse Hypers","Jump Squats","Power Pushaways","Cobra Push-Ups","Flagpoles"];
const cardio =["Rowing","Sprints","Burpies","Rope Skipping","Crouch Walk","Tire Flips", "Farmer Carries","Ammo Cans", "Boxing"];

const setGen = () => {
    return Math.floor(Math.random() * (5 -2) + 2);
};

const repGen = () => {
    return Math.floor(Math.random() * (15 - 5) + 5);
};

const minGen = () => {
    let minutes =  Math.floor(Math.random() * (10 -3) +3);
    return `${minutes} minutes`
};

const secGen = () => {
    let seconds =  Math.floor(Math.random() * (60 -15) +15);
    return `${seconds} seconds`
};

const excRestGen = () => {
     const rest = Math.floor(Math.random() * (3 -1) +1);
     const exercise = Math.floor(Math.random() * (5-1)+1);
     return `${exercise} exercise/${rest} rest`
};

//picks a random exercise from a specified array
const randomExercise = (arr) => {
    let randomEX = Math.floor(Math.random() * arr.length)
    return arr[randomEX];
};

//functoin to deliver the end product
const final = () =>{
    const pick = Math.floor(Math.random() * 2);
    if(pick === 0){
        console.log(`Do ${randomExercise(compound)}: ${setGen()} sets of ${repGen()} reps each`);
    }else{
        console.log(`Do ${randomExercise(cardio)}: ${minGen()} total, exercise duration ${secGen()} ; ${excRestGen()} ratio`);
    };
};

final();
//only works in the browser
/*let num;
console.log("Please select an option:")
console.log("Enter 1 for Compound; 2 for Cardio; 0 to stop.")

do{
    num = prompt("Please select an option","");
    if(num === '1'){
        console.log(`Do ${randomExercise(compound)}: ${setGen()} sets of ${repGen} reps each`)
    }else if(num === '2'){
        console.log(`Do ${randomExercise(cardio)}: ${timeGen()} duration, ${excRestGen()}`)
    }else{
        console.log("Please choose a valid number.")
    }
}while(num !== '0')*/


/*console.log('sets');
console.log(setGen());
console.log('-----------------');
console.log('reps');
console.log(repGen());
console.log('-----------------');*/
/*console.log('time');
console.log(timeGen());
console.log('-----------------');
console.log('exc/rest');
console.log(excRestGen());
console.log('-----------------');
console.log(randomExercise(compound))*/;