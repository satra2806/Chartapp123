import { createBrowserHistory , History } from 'history';

interface ChildComponentprops {
    history:History
}
export const history: History = createBrowserHistory();