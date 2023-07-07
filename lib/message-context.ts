import { type ServerContextJSONValue, createServerContext } from "react";

type StoredMessage = ServerContextJSONValue | null;

export const MessageContext = createServerContext(
  "stored-message",
  null as StoredMessage
);
