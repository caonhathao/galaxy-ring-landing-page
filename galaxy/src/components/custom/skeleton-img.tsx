"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

function SkeletonImage({
  className,
  ...props
}: React.ComponentProps<typeof Image>) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      
      {!loaded && <Skeleton className="h-full w-full z-10" />}
      
      <Image
        {...props}
        className={cn(
          "object-cover transition-opacity duration-300", 
          !loaded ? "opacity-0" : "opacity-100"
        )}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export { SkeletonImage };