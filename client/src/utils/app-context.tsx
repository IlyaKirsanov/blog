import React from "react";

type Action = { type: 'toggleModal' };
type Dispatch = (action: Action) => void;
type State = { isModalOpen: boolean };
type ModalProviderProps = { children: React.ReactNode };

export const AppModalContext = React.createContext<{ state: State, dispatch: Dispatch } | undefined>(undefined);

const toggleModalReducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'toggleModal': {
			return { isModalOpen: !state.isModalOpen };
		}
		default: {
			throw new Error(`Unhandled action type: ${action}`);
		}
	}
};

const AppModalProvider = ({ children }: ModalProviderProps): JSX.Element => {
	const [state, dispatch] = React.useReducer(toggleModalReducer, { isModalOpen: false });

	const value = { state, dispatch };

	return (
		<AppModalContext.Provider value={value}>
			{children}
		</AppModalContext.Provider>
	);
};


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useAppModal = () => {
	const context = React.useContext(AppModalContext);

	if (!context) throw new Error('useAppModal must be used within a CountProvider');

	return context;
};

export { AppModalProvider, useAppModal };
