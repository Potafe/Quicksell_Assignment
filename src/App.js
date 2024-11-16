import React, { useCallback, useEffect, useState } from "react";
import Header from "./Components/Header";
import Grid from "./Components/KanbanGrid";
import { GET_TICKETS_URL } from "./api";
import { loadGrid, mapUsersByUserId } from "./utils/index";
import Loader from "./Components/Loader";
import "./App.css";

function App() {
  const [tickets, setTickets] = useState([]);
  const [userData, setUserData] = useState({});
  const [gridData, setGridData] = useState({});
  const [grouping, setGroupingValue] = useState("status");
  const [ordering, setOrderingValue] = useState("priority");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSettings();
    fetch(GET_TICKETS_URL)
      .then((resp) => resp.json())
      .then((res) => {
        const { tickets, users } = res;
        setTickets(tickets);
        setUserData(mapUsersByUserId(users));
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    if (!tickets.length) return;
    setGridData(loadGrid(tickets, grouping, ordering));
    setLoading(false);
  }, [grouping, ordering, tickets]);

  const onsetGroupingValue = useCallback((value) => {
    setLoading(true);
    setGroupingValue(value);
    saveSettings({ grouping: value });
  }, []);

  const onsetOrderingValue = useCallback((value) => {
    setLoading(true);
    setOrderingValue(value);
    saveSettings({ ordering: value });
  }, []);

  const saveSettings = useCallback((data) => {
    for (let key in data) localStorage.setItem(key, data[key]);
  }, []);

  const loadSettings = useCallback(() => {
    setGroupingValue(localStorage.getItem("grouping") || "status");
    setOrderingValue(localStorage.getItem("ordering") || "priority");
  }, []);

  return (
    <div className="App">
      <Header
        grouping={grouping}
        setGroupingValue={onsetGroupingValue}
        ordering={ordering}
        setOrderingValue={onsetOrderingValue}
      />
      {loading ? (
        <Loader />
      ) : (
        <Grid gridData={gridData} grouping={grouping} UserMapping={userData} />
      )}
    </div>
  );
}

export default App;
