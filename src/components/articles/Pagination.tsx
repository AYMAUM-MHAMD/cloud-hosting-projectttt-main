import Link from "next/link";

interface PaginationProps {
  pages: number;
  pageNumber: number;
  route: string;
}

const Pagination = ({ route, pageNumber, pages }: PaginationProps) => {
  let pagesArray: number[] = [];
  for (let i = 1; i <= pages; i++) pagesArray.push(i);

  const Prev = pageNumber - 1;
  const Next = pageNumber + 1;
  return (
    <div className="flex items-center justify-center mt-2 mb-10">
      {pageNumber !== 1 && (
        <Link
          href={`${route}?pageNumber=${Prev}`}
          style={{ border: "1px solid rgb(55 65 81 / 1)" }}
          className=" text-gray-700 py-1 px-3 font-bold text-xl cursor-pointer hover:bg-gray-200 transition"
        >
          Prev
        </Link>
      )}

      {pagesArray.map((page) => (
        <Link
          className={`${pageNumber === page ? "bg-gray-400":""} bN text-gray-700 py-1 px-3 font-bold text-xl cursor-pointer hover:bg-gray-200 transition`}
          key={page}
          href={`${route}?pageNumber=${page}`}
        >
          {page}
        </Link>
      ))}
      {pageNumber !== pages && (
        <Link
          href={`${route}?pageNumber=${Next}`}
          style={{ border: "1px solid rgb(55 65 81 / 1)" }}
          className=" text-gray-700 py-1 px-3 font-bold text-xl cursor-pointer hover:bg-gray-200 transition"
        >
          Next
        </Link>
      )}
    </div>
  );
};

export default Pagination;
