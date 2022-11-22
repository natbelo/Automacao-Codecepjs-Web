var validacao = require("assert");

Feature("login");

// Scenario("Open Register Page", async ({ I }) => {
//   I.amOnPage("/");
//   I.click("#enterimg");
//   I.fillField('//*[@id="basicBootstrapForm"]/div[1]/div[1]/input', "Natalia");

//   var title = await I.grabTitle();
//   validacao.equal(title, "Register");
// });

Scenario("Create New Register", async ({ I }) => {
  I.amOnPage("/");
  I.click("#enterimg");
  I.fillField("First Name", "Natalia");

  var title = await I.grabTitle();
  validacao.equal(title, "Register");

  I.fillField("Last Name", "Belo");
  I.fillField("#eid > input", "natalia@teste.com");
  I.fillField("div:nth-child(4)  div input", "1234567890");
  I.click("FeMale");
  I.click("#countries");
  I.selectOption("#countries", "Select Country");
  I.fillField("#firstpassword", secret("12345"));
  I.fillField("#secondpassword", "12345");
  I.click("#submitbtn");

  I.wait(5);
});
