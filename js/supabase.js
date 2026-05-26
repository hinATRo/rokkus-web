// js/supabase.js
// ─────────────────────────────────────────
// KONFIGURASI SUPABASE — jangan share file ini!
// ─────────────────────────────────────────

const SUPABASE_URL = 'https://wmqtngznenqaajuxdqwa.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtcXRuZ3puZW5xYWFqdXhkcXdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0MDkyMjIsImV4cCI6MjA5NDk4NTIyMn0.X9lUYfU-3wOHC5huJAWBmyNYJCiKJGntdh7XCJx3ASA'

// Init client
const { createClient } = supabase
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function testKoneksi() {
  const { data, error } = await db
    .from('products')
    .select('*')
    .limit(3)

  if (error) {
    console.log('❌ Gagal:', error.message)
  } else {
    console.log('✅ Berhasil! Data:', data)
  }
}

testKoneksi()