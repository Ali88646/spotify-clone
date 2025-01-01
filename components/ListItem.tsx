"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaHeart, FaPlay } from "react-icons/fa";

interface ListItemsProps {
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemsProps> = ({ name, href }) => {
  const router = useRouter();
  const onClick = () => {
    //Add authenticatiojn before push
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <div className="bg-custom-gradient flex items-center justify-center P-4 h-[64px]">
          <FaHeart size={64 - 32} className="text-neutral-200" />
        </div>
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
        <FaPlay className="text-black" />
      </div>
    </button>
  );
};

export default ListItem;
