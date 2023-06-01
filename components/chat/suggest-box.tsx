"use client"
import React from 'react';
import { Badge } from "@/components/ui/badge"

interface SuggestBoxProps {
  index: number
  suggestion: string
  setUserInput: React.Dispatch<React.SetStateAction<string>>
}

const SuggestBox: React.FC<SuggestBoxProps> = ({ index, suggestion, setUserInput }) => {
  const [suggestHoverArray, setSuggestHoverArray] = React.useState(Array.from({ length: 0 }, () => false));

  return (
    <Badge key={index} variant={suggestHoverArray[index] ? "secondary" : "outline"} className="hover:cursor-pointer text-sm"
      onClick={() => setUserInput(suggestion)}
      onMouseEnter={() => {
        let newArray = Array.from({ length: suggestHoverArray.length }, () => false);
        newArray[index] = true;
        setSuggestHoverArray(newArray);
      }}
      onMouseLeave={() => {
        let newArray = [...suggestHoverArray];
        newArray[index] = false;
        setSuggestHoverArray(newArray);
      }}>
      {suggestion}
    </Badge>
  );
};

export default SuggestBox;