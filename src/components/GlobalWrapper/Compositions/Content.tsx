import {IGlobalWrapper} from '../GlobalWrapper.types';

export const Content = ({children}: IGlobalWrapper.IView) => (
    <div
        data-testid={`GlobalWrapper:Content`}
        className="flex min-h-scree w-[1366px]"
    >
        {children}
    </div>
);
