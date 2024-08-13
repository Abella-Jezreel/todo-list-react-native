import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    tab: {
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    selectedTab: {
      borderBottomWidth: 2,
      borderBottomColor: 'blue',
    },
    tabText: {
      fontSize: 16,
    },
  });