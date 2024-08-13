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
      borderBottomColor: '#2F76E5',
    },
    tabText: {
      fontSize: 16,
    },
    selectedTabText: {
        fontWeight: 'bold',
        color: '#2F76E5',
      },
  });