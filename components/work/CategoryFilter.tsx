"use client";

import React from "react";
import { CategoryFilterOption, CategorySlug } from "@/types";

interface CategoryFilterProps {
  categories: CategoryFilterOption[];
  activeCategory: CategorySlug;
  onSelectCategory: (category: CategorySlug) => void;
}

export function CategoryFilter({
  categories,
  activeCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-6 pb-2 pt-1 font-sans">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            className={`
              text-xs uppercase tracking-[0.15em] transition-colors cursor-pointer
              ${
                isActive
                  ? "text-[#4A2E35] font-semibold border-b border-[#4A2E35] pb-0.5"
                  : "text-[#8A7976] hover:text-[#4A2E35] font-normal"
              }
            `}
          >
            <span>{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
}
