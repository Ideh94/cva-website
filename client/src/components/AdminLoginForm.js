import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../api/config';

const AdminLoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${API_BASE_URL}/api/admin/login`, { email, password });

            if (res.data.token) {
                // ✅ Save token to localStorage
                localStorage.setItem('adminToken', res.data.token);

                // ✅ Redirect to dashboard
                navigate('/admin/dashboard');
            } else {
                alert('Login failed: No token received');
            }
        } catch (err) {
            console.error('Login error:', err);
            alert(err.response?.data?.msg || 'An error occurred during login.');
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default AdminLoginForm;
