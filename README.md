# Interactive Kanban Board Application

This project is an interactive Kanban board application built using **ReactJS** that integrates with the API provided at `https://api.quicksell.co/v1/internal/frontend-assignment`. The application offers a dynamic and responsive user interface to manage and organize tasks efficiently.

## Features

### Grouping Options
The application allows users to group tickets in three different ways:
1. **By Status**: Organizes tickets by their current status.
2. **By User**: Groups tickets by the assigned user.
3. **By Priority**: Categorizes tickets based on their priority level.

### Sorting Options
Users can sort tickets within each group using:
1. **Priority**: Sort tickets in descending order of priority.
2. **Title**: Sort tickets in ascending order alphabetically by their title.

### Additional Functionalities
- **State Persistence**: The application retains the user's view state even after a page reload.
- **Priority Levels**:
  - `4`: Urgent  
  - `3`: High  
  - `2`: Medium  
  - `1`: Low  
  - `0`: No Priority  
- Fully **responsive design** ensuring compatibility across devices.
- Uses **Pure CSS** for styling, avoiding external CSS frameworks.

## Requirements

- **API**: Connect to the API endpoint at `https://api.quicksell.co/v1/internal/frontend-assignment`.
- **ReactJS**: Build the application using pure ReactJS (no Next.js or similar frameworks).
- **CSS**: Style the application with pure CSS or Styled JSX (no libraries like Bootstrap, Tailwind, Material UI, etc.).
