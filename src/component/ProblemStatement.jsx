import React from 'react';

const ProblemStatement = () => {
    return (
        <div className="min-h-screen pt-24 pb-10 text-white-300 bg-gradient-to-b from-gray-800 to-black  ">
            <h2 className="text-4xl font-bold mb-6">Problem Statement: Group Living Expense Management</h2>
            <p className="mb-4">
                Suppose you live with your friends in a group having a total of "N" people. Now you order a certain "UNIT" of commodities on each day for "m" number of days. The "UNITS" ordered on any day depend on the people present on that day. The group member may not necessarily stay for all of those "M" days and can stay and leave as he/she wish. When the bill arrives after "M" days, group members need to pay their share of bill based on how much he/she has actually used the commodity in those days as they will not be paying for the days when they were absent. You are provided with the attendance of each member in those "M" days, and the bill lists the number of commodities ordered on each day.
            </p>

            <h3 className="text-2xl font-bold mb-2">Challenges:</h3>
            <ul className="list-disc ml-8 mb-4">
                <li>
                    <strong>Dynamic Group Presence:</strong> Group members may have varying attendance during the billing period. Individuals can leave and return multiple times during the commodity delivery period.
                </li>
                <li>
                    <strong>Expense Tracking:</strong> Difficulty in tracking individual usage of the commodity on days of presence. Requirement to split the bill based on actual usage, considering varying attendance.
                </li>
            </ul>

            <h3 className="text-2xl font-bold mb-2">Solution: Shared Living Expense Management Application</h3>
            <p className="mb-4">
                The Shared Living Expense Management Application is designed to address the complexities of managing shared expenses in a dynamic group living environment. The application offers features to:
            </p>
            <ul className="list-disc ml-8 mb-4">
                <li>Input the number of commodities received each day based on the group's attendance.</li>
                <li>Dynamically manage the list of individuals in the group, considering variations in attendance.</li>
                <li>Record attendance for each individual on specific days using continuous intervals or slots.</li>
                <li>Automatically calculate and display a fair distribution of expenses based on attendance.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-2">Key Features:</h3>
            <ul className="list-disc ml-8 mb-4">
                <li>
                    <strong>Attendance Tracking:</strong> Record the presence or absence of each group member on continuous slots during the billing period.
                </li>
                <li>
                    <strong>Dynamic Expense Calculation:</strong> Calculate expenses based on actual attendance, ensuring fair and accurate distribution.
                </li>
                <li>
                    <strong>Flexible Commodity Management:</strong> Whether it's water bottles, groceries, or any other shared item, the application adapts to different scenarios.
                </li>
                <li>
                    <strong>Transparent Billing:</strong> Enhance transparency by providing a detailed breakdown of expenses for each individual.
                </li>
            </ul>

            <h3 className="text-2xl font-bold mb-2">Benefits:</h3>
            <ul className="list-disc ml-8 mb-4">
                <li>
                    <strong>Fair Expense Sharing:</strong> Group members only contribute based on their actual presence during commodity delivery.
                </li>
                <li>
                    <strong>Automated Billing Process:</strong> The application automates the calculation of expenses, reducing manual effort.
                </li>
                <li>
                    <strong>Improved Transparency:</strong> Transparent tracking of expenses and attendance fosters better communication and accountability among group members.
                </li>
            </ul>

            <h3 className="text-2xl font-bold mb-2">Target Users:</h3>
            <p className="mb-4">
                Residents of shared living spaces, such as students in dormitories, flatmates in apartments, or any group of individuals managing shared resources and expenses.
            </p>

            <h3 className="text-2xl font-bold mb-2">Outcome:</h3>
            <p>
                A streamlined and equitable approach to managing shared expenses in a group living environment, promoting fairness and transparency in expense sharing.
            </p>
        </div>
    );
};

export default ProblemStatement;
