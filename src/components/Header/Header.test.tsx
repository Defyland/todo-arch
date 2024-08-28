import {render} from '@testing-library/react';
import {Header} from './index';

describe('Header component', () => {
    it('should render correctly', () => {
        const {getByTestId, getByText} = render(<Header />);
        expect(getByTestId('Header')).toBeTruthy();
        expect(getByText('Todo List')).toBeTruthy();
    });
});
