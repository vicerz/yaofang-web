import { Provider } from 'urql';

import client from './client';

const UrqlProvider = ({ children }) => {
    return (
        <Provider value={client}>
            {children}
        </Provider>
    );
};

export default UrqlProvider;
