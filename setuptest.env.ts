// setup typescript file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// https://stackoverflow.com/questions/56547215/react-testing-library-why-is-tobeinthedocument-not-a-function
import '@testing-library/jest-dom/extend-expect';

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