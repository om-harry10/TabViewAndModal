import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  Animated,
  Button,
  Dimensions,
} from "react-native";

const slidingModalWidth = 300;
const deviceWidth = Dimensions.get("window").width;

export default class CustomSwipeModal extends Component {
  constructor() {
    super();

    this.AnimationRight = new Animated.Value(0);
    this.AnimationLeft = new Animated.Value(0);
    this.AnimationTop = new Animated.Value(0);
    this.AnimationBottom = new Animated.Value(0);

    this.openModalToggle = true;
  }

  openModalLeft = () => {
    if (this.openModalToggle === true) {
      Animated.timing(this.AnimationLeft, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        this.openModalToggle = false;
      });
    } else {
      Animated.timing(this.AnimationLeft, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        this.openModalToggle = true;
      });
    }
  };

  openModalRight = () => {
    if (this.openModalToggle === true) {
      Animated.timing(this.AnimationRight, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        this.openModalToggle = false;
      });
    } else {
      Animated.timing(this.AnimationRight, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        this.openModalToggle = true;
      });
    }
  };

  openTopModal = () => {
    Animated.timing(this.AnimationTop, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      this.openModalToggle = false;
    });
  };
  closeTopModal = () => {
    Animated.timing(this.AnimationTop, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      this.openModalToggle = true;
    });
  };

  openBottomModal = () => {
    Animated.timing(this.AnimationBottom, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      this.openModalToggle = false;
    });
  };
  closeBottomModal = () => {
    Animated.timing(this.AnimationBottom, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      this.openModalToggle = true;
    });
  };

  render() {
    const Animation_Interpolate_Right = this.AnimationRight.interpolate({
      inputRange: [0, 1],
      outputRange: [slidingModalWidth - 50, 0],
    });

    const Animation_Interpolate_Left = this.AnimationLeft.interpolate({
      inputRange: [0, 1],
      outputRange: [-(slidingModalWidth - 50), 0],
    });

    const Animation_Interpolate_Top = this.AnimationTop.interpolate({
      inputRange: [0, 1],
      outputRange: [-slidingModalWidth, 0],
    });

    const Animation_Interpolate_Bottom = this.AnimationBottom.interpolate({
      inputRange: [0, 1],
      outputRange: [slidingModalWidth, 0],
    });

    return (
      <View style={[styles.container]}>
        <Text style={styles.textStyle}>
          {" "}
          Components Which we Want To Show in App, can be Placed here.{" "}
        </Text>

        <Animated.View
          style={[
            styles.rootOpenModalLeft,
            { transform: [{ translateX: Animation_Interpolate_Left }] },
          ]}
        >
          <View style={styles.mainContainerStyle}>
            <Text style={styles.textStyle}>
              {" "}
              Put the Components Here Which it needed in Modal.{" "}
            </Text>
          </View>

          <TouchableOpacity
            onPress={this.openModalLeft}
            style={{ padding: 1, marginTop: 40, marginLeft: 20 }}
          >
            <Image
              source={require("../assets/rightArrow.png")}
              style={{ resizeMode: "contain", width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </Animated.View>


        <Animated.View
          style={[
            styles.rootOpenModal,
            { transform: [{ translateX: Animation_Interpolate_Right }] },
          ]}
        >
          <TouchableOpacity
            onPress={this.openModalRight}
            style={{
              padding: 1,
              marginTop: 40,
              marginRight: 20,
              position: "relative",
            }}
          >
            <Image
              source={require("../assets/leftArrow.png")}
              style={{ resizeMode: "contain", width: 30, height: 30 }}
            />
          </TouchableOpacity>
          <View style={styles.mainContainerStyle}>
            <Text style={styles.textStyle}>
              {" "}
              Put the Components Here Which it needed in Modal.{" "}
            </Text>
          </View>
        </Animated.View>

        <Button title="Open Top modal" onPress={this.openTopModal} />
        <Animated.View
          style={[
            styles.rootOpenModalTop,
            { transform: [{ translateY: Animation_Interpolate_Top }] },
          ]}
        >
          <Text>This is Top Modal View</Text>

          <Button title="Close Modal" onPress={this.closeTopModal} />
        </Animated.View>

        <View style={{ height: 20 }} />
        
        <Button title="Open Bottom modal" onPress={this.openBottomModal} />
        <Animated.View
          style={[
            styles.rootOpenModalBottom,
            { transform: [{ translateY: Animation_Interpolate_Bottom }] },
          ]}
        >
          <Text>This is Bottom Modal View</Text>

          <Button title="Close Modal" onPress={this.closeBottomModal} />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  rootOpenModal: {
    position: "absolute",
    flexDirection: "row",
    right: 0,
    bottom: 0,
    top: Platform.OS == "ios" ? 20 : 0,
    width: slidingModalWidth,
  },
  rootOpenModalLeft: {
    position: "absolute",
    flexDirection: "row",
    left: 0,
    bottom: 0,
    top: Platform.OS == "ios" ? 20 : 0,
    width: slidingModalWidth,
  },
  rootOpenModalTop: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "red",
    height: slidingModalWidth,
    width: deviceWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  rootOpenModalBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "green",
    height: slidingModalWidth,
    width: deviceWidth,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  mainContainerStyle: {
    flex: 1,
    backgroundColor: "#FFC107",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  textStyle: {
    fontSize: 25,
    padding: 10,
    textAlign: "center",
    color: "#FF5722",
  },
});
