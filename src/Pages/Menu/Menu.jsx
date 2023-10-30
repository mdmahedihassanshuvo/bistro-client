import React from "react";
import MenuOffer from "./Components/Offer/MenuOffer";
import Dessert from "./Components/Dessert/Dessert";
import useMenu from "../../Hooks/Menu/useMenu";
import Pizza from "./Components/Pizza/Pizza";

import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import Salad from "./Components/Salad/Salad";
import Soup from "./Components/Soup/Soup";
import Cover from "../../Shared/Components/Cover/Cover";

import menuImg from "../../assets/menu/banner3.jpg"


const Menu = () => {

  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === 'dessert');
  const pizza = menu.filter((item) => item.category === 'pizza');
  const salad = menu.filter((item) => item.category === 'salad');
  const soup = menu.filter((item) => item.category === 'soup');

  return (
    <>
    <Cover img={menuImg} title="our menu" />
    <MenuOffer/>
    <Dessert img={dessertImg} dessert={dessert} title="dessert" />
    <Pizza img={pizzaImg} pizza={pizza} title="pizza" />
    <Salad img={saladImg} salad={salad} title="salad" />
    <Soup img={soupImg} soup={soup} title="soup" />
    </>
  );
};

export default Menu;
