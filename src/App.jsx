import Routers from "./components/routes/Routes";
import { store } from "./Store";
import { Provider } from "react-redux";
import { AuthProvider } from "./context/AuthContex";
import ShowSnackBar from "./shared/message/snackbar";
import { BrowserRouter } from "react-router";
export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </AuthProvider>
      <ShowSnackBar />
    </Provider>
  );
}
