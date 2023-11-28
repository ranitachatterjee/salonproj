import React,{useState} from 'react'

export default function TextContent({text}) {
    const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
         {isExpanded ? (
        <p>{text}</p>
      ) : (
        <p>{text.slice(0, 50)}...</p>
      )}
      <button onClick={toggleText}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>     
    </div>
  )
}
