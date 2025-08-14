import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import type { MenuItem } from '@/types/menu'

export async function GET() {
  try {
    const { data: menuItems, error } = await supabase
      .from('menu_items')
      .select('*')
      .order('category', { ascending: true })
      .order('name', { ascending: true })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { success: false, error: 'Failed to fetch menu items', data: [] },
        { status: 500 }
      )
    }

    if (!menuItems || menuItems.length === 0) {
      return NextResponse.json(
        { success: true, data: [], message: 'No menu items found' },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { success: true, data: menuItems as MenuItem[] },
      { status: 200 }
    )
  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error', data: [] },
      { status: 500 }
    )
  }
}