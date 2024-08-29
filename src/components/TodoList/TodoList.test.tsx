import {render, fireEvent} from '@testing-library/react';
import {TodoList} from './Compositions/TodoList';
import {TodoListHeader} from './Compositions/TodoListHeader';
import {TodoListItem} from './Compositions/TodoListItem';
import {TodoListSubheader} from './Compositions/TodoListSubheader ';
import {useTodoList} from './TodoList.model';
import {ITask} from '@/utils';
import {translateFilters} from '../../utils';

jest.mock('./TodoList.model', () => ({
    useTodoList: jest.fn(),
}));

jest.mock('../../utils', () => ({
    translateFilters: jest.fn(),
}));

describe('TodoList component', () => {
    it('should render correctly', () => {
        const {getByTestId} = render(<TodoList />);

        expect(getByTestId('TodoList')).toBeTruthy();
    });
});

describe('TodoListHeader component', () => {
    it('should render correctly and handle input changes', () => {
        const mockSaveTask = jest.fn();
        const mockHandleInputChange = jest.fn();
        const mockInput = 'Test Task';

        (useTodoList as jest.Mock).mockReturnValue({
            formSubmit: mockSaveTask,
            handleInputChange: mockHandleInputChange,
            input: mockInput,
        });

        const {getByPlaceholderText, getByTestId} = render(
            <TodoList>
                <TodoListHeader />
            </TodoList>
        );

        const form = getByTestId('TodoListHeader');
        expect(form).toBeTruthy();

        const input = getByPlaceholderText('Passear com o cachorro');

        fireEvent.change(input, {target: {value: 'New Task'}});
        expect(mockHandleInputChange).toHaveBeenCalled();

        fireEvent.submit(form);
        expect(mockSaveTask).toHaveBeenCalled();
    });
});

describe('TodoListItem component', () => {
    const mockTask: ITask = {
        title: 'Test Task',
        completed: false,
    };

    const mockTaskTwo: ITask = {
        title: 'Test Task',
        completed: true,
    };

    const mockDeleteTask = jest.fn();
    const mockSelectedTask = jest.fn();
    const mockEditTask = jest.fn();

    it('should render correctly', () => {
        const {getByText, getByRole} = render(
            <table>
                <tbody>
                    <TodoListItem
                        task={mockTask}
                        deleteTask={mockDeleteTask}
                        editTask={mockEditTask}
                        selectedTask={mockSelectedTask}
                    />
                </tbody>
            </table>
        );

        expect(getByText('Test Task')).toBeTruthy();
        expect(getByRole('checkbox')).toBeTruthy();
        expect(getByRole('button', {name: /remover/i})).toBeTruthy();
    });

    it('should call selectedTask when the Concluir btn is clicked', () => {
        const {getByTestId} = render(
            <table>
                <tbody>
                    <TodoListItem
                        task={mockTask}
                        deleteTask={mockDeleteTask}
                        editTask={mockEditTask}
                        selectedTask={mockSelectedTask}
                    />
                </tbody>
            </table>
        );

        fireEvent.click(getByTestId('TodoListItem:done'));
        expect(mockSelectedTask).toHaveBeenCalled();
    });

    it('should call selectedTask when the Reabrir btn is clicked', () => {
        const {getByTestId} = render(
            <table>
                <tbody>
                    <TodoListItem
                        task={mockTaskTwo}
                        deleteTask={mockDeleteTask}
                        editTask={mockEditTask}
                        selectedTask={mockSelectedTask}
                    />
                </tbody>
            </table>
        );

        fireEvent.click(getByTestId('TodoListItem:undone'));
        expect(mockSelectedTask).toHaveBeenCalled();
    });

    it('should call deleteTask when the remove button is clicked', () => {
        const {getByRole} = render(
            <table>
                <tbody>
                    <TodoListItem
                        task={mockTask}
                        deleteTask={mockDeleteTask}
                        editTask={mockEditTask}
                        selectedTask={mockSelectedTask}
                    />
                </tbody>
            </table>
        );

        fireEvent.click(getByRole('button', {name: /remover/i}));
        expect(mockDeleteTask).toHaveBeenCalled();
    });
});

describe('TodoListSubheader component', () => {
    const mockOptions = ['all', 'completed', 'pending'];
    const mockChangeFilter = jest.fn();
    const mockSelectedFilter = 'all';

    beforeEach(() => {
        (useTodoList as jest.Mock).mockReturnValue({
            options: mockOptions,
            changeFilter: mockChangeFilter,
            selectedFilter: mockSelectedFilter,
        });

        (translateFilters as jest.Mock).mockImplementation(filter => filter);
    });

    it('should render correctly', () => {
        const {getByTestId, getByText} = render(<TodoListSubheader />);

        const subheader = getByTestId('TodoListSubheader');
        expect(subheader).toBeTruthy();

        mockOptions.forEach(option => {
            expect(getByText(option)).toBeTruthy();
        });
    });

    it('should call changeFilter when a filter button is clicked', () => {
        const {getByText} = render(<TodoListSubheader />);

        mockOptions.forEach(option => {
            const button = getByText(option);
            fireEvent.click(button);
            expect(mockChangeFilter).toHaveBeenCalledWith(option);
        });
    });
});
