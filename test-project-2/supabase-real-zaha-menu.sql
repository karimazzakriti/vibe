-- ZAHA STREET GRILL REAL MENU DATA - COMPLETE DATABASE SETUP
-- Scraped from UberEats on 2025-01-13 using Firecrawl API
-- This script clears existing data and inserts real Zaha Street Grill menu items

-- First, clear any existing test data
DELETE FROM menu_items;

-- Reset the sequence for clean IDs
ALTER SEQUENCE menu_items_id_seq RESTART WITH 1;

-- Insert REAL Zaha Street Grill menu data from UberEats scraping
INSERT INTO menu_items (name, description, price, category, image_url, is_vegan, is_gluten_free, is_halal) VALUES

-- CREATE YOUR OWN FIRE GRILLED MEALS
('Bowl', 'Choose your favourite wholesome grains and fresh greens, dips + spreads, proteins, toppings and sauces.', 13.95, 'Create Your Own', 'https://tb-static.uber.com/prod/image-proc/processed_images/0025f230423104308ec16d686dd3ac9b/58f691da9eaef86b0b51f9b2c483fe63.jpeg', true, true, true),

('Salad', 'Custom build a fresh salad perfect carb free option.', 13.95, 'Create Your Own', 'https://tb-static.uber.com/prod/image-proc/processed_images/cb486c3a223c9f38723e29ff4d62fa94/58f691da9eaef86b0b51f9b2c483fe63.jpeg', true, true, true),

('Roll', 'Roll up your favourite ingredients in an artisan sourdough naan. Choose your greens, dips + spreads, proteins, toppings and sauces.', 12.95, 'Create Your Own', 'https://tb-static.uber.com/prod/image-proc/processed_images/e2d53971309b0bb16b15ecc201b7d745/58f691da9eaef86b0b51f9b2c483fe63.jpeg', true, false, true),

-- SIDES + EXTRAS
('Sourdough Naan Bread', 'Soft, slightly tangy Indian-style flatbread.', 2.45, 'Sides + Extras', 'https://tb-static.uber.com/prod/image-proc/processed_images/ebb28129ff0889cd40aa22ce728deb61/58f691da9eaef86b0b51f9b2c483fe63.jpeg', true, false, true),

('3 Protein Falafels with a Mint + Coriander Dip', 'Supercharged with Organic Pea Protein, fresh herbs and spices. 18g pro, 240 kcal', 5.25, 'Sides + Extras', 'https://tb-static.uber.com/prod/image-proc/processed_images/2eb94c9f895bbb1a5f4fdcfcdcc9673a/58f691da9eaef86b0b51f9b2c483fe63.jpeg', true, true, true),

('Extra Sauces', 'Additional sauces and dips for your meal.', 0.00, 'Sides + Extras', 'https://tb-static.uber.com/prod/image-proc/processed_images/523b666e310aae247398f42d5de03bfe/58f691da9eaef86b0b51f9b2c483fe63.jpeg', true, true, true),

('Protein Falafels + Hummus pot', '3 Protein Falafels on a bed of hummus topped with chilli powder and olive oil. Vegan.', 4.95, 'Sides + Extras', 'https://tb-static.uber.com/prod/image-proc/processed_images/35bb25715c079ce9a9d67d46ca03ce7d/58f691da9eaef86b0b51f9b2c483fe63.jpeg', true, true, true),

('[Seasonal] Spice-roasted Sweet Potato', 'A side pot of our Spice-roasted sweet potato. Vegan.', 3.75, 'Sides + Extras', 'https://tb-static.uber.com/prod/image-proc/processed_images/f20e382103cc5e467213ff300e17142b/58f691da9eaef86b0b51f9b2c483fe63.jpeg', true, true, true),

('Hummus Pot', 'Side pot of hummus seasoned with chilli powder and olive oil.', 3.75, 'Sides + Extras', 'https://tb-static.uber.com/prod/image-proc/processed_images/920d679113819a58fd5ae1bedc0c7c0d/58f691da9eaef86b0b51f9b2c483fe63.jpeg', true, true, true),

('Spicy Lamb Kofte Pot', 'British Grass-Fed Lamb mince, fresh herbs & spices.', 6.75, 'Sides + Extras', 'https://tb-static.uber.com/prod/image-proc/processed_images/f436fd5ef12b217200568b499ac28d96/58f691da9eaef86b0b51f9b2c483fe63.jpeg', false, false, true),

('3 Mini Veg Samosas with Mint + Coriander Dip', 'Crisp samosas served with a refreshing mint and coriander dip.', 3.75, 'Sides + Extras', 'https://tb-static.uber.com/prod/image-proc/processed_images/3241c714d4532702fb69079cb8f9e1e7/a19bb09692310dfd41e49a96c424b3a6.jpeg', true, false, true),

-- DRINKS
('Zaha Probiotic Mango Lassi', 'Probiotic, good for the gut - made with greek yoghurt, 330ml bottle.', 5.95, 'Drinks', NULL, false, false, true),

('[New] Zaha Lychee Green Tea', 'Lychee Green Tea with Organic green tea and Organic agave. 330ml. Keep refrigerated. Consume by use-by date.', 4.95, 'Drinks', NULL, true, true, true),

('Water - Evian', '500ml bottle.', 1.95, 'Drinks', NULL, true, true, true),

('VitHit - Apple + Elderflower', 'Apple & Elderflower, Maté Tea + L-Carnitine', 3.45, 'Drinks', 'https://tb-static.uber.com/prod/image-proc/processed_images/23f57625e4e968c3f4935eca5ab38f42/58f691da9eaef86b0b51f9b2c483fe63.jpeg', true, true, true),

('VitHit - Dragonfruit + Yuzu', 'Dragonfruit & Yuzu, Zinc + Ceylon Tea', 3.45, 'Drinks', 'https://tb-static.uber.com/prod/image-proc/processed_images/abe5cdf33ef278c9e19d679d28448afd/58f691da9eaef86b0b51f9b2c483fe63.jpeg', true, true, true),

('Raw Organic Coconut Water (250ml)', '100% raw organic coconut water from young green coconuts of the Philippines.', 3.65, 'Drinks', 'https://tb-static.uber.com/prod/image-proc/processed_images/4eb2352b81e7ee8f4480c736c5895131/58f691da9eaef86b0b51f9b2c483fe63.jpeg', true, true, true),

('Karma Cola - Original (250ml)', 'Organic, Fairtrade, Made with real cola nut, Nothing artificial, Nothing you can''t pronounce.', 2.65, 'Drinks', NULL, true, true, true),

('Karma Cola - Sugar Free (250ml)', 'Natural, made with real Cola nut and sugar free.', 2.65, 'Drinks', NULL, true, true, true),

('Vitamin Well - Hydrate', 'Rhubarb/Strawberry. Hydrate contains vitamins C and B12 which contribute to the reduction of tiredness and fatigue. It also contains biotin, niacin and zinc which contribute to the maintenance of normal skin.', 3.95, 'Drinks', 'https://tb-static.uber.com/prod/image-proc/processed_images/d6ded4e1ea44a66e51e1e94f4c444d36/58f691da9eaef86b0b51f9b2c483fe63.jpeg', true, true, true),

('Vitamin Well - Recover', 'Elderflower/Peach. Recover contains vitamin B12, Folic A. and magnesium which all contribute to the reduction of tiredness and fatigue. Magnesium also contributes to electrolyte balance. In addition, Recover contains pantothenic A. that contributes to normal energy-yielding metabolism.', 3.95, 'Drinks', 'https://tb-static.uber.com/prod/image-proc/processed_images/9b49fac10b1a16df4cd91c4eecfcbb8d/58f691da9eaef86b0b51f9b2c483fe63.jpeg', true, true, true),

('Vitamin Well - Elevate', 'Pineapple/Wild Strawberry. Elevate contains vitamin B12, folic a. and magnesium, all of which help reduce fatigue and exhaustion. Elevate also contains zinc which contributes to the normal functioning of the immune system. In addition, magnesium contributes to normal muscle function.', 3.95, 'Drinks', 'https://tb-static.uber.com/prod/image-proc/processed_images/e3edfbd74797d3f9d2157aafe101cb6e/58f691da9eaef86b0b51f9b2c483fe63.jpeg', true, true, true),

('VOSS - Sparkling Water', '375ml glass bottle. Sourced from an underground aquifer in southern Norway and protected from pollutants by a layer of rock and ice. The water boasts a low mineral content and is free of Sodium, as such it is recognised as one of the purest bottles of water available with minimal Total Dissolved Solids', 2.65, 'Drinks', NULL, true, true, true),

('Karma - Raspberry Lemonade', 'Organic and Fairtrade, lemons get a sweet and tangy twist in Razza, the punky pink lemonade.', 2.65, 'Drinks', NULL, true, true, true),

('Karma - Lemonade', 'Organic and Fairtrade. Lemony, like all good lemonades is just the basics ... lemons. There''s 31% organic Sicilian lemon juice in every bottle with a splash of grapefruit and some citrus oil to boot. Then we add water and bubbles. That''s it.', 2.65, 'Drinks', NULL, true, true, true),

('Karma - Orangeade', 'Organic, Fairtrade and made with juicy, organic oranges grown in the wild San Potosì region of Mexico.', 2.65, 'Drinks', NULL, true, true, true),

('Karma - Gingerella', 'Organic, Gingerella''s fiery kick comes from organic ginger grown by Fairtrade farmers in Sri Lanka — organic lemons, vanilla and raw cane sugar keep things sweet.', 2.65, 'Drinks', NULL, true, true, true);

-- Update the updated_at timestamp for all records
UPDATE menu_items SET updated_at = NOW();

-- Verify the data was inserted correctly
SELECT 
    category,
    COUNT(*) as item_count,
    MIN(price) as min_price,
    MAX(price) as max_price,
    SUM(CASE WHEN is_vegan THEN 1 ELSE 0 END) as vegan_items,
    SUM(CASE WHEN is_halal THEN 1 ELSE 0 END) as halal_items
FROM menu_items 
GROUP BY category 
ORDER BY category;

-- Show total count
SELECT COUNT(*) as total_menu_items FROM menu_items;


