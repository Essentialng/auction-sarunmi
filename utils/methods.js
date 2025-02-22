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


export const getTodayInLocalFormat = () => {
  const now = new Date();
  
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0'); 
  const hours = String(now.getHours()).padStart(2, '0'); 
  const minutes = String(now.getMinutes()).padStart(2, '0'); 
  
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

export const highestAmount =(bids)=>{ 
  return  bids.reduce((max, bid) => {
    return bid.amount > max ? bid.amount : max;
  }, 0);
}


export const formatText = (text) => {
  const formattedText = text.replace(/([a-z])([A-Z])/g, '$1 $2');
  return formattedText.charAt(0).toUpperCase() + formattedText.slice(1).toLowerCase();
};


export const productFilter = (filterItem, id)=>{
  const filterItems = filterItem.filter(product => product.modelId == id);
  return filterItems;
};

export const locationFilter = (filterItem, location) => {
  const filteredItems = filterItem.filter(product => {
    const locationParts = product.location.split('/'); 
    const firstLocationWord = locationParts[0]; 
    return firstLocationWord.includes(location); 
  });
  
  return filteredItems;
};
