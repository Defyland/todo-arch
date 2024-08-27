import {IGlobalWrapper} from '../GlobalWrapper.types';

export const Container = ({children}: IGlobalWrapper.IView) => (
    <div
        data-testid={`GlobalWrapper:Container`}
        className="flex min-h-screen justify-center bg-white"
    >
        {children}
    </div>
);
