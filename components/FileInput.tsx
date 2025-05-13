import Image from "next/image";

const FileInput = ({
  id,
  label,
  accept,
  file,
  previewUrl,
  inputRef,
  onChange,
  onReset,
  type,
}: FileInputProps) => {
  return (
    <section className="file-input">
      <label htmlFor={id}>{label}</label>
      <input
        type="file"
        id={id}
        accept={accept}
        hidden
        ref={inputRef}
        onChange={onChange}
      />

      {!previewUrl ? (
        // if no video has been uploaded yet
        <figure onClick={() => inputRef.current?.click()}>
          <Image
            src="/assets/icons/upload.svg"
            alt="Upload Icon"
            width={24}
            height={24}
          />
          <p>click to upload your {id}</p>
        </figure>
      ) : (
        //  if a video has already been uploaded
        <div>
          {type === "video" ? (
            <video src={previewUrl} controls />
          ) : (
            <Image src={previewUrl} alt="Image" fill />
          )}
          <button type="button" onClick={onReset}>
            <Image
              src="/assets/icons/close.svg"
              alt="Close Icon"
              width={16}
              height={16}
            />
          </button>
          <p>{file?.name}</p>
        </div>
      )}
    </section>
  );
};

export default FileInput;
