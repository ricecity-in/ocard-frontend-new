import React from 'react';
import { FaShare } from 'react-icons/fa6';

const ShareButton = ({id}) => {
  const share = async () => {
    try {
      // Check if Web Share API is supported
      if (navigator.share) {
        await navigator.share({
          title: 'Ocard.uk',
          text: 'Digital Card',
          url: `https://my.ocard.uk/profile/${id}`,
        });
      } else {
        // Fallback if Web Share API is not supported
        alert('Web Share API is not supported in this browser.');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <button onClick={share} className='flex hover:bg-gray text-dark font-bold py-2 px-4 rounded gap-2 items-center '>
      Share <FaShare className="mr-2" /> 
    </button>
  );
};

export default ShareButton;
