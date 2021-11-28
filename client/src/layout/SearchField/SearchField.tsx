import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { ReactComponent as SearchIcon} from "./search.svg";
import styles from "./SearchField.module.scss";
import { SearchFieldProps } from "./SearchField.props";
import cn from "classnames";

const SearchField:FC<SearchFieldProps> = ({className}): JSX.Element => {

	const [searchValue, setSearchValue] = useState<string>('');

	const handleSearchInput = (event:ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setSearchValue(event.target.value);
	};

	const handleSubmitSearch = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setSearchValue('');
	};

	//TODO MUI
	return (
		<form
			className={cn(className, styles.searchForm)}
			onSubmit={e=>handleSubmitSearch(e)}
		>
			<span className={styles.searchIcon}>
				<SearchIcon/>
			</span>
			<input
				type="text"
				value={searchValue}
				className={styles.searchInput}
				placeholder="Search..."
				onChange={(e)=>handleSearchInput(e)}/>
		</form>
	);
};

export default SearchField;
