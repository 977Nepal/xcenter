export const formBuilderData = {
    current_page: 1,
    data: [
      {
        id: 1,
        name: "Sanjib",
        username: "sanjib",
        email: "chaudharysanjib.393@gmail.com",
        roles: [
          {
            id: 1,
            name: "admin",
            display_name: "Admin",
            description:
              "Admin description includes the rules and regulation of activities",
            user_type: "admin",
            created_at: "2025-02-19T05:10:50.000000Z",
            updated_at: "2025-03-02T10:24:28.000000Z",
          },
        ],
      },

    ],
    from: 1,
    last_page: 1,
    per_page: "20",
    to: 13,
    total: 13,
  };
  export const formError = {
    username: ["The username field is required."],
    name: ["The name field is required."],
    email: ["The email type field is required."],
    phone: ["The phone type field is required."],
    checkbox: ["The checkbox field is required."],
    gender: ["The gender field is required."],
  };
  


  export const postUserData = {
    email: "chaudharysanjib.393@email.com",
    name: "test name",
    phone: 9844479890,
    checkbox: true,
    gender: "Male",
    username: "test",
  };
  
  export const postUserDataEmpty = {
    email: "",
    name: "",
    phone: "",
    username: "",
    checkbox: "",
    gender: "",
  };

  