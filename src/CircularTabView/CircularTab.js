import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import SwiperScreen from "./SwiperScreen";

export default function CircularTab() {
  const [numberOfTabs, setNumberOfTabs] = useState(0);
  const [tabs, setTabs] = useState([]);

  const addNewTabs = () => {
    setTabs([...tabs, { id: numberOfTabs }]);
    setNumberOfTabs(numberOfTabs + 1);
  };
  const removeViewAtIndex = (index) => {
    const filterList = tabs.filter((item, inner) => inner != index);
    setTabs(filterList);
  };

  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 30, width: 200 }}>
        <Button title="Add New Tab" onPress={() => addNewTabs()} />
      </View>
      <View style={{ height: 50 }}>
        <ScrollView horizontal contentContainerStyle={styles.tabsStyle}>
        
          {tabs.map((item, index) => {
            const val = `Tab ${item.id}`;
            return (
              <View style={{ marginHorizontal: 20 }}>
                <Button title={val} />
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={{ marginTop: 20 }}></View>
      <SwiperScreen tabs={tabs} removeViewAtIndex={removeViewAtIndex} />
    </View>
  );
}



const styles = StyleSheet.create({
  tabsStyle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  tabViewStyle: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,

    alignItems: "center",
  },
  wrapper: {},
});
