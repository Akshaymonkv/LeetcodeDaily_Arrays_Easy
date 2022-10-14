var countWords = function (words1, words2) {
    count=0
  words1.forEach(element => {
      if((words1.indexOf(element)==words1.lastIndexOf(element))&&(words2.includes(element)==true)){   
          if((words2.indexOf(element)==words2.lastIndexOf(element))){
              count+=1
          }
      }
  })
      return count
  }