import { useContext } from "react";
import { CommunicationContext } from "../context/communication.context";

export const useCommunication = () => {
  const context = useContext(CommunicationContext);

  if (!context) {
    throw new Error(
      "useCommunication must be used inside CommunicationProvider",
    );
  }

  return context;
};
