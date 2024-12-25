Checklist System
**Overview**
The Checklist System is a Node.jsapplication that evaluates certain conditions based on the provided input data fetched from an API and displays a dashboard with the results showing which conditions have passed and failed.

**Checklist Rules**
Valuation Fee Paid: isValuationFeePaid should be true.

UK Resident: isUkResident should be true.

Risk Rating Medium: riskRating should be "Medium".

LTV Below 60%: Calculate Loan-to-Value as (Loan Required / Purchase Price) * 100 and ensure it is less than 60%.

**Installation**
Clone the repository:
git clone https://github.com/your-username/CheckListSystem.git

Navigate to the project directory:
cd CheckListSystem

Install the dependencies:
npm install

Start the server:
node server.js

Open your browser and go to:
http://localhost:3000


**Configuration**
Adding or Modifying Rules
To add or modify checklist rules, update the rules.js file. Each rule is an object with a name and a condition function.

module.exports = [ { name: "Example Rule", condition: data => data.exampleField === true } ];

**Dependencies**
1.express
2.axios
