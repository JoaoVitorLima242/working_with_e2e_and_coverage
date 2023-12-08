# Coverage and E2E
In this section, we have both concepts for testing an application, **Coverage and E2E tests**

## E2E Test
E2E testing is a type of software where the application is tested as a whole from start to finish, simulating real user scenarios. The goal is to ensure that all components are working as expected.

It helps identify issues that may arise from the integration of different components, ensuring that the software works seamlessly from end to end.

## Coverage
This term refers to which parts our tests are passing, and then where we are covering. Basically, we use it to know which lines are tested and which ones are not. It is good to avoid that we forgot to test some parts of the code. So, it ensures that we have a code that is 100% tested.

## Our example
In our example, we created an API that has a contact route that returns a string, a login route that validates the user and if we try to access a nonexisting route we receive a "Not found" response. We use NodeJS without any framework to develop it.

For tests, we used pure NodeJS with supertest and nyc.
- Supertest: Library to simulate HTTP requests.
- NYC: Library to coverage the code.

If you run `npm run test:cov`, you can see that 100% of the code is being covered! NYC prevents that we forgot a line using warnings and files to show which lines we are not covering. 