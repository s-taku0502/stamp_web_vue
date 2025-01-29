// store/stampStore.js
import { defineStore } from 'pinia';
import { onSnapshot, doc, getFirestore, getDoc } from 'firebase/firestore';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const useStampStore = defineStore('stamp', {
  state: () => ({
    stamps: JSON.parse(localStorage.getItem("stamps")) || [], // 初期状態はローカルストレージのデータ
  }),
  actions: {
    setStamps(stamps) {
      this.stamps = stamps;
      localStorage.setItem("stamps", JSON.stringify(stamps)); // キャッシュ更新
    },
    async loadCachedStamps() {
      const cachedStamps = localStorage.getItem("stamps");
      if (cachedStamps) {
        this.stamps = JSON.parse(cachedStamps);
      }
    },
    async subscribeToStamps() {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const db = getFirestore();
          const userStampRef = doc(db, "currentStamps", user.email);
          
          onSnapshot(userStampRef, async (docSnap) => {
            if (docSnap.exists()) {
              const stampIds = Object.keys(docSnap.data());
              const stamps = await Promise.all(stampIds.map(id => this.fetchStampData(id)));
              this.setStamps(stamps);
            }
          });
        }
      });
    },
    async fetchStampData(id) {
      try {
        const db = getFirestore();
        const stampRef = doc(db, "stamps", id);
        const stampSnap = await getDoc(stampRef);
        if (stampSnap.exists()) {
          return { id, ...stampSnap.data(), imageUrl: `https://firebasestorage.googleapis.com/v0/b/kanazawa-nuka2024.firebasestorage.app/o/stamps%2F${id}.webp?alt=media` };
        }
        return null;
      } catch (error) {
        console.error(`Error fetching stamp data for ID ${id}:`, error);
        return null;
      }
    }
  },
});
