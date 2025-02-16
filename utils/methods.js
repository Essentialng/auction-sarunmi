export const calculateTimeLeft = (endTime) => {
    const now = new Date();
    const end = new Date(endTime);
    const timeDiff = end - now;

    if (timeDiff <= 0) return "00:00:00:00"; // Auction has ended

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return `${days}:${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };


export const calculateTimeToStart = (startTime) => {
    const now = new Date();
    const start = new Date(startTime);
    const timeDiff = start - now;

    if (timeDiff <= 0) return null; // Auction has started or passed

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return `${days}:${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };


 export const calculateDays = (startTime, endTime) => {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const now = new Date();
  
    const totalTime = end - start; // Difference in milliseconds
    const totalDays = totalTime / (1000 * 60 * 60 * 24); // Convert milliseconds to days
  
    // Calculate remaining days from now to endTime
    const remainingTime = end - now; // Difference in milliseconds
    const remainingDays = remainingTime / (1000 * 60 * 60 * 24); // Convert milliseconds to days
  
    const formattedTotalDays = Math.ceil(totalDays); // Round up to the nearest whole number
    const formattedRemainingDays = remainingDays > 0 ? Math.ceil(remainingDays) : 0; // Round up and ensure it doesn't go negative
  
    // Return the formatted string
    return `${formattedTotalDays} Days [${formattedRemainingDays} day${formattedRemainingDays !== 1 ? 's' : ''} left]`;
  };


export const highestAmount =(bids)=>{ 
  return  bids.reduce((max, bid) => {
    return bid.amount > max ? bid.amount : max;
  }, 0);
}