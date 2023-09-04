import React, { useEffect, useState } from "react";
import { Header } from "../CommonComponents/Header";
import { Box, Tab, Tabs } from "@mui/material";
import { Typography } from "@mui/material";
import { DataPlans } from "../CommonComponents/DataPlans";
import { CallPlans } from "../CommonComponents/CallPlans";
import { Cart } from "../CommonComponents/Cart";
import PropTypes from "prop-types";
import { PurchasedOrderList } from "./PurchasedOrderList";
import FAQSection from "../CommonComponents/Help_support/FAQSection";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography style={{ margin: 10 }} variant="h6" fontWeight="bold">
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Home = () => {
  const [value, setValue] = React.useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToOrder = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const handleRemoveFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    console.log(JSON.stringify(cartItems));
  }, [cartItems]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Header />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              sx={{ textTransform: "none", fontWeight: "bold" }}
              label="Data Plans"
              {...a11yProps(0)}
            />
            <Tab
              sx={{ textTransform: "none", fontWeight: "bold" }}
              label="Call Plans"
              {...a11yProps(1)}
            />
            <Tab
              sx={{ textTransform: "none", fontWeight: "bold" }}
              label="Order"
              {...a11yProps(2)}
            />
            <Tab
              sx={{ textTransform: "none", fontWeight: "bold" }}
              label="My Order History"
              {...a11yProps(3)}
            />
                  <Tab
              sx={{ textTransform: "none", fontWeight: "bold" }}
              label="FAQ / Help"
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <DataPlans addToOrder={handleAddToOrder} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <CallPlans addToOrder={handleAddToOrder} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Cart
            cartItems={cartItems}
            removeCartItem={handleRemoveFromCart}
            clearCartItems={handleClearCart}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <PurchasedOrderList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <FAQSection />
        </CustomTabPanel>
      </Box>
    </div>
  );
};
