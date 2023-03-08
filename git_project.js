
const compound = ["Push-ups","Pull-ups","Squats","Sit-up","Chin-ups","Inverted Rows","Slick Floor Bridge Curls","Reverse Lunges", "Ab Halos","V-up Tucks","Reverse Hypers","Jump Squats","Power Pushaways","Cobra Push-Ups"];
const cardio =["Rowing","Sprints","Burpies","Rope Skipping","Crouch Walk","Tire Flips", "Farmer Carries","Ammo Cans", "Boxing"];

const setGen = () => {
    return Math.floor(Math.random() * (5 -1 +1) + 1);
};

const repGen = () => {
    return Math.floor(Math.random() * (15 - 5 + 5) + 5);
};

const timeGen = () => {
    let minutes = 0;
    let seconds = 0;
    let counter =  Math.floor(Math.random() * (600 -300 +300) +300);

    while(counter > 60){
        ++minutes;
        counter = counter - 60;
    };
    seconds = counter;

    return `${minutes} minutes: ${seconds} seconds`
};

const excRestGen = () => {
     const rest = Math.floor(Math.random() * (3 -1 +1) +1);
     const exercise = Math.floor(Math.random() * (5-1+1)+1);
     return `${exercise} exercise: ${rest} rest`
};

const exerciseGen = (arr) => {

}

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
console.log('-----------------');*/
