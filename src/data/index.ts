export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export const signatureDishes = [
  {
    id: 1,
    name: 'Truffle Mushroom Risotto',
    description: 'Arborio rice, wild mushrooms, black truffle shavings, aged parmesan.',
    price: '$28',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Charred Garlic Prawns',
    description: 'Tiger prawns, smoked paprika butter, charred lemon, sourdough.',
    price: '$32',
    image: 'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Slow-Roasted Herb Chicken',
    description: 'Free-range half chicken, rosemary, duck fat potatoes, seasonal greens.',
    price: '$34',
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Burrata & Heirloom Tomato',
    description: 'Fresh burrata, basil oil, balsamic glaze, toasted pine nuts.',
    price: '$22',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Classic Tiramisu',
    description: 'Espresso soaked ladyfingers, mascarpone cream, dark cocoa.',
    price: '$14',
    image: '/tiramisu.jpg',
  },
  {
    id: 6,
    name: 'Dark Chocolate Tart',
    description: '70% Valrhona chocolate, sea salt, raspberry coulis.',
    price: '$16',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80',
  }
];

export const menuCategories = [
  'Starters',
  'Soups & Salads',
  'Main Course',
  'Pasta & Risotto',
  'Desserts',
  'Beverages'
];

export const fullMenu = {
  'Starters': [
    { name: 'Oysters on the Half Shell', description: 'Mignonette, fresh lemon, hot sauce (half dozen)', price: '$24' },
    { name: 'Beef Tartare', description: 'Hand-cut tenderloin, capers, shallots, quail egg, crostini', price: '$26', indicator: 'chef-special' },
    { name: 'Crispy Calamari', description: 'Saffron aioli, charred lemon, parsley', price: '$18' },
    { name: 'Roasted Bone Marrow', description: 'Parsley salad, caramelized onion jam, grilled sourdough', price: '$22' },
  ],
  'Soups & Salads': [
    { name: 'French Onion Soup', description: 'Beef broth, caramelized onions, gruyere crouton', price: '$14' },
    { name: 'Roasted Beet Salad', description: 'Goat cheese, candied walnuts, citrus vinaigrette', price: '$16', indicator: 'vegetarian' },
    { name: 'Classic Caesar', description: 'Romaine Hearts, parmesan crisps, anchovy dressing', price: '$15' },
  ],
  'Main Course': [
    { name: 'Pan-Seared Scallops', description: 'Cauliflower purée, pancetta crisp, brown butter', price: '$38' },
    { name: 'Dry-Aged Ribeye', description: '14oz bone-in, roasted garlic, chimichurri, pommes frites', price: '$65', indicator: 'chef-special' },
    { name: 'Duck Breast', description: 'Cherry gastrique, parsnip purée, braised endive', price: '$42' },
    { name: 'Miso Glazed Black Cod', description: 'Bok choy, shiitake mushrooms, dashi broth', price: '$46' },
  ],
  'Pasta & Risotto': [
    { name: 'Lobster Ravioli', description: 'Handmade pasta, bisque sauce, tarragon', price: '$36' },
    { name: 'Wild Mushroom Risotto', description: 'Arborio rice, truffle oil, parmesan reggiano', price: '$28', indicator: 'vegetarian' },
    { name: 'Spicy Rigatoni', description: 'Vodka sauce, calabrian chili, fresh basil', price: '$24', indicator: 'spicy' },
  ],
  'Desserts': [
    { name: 'Vanilla Bean Crème Brûlée', description: 'Fresh berries, shortbread cookie', price: '$14' },
    { name: 'Lemon Olive Oil Cake', description: 'Mascarpone whip, pistachios', price: '$12' },
    { name: 'Artisan Cheese Board', description: 'Selection of 3 cheeses, honeycomb, fig jam, crackers', price: '$24' },
  ],
  'Beverages': [
    { name: 'Signature Old Fashioned', description: 'Bourbon, smoked maple, bitters', price: '$18' },
    { name: 'Raspberry Spritz', description: 'Prosecco, raspberry liqueur, soda, mint', price: '$16' },
    { name: 'Artisanal Still Water', description: '750ml', price: '$8' },
    { name: 'Espresso', description: 'Single origin', price: '$5' },
  ]
};

export const reviews = [
  {
    name: 'Eleanor Vance',
    location: 'Local Guide',
    text: 'The food was exceptional, but what stayed with us was the atmosphere. Every detail felt considered. The charred garlic prawns are an absolute must-try.'
  },
  {
    name: 'Marcus Thorne',
    location: 'Food Critic',
    text: 'A masterclass in modern dining. The chef balances bold flavors with incredible restraint. The wine pairing elevated the entire evening.'
  },
  {
    name: 'Sophia Laurent',
    location: 'Verified Diner',
    text: 'We celebrated our anniversary here and it was perfect. Warm, inviting, and elegant without feeling stiff. The truffle risotto is life-changing.'
  }
];

export const galleryImages = [
  'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1080&q=80', // interior
  'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1080&q=80', // chef prep
  'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1080&q=80', // close up dish / dining
  'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1080&q=80' // people dining / atmosphere
];
