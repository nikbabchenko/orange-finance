describe('features-dashboard', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=dashboardcontainercomponent--primary')
  );
  it('should render the component', () => {
    cy.get('oe-container').should('exist');
  });
});
