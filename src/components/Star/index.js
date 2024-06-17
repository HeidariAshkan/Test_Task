import React from 'react';

const Star = ({ scale, value }) => {
  return (
    <div className='flex gap-2'>
      {[...Array(scale)].map((_, index) => {
        const fillPercentage = Math.max(0, Math.min(1, value - index)) * 100;
        return (
          <svg key={index} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`grad-${value}-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset={`${fillPercentage}%`} stopColor="#171717" />
                <stop offset={`${fillPercentage}%`} stopColor="white" />
              </linearGradient>
            </defs>
            <path 
              fillRule="evenodd" 
              strokeWidth="1" 
              stroke="#171717" 
              fill={`url(#grad-${value}-${index})`} 
              clipRule="evenodd" 
              d="M10.8517 15.6909C12.4377 16.559 13.8324 15.5069 13.5291 13.6657L12.9845 10.3597L15.2915 8.01836C16.5746 6.71623 16.0445 5.01003 14.2689 4.7414L11.0806 4.25906L9.66185 1.26605C8.86712 -0.410483 7.14156 -0.428515 6.34534 1.25118L4.91951 4.25906L1.73128 4.7414C-0.0418824 5.00965 -0.576285 6.71439 0.708598 8.01836L3.01563 10.3597L2.47101 13.6657C2.16812 15.5043 3.56022 16.5602 5.14842 15.6909L8.00007 14.1301L10.8517 15.6909Z" 
            />
          </svg>
        );
      })}
    </div>
  );
};

export default Star;
