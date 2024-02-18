export const loadTodos = async (controller) => {
    try {
        const response = await fetch('https://65ce335ec715428e8b402e03.mockapi.io/api/todo/tasks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            signal: controller.signal,
        });

        const statusCode = response.status;
        console.log('Response code:', statusCode);

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            const errorData = await response.json();
            throw new Error(`Failed to load todos: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Error loading todos:', error);
        throw error;
    }
};



