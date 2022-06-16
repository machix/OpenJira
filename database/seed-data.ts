interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "Pending: Magna Lorem Lorem veniam sunt proident proident.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: "In-Progress: Sint fugiat ullamco ipsum id non.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        "Finished: Pariatur dolore qui aliqua pariatur ex ut ex aute officia minim.",
      status: "finished",
      createdAt: Date.now() - 10000,
    },
  ],
};
