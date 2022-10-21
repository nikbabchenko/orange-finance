describe('ui-kit-components-toolbar', () => {
  beforeEach(() => cy.visit('/iframe.html?id=toolbarcomponent--primary'));
  it('should render the component', () => {
    cy.get('oe-toolbar').should('exist');
  });
});
