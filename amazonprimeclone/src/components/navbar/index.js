import React from "react";
import {Container,List,ListItem,NavBar,Logo,SearchBox,SearchIcon,SearchContainer,Profile} from "./styles/navbarStyles"

export default function Header({children,...restProps}){
    return (<Container {...restProps}>{children}</Container>)
}

Header.List = function HeaderList({children,restProps}){
    return (<List {...restProps}>{children}</List>)
}
Header.ListItem = function HeaderList({children,restProps}){
    return (<ListItem {...restProps}>{children}</ListItem>)
}

Header.NavBar = function HeaderList({children,restProps}){
    return (<NavBar {...restProps}>{children}</NavBar>)
}


Header.Logo = function HeaderLogo({children,...restProps}){
    return (<Logo {...restProps}>{children}</Logo>)
}



Header.SearchBox = function HeaderSearchBox({children,...restProps}){
    return (<SearchBox {...restProps}>{children}</SearchBox>)
}

Header.SearchIcon = function HeaderSearchIcon({children,...restProps}){
    return <SearchIcon {...restProps}>{children}</SearchIcon>
}
Header.SearchContainer = function HeaderSearchContainer({children,...restProps}){
    return <SearchContainer {...restProps}>{children}</SearchContainer>
}

Header.Profile = function HeaderProfile({children,...restProps}){
    return (<Profile {...restProps}>{children}</Profile>)
}
