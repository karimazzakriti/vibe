# Zaha Street Grill Menu Database Setup

This guide explains how to set up the Supabase database for the restaurant menu system.

## Database Setup

1. **Create the table and populate with data:**
   Run the SQL commands in `create-menu-table.sql` in your Supabase SQL editor.

2. **Environment Variables:**
   Make sure these are configured in your `.env.local`:
   ```
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

## Database Schema

The `menu_items` table includes:
- `id`: Auto-increment primary key
- `name`: Item name (TEXT)
- `description`: Item description (TEXT)
- `price`: Price in decimal format (DECIMAL(10,2))
- `category`: Menu category (TEXT)
- `image_url`: Optional image URL (TEXT)
- `is_vegan`: Boolean flag for vegan items
- `is_gluten_free`: Boolean flag for gluten-free items
- `is_halal`: Boolean flag for halal items
- `created_at`: Timestamp with timezone
- `updated_at`: Timestamp with timezone (auto-updated)

## Menu Categories

The system includes these categories:
- **Create Your Own**: Customizable fire-grilled meals
- **Street Sides**: Authentic Mediterranean sides
- **Drinks**: Beverages and traditional drinks
- **Signature Mains**: Chef's specialty dishes
- **Desserts**: Traditional Middle Eastern sweets

## API Endpoints

- `GET /api/menu`: Returns all menu items grouped by category with dietary information

## Features

- **Real-time data**: Menu items fetched from Supabase database
- **Loading states**: Skeleton components while data loads
- **Error handling**: Retry functionality for failed requests
- **Responsive design**: Works on all device sizes
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Dietary indicators**: Visual badges for vegan, gluten-free, and halal items

## TypeScript Types

All menu data is fully typed with interfaces in `src/types/menu.ts`.