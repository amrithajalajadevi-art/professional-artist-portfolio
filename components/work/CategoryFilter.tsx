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
    <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-none">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            className={`
              px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300 whitespace-nowrap rounded-xs border cursor-pointer
              ${
                isActive
                  ? "bg-zinc-950 text-white border-zinc-950 shadow-xs"
                  : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:text-zinc-950"
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
