import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  productCardContainer: {
    paddingVertical: 16,
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 32,
    borderBottomColor: '#E6E5E5',
    borderBottomWidth: 1,
  },
  imageProduct: {
    width: 64,
    height: 64,
    resizeMode: "contain"
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
    gap: 18,
    alignItems: 'center',
    borderColor: '#E6E5E5',
    borderWidth: 1,
    borderRadius: 6,
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
})
