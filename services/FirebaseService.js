import {firebaseApp} from '../firebaseConfig';
import {getDatabase, push, ref, get} from 'firebase/database';

//this file was just an idea to split database and database actions to different file
//did not get it to work as I wanted, but it was on the correct path
const db = getDatabase(firebaseApp);

export async function addItemToDatabase(item) {
	try {
		await push(ref(db, 'ShoppingList/'), item);
		return await getShoppingList();
	} catch (error) {
		return error;
	}
}

export async function getShoppingList() {
	try {
		const itemsRef = ref(db, 'ShoppingList/');
		return await get(itemsRef);
	} catch (error) {
		return error;
	}
}
