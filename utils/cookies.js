import Cookies from 'js-cookie';



export const setCookies = (token)=> {
    
    Cookies.set('auction-auth', token, {
    httpOnly: false, 
    path: '/',  
    expires: 7

  });}


export const getCookies = () => {

const token = Cookies.get('auction-auth');
return token;
};

export const removeCookies = () => {

  const token = Cookies.remove('auction-auth');
  return token;
  };