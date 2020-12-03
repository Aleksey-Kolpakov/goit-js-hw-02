const checkForSpam = function(message) {
    let spamAnswer = message.toLowerCase().includes('spam');
    if (spamAnswer === false) {
        spamAnswer=message.toLowerCase().includes('sale');
            
    }
   return spamAnswer;
};
console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));