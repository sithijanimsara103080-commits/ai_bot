import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { auth } from "./firebase";

interface AuthCtx {
  user: User | null;
  loading: boolean;
  isGuest: boolean;
  setGuest: (v: boolean) => void;
  logout: () => Promise<void>;
}

const Ctx = createContext<AuthCtx>({
  user: null,
  loading: true,
  isGuest: false,
  setGuest: () => {},
  logout: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isGuest, setIsGuestState] = useState(false);

  useEffect(() => {
    setIsGuestState(localStorage.getItem("apilage_guest") === "1");
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);

  const setGuest = (v: boolean) => {
    setIsGuestState(v);
    if (v) localStorage.setItem("apilage_guest", "1");
    else localStorage.removeItem("apilage_guest");
  };

  return (
    <Ctx.Provider
      value={{
        user,
        loading,
        isGuest,
        setGuest,
        logout: async () => {
          await signOut(auth);
          setGuest(false);
        },
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export const useAuth = () => useContext(Ctx);
