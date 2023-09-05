function analyzeSentence(sentence) {
    // Initialize counters
    let sentenceLength = 0;    // To count the length of the sentence
    let wordCount = 0;        // To count the number of words
    let vowelCount = 0;       // To count the number of vowels
  
    // Iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
      // Increment the sentence length counter for each character
      sentenceLength++;
  
      // Check if the current character is a space (word separator)
      if (sentence[i] === ' ' && i !== sentence.length - 1) {
        wordCount++;
      }
      // Check if the current character is a vowel (case-insensitive)
      if ('aeiouAEIOU'.includes(sentence[i])) {
        vowelCount++;
      }
    }
  
    // The last character is a point, so it's not counted in the sentence length
    // Increment the word count by 1 to account for the last word
    wordCount++;
    
    // Output the results
    console.log(`Sentence Length: ${sentenceLength} characters`);
    console.log(`Word Count: ${wordCount} words`);
    console.log(`Vowel Count: ${vowelCount} vowels`);
  }
  
  // Example usage:
  const inputSentence = "This is a sample sentence.";
  analyzeSentence(inputSentence);
  