import * as React from 'react';
import { Wrapper, Button } from './Pagination.styled';

export const Pagination = ({
  totalPages,
  currentPage,
  onPageChange
}: {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <Wrapper>
      {pages.map(page => (
        <Button key={page} onClick={() => onPageChange(page)}>
          {page}
        </Button>
      ))}
    </Wrapper>
  );
};
