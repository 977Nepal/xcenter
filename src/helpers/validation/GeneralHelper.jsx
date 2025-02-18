/* Get the actions Token */

// export const loginToken = () => {
//     return localStorage.getItem('Bearer')
// };

// export const refreshToken = () => {
//     return localStorage.getItem('rt')
// }

// /* Find out if anyone is logged in | @return boolean */
// export const loggedIn = () => {
//     return !!localStorage.getItem('Bearer')
// };

// export const getDate = (data) => {
//     let date = new Date(data);
//     date = date.toISOString().split('T')[0]
//     return date
// }

// export const setUserToLocalStorage = (data) => {
//     localStorage.setItem('Bearer', data.access_token);
//     localStorage.setItem('refresh_token', data.refresh_token);
//     localStorage.setItem('expires_in', data.expires_in);
//     localStorage.setItem('token_type', data.token_type);
// };

// export const logOutUser = () => {
//     localStorage.setItem("redirect", (window.location.pathname + window.location.search).substr(1))
//     localStorage.removeItem('Bearer');
//     localStorage.removeItem('rt');
//     localStorage.removeItem('expires_in');
//     localStorage.removeItem('token_type');
//     localStorage.removeItem('refresh_token');
//     window.location.href = (`/login`);
// };

// export const objectIsEmpty = (obj) => {
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) return false;
//     }

//     return true;
// };

// export const isValidEmail = (string) => {
//     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(string);
// };

// export const hasOnlyDigits = (string) => {
//     return /^\d+$/.test(string);
// };

// export const isInvalidMobileNumber = number => {
//     return number < 1111111111 || number > 9999999999
// };

// export const isInvalidPhoneNumber = number => {
//     return number < 11111 || number > 9999999999
// };

// export const alternativeNumber = (string) => {
//     return /^\+?([0-9]{5,})$/.test(string)
// };

export const ucFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

// export const containsOnlyLetter = (string) => {
//     return /[a-zA-Z]+$/.test(string);
// };

// export const containsNumbers = string => {
//     return /\d/.test(string);
// };

// export const enoughPassword = (string) => {
//     let enoughRegex = new RegExp("(?=.{6,}).*", "g");
//     return enoughRegex.test(string)
// };

// export const mediumPassword = (string) => {
//     let mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
//     return mediumRegex.test(string)
// };

// export const strongPassword = (string) => {
//     let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
//     return strongRegex.test(string)
// };

// export const passwordStrengthClass = (string) => {
//     if (!string) return ``;
//     else if (strongPassword(string)) {
//         return `strong`
//     } else if (mediumPassword(string)) {
//         return `medium`
//     } else return `weak`;
// };

// export const dateDifference = (year) => {
//     let currentDateYear = new Date().getFullYear();
//     return currentDateYear - year >= 16;
// };

// export const slugify = (text) => {
//     return text.toString().toLowerCase()
//         .replace(/\s+/g, '-')           // Replace spaces with -
//         .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
//         .replace(/\-\-+/g, '-')         // Replace multiple - with single -
//         .replace(/^-+/, '')             // Trim - from start of text
//         .replace(/-+$/, '');            // Trim - from end of text
// };


// export const if_ = (condition, result) => {
//     if (condition) return result;
// };

// export const generateServerValidationErrors = error => {
//     let status = error && error.response && error.response.status;
//     if (status === 422) {
//         let {message} = error.response.data;
//         if (message) return message;
//     } else return false;
// };

// export const currentPage = document.URL.split(`/`)[3];


// export const isAnActionItem = (item) => {
//     return is('view') || is('delete') || is('create') || is('import') || is('update') || is('update') || is(`upload`);

//     function is(_item) {
//         return item === _item;
//     }
// };


export const unslugify = (text, symbol) => {
    if (text) {
        let string = ``;
        let part = text.split(symbol);
        if (!part.length) return part;
        if (part.length) part.map(item => {
            string += ucFirst(item) + ' ';
        });
        return string.trim();
    }
};

export function capitalString(string) {
    let array = string ? string.split("_") : []
    array = array.map(item => {
        return ucFirst(item)
    })
    return array.join(" ")
}

// export function priceToHour(type, value) {
//     if (type === "month") {
//         value = (value * 1) / (30 * 24)
//     }
//     if (type === "day") {
//         value = (value * 1) / (24)
//     }
//     return value
// }

// export function priceFromHourToBestDuration(value) {
//     if (Number.isInteger(value))
//         return {type: "hour", value: value}
//     else if (Number.isInteger((value * 24)))
//         return {type: "day", value: value * 24}
//     else if (Number.isInteger(value * 24 * 30))
//         return {type: "month", value: value * 24 * 30}
//     else
//         return {type: "hour", value: value}
// }

// export function pricePerDurationConversion(sourceType, destinationType, value) {
//     if (sourceType === "hour" && destinationType === "day") return (value * 24)
//     else if (sourceType === "hour" && destinationType === "month") return (value * 24 * 30)
//     else if (sourceType === "day" && destinationType === "hour") return (value / 24)
//     else if (sourceType === "day" && destinationType === "month") return (value * 30)
//     else if (sourceType === "month" && destinationType === "hour") return (value / (30 * 24))
//     else if (sourceType === "month" && destinationType === "day") return (value / 30)
// }

// export function durationToHour(type, value) {
//     if (type === "month") {
//         value = (value * 1) * (30 * 24)
//     }
//     if (type === "day") {
//         value = (value * 1) * (24)
//     }
//     return value
// }

// export function durationFromHourToBestDuration(value) {
//     if (Number.isInteger(value))
//         return {type: "hour", value: value}
//     else if (Number.isInteger((value / 24)))
//         return {type: "day", value: value / 24}
//     else if (Number.isInteger(value / (24 * 30)))
//         return {type: "month", value: value / (24 * 30)}
//     else
//         return {type: "hour", value: value}
// }

// export function durationConversion(sourceType, destinationType, value) {
//     if (sourceType === "hour" && destinationType === "day") return (value / 24)
//     else if (sourceType === "hour" && destinationType === "month") return (value / (24 * 30))
//     else if (sourceType === "day" && destinationType === "hour") return (value * 24)
//     else if (sourceType === "day" && destinationType === "month") return (value / 30)
//     else if (sourceType === "month" && destinationType === "hour") return (value * (30 * 24))
//     else if (sourceType === "month" && destinationType === "day") return (value * 30)
// }

/****
 * Adding comma to number Function starts here
 * */
// export function commaFormatted(amount, currency) {
//     if (!amount) return "0"
//     currency = currency ? currency : "Rs "
//     amount = amount + ""
//     var negative = amount.charAt(0)
//     if (negative === "-") {
//         amount = amount.slice(1)
//     }

//     var a = amount.split('.')
//     var splitString = a[0].split("");
//     var temp = splitString.reverse();
//     var response = ""
//     for (var i = 0; i < temp.length; i++) {
//         if (i % 2 == 0 && i !== 0) {
//             response = response + temp[i] + ","
//         } else {
//             response = response + temp[i]
//         }
//     }
//     let floating = a[1] ? `.${a[1]}` : ""
//     let string = response.split("").reverse().join("") + floating
//     if (string.charAt(0) === ",") string = string.slice(1)
//     if (negative === "-")
//         string = `- ${currency}${string}`
//     else
//         string = `${currency}${string}`

//     return string


// }

/***************** Adding Comma to numbers function ends here**/


// /********************* Function for Start & End date Validation starts here******************************************/
// export function checkDateValidation(startDate, endDate) {
//     let errMsg = "End Date must be greater than Start Date";
//     let flag = 1
//     // check the dates
//     if ((new Date(startDate) > new Date(endDate)) || (new Date(endDate) < new Date(startDate))) {
//         // set date error validation true
//         document.getElementById('validation_message_local').style.display = 'inline';
//         document.getElementById("validation_message_local").innerHTML = errMsg;

//         return true;
//     } else {
//         // null or false date error validation
//         document.getElementById('validation_message_local').style.display = 'none';
//         return false;
//     }
// }

// /********************* Function for Start & End date Validation ends here******************************************/


// export function validateImage() {
//     var uploadcontrol = document.getElementById('<%=imgUploader.ClientID%>').value;
//     //Regular Expression for fileupload control.
//     var reg = /^(([a-zA-Z]:)|(\\{2}\w+)\$?)(\\(\w[\w].*))+(.jpg|.jpeg|.png|.gif)$/;
//     if (uploadcontrol.length > 0) {
//         //Checks with the control value.
//         if (reg.test(uploadcontrol)) {
//             return true;
//         } else {
//             //If the condition not satisfied shows error message.
//             alert("Only .jpg, .jpeg,.png, .gif  files are allowed!");
//             return false;
//         }
//     }
// } //End of function validate.


// export function is_url(str) {
//     let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
//     if (regexp.test(str)) {
//         return true;
//     } else {
//         return false;
//     }
// }

/**** function for compare app version starts here***/
// export function compareAppVersion(a, b) {
//     if (a === b) {
//         return 0;
//     }

//     var a_components = a.split(".");
//     var b_components = b.split(".");

//     var len = Math.min(a_components.length, b_components.length);

//     // loop while the modules are equal
//     for (var i = 0; i < len; i++) {
//         // A bigger than B
//         if (parseInt(a_components[i]) > parseInt(b_components[i])) {
//             return 1;
//         }

//         // B bigger than A
//         if (parseInt(a_components[i]) < parseInt(b_components[i])) {
//             return -1;
//         }
//     }

//     // If one's a prefix of the other, the longer one is greater.
//     if (a_components.length > b_components.length) {
//         return 1;
//     }

//     if (a_components.length < b_components.length) {
//         return -1;
//     }

//     // Otherwise they are the same.
//     return 0;
// }

/**** function for compare app version ends here***/


/**** function for the conversion of bytes to GB starts here****/
// /**
//  * Converts a long string of bytes into a readable format e.g KB, MB, GB, TB, YB
//  *
//  * @param {Int} num The number of bytes.
//  */
// export function bytesToSize(num) {
//     var neg = num < 0;

//     var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

//     if (neg) {
//         num = -num;
//     }

//     if (num < 1) {
//         return (neg ? '-' : '') + num + ' B';
//     }

//     var exponent = Math.min(Math.floor(Math.log(num) / Math.log(1000)), units.length - 1);

//     num = Number((num / Math.pow(1000, exponent)).toFixed(2));

//     var unit = units[exponent];

//     return (neg ? '-' : '') + num + ' ' + unit;
// }

/**** function for the conversion of bytes to GB starts here****/

// export function msToTime(duration) {
//     var milliseconds = parseInt((duration % 1000) / 100)
//         , seconds = parseInt((duration / 1000) % 60)
//         , minutes = parseInt((duration / (1000 * 60)) % 60)
//         , hours = parseInt((duration / (1000 * 60 * 60)) % 24);

//     hours = (hours < 10) ? "0" + hours : hours;
//     minutes = (minutes < 10) ? "0" + minutes : minutes;
//     seconds = (seconds < 10) ? "0" + seconds : seconds;

//     return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
// }

// export function secondToTime(duration) {
//     var hour = Math.floor(duration / 60 / 60);
//     var min = Math.floor((duration - hour * 60 * 60) / 60)
//     var sec = Math.floor((duration) % (60));
//     return `${hour}:${min}:${sec}`
// }


// export function capitalizeFirstString(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// }

// export function replaceUnderscoreAndSetToUppperCase(str) {
//     var frags = str.split('_');
//     for (let i = 0; i < frags.length; i++) {
//         frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
//     }
//     return frags.join(' ');
// }


// export function convertToCSV(objArray) {
//     const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
//     let str = `${Object.keys(array[0]).map(value => `"${value}"`).join(",")}` + '\r\n';

//     return array.reduce((str, next) => {
//         str += `${Object.values(next).map(value => `"${value}"`).join(",")}` + '\r\n';
//         return str;
//     }, str);
// }

// export function downloadCsvFile(csvFile, filename) {
//     var blob = new Blob([csvFile], {type: 'text/csv;charset=utf-8;'});
//     if (navigator.msSaveBlob) { // IE 10+
//         navigator.msSaveBlob(blob, "demo.csv");
//     } else {
//         var link = document.createElement("a");
//         if (link.download !== undefined) { // feature detection
//             // Browsers that support HTML5 download attribute
//             var url = URL.createObjectURL(blob);
//             link.setAttribute("href", url);
//             link.setAttribute("download", filename);
//             link.style.visibility = 'hidden';
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//         }
//     }
// }

// export const getString = (string) => {
//     string = string.replace(/[^a-zA-Z0-9]/g, ' ');
//     return string;
// }

// export const checkValue = (string) => {
//     return string ? string : '-'
// }

// //decoding token 
// export const isAuthor = ()=>{
//     const token = localStorage.getItem("Bearer");
//   if (!token && token === "") return false;
//   else{
//     const jsonData =  JSON.parse(atob(token.split('.')[1]));
//     if(jsonData?.scopes[0] === "admin"){
//         return true;
//     };
//   } 
// }

