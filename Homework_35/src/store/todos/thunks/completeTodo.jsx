
export const markTodoCompletedRemote = async (taskId) => {
        try {
            const response = await fetch(`https://65ce335ec715428e8b402e03.mockapi.io/api/todo/tasks/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ completed: true }),
            });

            const statusCode = response.status;
            console.log('Response code:', statusCode);

            if (response.ok) {
                alert(`The element with id ${taskId} has marked success`)
            } else {
                console.error('Failed to mark task as completed on remote server');
            }
        } catch (error) {
            console.error('Error marking task as completed on remote server:', error);
        }
};


