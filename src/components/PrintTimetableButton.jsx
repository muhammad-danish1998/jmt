'use client';

import React from 'react';

export default function PrintTimetableButton({
  label = 'Download PDF',
  className = '',
  children,
}) {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== 'undefined') {
          window.print();
        }
      }}
      className={className}
      aria-label={label}
    >
      {children || label}
    </button>
  );
}
