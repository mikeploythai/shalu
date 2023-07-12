import { createServerContext, type ServerContextJSONValue } from "react";

type Store = ServerContextJSONValue | null;

export const MessageContext = createServerContext(
  "stored-message",
  null as Store
);

export const UserContext = createServerContext("stored-user", null as Store);
