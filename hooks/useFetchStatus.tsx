'use client';

import { useState, useCallback } from 'react';
import axios from 'axios';

// const REGISTER_URL = 'http://localhost:5050/agents';
const REGISTER_URL = 'https://mgm-backend.vercel.app/agents';








export function useFetchStatus(): any {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState<string | null>(null);



    const fetchStatus = useCallback(async (agentId: string): Promise<any | null> => {
        setIsPending(true);
        setError(null);

        try {
            const response = await axios.get(`${REGISTER_URL}/${agentId}/application`, {
                headers: { 'Content-Type': 'application/json' },
            });
            return response.data;
        } catch (err) {
            const message = axios.isAxiosError(err)
                ? err.response?.data?.message ?? err.message ?? 'Registration failed'
                : err instanceof Error ? err.message : 'Registration failed';
            setError(message);
            return null;
        } finally {
            setIsPending(false);
        }
    }, []);

    return { fetchStatus, isPending, error };
}

export default useFetchStatus;
