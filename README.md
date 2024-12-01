Checklist System Using Node.js
Description
This project implements a Checklist System that evaluates a set of predefined conditions based on input data fetched from an API. The results of the evaluation are displayed in a simple web dashboard, indicating which rules have passed and which have failed. The project is designed to be modular, scalable, and easy to maintain, ensuring that adding or modifying checklist rules is straightforward.
Features:
Checklist Evaluation: Evaluates multiple rules based on the data fetched from an API.
Dynamic Rule Evaluation: Rules include checks such as:
Valuation Fee Paid: Validates if the valuation fee is paid.
UK Resident: Verifies if the individual is a UK resident.
Risk Rating Medium: Confirms if the risk rating is set to "Medium."
LTV Below 60%: Calculates and checks if the Loan-to-Value ratio is below 60%.
Modular Codebase: The checklist rules are stored in a configuration file (config.js), making it easy to add or modify rules.
Simple Dashboard: Displays evaluation results in a table format with "Passed" or "Failed" status for each rule.
Extensible: Easily extend the checklist with new rules by modifying the configuration file.

How It Works
Data Fetching: The system fetches data from a remote API using axios in the backend.
Rule Evaluation: Each rule is evaluated dynamically based on the fetched data. Custom rules like Loan-to-Value (LTV) calculation are also supported.
Displaying Results: The results are sent to the frontend, where they are displayed in a table showing the rule name and status ("Passed" or "Failed").



