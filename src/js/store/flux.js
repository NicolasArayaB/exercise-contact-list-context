const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contactsList: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getAgenda: async () => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/nico", settings);
				const json = await request.json();
				const data = json;
				console.log(data, "<--- get agenda");
				setStore({ agenda: data });
			},

			// Get a particular contact by id.
			getContact: async id => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(`https://assets.breatheco.de/apis/fake/contact${id}`, settings);
				const json = await request.json;
				const data = json;
				console.log(data, "<--- get contact");
				setStore({ contact: data });
			},

			// delete 1 particular contact by id
			deleteContact: async id => {
				const request = await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "DELETE"
				});
				const json = await request.json();
				const data = json;
				console.log(data, "<--- delete contact");
			},

			// delete all contacts (agenda)
			deleteAgenda: async () => {
				const request = await fetch(`https://assets.breatheco.de/apis/fake/contact/agenda/nico`, {
					method: "DELETE"
				});
				const json = await request.json();
				const data = json;
				console.log(data, "<--- delete agenda");
			},

			createContact: async info => {
				console.log(info);
				const settings = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: {
						full_name: "Dave Bradley",
						email: "dave@gmail.com",
						agenda_slug: "nico",
						address: "47568 NW 34ST, 33434 FL, USA",
						phone: "7864445566"
					}
				};

				const request = await fetch("https://assets.breatheco.de/apis/fake/contact/", settings);
				const json = await request.json;
				const data = json;
				console.log(data, "<--- create contact");
			},

			// update contact info
			updateContact: async id => {
				const settings = {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: {
						full_name: "Dave Bradley",
						email: "dave@gmail.com",
						agenda_slug: "nico",
						address: "47568 NW 34ST, 33434 FL, USA",
						phone: "7864445566"
					}
				};
				const request = await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, settings);
				const json = await request.json();
				const data = json;
				console.log(data, "<--- update contact");
			}
		}
	};
};

export default getState;
