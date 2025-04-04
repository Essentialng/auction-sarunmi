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



export const dateFormat = (timestamp)=>{
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  return formattedDate
};

export const timeFormat = (timestamp)=>  {
  const date = new Date(timestamp);
  const formattedTime = date.toLocaleTimeString('en-GB', { 
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  return formattedTime
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
  if(id == "All"){
    return filterItem
  }else{
  const filterItems = filterItem.filter(product => product.modelId == id);
  return filterItems;
}};

export const locationFilter = (filterItem, location) => {
  const filteredItems = filterItem.filter(product => {
    const locationParts = product.location.split('/'); 
    const firstLocationWord = locationParts[1]; 
    return firstLocationWord.includes(location); 
  });
  
  return filteredItems;
};

export const amountFilter = (filterItem, selectedRange)=>{
  return  selectedRange === "Low" ? filterItem.filter(product => product.price < 500000)
  : selectedRange === "High" ? filterItem.filter(product => product.price >= 500000 && product.price <= 5000000)
  : selectedRange === "Higher" ? filterItem.filter(product => product.price > 5000000 && product.price <= 20000000)
  : selectedRange === "More higher" ? filterItem.filter(product => product.price > 20000000 && product.price <= 200000000)
  : selectedRange === "Highest" ? filterItem.filter(product => product.price > 200000000)
  : filterItem; 
};



export const codeCharacters = ()=>{
  const length = 6;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters[randomIndex];
  }
  return code;
}

export  const getAuctionStatus = (startTime, endTime) => {
  const now = new Date();
  const start = new Date(startTime);
  const end = new Date(endTime);

  if (now < start) return 'Upcoming';
  if (now > end) return 'Ended';
  return 'Ongoing'; // You can label it as 'Ending soon' based on remaining time
};