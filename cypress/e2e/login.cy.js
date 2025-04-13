describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');       // Зашли на сайт

         cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1');       //Ввели верный пароль
         cy.get('#loginButton').click();             //Нажать Войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible');                   //Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //Есть крестик и он виден для пользователя
       
 })
 
})

describe('Проверка авторизации', function () {

    it('Верный НЕ пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');       // Зашли на сайт

         cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
         cy.get('#pass').type('iLoveqastudio11');       //Ввели НЕ верный пароль
         cy.get('#loginButton').click();             //Нажать Войти

         cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible');                   //Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //Есть крестик и он виден для пользователя
       
 })
  
})
describe('Проверка авторизации', function () {

    it('Верный пароль и НЕ верный логин', function () {
         cy.visit('https://login.qa.studio/');       // Зашли на сайт

         cy.get('#mail').type('german@dolnikov.rf'); //Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1');       //Ввели НЕ верный пароль
         cy.get('#loginButton').click();             //Нажать Войти

         cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible');                   //Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //Есть крестик и он виден для пользователя
     
 })
 
})

describe('Проверка авторизации', function () {

    it('Верный пароль и НЕ верный логин без @', function () {
         cy.visit('https://login.qa.studio/');       // Зашли на сайт

         cy.get('#mail').type('germandolnikov.ru'); //Ввели НЕ верный логин
         cy.get('#pass').type('iLoveqastudio1');       //Ввели верный пароль
         cy.get('#loginButton').click();             //Нажать Войти

         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяю что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible');                   //Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //Есть крестик и он виден для пользователя
     
 })
 
})

describe('Проверка авторизации', function () {

    it('Верный пароль и НЕ верный логин, строчные буквы в логине', function () {
         cy.visit('https://login.qa.studio/');       // Зашли на сайт

         cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввели НЕ верный логин
         cy.get('#pass').type('iLoveqastudio1');       //Ввели верный пароль
         cy.get('#loginButton').click();             //Нажать Войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible');                   //Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //Есть крестик и он виден для пользователя
     
 })
 
})