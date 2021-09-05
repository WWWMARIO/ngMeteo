const page = {
  login: () => {
    cy.visit('/welcome');
    cy.contains('International Education Program Veleri-OI IoT School');
    cy.contains('Case study of the IoT project "Cov protect System');
    cy.contains('Login').click();
    cy.get('input[formControlName="email"]').type('mario@mario.mario');
    cy.get('input[formControlName="password"]').type('mariomario');
    cy.get('button').contains('Log in').click();
    cy.url().should('include', '/map');
  },
  routeToList: () => {
    cy.get('mat-icon').contains('list').click();
    cy.url().should('include', '/meteo-stations');
  },
  routeToMap: () => {
    cy.get('mat-icon').contains('room').click();
    cy.url().should('include', '/meteo-stations');
  },
};

describe('Logs in with correct user e-mail and password', () => {
  it('Logs in with correct user e-mail and password ', () => {
    cy.visit('/welcome');
    cy.contains('International Education Program Veleri-OI IoT School');
    cy.contains('Case study of the IoT project "Cov protect System');
    cy.contains('Login').click();
    cy.get('input[formControlName="email"]').type('mario@mario.mario');
    cy.get('input[formControlName="password"]').type('mariomario');
    cy.get('button').contains('Log in').click();
    cy.url().should('include', '/map');
  });
});

describe('Should not log in with incorrect user e-mail and password', () => {
  it('Should not log in with incorrect user e-mail and password', () => {
    cy.visit('/welcome');
    cy.contains('International Education Program Veleri-OI IoT School');
    cy.contains('Case study of the IoT project "Cov protect System');
    cy.contains('Login').click();
    cy.get('input[formControlName="email"]').type('mario@mario.mario');
    cy.get('input[formControlName="password"]').type('xxxxxxx');
    cy.get('button').contains('Log in').click();
    cy.url().should('include', '/welcome');
  });
});

describe('Create new station', () => {
  it('Creates new station', () => {
    page.login();
    page.routeToList();
    cy.get('mat-icon').contains('add').click();
    cy.get('input[formControlName="name"]').type('Cypress Test Station 1');
    cy.get('input[formControlName="description"]').type(
      'Cy Test Station 1 desc'
    );
    cy.get('input[formControlName="imageUrl"]').type(
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Yagip.jpg/375px-Yagip.jpg'
    );
    cy.get('input[formControlName="latitude"]').type('10');
    cy.get('input[formControlName="longitude"]').type('20');
    cy.get('button').contains('Create new meteo station').click();
    cy.wait(4000);
    cy.get('h3').contains('Cypress Test Station 1').should('be.visible');
    cy.get('p').contains('Cy Test Station 1 desc').should('be.visible');
  });
});
describe('Edit station', () => {
  it('Edit station', () => {
    page.login();
    page.routeToList();
    cy.get('h3').contains('Cypress Test Station 1').click();
    cy.get('button').contains('Edit').click();
    cy.get('input[formControlName="description"]')
      .clear()
      .type('Cy Test Station edited desc');
    cy.get('button').contains('Update meteo station').click();
    cy.wait(2000);
    cy.get('h3').contains('Cypress Test Station 1').should('be.visible');
    cy.get('p').contains('Cy Test Station edited desc').should('be.visible');
  });
});

describe('Create new sensor type', () => {
  it('Creates sensor type', () => {
    page.login();
    page.routeToList();
    cy.get('h3').contains('Cypress Test Station 1').click();
    cy.wait(3000);
    cy.get('button').contains('Sensors').click();
    cy.get('mat-chip').contains('add').click();
    cy.get('input[formControlName="type"]').type('Cy-sensor-type');
    cy.get('input[formControlName="unit"]').type('unit');
    cy.get('button').contains('Create new sensor type').click();
    cy.wait(3000);
    cy.get('span').contains('Cy-sensor-type').should('be.visible');
  });
});

describe('Add new sensor', () => {
  it('Add new sensor', () => {
    page.login();
    page.routeToList();
    cy.get('h3').contains('Cypress Test Station 1').click();
    cy.wait(3000);
    cy.get('button').contains('Sensors').click();
    cy.get('#newSensorBtn').click();
    cy.get('input[formControlName="lowerLimit"]').type('0');
    cy.get('input[formControlName="upperLimit"]').type('100');
    cy.get('input[formControlName="description"]').type('Sensor desc');
    cy.get('mat-select[formControlName="sensorTypeId"]')
      .click()
      .get('mat-option')
      .contains('Cy-sensor-type')
      .click();
    //cy.get('mat-select[formControlName="sensorTypeId"]').select('Cy-sensor-type')
    cy.get('button').contains('Create new sensor').click();
    cy.wait(3000);
    cy.get('td').contains('Cy-sensor-type').should('be.visible');
    cy.get('td').contains('Sensor desc').should('be.visible');
  });
});

describe('Edit sensor', () => {
  it('Edit sensor', () => {
    page.login();
    page.routeToList();
    cy.get('h3').contains('Cypress Test Station 1').click();
    cy.wait(3000);
    cy.get('button').contains('Sensors').click();
    cy.get('#Cy-sensor-type-edit').click();
    cy.get('input[formControlName="description"]').click().type('-edit');
    cy.get('button').contains('Update sensor').click();
    cy.wait(3000);
    cy.get('td').contains('Cy-sensor-type').should('be.visible');
    cy.get('td').contains('Sensor desc-edit').should('be.visible');
  });
});
describe('Edit sensor type', () => {
  it('Edit sensor type', () => {
    page.login();
    page.routeToList();
    cy.get('h3').contains('Cypress Test Station 1').click();
    cy.wait(3000);
    cy.get('button').contains('Sensors').click();
    cy.wait(3000);
    cy.get('span').contains('Cy-sensor-type').click();
    cy.get('input[formControlName="unit"]').click().type('-edit');
    cy.get('button').contains('Update sensor type').click();
    cy.wait(3000);
    cy.get('span').contains('Cy-sensor-type').should('be.visible');
  });
});

describe('Add new reading', () => {
  it('Add new reading', () => {
    page.login();
    page.routeToList();
    cy.get('h3').contains('Cypress Test Station 1').click();
    cy.wait(3000);
    cy.get('button').contains('Readings').click();
    cy.contains('Sensor desc').click();
    cy.get('#newReadingBtn').click();
    cy.get('input[formControlName="value"]').type('66.66');
    cy.get('button').contains('Create new reading').click();
    cy.wait(2000);
    cy.get('td').contains('66.66').should('be.visible');
  });
});

describe('Edit reading', () => {
  it('Edit reading', () => {
    page.login();
    page.routeToList();
    cy.get('h3').contains('Cypress Test Station 1').click();
    cy.wait(3000);
    cy.get('button').contains('Readings').click();
    cy.contains('Sensor desc').click();
    cy.wait(3000);
    cy.get('#edit').click();
    cy.get('input[formControlName="value"]').click().clear().type('77.77');
    cy.get('button').contains('Update reading').click();
    cy.wait(3000);
    cy.get('td').contains('77.77').should('be.visible');
  });
});

describe('Delete reading', () => {
  it('Deletes reading', () => {
    page.login();
    page.routeToList();
    cy.get('h3').contains('Cypress Test Station 1').click();
    cy.wait(3000);
    cy.get('button').contains('Readings').click();
    cy.contains('Sensor desc').click();
    cy.wait(3000);
    cy.get('#delete').click();
    cy.get('button').contains('Delete').click();
  });
});

describe('Delete sensor ', () => {
  it('Deletes sensor', () => {
    page.login();
    page.routeToList();
    cy.get('h3').contains('Cypress Test Station 1').click();
    cy.wait(3000);
    cy.get('span').contains('Sensors').click();
    cy.get('#Cy-sensor-type-delete').click();
    cy.get('button').contains('Delete').click();
    cy.wait(3000);
    cy.get('td').should('not.exist');
  });
});

describe('Delete sensor type', () => {
  it('Deletes sensor type', () => {
    page.login();
    page.routeToList();
    cy.get('h3').contains('Cypress Test Station 1').click();
    cy.wait(3000);
    cy.get('span').contains('Sensors').click();
    cy.get('#Cy-sensor-type').click();
    cy.get('button').contains('Delete').click();
    cy.get('#Cy-sensor-type').should('not.exist');
  });
});

describe('Delete station', () => {
  it('Deletes station', () => {
    page.login();
    page.routeToList();
    cy.get('h3').contains('Cypress Test Station 1').click();
    cy.wait(3000);
    cy.get('span').contains('Edit').click();
    cy.get('mat-icon').contains('delete').click();
    cy.get('button').contains('Delete').click();
    cy.wait(3000);
    cy.get('h3').contains('Cypress Test Station 1').should('not.exist');
  });
});
