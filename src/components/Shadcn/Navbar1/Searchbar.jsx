import React, { useState, useRef, useEffect } from 'react';
import { SearchIcon } from "@/lib/icons";
import { X } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from '../Tooltip/tooltip';

export const SearchBar = ({ placeholder = "Search..." }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleSearch = () => {
        if (searchValue.trim()) {
            console.log('Searching for:', searchValue);
            // Add your search logic here
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleClose = () => {
        setIsOpen(false);
        setSearchValue('');
    };

    return (
        <div className="relative  flex items-center">
            {!isOpen && (

                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="p-0 hover:opacity-70 transition-all duration-200"
                            aria-label="Open search"
                        >
                            <SearchIcon  className="w-6 h-6 cursor-pointer" />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Search</p>
                    </TooltipContent>
                </Tooltip>


            )}

            {isOpen && (
                <div className="flex items-center gap-2 animate-in slide-in-from-right-5 fade-in duration-300">
                    <div className="relative">
                        <input
                            ref={inputRef}
                            type="text"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder={placeholder}
                            className="w-32 sm:w-40 md:w-48 lg:w-56 pl-3 pr-8 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:border-black transition-all duration-200 text-sm"
                        />
                        <button
                            onClick={handleClose}
                            className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-gray-100 rounded-full p-1 transition-colors duration-200"
                            aria-label="Close search"
                        >
                            <X className="w-4 h-4 text-gray-500" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};