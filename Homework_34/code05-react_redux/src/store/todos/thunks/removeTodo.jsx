export const deleteTodoRemote = async (taskId) => {
    console.log(`MarkTaskCompletedRemote is working. Task ID ${taskId} `);
    try {
        const response = await fetch(`https://65ce335ec715428e8b402e03.mockapi.io/api/todo/tasks/${taskId}`, {
            method: 'DELETE',
        });

        const statusCode = response.status;
        console.log('Response code:', statusCode);

        if (response.ok) {
            alert(`The element with id ${taskId} has removed success`)
        } else {
            console.error('Failed to remove element on remote server');
        }
    } catch (error) {
        console.error('Error removing task on remote server:', error);
    }
};