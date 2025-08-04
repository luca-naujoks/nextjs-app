"use client"
import React, { useState } from "react";

type SwitchButtonProps = {
    leftLabel: string;
    rightLabel: string;
    disabled: boolean
};

export function SwitchButton({ leftLabel, rightLabel, disabled }: SwitchButtonProps) {
    const [isLeft, setIsLeft] = useState(true);

    return (
        <button
            type="button"
            className={`flex items-center  border border-foreground rounded-full w-full transition-colors`}
            onClick={() => disabled ? undefined : setIsLeft((prev) => !prev)}
        >
      <span
          className={`flex-1 text-center py-1.5 rounded-full transition-colors ${
              isLeft ? "bg-chart-4/50 text-background" : "text-gray-500"
          }`}
      >
        {leftLabel}
      </span>
            <span
                className={`flex-1 text-center py-1.5 rounded-full transition-colors ${
                    !isLeft ? "bg-chart-4/50 text-black" : "text-gray-500"
                }`}
            >
        {rightLabel}
      </span>
        </button>
    );
}