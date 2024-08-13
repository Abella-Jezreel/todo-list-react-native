import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./Footer.style";

const Footer = ({ tabs = ["All", "In Progress", "Done"], totalItems, totalInProgress, totalDone = 0, onTabPress }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
    if (onTabPress) {
      onTabPress(tab);
    }
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, selectedTab === tab && styles.selectedTab]}
          onPress={() => handleTabPress(tab)}
        >
          <Text style={[styles.tabText, selectedTab === tab && styles.selectedTabText]}>
            {tab === "All" && `${tab} (${totalItems})`}
            {tab === "In Progress" && `${tab} (${totalInProgress})`}
            {tab === "Done" && `${tab} (${totalDone})`}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Footer;
