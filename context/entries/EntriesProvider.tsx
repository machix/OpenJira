import { FC, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { EntriesContext, entriesReducer } from "./";
import { Entry } from "../../interfaces";

export interface EntriesState {
  entries: Entry[];
}

interface Props {
  children: React.ReactNode;
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "Pending: Magna Lorem Lorem veniam sunt proident proident.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "Inn-Progress: Sint fugiat ullamco ipsum id non.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description:
        "Finished: Pariatur dolore qui aliqua pariatur ex ut ex aute officia minim.",
      status: "finished",
      createdAt: Date.now() - 10000,
    },
  ],
};

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: "pending",
    };

    dispatch({ type: "[Entries] Add-Entry", payload: newEntry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        // Methods
        addNewEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
