import React from 'react';

const Footer = () =>{
    const year = new Date().getFullYear();
   return (
       <>
         <footer className='w-100 bg-light text-center'>
             <p>© {year} Vijay Malav. All Rights Reserved | Terms and Conditions applied </p>
         </footer>
       </>
   );
};

export default Footer;