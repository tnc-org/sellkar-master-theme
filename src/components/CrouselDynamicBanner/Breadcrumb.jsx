"use client";

import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = ({ activeCategoryName }) => {
  return (
    <div className="flex items-center gap-2 text-sm text-white text-opacity-80  mb-12">
      <span className="hover:text-opacity-100 cursor-pointer transition-all">Home</span>
      <ChevronRight size={14} />
      <span className="text-white text-opacity-60">{activeCategoryName}</span>
    </div>
  );
};

export default Breadcrumb;