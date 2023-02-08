import { render, screen } from '@testing-library/react';

import { Main } from './Main';

describe('Main template', () => {
  describe('Render method', () => {
    it('should have 2 menu items', () => {
      render(<Main meta={null}>{null}</Main>);

      const menuItemList = screen.getAllByRole('listitem');

      expect(menuItemList).toHaveLength(2);
    });

    it('should have a link to support creativedesignsguru.com', () => {
      render(<Main meta={null}>{null}</Main>);
      const copyrightSection = screen.getByText(/© Copyright/);
      expect(copyrightSection).toBeInTheDocument();
    });
  });
});
