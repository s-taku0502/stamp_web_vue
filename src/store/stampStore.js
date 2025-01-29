import { defineStore } from "pinia";
import { getFirestore, collection, query, where, onSnapshot, getDocs } from "firebase/firestore";
import { getStorage, ref as storageRef, getDownloadURL } from "firebase/storage";
import { auth } from "@/firebase";

export const useStampStore = defineStore("stampStore", {
  state: () => ({
    stamps: [],
  }),

  actions: {
    async loadCachedStamps() {
      const cachedStamps = JSON.parse(localStorage.getItem("stamps")) || [];
      this.stamps = cachedStamps;
    },

    async subscribeToStamps(startDate, endDate) {
      const db = getFirestore();
      const user = auth.currentUser;
      if (!user) return;

      const stampsCollection = collection(db, "currentStamps");
      const q = query(stampsCollection, where("email", "==", user.email));

      onSnapshot(q, async (querySnapshot) => {
        const newStamps = await Promise.all(
          querySnapshot.docs.map(async (doc) => {
            const stampData = doc.data();
            const timestamp = new Date(stampData.timestamp);
            if (timestamp >= startDate && timestamp <= endDate) {
              const imageUrl = await getDownloadURL(storageRef(getStorage(), `stamps/${stampData.id}.webp`));
              return { ...stampData, imageUrl };
            }
            return null;
          })
        );

        this.stamps = newStamps.filter(stamp => stamp !== null);
        localStorage.setItem("stamps", JSON.stringify(this.stamps)); // キャッシュ保存
      });
    },
  },
});
