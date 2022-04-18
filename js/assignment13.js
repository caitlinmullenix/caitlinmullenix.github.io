const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {

  // step 1
  var newStory = storyText;

  // step 2
  var itemX = randomValueFromArray(insertX);
  var itemY = randomValueFromArray(insertY);
  var itemZ = randomValueFromArray(insertZ);

  // step 3
  // replace the variables
  newStory = newStory.replace(":insertx:", itemX);
  newStory = newStory.replace(":insertx:", itemX);
  newStory = newStory.replace(":inserty:", itemY);
  newStory = newStory.replace(":insertz:", itemZ);


  if(customName.value !== '') {
    const name = customName.value;

    // step 4
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {

    // step 5

    // converting fahrenheit to celcius
    // (32°F − 32) × 5/9 = 0°C
    const temperature =  Math.round(
      (94-32) * 5/9
    );
    newStory = newStory.replace("94 fahrenheit", `${temperature} celcius`)

    // converting pounds to stone
    // stones = pounds/14
    const weight = Math.round(
      300/14
    );
    newStory = newStory.replace("300 pounds", `${weight} stone`)
  }

  // step 6
  story.textContent = newStory;
  story.style.visibility = 'visible';
}

function test() {
  alert("hello")
};
