"use client"

import { HTMLAttributes, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  item: { image: string; title: string };
  index: number;
  activeItem: number;
}

interface ExpandableProps {
  list?: { image: string; title: string }[];
  autoPlay?: boolean;
  className?: string;
}

const List = ({ item, className, index, activeItem, ...props }: ImageProps) => {
  return (
    <div
      className={cn(
        "relative flex h-full w-20 min-w-10 cursor-pointer overflow-hidden rounded-md transition-all delay-0 duration-300 ease-in-out",
        {
          "flex-grow": index === activeItem,
        },
        className,
      )}
      {...props}
    >
      <img
        src={item.image}
        alt={item.title}
        className={cn("h-full w-full object-cover", {
          "blur-[2px]": index !== activeItem,
        })}
      />
      {index === activeItem && (
        <div className="absolute bottom-4 left-4 min-w-fit text-white md:bottom-8 md:left-8">
          <h1 className="text-lg font-semibold md:text-2xl">{item.title}</h1>
        </div>
      )}
    </div>
  );
};

const items = [
  {
    image:
      "https://images.unsplash.com/photo-1541753236788-b0ac1fc5009d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Mountains",
  },
  {
    image:
      "https://images.unsplash.com/photo-1718027808460-7069cf0ca9ae?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Great Wall of China",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584968173934-bc0b588eb806?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Texture & Patterns",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Northern Lights",
  },
  {
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Forest Path",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Beach Paradise",
  },
];

export default function Expandable({ list = items, autoPlay = true, className }: ExpandableProps) {
  const [activeItem, setActiveItem] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveItem((prev) => (prev + 1) % list.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, list.length, isHovering]);

  return (
    <div className={cn("flex h-96 w-full gap-1", className)}>
      {list.map((item, index) => (
        <List
          key={item.title}
          item={item}
          index={index}
          activeItem={activeItem}
          onMouseEnter={() => {
            setActiveItem(index);
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
        />
      ))}
    </div>
  );
}
