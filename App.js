import {StatusBar} from 'expo-status-bar';
import {FlatList, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import ShoppingListItem from './components/ShoppingListItem';
import {useEffect, useState} from 'react';
//import {addItemToDatabase, getShoppingList} from './services/FirebaseService';
import {getDatabase, push, ref, onValue, remove, set} from 'firebase/database';
import {firebaseApp} from './firebaseConfig';

const db = getDatabase(firebaseApp);

export default function App() {
	const [shoppingList, setShoppingList] = useState([]);
	const [product, setProduct] = useState({name: '', amount: ''});

	const saveItem = () => {
		if (!product || !product.name || !product.amount) return;
		push(ref(db, 'ShoppingList/'), product);
		return setProduct({name: '', amount: ''});
	};

	const deleteItem = async (id) => {
		// do something
		//console.log(id);
		try {
			//console.log(id);
			//const result = await set(ref(db, `ShoppingList/${id}`), null);
			return await remove(ref(db, `ShoppingList/${id}`));
		} catch (error) {
			return console.log(error);
		}
	};

	useEffect(() => {
		console.log('usEffect');
		const itemsRef = ref(db, 'ShoppingList/');
		onValue(
			itemsRef,
			(snapshot) => {
				const data = snapshot.val();
				//console.log(data);
				const results = [];
				if (data && data !== null && data !== 'null') {
					for (const [key, value] of Object.entries(data)) {
						results.push({id: key, ...value});
					}
					return setShoppingList([...results]);
				} else {
					return setShoppingList([]);
				}
			},
			(error) => {
				return console.log(error);
			}
		);
	}, [onValue]);

	//console.log(shoppingList);

	return (
		<View style={styles.container}>
			<View style={styles.inputArea}>
				<TextInput
					id='name'
					nativeID='name'
					placeholder='Product name...'
					value={product.name}
					onChangeText={(text) =>
						setProduct({...product, name: text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()})
					}
					style={styles.inputs}
				/>
				<TextInput
					id='amount'
					nativeID='amount'
					placeholder='Amount...'
					value={product.amount}
					onChangeText={(text) => setProduct({...product, amount: text.trim()})}
					style={styles.inputs}
				/>
				<Pressable onPress={() => saveItem()} style={styles.saveButton}>
					<Text>Save</Text>
				</Pressable>
			</View>
			<Text>Shopping list</Text>
			{shoppingList && shoppingList.length > 0 ? (
				<FlatList
					data={shoppingList}
					renderItem={({item}, index) => <ShoppingListItem key={index} item={item} deleteItem={deleteItem} />}
				/>
			) : (
				<Text>Empty list...</Text>
			)}
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		//justifyContent: 'center',
	},
	inputArea: {justifyContent: 'space-around'},
	inputs: {width: 300, borderWidth: 1, borderColor: '#000000', paddingLeft: 5, marginBottom: 10},
	saveButton: {
		padding: 5,
		backgroundColor: '#00BFFF',
		borderRadius: 2,
		elevation: 5,
	},
});

