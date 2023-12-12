import React from 'react';

const AppGuide = () => {
    return (
        <div className="min-h-screen pt-6 text-blue-300 bg-gradient-to-b from-gray-800 to-black absolute top-0">
            <h2 className="text-2xl font-bold mb-4">Welcome to the Shared Resource Management Application!</h2>
            <p>
                This application helps you manage shared resources and expenses among a group of users. Whether you're tracking water bottles, groceries, or any other shared items, this guide will walk you through the process.
            </p>

            <h3 className="text-xl font-bold mt-4">How to Use the Application</h3>

            <ol className="list-decimal ml-6">
                <li className="mb-2">
                    <strong>Input Days:</strong> Go to the "Days" section and input the number of days service was delivered in a given month. For each day, input the number of units received.
                </li>

                <li className="mb-2">
                    <strong>Input Users:</strong> Navigate to the "User" section and input the number of users along with their names. Dynamic input fields will be generated for each user, ensuring accurate mapping of individual expenses.
                </li>

                <li className="mb-2">
                    <strong>Mark Attendance:</strong> Visit the "Slots" section to mark attendance for each user on continuous slots. Create slots for days when users are present or actively engaged with the shared resource.
                </li>

                <li className="mb-2">
                    <strong>Calculate Cost:</strong> Switch to the "Cost" section and input the cost or relevant information. The application will calculate the shared cost based on attendance and display a table showing how much each user owes.
                </li>
            </ol>

            <p className="mt-4">
                The application is designed to simplify the process of managing shared expenses. Feel free to explore and adapt it to your specific needs.
            </p>

            <h3 className="text-xl font-bold mt-6">Example Use Case</h3>

            <p>
                Imagine you and your friends share a living space and decide to collectively manage the cost of essential supplies, like water bottles, using this application. The example use case in the <a href="https://docs.google.com/document/d/1F4mH-MMf-wzAFMGYmZxMjAZ9eewhmVKI/edit?usp=sharing&ouid=110466772589408900524&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className='font-extrabold'>
                    documentation
                </a> provides more details on how to apply the application to real-life scenarios.



            </p>

            <p className="mt-4">
                Happy managing!
            </p>

            <div className='pt-10 text-green-50'>
                <p>This is the App Guide document:</p>
                <a href="https://docs.google.com/document/d/1F4mH-MMf-wzAFMGYmZxMjAZ9eewhmVKI/edit?usp=sharing&ouid=110466772589408900524&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                    Open App Guide
                </a>
            </div>
        </div>
    );
};

export default AppGuide;
