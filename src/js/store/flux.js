const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contactsList: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getContacts: async () => {
				const settings = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
                };
                
                const request = await fetch("https://assets.breatheco.de/apis/fake/contact/", settings);
                const json = await request.json();
                const data = json;
                setStore({ contactsList: data})
			}
		}
	};
};

export default getState;
