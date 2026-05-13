import {useEffect, useState} from 'react';
import { supabase } from '../src/lib/supabase';
import type { Session } from '@supabase/supabase-js';

export function useAuth() {
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // get initial session
        supabase.auth.getSession().then(({ data }) => {
            setSession(data.session);
            setLoading(false);
        });

        // listen for auth changes
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            setSession(session);
        });

        // cleanup
        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);
    return { session, loading };
}