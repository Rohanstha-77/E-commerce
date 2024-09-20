"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ currentPage, hasPrev, hasNext }: { currentPage: number; hasPrev: boolean; hasNext: boolean; }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter(); // Directly use router

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams as any); // Cast to handle types
    params.set("page", pageNumber.toString());
    router.replace(`${pathname}?${params.toString()}`); // Use router.replace
  };

  return (
    <div className="mt-12 flex justify-between w-full">
      <button
        className="rounded-md bg-primary text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
        disabled={!hasPrev}
        onClick={() => createPageUrl(currentPage - 1)}
      >
        Previous
      </button>
      <button
        className="rounded-md bg-primary text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
        disabled={!hasNext}
        onClick={() => createPageUrl(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
