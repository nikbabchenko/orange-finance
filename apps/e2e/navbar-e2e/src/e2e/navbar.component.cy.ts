describe('features-shared-navbar', () => {
  beforeEach(() => cy.visit('/iframe.html?id=navbarcomponent--primary'));
  it('should render the component', () => {
    cy.get('oe-shared-navbar').should('exist');
  });
});
