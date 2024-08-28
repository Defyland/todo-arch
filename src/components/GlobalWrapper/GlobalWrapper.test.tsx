import {render} from '@testing-library/react';
import {Container} from './Compositions/Container';
import {Content} from './Compositions/Content';

describe('Container component', () => {
    it('should render children correctly', () => {
        const {getByTestId} = render(
            <Container>
                <span>Test Child</span>
            </Container>
        );

        expect(getByTestId('GlobalWrapper:Container')).toBeTruthy();
    });
});

describe('Container component', () => {
    it('should render children correctly', () => {
        const {getByTestId} = render(
            <Content>
                <span>Test Child</span>
            </Content>
        );

        expect(getByTestId('GlobalWrapper:Content')).toBeTruthy();
    });
});
