import React from "react";

export const getPriorityLabel = (priority) => {
  switch (priority) {
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

const orderByPriority = (tickets) => {
  return tickets.sort((a, b) => b.priority - a.priority);
};

const orderByTitle = (tickets) =>
  tickets.sort((a, b) => (a.title < b.title ? -1 : 1));

export const groupTicketsByStatus = (tickets) => {
  const groups = tickets.reduce(
    (result, ticket) => {
      if (!result[ticket.status]) {
        result[ticket.status] = [];
      }
      result[ticket.status].push(ticket);
      return result;
    },
    { Backlog: [], Todo: [], "In progress": [], Done: [], Canceled: [] }
  );

  return groups;
};

export const groupTicketsByPriority = (tickets) => {
  const groups = tickets.reduce(
    (result, ticket) => {
      const priority = getPriorityLabel(ticket.priority);
      if (!result[priority]) {
        result[priority] = [];
      }
      result[priority].push(ticket);
      return result;
    },
    { "No priority": [], Urgent: [], High: [], Medium: [], Low: [] }
  );

  return groups;
};

export const groupTicketsByUserId = (tickets) => {
  const groups = tickets.reduce((result, ticket) => {
    if (!result[ticket.userId]) {
      result[ticket.userId] = [];
    }
    result[ticket.userId].push(ticket);
    return result;
  }, {});

  return groups;
};

export const mapUsersByUserId = (users) => {
  let group = users.reduce((accumulator, user) => {
    accumulator[user.id] = user;
    return accumulator;
  }, {});

  return group;
};

export const loadGrid = (tickets, grouping, ordering) => {
  let orderedTickets;
  if (ordering === "priority") orderedTickets = orderByPriority(tickets);
  else orderedTickets = orderByTitle(tickets);

  switch (grouping) {
    case "status":
      return groupTicketsByStatus(orderedTickets);
    case "priority":
      return groupTicketsByPriority(orderedTickets);
    case "user":
      return groupTicketsByUserId(orderedTickets);
    default:
      return groupTicketsByPriority(orderedTickets);
  }
};

const TicketGrid = ({ tickets, grouping, ordering }) => {
  const groupedTickets = loadGrid(tickets, grouping, ordering);

  return (
    <div>
      {Object.entries(groupedTickets).map(([groupKey, groupTickets]) => (
        <div key={groupKey}>
          <h3>{groupKey}</h3>
          <ul>
            {groupTickets.map((ticket) => (
              <li key={ticket.id}>
                {ticket.title} - {getPriorityLabel(ticket.priority)} -{" "}
                {ticket.status}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TicketGrid;
