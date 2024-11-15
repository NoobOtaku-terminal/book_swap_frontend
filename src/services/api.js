const API_BASE_URL = 'http://localhost:5000/api';
// const API_BASE_URL = 'https://book-swap-backend.onrender.com';

// Auth Service
export const authService = {
    async login(credentials) {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });
            console.log(JSON.stringify(credentials));
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            if (data.token) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('isAuthenticated', 'true');
                return { success: true, data };
            } else {
                throw new Error('No token received');
            }
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    },

    async register(userData) {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                return {
                    success: true,
                    user: data.user,
                    token: data.token,
                    message: 'Registration successful!'
                };
            } else {
                return {
                    success: false,
                    message: data.message || 'Registration failed'
                };
            }
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    },


    async logout() {
        try {
            await fetch(`${API_BASE_URL}/auth/logout`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            localStorage.removeItem('token');
            localStorage.removeItem('isAuthenticated');
        } catch (error) {
            console.error('Logout error:', error);
            throw error;
        }
    },
    async getUserProfile() {
        try {
            const response = await fetch(`${API_BASE_URL}/users/profile`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to fetch profile');
            }

            return {
                success: true,
                data: data.data
            };
        } catch (error) {
            console.error('Get user profile error:', error);
            throw error;
        }
    },
    async getUserById(userId) {
        try {
            const response = await fetch(`${API_BASE_URL}/users/public/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to fetch user details');
            }

            return {
                success: true,
                data: data.data
            };
        } catch (error) {
            console.error('Get user by id error:', error);
            throw error;
        }
    }
};

// Book Service
export const bookService = {
    async addBook(bookData) {
        try {
            const response = await fetch(`${API_BASE_URL}/books/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(bookData)
            });
            return await response.json();
        } catch (error) {
            console.error('Add book error:', error);
            throw error;
        }
    },



    async getUserBooks() {
        try {
            const response = await fetch(`${API_BASE_URL}/books/mybooks`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            return await response.json();
        } catch (error) {
            console.error('Get user books error:', error);
            throw error;
        }
    },

    async getBookById(id) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);

            const response = await fetch(`${API_BASE_URL}/books/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Failed to fetch book');
            }

            const data = await response.json();
            console.log('Book data:', data);
            return data.data;
        } catch (error) {
            if (error.name === 'AbortError') {
                throw new Error('Request timed out');
            }
            console.error('Get book by id error:', error);
            throw error;
        }
    },

    async searchBooksByTitle(title) {
        try {
            const response = await fetch(`${API_BASE_URL}/books/search?title=${title}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            return await response.json();
        } catch (error) {
            console.error('Search books error:', error);
            throw error;
        }
    },

    async getBorrowedBooks() {
        try {
            const response = await fetch(`${API_BASE_URL}/books/borrowed`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            return await response.json();
        } catch (error) {
            console.error('Get borrowed books error:', error);
            throw error;
        }
    },

    async requestBorrow(bookId) {
        try {
            const response = await fetch(`${API_BASE_URL}/books/borrow/${bookId}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            return await response.json();
        } catch (error) {
            console.error('Request borrow error:', error);
            throw error;
        }
    },
    async getBooksByGenre(genre) {
        try {
            const response = await fetch(`${API_BASE_URL}/books/genre/${genre}`);
            return await response.json();
        } catch (error) {
            console.error('Get books by genre error:', error);
            throw error;
        }
    },

};