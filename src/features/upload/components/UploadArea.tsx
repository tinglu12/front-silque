import React, { useState } from 'react';

const UploadArea = ({
  handleDrop,
  field,
  handleUpload,
}: {
  handleDrop: (e: React.DragEvent<HTMLDivElement>, field: any) => void;
  field: any;
  handleUpload: () => void;
}) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div
      onClick={handleUpload}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleUpload();
        }
      }}
      role="button"
      aria-label="Upload your clothes"
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={() => setIsDragging(true)}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => handleDrop(e, field)}
      className={`w-full h-full flex flex-col items-center justify-center cursor-pointer ${
        isDragging && 'bg-muted/50'
      }`}
    >
      <p className="text-sm text-muted-foreground">Upload your clothes</p>
    </div>
  );
};

export default UploadArea;
