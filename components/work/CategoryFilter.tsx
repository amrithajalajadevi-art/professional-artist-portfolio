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
    <div className="flex flex-wrap items-center gap-8 sm:gap-10 pb-6 mb-8 border-b border-[#E8E2DA] font-sans">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            className={`
              text-xs uppercase tracking-[0.15em] transition-colors cursor-pointer py-1
              ${
                isActive
                  ? "text-[#4A2E35] font-semibold border-b border-[#4A2E35] pb-1"
                  : "text-[#8A7976] hover:text-[#4A2E35] font-light"
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
