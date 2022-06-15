// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

const setAlarm = (employed, vacation) => (employed === true) && (employed != vacation) ? true : false

// couldn't think of true one-line version, but it is here and this makes sense 

// "const setAlarm = (employed, vacation) => employed && !vacation;"

// This will only return true if employed is both true AND != vacation