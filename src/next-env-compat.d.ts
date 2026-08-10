declare module "next/image" {
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
  const Image: React.FC<ImageProps>;
  export default Image;
}

declare module "next/link" {
  import React from "react";
  export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href?: string;
    to?: string;
    children: React.ReactNode;
  }
  const Link: React.FC<LinkProps>;
  export default Link;
}

declare module "next/navigation" {
  export function usePathname(): string;
  export function useRouter(): {
    push: (url: string) => void;
    replace: (url: string) => void;
    back: () => void;
    forward: () => void;
    refresh: () => void;
  };
  export function useSearchParams(): [URLSearchParams, (params: any) => void];
}
