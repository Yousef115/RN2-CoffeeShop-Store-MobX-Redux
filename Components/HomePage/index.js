import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeCart from "../CoffeeCart";
import CoffeeDetail from "../CoffeeDetail";
import Login from "../Login";

//actions
import { getCoffeeShops } from "../../store/actions/";

class HomePage extends Component {
  componentDidMount() {
    this.props.getCoffeeShops();
  }
  render() {
    if (this.props.loading) return <Text> Loading </Text>;
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <Header style={styles.transparent} />
        <CoffeeList />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCoffeeShops: () => dispatch(getCoffeeShops())
  };
};

const mapStateToProps = state => {
  return {
    loading: state.coffeeReducer.loading
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
