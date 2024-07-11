import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";

type CustomPaginationProps = {
  currentPage: number;
  count: number;
  perPage: number;
  getPageHref: (pageNum: number) => string;
};

const CustomPagination = ({
  currentPage,
  count,
  perPage,
  getPageHref,
}: CustomPaginationProps) => {
  const totalPages = Math.ceil(count / Number(perPage));

  const handleNextPage = () => {
    if (Number(currentPage) < Math.ceil(count / Number(perPage))) {
      const nextPage = currentPage + 1;
      return getPageHref(nextPage);
    } else return "#";
  };

  const handlePreviousPage = () => {
    if (Number(currentPage) > 1) {
      const previousPage = currentPage - 1;
      return getPageHref(previousPage);
    } else return "#";
  };

  const generatePaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;
    const halfMaxVisible = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, Number(currentPage) - halfMaxVisible);
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Always show first page
    items.push(
      <PaginationItem key="first">
        <PaginationLink href={getPageHref(1)} isActive={currentPage === 1}>
          1
        </PaginationLink>
      </PaginationItem>
    );

    if (startPage > 2) {
      items.push(<PaginationEllipsis key="ellipsis-start" />);
    }

    for (let i = startPage; i <= endPage; i++) {
      if (i !== 1 && i !== totalPages) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink href={getPageHref(i)} isActive={currentPage === i}>
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    }

    if (endPage < totalPages - 1) {
      items.push(<PaginationEllipsis key="ellipsis-end" />);
    }

    // Always show last page
    if (totalPages > 1) {
      items.push(
        <PaginationItem key="last">
          <PaginationLink
            href={getPageHref(totalPages)}
            isActive={currentPage === endPage}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <Pagination className="mt-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={handlePreviousPage()}
            disabled={currentPage === 1}
          >
            Previous
          </PaginationPrevious>
        </PaginationItem>
        <div className="hidden sm:flex gap-x-1">
          {generatePaginationItems()}
        </div>
        <PaginationItem>
          <PaginationNext
            href={handleNextPage()}
            disabled={currentPage === totalPages}
          >
            Next
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
