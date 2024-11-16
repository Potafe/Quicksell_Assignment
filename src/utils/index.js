import React from "react";

const getPriorityDescription = (priorityLevel) => {
  switch (priorityLevel) {
    case 0:
      return "No priority";
    case 1:
      return "Low";
    case 2:
      return "Medium";
    case 3:
      return "High";
    case 4:
      return "Urgent";
    default:
      return "NA";
  }
};

const sortByPriority = (ticketsList) =>
  ticketsList.sort((a, b) => (a.priority > b.priority ? -1 : 1));

const sortByTitle = (ticketsList) =>
  ticketsList.sort((a, b) => (a.title < b.title ? -1 : 1));

export const categorizeByStatus = (ticketsList) => {
  const grouped = ticketsList.reduce(
    (accumulator, ticket) => {
      if (!accumulator[ticket.status]) {
        accumulator[ticket.status] = [];
      }
      accumulator[ticket.status].push(ticket);
      return accumulator;
    },
    { Backlog: [], Todo: [], "In progress": [], Done: [], Canceled: [] }
  );

  return grouped;
};

export const categorizeByPriority = (ticketsList) => {
  const grouped = ticketsList.reduce(
    (accumulator, ticket) => {
      const priorityLabel = getPriorityDescription(ticket.priority);
      if (!accumulator[priorityLabel]) {
        accumulator[priorityLabel] = [];
      }
      accumulator[priorityLabel].push(ticket);
      return accumulator;
    },
    { "No priority": [], Urgent: [], High: [], Medium: [], Low: [] }
  );

  return grouped;
};

export const categorizeByUser = (ticketsList) => {
  const grouped = ticketsList.reduce((accumulator, ticket) => {
    if (!accumulator[ticket.userId]) {
      accumulator[ticket.userId] = [];
    }
    accumulator[ticket.userId].push(ticket);
    return accumulator;
  }, {});

  return grouped;
};

export const mapUsers = (usersList) => {
  let userMap = usersList.reduce((accumulator, user) => {
    accumulator[user.id] = user;
    return accumulator;
  }, {});

  return userMap;
};

export const createTicketGrid = (ticketsList, groupingType, sortingType) => {
  let sortedTickets;
  if (sortingType === "priority") sortedTickets = sortByPriority(ticketsList);
  else sortedTickets = sortByTitle(ticketsList);

  switch (groupingType) {
    case "status":
      return categorizeByStatus(sortedTickets);
    case "priority":
      return categorizeByPriority(sortedTickets);
    case "user":
      return categorizeByUser(sortedTickets);
    default:
      return categorizeByUser(sortedTickets);
  }
};

const TicketDisplay = ({ ticketsList, groupingType, sortingType }) => {
  const groupedTickets = createTicketGrid(ticketsList, groupingType, sortingType);

  return (
    <div>
      {Object.entries(groupedTickets).map(([groupName, ticketsInGroup]) => (
        <div key={groupName}>
          <h3>{groupName}</h3>
          <ul>
            {ticketsInGroup.map((ticket) => (
              <li key={ticket.id}>
                {ticket.title} - {getPriorityDescription(ticket.priority)} -{" "}
                {ticket.status}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TicketDisplay;
