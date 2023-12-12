# Shared Resource Management Application

Welcome to the Shared Resource Management Application! This application helps you manage shared resources and expenses among a group of users. Whether you're tracking water bottles, groceries, or any other shared items, this application is designed to adapt to your needs.

## Table of Contents

1. [Overview](#overview)
2. [How to Use the Application](#how-to-use-the-application)
   - [For Technical Users](#for-technical-users)
   - [For Non-Technical Users](#for-non-technical-users)
3. [Application Flow](#application-flow)
4. [Example: Shared Resource Use Case](#example-shared-resource-use-case)
5. [Technologies Used](#technologies-used)
6. [Installation](#installation)
7. [Usage](#usage)
8. [Contributing](#contributing)
9. [License](#license)

## Overview

The Shared Resource Management Application is a flexible solution for managing shared resources and expenses. It adapts to various scenarios, making it suitable for tracking different types of shared items.

## How to Use the Application

### For Technical Users

1. **Setup and Installation:**
   - Clone the repository.
   - Install dependencies using `npm install`.
   - Start the application with `npm start`.

2. **Redux Slices:**
   - Understand the role of each Redux slice:
     - `daysSlice`: Manages the state related to the number of days and associated units.
     - `userSlice`: Manages the state related to the users.
     - `slotsSlice`: Manages the state related to slots, allowing the marking of attendance.
     - `costSlice`: Manages the state related to cost calculation based on attendance.

3. **Component:**
   - The Days component allows users to input the number of days service was delivered and the units received.
   - The User component allows users to input the number of consumers and their names.
   - The Slots component is used to mark the attendance of each person for each slot of continuous days.
   - The Cost component calculates the cost based on attendance and displays a table showing how much each person owes.
   - The Change component switches between the Slots and Cost components based on the state managed by componentController.

### For Non-Technical Users

1. **Using the Application:**
   - Open the application through the provided link.
   - Input the relevant details:
     - Number of days and units received on each day.
     - Number of users and their names.
     - Mark attendance using the Slots.
   - Finally, input the cost in the Cost.

2. **Understanding the Outcome:**
   - The application generates tables showing how much each user owes based on attendance.

## Application Flow

1. **Days Component:**
   - Input the relevant details for the shared resource (e.g., the number of days, units).

2. **User Component:**
   - Enter the number of users and their names.

3. **Slots Component:**
   - Mark attendance for each user on continuous slots.

4. **Cost Component:**
   - Input the cost or relevant information.
   - View the generated table showing how much each user owes based on attendance.

## Example: Shared Resource Use Case

Imagine you and your friends share a living space and decide to collectively manage the cost of essential supplies, like water bottles, using the Shared Resource Management Application.

### Scenario:

- A water bottle supplier delivers bottles daily based on your group's requests.
- At the end of the month, the supplier provides a detailed bill listing the number of bottles delivered each day.

### Key Features of the Application:

1. **Requesting Water Bottles:**
   - Users input the number of bottles needed each day using the Days component.

2. **Managing Users:**
   - The User component is used to input the number of friends living together and their names.
   - Dynamic input fields are generated for each friend, ensuring an accurate mapping of individual expenses.

3. **Marking Attendance:**
   - The Slots component allows users to mark their attendance for each day.
   - Users can create attendance slots for continuous days, accommodating scenarios where friends may leave and return multiple times during the month.

4. **Cost Distribution:**
   - The Cost component calculates the shared cost based on attendance and the number of bottles delivered.
   - The bill is split among friends according to their presence, ensuring a fair and transparent distribution of expenses.

## Technologies Used

The Shared Resource Management Application utilizes the following technologies:

- **React:** A JavaScript library for building user interfaces.
- **Redux Toolkit:** A state management library for React applications.
- **Tailwind CSS:** A utility-first CSS framework for designing responsive and efficient user interfaces.

## Installation

To get started with the application, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.

## Usage

1. Start the application with `npm start`.
2. Input relevant details using the provided components.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
