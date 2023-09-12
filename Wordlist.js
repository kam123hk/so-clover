export class Wordlist {
      constructor(wordlist) {
        this.gameWords = this.shuffle(wordlist).filter( word => word.length > 2 && word.length < 13); // 5/9/23 was < 12
      }
    
      shuffle(wordlist) { 
      for (let i = wordlist.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [wordlist[i], wordlist[j]] = [wordlist[j], wordlist[i]];
      }
      return wordlist;
  
    }
  }
  