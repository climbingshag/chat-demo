import AppRouter from "./AppRouter";
import AppTheme from "./AppTheme";
import AppStore from "./AppStore";

const RouterWithTheme = AppTheme(AppRouter);
const App = AppStore(RouterWithTheme);

export default App;
