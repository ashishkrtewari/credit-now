# credit-now-2

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Features

**Login**

- System has two roles Admin and Customer
- Form requires - Email and Password
- The form uses a dummy login API from ReqRes [https://reqres.in/api/login] that returns a token
- The returned token is saved in the Localstorage to login the user and redirect to the respective dashboard, selected based on the selected user-role. In a real world app this will based on the role returned by the API

**Customer Dashboard**

- Customer can view the following:

  - Available Credit

  - Create a new Loan [Click on get Cash button]

  - Existing Loans

  - Name of the Customer and logout button

- Create a Loan

  Steps

  1. Select `Loan Amount`.
  2. Select `EMI Plan` for repayment.
  3. Review details and Finish to save loan for send loan for approval by admin.

- The created loan is stored as part of the `loanData` property in the browser localStorage which as our mini DB, accessed/updated through browser's localStorage APIs.

**Admin Dashboard**

- Admin can view all the loans in the system.
- Filter the loans based on the `LoanStatus`.
- Can Approve or Reject a loan.
- Delete Completed loans.
