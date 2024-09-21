describe('WP Dark Mode Plugin Automation Tests', () => {
  before(() => {
    // Load credentials from .env
    cy.visit('/wp-admin');
    cy.get('input[name="log"]').type(Cypress.env('WP_USER'));
    cy.get('input[name="pwd"]').type(Cypress.env('WP_PASS'));
    cy.get('#wp-submit').click();
  });

  it('Check if WP Dark Mode Plugin is Active', () => {
    cy.visit('/wp-admin/plugins.php');
    cy.contains('WP Dark Mode').then(($plugin) => {
      if ($plugin) {
        // Plugin is active
        cy.log('WP Dark Mode is active.');
        cy.visit('/wp-admin/admin.php?page=wp-dark-mode');
      } else {
        // Install and activate the plugin
        cy.visit('/wp-admin/plugin-install.php?s=wp+dark+mode&tab=search&type=term');
        cy.contains('Install Now').click();
        cy.contains('Activate').click();
      }
    });
  });

  // Continue adding tests for the remaining scenarios
});
