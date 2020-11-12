/**
 * Reminder to self...
 * make sure to have the info get outputted 
 * to the db.json file
 * test with db.test.json
 */

function STRING_TYPECHECK(str) {
    if(typeof (str.trim()) !== "string") throw new Error("String Utils Error: one or more of your inputs should be a string!")
}

module.exports.make_question = (sentence) => {
    STRING_TYPECHECK(sentence);
    const question_regex = /\?$/
    if(!question_regex.test(sentence)) sentence = sentence + "?";
    return sentence;
}