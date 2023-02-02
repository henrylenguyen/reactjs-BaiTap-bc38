import React from 'react';
import { ThemeProvider } from 'styled-components';
import Card from './card/Card';
import CardList from './card/CardList';
import { URLSlug } from "./URLSlug.js";
const theme = {
  colors: {
    primary: "#333",
  },
};

const MyProjects = () => {
  return (
    <ThemeProvider theme={theme}>
      <CardList>
        {URLSlug.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            image={item.img}
            btnSecondary={true}
            to={item.to}
            href={item.href}
          ></Card>
        ))}
      </CardList>
    </ThemeProvider>
  );};

export default MyProjects;