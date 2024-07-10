import React from 'react';

export function timeStamp(){
    let now = new Date();
    let formatToLocalTimeZone2 = new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        month: "numeric",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName:"short"
      }).format(now)
    
    
    return formatToLocalTimeZone2
}



// export function timeStamp(){


//     const getHour = () => {
//         let date = new Date;
//         let hour = date.getHours();
//         if(hour < 10){
//             hour = '0' + hour;
//         }else if(hour > 12){
//             hour = hour - 12;
//         }
//         return hour;
//     }
    
//     const getMin = () => {
//         let date = new Date;
//         let mintues = date.getMinutes();
    
//         if(mintues < 10){
//             mintues = '0' + mintues;
//         }
    
//         return mintues; 
//     }
    
//     const getSeconds = () => {
//         let date = new Date;
//         let seconds = date.getSeconds();
//         if(seconds < 10){
//             seconds = '0' + seconds;   
//         }
//         return seconds;
//     }
    
//     const getAMorPM = () => {
//         let date = new Date;
//         let hour = date.getHours();
//         let amOrPm = 'AM'
    
//         if(hour > 12){
//             amOrPm = 'PM'
//         }
//         return amOrPm; 
//     }
    
//     const getTime = () => {
//         let hr = getHour();
//         let min = getMin();
//         let sec = getSeconds();
//         let amOrPm = getAMorPM();
    
//         let time = `${hr}:${min}:${sec} ${amOrPm}`;
//         // console.log(typeof time)
//         // console.log(time)
//         return time;
//     }

//     const officalTimeStamp = () => {
//         let date = new Date();
//         let time = getTime();
//         let sliceDate = (date.toTimeString()).toString().slice(9, date.length)
//         const dateString = date.toDateString()
//         let testTimeStamp = `${dateString} at ${time} ${sliceDate}`
//         return testTimeStamp
//       }
    
//     return officalTimeStamp()

// }
