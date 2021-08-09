import { useEffect, useState, useContext } from 'react';
import { FireBaseContext } from '../context/firebase';

export default function useContent(target) {
    const [content, setContent] = useState([]);

    const {firebase} = useContext(FireBaseContext);
    
    useEffect(() => {
        firebase
            .firestore()
            .collection(target)
            .onSnapshot((snapshot) => {
                const allContent = snapshot.docs.map((contentObj) => ({
                    ...contentObj.data(),
                    docId: contentObj.id,
                }));
                setContent(allContent);
            })
    }, [])
    
    return { [target]: content };
}

