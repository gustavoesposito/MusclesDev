import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import {
  REACT_NATIVE_SUPABASE_URL,
  REACT_NATIVE_SUPABASE_ANON_KEY,
} from './constants';

export const supabase = createClient(
  REACT_NATIVE_SUPABASE_URL,
  REACT_NATIVE_SUPABASE_ANON_KEY,
  {
    localStorage: AsyncStorage as any,
  },
);
