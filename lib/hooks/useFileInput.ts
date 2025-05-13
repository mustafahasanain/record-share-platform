import { ChangeEvent, useRef, useState } from "react";

export const useFileInput = (maxSize: number) => {
  const [file, setFile] = useState<File | null>(null); // so file can be passed - line: 18
  const [previewUrl, setPreviewUrl] = useState("");
  const [duration, setDuration] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null); // value does not exit - line: 45

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      // means there is a selected file
      const selectedFile = e.target.files[0];

      if (selectedFile.size > maxSize) return;

      if (previewUrl) URL.revokeObjectURL(previewUrl);

      setFile(selectedFile);
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(objectUrl);

      // Extract duration for video files
      if (selectedFile.type.startsWith("video/")) {
        const video = document.createElement("video");
        video.preload = "metadata";
        video.onloadedmetadata = () => {
          // when its load, check whether duration exist
          if (isFinite(video.duration) && video.duration > 0) {
            setDuration(Math.round(video.duration)); // Round to nearest integer
          } else {
            setDuration(0); // Set to null if invalid
          }
          URL.revokeObjectURL(video.src);
        };
        video.src = objectUrl;
      }
    }
  };

  const resetFile = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setFile(null);
    setPreviewUrl("");
    setDuration(0);
    if (inputRef.current) inputRef.current.value = "";
  };

  return { file, previewUrl, duration, inputRef, handleFileChange, resetFile };
};
