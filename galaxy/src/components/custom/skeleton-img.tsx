"use client";
import { ComponentProps, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";
import { m, Variants } from "framer-motion";

interface ISkeletonImageProps extends ComponentProps<typeof Image> {
  className: string;
  variants?: Variants;
  useSkeleton?: boolean;
}

const SkeletonImage = ({
  className,
  variants,
  useSkeleton = true,
  ...props
}: ISkeletonImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <m.div
      className={cn("relative overflow-hidden", className)}
      variants={variants}
    >
      {!loaded && useSkeleton ? (
        <Skeleton className="h-full w-full z-10" />
      ) : null}

      <Image
        {...props}
        className={cn(
          "object-cover transition-opacity duration-300",
          !loaded ? "opacity-0" : "opacity-100",
        )}
        onLoad={() => setLoaded(true)}
      />
    </m.div>
  );
};

export default SkeletonImage;
