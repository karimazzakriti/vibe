-- Create menu_items table for Zaha Street Grill
CREATE TABLE IF NOT EXISTS menu_items (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT,
  is_vegan BOOLEAN DEFAULT FALSE,
  is_gluten_free BOOLEAN DEFAULT FALSE,
  is_halal BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create an index on category for faster queries
CREATE INDEX IF NOT EXISTS idx_menu_items_category ON menu_items(category);

-- Enable Row Level Security (RLS)
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to read menu items
CREATE POLICY "Enable read access for all users" ON menu_items
FOR SELECT USING (true);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

-- Create a trigger to automatically update updated_at
CREATE TRIGGER update_menu_items_updated_at
    BEFORE UPDATE ON menu_items
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Insert real Zaha Street Grill menu data
INSERT INTO menu_items (name, description, price, category, is_vegan, is_gluten_free, is_halal) VALUES
-- Create Your Own Fire Grilled Meals
('Fire Grilled Salad', 'Fresh mixed greens with your choice of fire-grilled protein, vegetables, and signature dressings', 13.75, 'Create Your Own', false, true, true),
('Fire Grilled Roll', 'Warm flatbread wrapped with fire-grilled ingredients, fresh vegetables, and house-made sauces', 10.95, 'Create Your Own', false, false, true),
('Fire Grilled Bowl', 'Build your perfect bowl with basmati rice, fire-grilled protein, roasted vegetables, and signature sauces', 13.75, 'Create Your Own', false, true, true),

-- Street Sides
('3 Fresh Falafels with Mint Coriander Dip', 'Crispy house-made falafels served with our signature mint coriander dipping sauce', 3.75, 'Street Sides', true, false, true),
('Hummus with Pitta', 'Creamy traditional hummus served with warm pitta bread', 4.25, 'Street Sides', true, false, true),
('Fire Roasted Vegetables', 'Seasonal vegetables charred to perfection with Mediterranean herbs', 5.50, 'Street Sides', true, true, true),
('Spiced Sweet Potato Fries', 'Hand-cut sweet potato fries with aromatic spice blend', 4.95, 'Street Sides', true, true, true),
('Grilled Halloumi', 'Traditional Cypriot cheese grilled with herbs and olive oil', 5.25, 'Street Sides', false, true, false),
('Tabbouleh Salad', 'Fresh parsley, tomato, and bulgur salad with lemon dressing', 4.75, 'Street Sides', true, false, true),

-- Drinks
('Water Evian', 'Premium still water', 1.95, 'Drinks', true, true, true),
('Coca Cola', 'Classic Coca Cola', 2.25, 'Drinks', true, true, true),
('Fresh Orange Juice', 'Freshly squeezed orange juice', 3.45, 'Drinks', true, true, true),
('Mint Lemonade', 'Refreshing homemade mint lemonade', 2.95, 'Drinks', true, true, true),
('Turkish Tea', 'Traditional Turkish black tea served in glass', 2.50, 'Drinks', true, true, true),
('Arabic Coffee', 'Strong traditional Arabic coffee with cardamom', 2.75, 'Drinks', true, true, true),
('Ayran', 'Traditional yogurt drink with mint', 2.95, 'Drinks', false, true, true),

-- Signature Mains
('Zaha Mixed Grill', 'Chef''s selection of fire-grilled lamb, chicken, and kofta with rice and salad', 18.95, 'Signature Mains', false, true, true),
('Fire Grilled Sea Bass', 'Whole sea bass marinated in herbs and grilled over open flame', 16.50, 'Signature Mains', false, true, true),
('Lamb Shawarma Platter', 'Slow-cooked lamb shawarma with rice, salad, and tahini sauce', 15.75, 'Signature Mains', false, true, true),
('Chicken Shish Platter', 'Marinated chicken breast skewers with bulgur and grilled vegetables', 14.95, 'Signature Mains', false, true, true),
('Vegetarian Mezze Platter', 'Selection of hummus, baba ganoush, tabbouleh, falafels, and pitta', 12.95, 'Signature Mains', true, false, true),

-- Desserts
('Baklava', 'Traditional honey and pistachio pastry', 4.95, 'Desserts', false, false, true),
('Knafeh', 'Sweet cheese pastry with rose water syrup', 5.25, 'Desserts', false, false, true),
('Turkish Delight', 'Assorted flavored lokum with pistachios', 3.95, 'Desserts', true, true, true),
('Fresh Fruit Platter', 'Seasonal fresh fruits with honey drizzle', 4.50, 'Desserts', true, true, true);