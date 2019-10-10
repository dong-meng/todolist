export default {

    ku() {
        console.log(12)
        const request = indexedDB.open('myDatabase', 4);

        request.addEventListener('success', e => {
            const db = e.target.result;

            const tx = db.transaction('Users', 'readwrite');

            const store = tx.objectStore('Users');

            const range = IDBKeyRange.bound(1, 10);

            const req = store.openCursor(range, 'next');

            req.addEventListener('success', e => {
                const cursor = this.result;
                if (cursor) {
                    console.log(cursor.value.userName);
                    cursor.continue();
                } else {
                    console.log('检索结束');
                }
            })
        });
    }
}