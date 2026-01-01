import {createClient} from "@supabase/supabase-js"
import 'dotenv/config'

const supabase = createClient(process.env.supaUrl, process.env.suoaSecretKey)

export default supabase