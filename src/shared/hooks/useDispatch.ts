import { useDispatch } from "react-redux";
import type { AppDispatch } from "app/providers/StoreProvider/config/store"; // путь к createReduxStore

export const useAppDispatch = () => useDispatch<AppDispatch>();
