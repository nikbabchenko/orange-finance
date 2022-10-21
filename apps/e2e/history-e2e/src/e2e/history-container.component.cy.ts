describe('features-history', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=historycontainercomponent--primary')
  );
  it('should render the component', () => {
    cy.get('orange-finance-history-container').should('exist');
  });
});
