const body = () => ({
  pet: [
    //POST /pet
    {
      id: 0,
      category: {
        id: 0,
        name: "Spits Alemão",
      },
      name: "Luck",
      photoUrls: ["string"],
      tags: [
        {
          id: 0,
          name: "string",
        },
      ],
      status: "available",
    },
    //PUT /pet
    {
      id: 0,
      category: {
        id: 1,
        name: "Chihuahua pelo longo",
      },
      name: "Thor",
      photoUrls: ["string"],
      tags: [
        {
          id: 0,
          name: "string",
        },
      ],
      status: "available",
    },
  ],
});

module.exports = body();
