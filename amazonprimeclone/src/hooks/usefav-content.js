import { useEffect, useState, useContext } from 'react';
import { Context } from '../context/Context';
import { FireBaseContext } from '../context/firebase';

export default function useFavContent(target) {
    const [favcontent, setFavContent] = useState([]);
    const {firebase}  = useContext(FireBaseContext);
    const {userId}  = useContext(Context);
    useEffect(() => {
        if(userId)
        firebase
            .firestore()
            .collection("users").doc(userId).collection(target).onSnapshot((snapshot) => {
                const allContent = snapshot.docs.map((contentObj) => ({
                    ...contentObj.data(),
                    docId: contentObj.id,
                }));
                setFavContent(allContent);
            });

    }, [])
    return { ["fav"+target]: favcontent };
}

