// setup typescript file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// https://create-react-app.dev/docs/running-tests/#initializing-test-environment
const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
    key: jest.fn(), // .js file version does not contain
    length: jest.fn().length // .js version file does not contain
  };
  global.localStorage = localStorageMock;