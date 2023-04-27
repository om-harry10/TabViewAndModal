import { View, Text , StyleSheet, Button} from 'react-native'
import React from 'react'
import Swiper from "react-native-swiper";

export default SwiperComponent = (props) => {
    return (
      <Swiper  showsButtons={props.tabs.length && props.tabs?true:false}>
        {props.tabs.map((item, index) => {
          return (
            <View style={styles.tabViewStyle}>
              <Text>Screen {item.id}</Text>
              <Button
                title="Remove Tab"
                onPress={() => props.removeViewAtIndex(index)}
              />
            </View>
          );
        })}
      </Swiper>
    );
  };
  
  const styles = StyleSheet.create({
    tabViewStyle: {
      flex: 1,
      backgroundColor: "red",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  