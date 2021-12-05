import React, { FC } from "react";
import styles from "./Navigation.module.scss";
import { NavigationProps } from "./Navigation.props";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { map } from "lodash";
import { C_DARK_BLUE, C_SECONDARY } from "constants/style-variables";
import { Link, Box } from "@mui/material";

const navigationItems = [
	{ url: '/blog', title: 'Blog' },
	{ url: '/about', title: 'About' },
	{ url: '/contacts', title: 'Contacts' }
];

const Navigation: FC<NavigationProps> = ({ className }): JSX.Element => {

	return (
		<Box className={cn(className, styles.navigation)}>
			{map(navigationItems, ({ url, title }) =>
				<NavLink
					to={url}
					key={url}
					style={({ isActive }) => {
						return {
							fontWeight: 'bold',
							color: isActive ? C_SECONDARY : C_DARK_BLUE
						};
					}}>
					<Link color="inherit" underline="hover">{title}</Link>
				</NavLink>
			)}
		</Box>
	);
};

export default Navigation;
