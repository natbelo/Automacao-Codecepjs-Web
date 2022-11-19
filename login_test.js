Feature("login");

Scenario("test something", ({ I }) => {
  I.amOnPage("/");
  I.click("#enterimg");
  I.fillField('//*[@id="basicBootstrapForm"]/div[1]/div[1]/input', "Natalia");
  I.wait(10);
});
