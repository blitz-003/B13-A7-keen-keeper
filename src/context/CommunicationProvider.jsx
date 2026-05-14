import { useState } from "react";
import { CommunicationContext } from "./communication.context";

export const CommunicationProvider = ({ children }) => {
  const [communications, setCommunications] = useState([]);

  const addCommunication = (event) => {
    setCommunications((prev) => [event, ...prev]);
  };

  return (
    <CommunicationContext.Provider value={{ communications, addCommunication }}>
      {children}
    </CommunicationContext.Provider>
  );
};
