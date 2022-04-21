import React from "react";

type CardProps = {
  children: JSX.Element;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="w-1/3">
      <div className="px-4 py-4">
        <div className="border-solid border-2 bg-white rounded-lg overflow-hidden mb-10 pt-2 p-1">
          {children}
        </div>
      </div>
    </div>
  );
}
