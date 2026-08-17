import React from "react";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  unoptimized?: boolean;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      width,
      height,
      fill,
      priority,
      quality,
      unoptimized,
      style,
      className,
      ...props
    },
    ref
  ) => {
    const combinedStyle: React.CSSProperties = {
      ...(fill
        ? {
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: 0,
          }
        : {}),
      ...style,
    };

    return (
      <img
        ref={ref}
        src={src}
        alt={alt || ""}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        style={combinedStyle}
        className={className}
        {...props}
      />
    );
  }
);

Image.displayName = "NextCompatImage";

export default Image;
