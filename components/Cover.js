"use client";

// Shows a picture from public/images. If the file is missing, a coloured box stays instead.
export default function Cover({ file, alt, className = "" }) {
  return (
    <div className={"cover " + className}>
      <img
        src={"/images/" + file}
        alt={alt}
        onError={(event) => (event.currentTarget.style.display = "none")}
      />
    </div>
  );
}
