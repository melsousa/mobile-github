import { StyleSheet } from "react-native";
import { Platform, StatusBar } from 'react-native'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  content: {
    flex: 1,
    marginTop: StatusBar.currentHeight 
  },
  header: {
    width: '100%',
    paddingHorizontal: 32,
    paddingVertical: 26,
    alignItems: 'center',
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: '#E6E5E5'
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color:  '#403937'
  },
  backButton: {
    position: 'absolute',
    left: 32,
    top: 30
  },
  body: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  emptyText: {
    color: '#8D8686'
  },
  productCardContainer: {
    paddingVertical: 16,
    flexDirection: 'row',
    gap: 16,
    paddingHorizontal: 32,
  },
  imageProduct: {
    width: 78,
    height: 64,
    resizeMode: "contain",
    borderRadius: 6,
    // backgroundColor: 'black'
  },
  productDetails: {
    flex: 1
  },
  productTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  productTitle: {
    fontWeight: '400',
    color: '#272221',
  },
  productPrice: {
    fontWeight: 'bold',
    color: '#272221',
  },
  actions: {
    flexDirection: 'row',
    gap: 8
  },
  counter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderColor: '#E6E5E5',
    // borderWidth: 1,
    // borderRadius: 6,
    padding: 8,
    width: 100
  },
  addButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  decrementButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  trashButton: {
    backgroundColor: '#EDEDED',
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 6
  },
  footer: {
    height: 160,
    backgroundColor: '#FFF',
  },
  footerContent: {
    flex: 1,
    marginBottom: 34,
    paddingTop: 28,
    paddingHorizontal: 32,
    justifyContent: 'space-between'
  },
  footerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  footerTitle: {
    color: '#403937'
  },
  totalCart: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#403937'
  },
  btnConfirmation: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 8,
    backgroundColor: '#C47F17',
    borderRadius: 6
  },
  bntConfirmationText: {
      fontSize: 14,
      color: '#FFF',
      fontWeight: "bold",
      textAlign: "center"
  }
});