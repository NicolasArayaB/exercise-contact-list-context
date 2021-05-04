const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			agenda: [],
			contact: {}
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
			getContact: async (id, setName, setEmail, setPhone, setAddress) => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				const request = await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, settings);
				const json = await request.json();
				console.log(json, "<--- get contact");
				setStore({ contact: json });
				setName(json.full_name);
				setEmail(json.email);
				setPhone(json.phone);
				setAddress(json.address);
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

			addContact: async (name, email, phone, address) => {
				const settings = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						email: email,
						phone: phone,
						address: address,
						agenda_slug: "nico"
					})
				};
				const request = await fetch("https://assets.breatheco.de/apis/fake/contact/", settings);
				const json = await request.json();
				console.log(json, "<--- create contact");
			},

			// update contact info
			updateContact: async (id, name, email, phone, address) => {
				const settings = {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						email: email,
						phone: phone,
						address: address,
						agenda_slug: "nico"
					})
				};
				const request = await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, settings);
				const json = await request.json();
				const data = json;
				console.log(data, "<--- update contact", json);
			}
		}
	};
};

export default getState;
