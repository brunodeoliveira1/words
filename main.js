let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// creates a list out of variable story
const storyWords = story.split(' ');

// filters the storyWords list, excluding the unnecessary words.
const betterWords = storyWords.filter(word => {
  if (unnecessaryWords.includes(word)) {} else {
    return word;
  }
})

// retrieves the number of times a word appears in a list
const countNumberOfTimes = (word, list) => {
  let numberOfTimes = 0;
    for (j = 0; j < list.length; j++) {
      if (word === list[j]) {
        numberOfTimes++;
      }
    }
  console.log("The word \'" + word + "\' is repeated " + numberOfTimes + " times.")
  return numberOfTimes;
  }

// to user the function countNumberOfTimes with a list
const listWords = (list) => {
  for (i = 0; i < list.length; i++) {
    countNumberOfTimes(list[i])
  }
}

// counts the number of sentences in a list.
const numberOfSentences = (list) => {
  let sentences = 0;
  for (i = 0 ; i < list.length; i++) {
    if (list[i] === '.' || list[i] === '!') {
      sentences++;
    }
  }
  return sentences
}