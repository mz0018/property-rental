import { create } from 'zustand';
import axios from 'axios';

//define interface for typescript
interface NetworkState {
    isOnline: boolean,
    checkIfOnline: () => Promise<void>
}

const useNetworkStore = create<NetworkState>((set) => ({
    isOnline: false,
    checkIfOnline: async () => {
        try {
            const response = await axios.get("https://1.1.1.1/cdn-cgi/trace");

            if (response.status === 200) {
                set({ isOnline: true })
            } else {
                set({ isOnline: false })
            }
        } catch (err) {
            set({ isOnline: false })
        }
    }
}));

export default useNetworkStore
