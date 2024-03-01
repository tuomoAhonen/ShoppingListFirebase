import {Pressable, StyleSheet, Text, View} from 'react-native';

const ShoppingListItem = ({item, deleteItem}) => {
	//console.log(item);
	return (
		<View style={styles.itemArea}>
			<Text style={styles.itemName}>{item.name}</Text>
			<Text style={styles.itemAmount}>{item.amount}</Text>
			<Pressable onPress={() => deleteItem(item.id)} style={styles.deleteButton}>
				<Text>Delete</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	itemArea: {
		flex: 1,
		width: 300,
		flexDirection: 'row',
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'space-evenly',
		marginBottom: 10,
	},
	itemName: {
		flex: 8,
	},
	itemAmount: {
		flex: 4,
	},
	deleteButton: {
		flex: 2,
		marginTop: 10,
		padding: 5,
		backgroundColor: '#00BFFF',
		borderRadius: 2,
		elevation: 5,
		textAlign: 'center',
		textAlignVertical: 'center',
	},
});

export default ShoppingListItem;
