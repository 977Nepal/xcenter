# Author
name : Sanjib Kumar Chaudhary
phone: 9844479890
email: chaudharysanjib.393@gmail.com


# Form Builder Application
This is a simple Form Builder application built with React.js, Redux, Redux-Thunk, and Lucid React for icons. The application allows users to create and manage dynamic forms with drag-and-drop functionality.

## Features

- **Home Page**: Displays a welcome message and provides a button to navigate to the dashboard.
- **Login Page**: If the user is not logged in, they are redirected to the login page.
- **Dashboard**: Displays a list of created forms. If the user is logged in, 
                 they can access this page; otherwise, they are redirected to the login page.
- **Form Builder**: Allows users to create and edit forms, including:
  - Drag-and-drop interface for adding fields
  - Configuring field properties (labels, placeholders, validation, required/optional, field types, styles)
  - Layout customization (single column, two columns, responsive grid)
- **Saveable Forms**: Users can save their forms, and after saving, they are redirected back to the dashboard.
- **CRUDable Forms field**: Users can edit,delete their forms fields.

## Tech Stack

- **React.js**: A JavaScript library for building user interfaces.
- **Redux**: A state management library to manage the application's state.
- **Redux-Thunk**: Middleware to handle asynchronous actions in Redux.
- **Lucid React**: A UI kit for icons.
- **React Router**: For navigation and routing.
- **Drag-and-Drop**: To create a drag-and-drop interface for form field elements.
- **Server**: Used json-server as database for the CRUD functionality.
- **UI-library**: tailwindcss.
- **api access method**: axios.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/form-builder.git
   cd form-builder
   npm install 

# RUN 
1. npm run dev
2. npx json-server --watch server/data.json --port 5000
