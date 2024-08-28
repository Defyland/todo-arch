import {render} from '@testing-library/react';
import {Screen} from './index';

describe('Screen component', () => {
    it('should render correctly', () => {
        const {getByTestId} = render(<Screen>Test Content</Screen>);

        expect(getByTestId('Screen')).toBeTruthy();
    });
});
