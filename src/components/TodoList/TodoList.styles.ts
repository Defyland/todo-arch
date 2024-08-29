export const Styles = {
    TodoListContainer: 'flex flex-col',
    TodoListContent: '',
    TodoListInside: 'min-w-full',
    TodoListWrapper: 'overflow-hidden',
    TodoListTable: 'min-w-full divide-y',
    TodoListTableTbody: 'flex flex-col gap-2 py-12',
    
    TodoListItemContainerPending: 'border-solid border-2 border-orange-600 bg-orange-200 hover:bg-orange-300 flex flex-row items-center gap-2 rounded-lg h-12 pl-4',
    TodoListItemContainerCompleted: 'border-solid border-2 border-green-600 bg-green-200 hover:bg-green-300 flex flex-row items-center gap-2 rounded-lg line-through h-12 pl-4',

    TodoListItemContent: 'flex flex-row items-center gap-2 w-full h-full',
    TodoListItemTitle: 'text-sm font-medium text-gray-800 w-full',
    TodoListItemAction: 'whitespace-nowrap text-end text-sm font-medium text-gray-600 h-full',
    
    TodoListItemButton: 'inline-flex items-center gap-x-2 text-sm font-semibold border border-transparent transition duration-200 h-full px-3 ',
    TodoListItemOk: 'text-green-500 hover:text-green-700 bg-green-100 hover:bg-green-200',
    TodoListItemReopen: 'text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200',
    TodoListItemDefault: 'text-blue-500 hover:text-blue-700 bg-blue-100 hover:bg-blue-200',
    TodoListItemDanger: 'text-red-500 hover:text-red-700 bg-red-100 hover:bg-red-200 rounded-r-lg',

    TodoListHeaderContainer: 'w-full mb-12',
    TodoListHeaderContent: 'flex items-center border-b border-gray-300 py-2',
    TodoListHeaderInput: 'appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-white placeholder-opacity-50',    
    TodoListHeaderBtn: 'flex-shrink-0 border border-gray-300 text-white text-sm py-2 px-4 rounded-lg transition duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400',

    TodoListSubheaderContainer: 'flex min-w-full gap-x-4 justify-center',
    TodoListSubheaderBtn: 'flex-shrink-0 text-sm text-gray-700 bg-transparent border border-gray-300 hover:bg-gray-100 hover:text-gray-900 py-2 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400',
    TodoListSubheaderBtnSelected: 'flex-shrink-0 text-sm bg-gray-700 text-white py-2 px-4 rounded-lg shadow-md transition duration-200',

    TodoEmptyContainer: 'w-full flex-1 flex flex-row items-center justify-center ',
    TodoEmpty: 'rounded-lg opacity-50',
};