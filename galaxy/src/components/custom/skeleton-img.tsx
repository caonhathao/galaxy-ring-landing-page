"use client";
import { ComponentProps, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";
import { motion, Variants } from "framer-motion";

interface ISkeletonImageProps extends ComponentProps<typeof Image> {
  className: string;
  variants?: Variants;
}

const SkeletonImage = ({
  className,
  variants,
  ...props
}: ISkeletonImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      variants={variants}
    >
      {!loaded && <Skeleton className="h-full w-full z-10" />}

      <Image
        {...props}
        className={cn(
          "object-cover transition-opacity duration-300",
          !loaded ? "opacity-0" : "opacity-100",
        )}
        onLoad={() => setLoaded(true)}
      />
    </motion.div>
  );
};

export default SkeletonImage;
