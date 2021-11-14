import { forEach } from "lodash";
import { MockData } from "./interface";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const initLocalStorage = (data: MockData) => {
	forEach(data, (dataItem, idx) => {
		localStorage.setItem(idx, JSON.stringify(dataItem));
	});
};
