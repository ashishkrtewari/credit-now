# credit-now

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
- The returned token is saved in the localStorage to login the user and redirect to the respective dashboard, selected based on the selected user-role. In a real world app this will based on the role returned by the API

**Customer Dashboard**

- Customer can view the following:

  - Available Credit: reduced as the customer uses the credit

  - Create a new Loan [Click on get Cash button]

  - Existing Loans: lists the loans with `Loan Amount`, `Term` and `Loan Status`
  - Loan Details: Loan details view with customer's name, avatar, date of loan application, amount, term, EMI, interest rate, Repaid amount.

  - Name of the Customer and logout button

- Create a Loan

  Steps

  1. Select `Loan Amount`.
  2. Select `EMI Plan` for repayment.
  3. Review details and Finish to save loan for send loan for approval by admin.
  4. Post Approval, the customer can pay the loan, by clicking the loan from the existing loans list, review the details and further clicking on the Pay EMI button.
  5. As the customer pays the EMI, the repaid amount keeps increasing to a point where all amount + interest has been repaid.
  6. The loan gets a completed status when the last EMI is paid by the customer.

- The created loan is stored as part of the `loanData` property in the browser localStorage which as our mini DB, accessed/updated through browser's localStorage APIs.

**Admin Dashboard**

- Admin can view all the loans in the system.
- Filter the loans based on the `LoanStatus`.
- View loan details by clicking the loan item in the loans list.
- Can Approve or Reject a loan.

**CSS Challenge**

- [https://credit-now.netlify.app/#/card-screen]
