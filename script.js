/***** Variables *****/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const SEARCH_BAR = document.getElementById("searchBar");
let CART=[];
if (localStorage.getItem("cart")) {
    CART = JSON.parse(localStorage.getItem("cart"));
};
const CUSTOMER_NAME_FEILD = document.getElementById("customerNameField");
const PAYMENT_METHOD_FIELD = document.getElementById("payment_Method");
const POCKET_MONEY_FIELD = document.getElementById("pocketMoneyField");
const CARD=[];
const CARD_NUMBER_= [];

/***** Image Slider *****/
 let slideIndex = 0;
const slides = document.getElementsByClassName("hero-slide");

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function changeSlide(number) {
  slideIndex = slideIndex + number;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide();
}

showSlide();

setInterval(function () {
  changeSlide(1);
}, 3000);

/***** Main Code *****/

/***** Menu *****/
const BREAKFAST = [
  { name: "Classic Butter Croissant",
    price: 3.50,
    description: "A flaky, buttery croissant filled with rich, creamy butter.",
    image: ".jpg"
  },
  { name: "Pain au Chocolat",
    price: 6.00,
    description: "A classic French pastry filled with rich, dark chocolate.",
    image: ".jpg"
  },
  { name: "Almond Croissant",
    price: 6.50,
    description: "A flaky croissant filled with almond cream and topped with sliced almonds.",
    image: ".jpg"
  },
  { name: "Raspberry Danish",
    price: 5.00,
    description: "A sweet pastry filled with raspberry jam and cream cheese.",
    image: ".jpg"
  },
  { name: "Cinnamon Roll",
    price: 4.50,
    description: "A soft, sweet roll filled with cinnamon and sugar, topped with cream cheese icing.",
    image: ".jpg"
  },
  { name: "French Toast",
    price: 5.50,
    description: "Slices of bread soaked in a rich egg mixture and cooked to perfection, served with syrup.",
    image: ".jpg"
  },
  { name: "Eggs Benedict",
    price: 8.00,
    description: "Poached eggs and Canadian bacon on an English muffin, topped with hollandaise sauce.",
    image: ".jpg"
  },
  {
  name: "Breakfast Burrito",
  price: 7.50,
  description: "A warm tortilla filled with scrambled eggs, cheese, and your choice of bacon or sausage.",
  image: ".jpg"
  },
  {
  name: "Avocado Toast",
  price: 6.00,
  description: "Toasted bread topped with mashed avocado, cherry tomatoes, and a sprinkle of salt and pepper.",
  image: ".jpg"
  },
  {
    name: "Breakfast Sandwich",
    price: 5.50,
    description: "A toasted English sandwich filled with scrambled eggs, cheese, and your choice of bacon or sausage.",
    image: ".jpg"
  },
  {
    name: "Granola Parfait",
    price: 4.50,
    description: "Layers of granola, yogurt, and fresh fruit, served in a glass.",
    image: ".jpg" 
  },
]

const BREAKFAST_SPECIALS = [
  {
    name: "Breakfast Combo Meal",
    price: 16.00,
    description: "A hearty breakfast combo including a choice of pastry, coffee, and juice.",
    image: ".jpg"
  },
  {
    name: "Pancake Stack",
    price: 7.00,
    description: "A stack of fluffy pancakes served with butter and syrup.",
    image: ".jpg"
  },
  {
    name: "Big Breakfast Platter",
    price: 12.00,
    description: "A generous platter including eggs, bacon, sausage, toast, and hash browns.",
    image: ".jpg"
  },

  {
    name: "Kids Breakfast Special",
    price: 16.00,
    description: "A smaller breakfast option for kids, including a choice of pancake or French toast, and a small drink.",
    image: ".jpg" 
  },

  {
    name: "Family Breakfast Feast",
    price: 30.00,
    description: "A large breakfast platter for the whole family, including a variety of pastries, eggs, bacon, sausage, and toast.",
    image: ".jpg"
  },

  {
    name: "Healthy Breakfast Bowl",
    price: 10.00,
    description: "A nutritious breakfast option including a bowl of oatmeal, fresh fruit, a coffee of your choice,and a side of yogurt.",
    image: ".jpg"
  },

  {
    name: "Breakfast Vegetarian Special",
    price: 12.00,
    description: "A vegetarian breakfast option including a veggie omelette, toast, and a side of fruit.",
    image: ".jpg"
  },

  {
    name: "Family Vegetarian Breakfast",
    price: 25.00,
    description: "A vegetarian breakfast option for the whole family, including a variety of veggie omelettes, toast, and a side of fruit.",
    image: ".jpg"
  },
];

const BREAKFAST_SPECIALS_DRINK = [
  {
  name: "Espresso",
  price: 3.00,
  description: "A strong, concentrated coffee made by forcing hot water through finely ground coffee beans.",
  image: ".jpg"
  },
  {
  name: "Cappuccino",
  price: 4.00,
  description: "A coffee drink made with espresso, steamed milk, and milk foam.", 
  image: ".jpg"
  },
  {
    name: "Flat White",
    price: 4.50,
    description: "A coffee drink made with espresso and steamed milk, similar to a latte but with a higher ratio of coffee to milk.",
    image: ".jpg"
  },
  {
    name: "Latte",
    price: 4.50,
    description: "A coffee drink made with espresso and steamed milk, often topped with foam.",
    image: ".jpg"
  },
  { 
    name: "Mocha",
    price: 5.00,
    description: "A coffee drink made with espresso, steamed milk, and chocolate syrup, often topped with whipped cream.",
    image: ".jpg"
  },
  {
    name : "Americano",
    price: 3.50,
    description: "A coffee drink made by diluting espresso with hot water, resulting in a lighter flavor and lower caffeine content.",
    image: ".jpg"
  },
  {
    name: "Iced Coffee",
    price: 4.00,
    description: "A cold coffee drink made by brewing coffee and then chilling it, often served over ice.",
    image: ".jpg"
  },
  {
    name: "Hot Chocolate",
    price: 3.50,
    description: "A warm, sweet drink made with milk and chocolate, often topped with whipped cream.", 
    image: ".jpg"
  },
  {
    name: "Chai Latte",
    price: 4.50,
    description: "A spiced tea drink made with black tea, milk, and a blend of spices such as cinnamon, cardamom, and ginger.",
    image: ".jpg"
  },
]

const LUNCH = [
{
  name: "Croque Monsieur",
  price: 8.00,
  description: "A classic French sandwich made with ham, cheese, and béchamel sauce, grilled to perfection.",
  image: ".jpg"
},
{
  name: "Croque Madame",
  price: 9.00,
  description: "A variation of the Croque Monsieur, topped with a fried egg.",
  image: ".jpg" 
},
{
  name: "Quiche Lorraine",
  price: 7.50,
  description: "A savory tart filled with eggs, cream, cheese, and bacon.",
  image: ".jpg"
},
{
  name: "Grilled Cheese Sandwich(V)",
  price: 6.00,
  description: "A classic sandwich made with melted cheese between two slices of toasted bread.",
  image: ".jpg"
},
{
  name: "Mushroom and Swiss Panini(V)",
  price: 10.00,
  description: "A juicy beef patty topped with sautéed mushrooms and Swiss cheese, served on a toasted bun.",
  image: ".jpg"
},
{
  name: "Caprese Panini(V)",
  price: 9.00,
  description: "A sandwich made with fresh mozzarella, tomatoes, and basil, served on a toasted baguette.",
  image: ".jpg"
},
{
  name: "Chicken Caesar Wrap",
  price: 8.50,
  description: "A wrap filled with grilled chicken, romaine lettuce, parmesan cheese, and Caesar dressing.", 
  image: ".jpg"
},
{
  name: "Mediterranean Veggie Wrap(V)",
  price: 8.00,
  description: "A wrap filled with hummus, roasted vegetables, feta cheese, and mixed greens.",
  image: ".jpg"
},
{
  name: "Mediterranean Chicken Salad",
  price: 9.50,
  description: "A salad made with grilled chicken, mixed greens, cherry tomatoes, cucumbers, red onions, and feta cheese, served with a lemon vinaigrette.",
  image: ".jpg"
},
{
  name: "Mediterranean Wrap",
  price: 9.50,
  description: "A wrap filled with grilled chicken, hummus, roasted vegetables, feta cheese, and mixed greens.",
  image: ".jpg"
},

]

const LUNCH_SPECIALS = [
  {
    name: "Lunch Combo Meal",
    price: 15.00,
    description: "A hearty lunch combo including a choice of sandwich, salad, and drink.", 
    image: ".jpg"
  },

  {
    name: "Soup and Sandwich Special",
    price: 12.00,
    description: "A special lunch option including a cup of soup and a half sandwich of your choice.",
    image: ".jpg"
  },
  {
    name: "Lunch for Two",
    price: 25.00,
    description: "A special lunch option for two people, including a choice of two sandwiches, two salads, and two drinks.",
    image: ".jpg"
  },

  {
    name: "Family Lunch Special",
    price: 40.00,
    description: "A special lunch option for the whole family, including a choice of four sandwiches, four salads, and four drinks.",
    image: ".jpg"
  },

  {
    name: "Vegetarian Lunch Special",
    price: 12.00,
    description: "A special lunch option for vegetarians, including a choice of vegetarian sandwich, salad, and drink.",
    image: ".jpg"
  },
  {
    name: "Kids Lunch Special",
    price: 10.00,
    description: "A special lunch option for kids, including a choice of sandwich, fruit cup, and small drink.",
    image: ".jpg"
  },
]

const LUNCH_SPECIALS_DRINK = [
    {
  name: "Espresso",
  price: 3.00,
  description: "A strong, concentrated coffee made by forcing hot water through finely ground coffee beans.",
  image: ".jpg"
  },
  {
  name: "Cappuccino",
  price: 4.00,
  description: "A coffee drink made with espresso, steamed milk, and milk foam.", 
  image: ".jpg"
  },
  {
    name: "Flat White",
    price: 4.50,
    description: "A coffee drink made with espresso and steamed milk, similar to a latte but with a higher ratio of coffee to milk.",
    image: ".jpg"
  },
  {
    name: "Latte",
    price: 4.50,
    description: "A coffee drink made with espresso and steamed milk, often topped with foam.",
    image: ".jpg"
  },
  { 
    name: "Mocha",
    price: 5.00,
    description: "A coffee drink made with espresso, steamed milk, and chocolate syrup, often topped with whipped cream.",
    image: ".jpg"
  },
  {
    name: "Americano",
    price: 3.50,
    description: "A coffee drink made by diluting espresso with hot water, resulting in a lighter flavor and lower caffeine content.",
    image: ".jpg"
  },
  {
    name: "Iced Coffee",
    price: 4.00,
    description: "A cold coffee drink made by brewing coffee and then chilling it, often served over ice.",
    image: ".jpg"
  },
  {
    name: "Hot Chocolate",
    price: 3.50,
    description: "A warm, sweet drink made with milk and chocolate, often topped with whipped cream.", 
    image: ".jpg"
  },
  {
    name: "Chai Latte",
    price: 4.50,
    description: "A spiced tea drink made with black tea, milk, and a blend of spices such as cinnamon, cardamom, and ginger.",
    image: ".jpg"
  },

  {
    name: "Iced Tea",
    price: 3.50,
    description: "A refreshing cold beverage made by brewing tea and then chilling it, often served over ice.",
    image: ".jpg"
  },

  {
    name: "Lemonade",
    price: 3.00,
    description: "A sweet and tangy beverage made with fresh lemon juice, water, and sugar.",
    image: ".jpg"
  },

  {
    name: "Long Black",
    price: 3.50,
    description: "A coffee drink made by pouring hot water over a shot of espresso, resulting in a strong and bold flavor.",
    image: ".jpg"
  },

  {
    name: "Iced Latte",
    price: 4.50,
    description: "A cold coffee drink made with espresso and chilled milk, often served over ice.",
    image: ".jpg"
  },
]

const DINNER = [
  {
    name: "Steak Frites",
    price: 31.90,
    description: "Grilled premium sirloin steak served with crispy French fries and herb butter.",
    image: ".jpg"
  },

  {
    name: "Creamy Garlic Chicken",
    price: 27.90,
    description: "Tender grilled chicken breast in a creamy garlic and parmesan sauce, served with seasonal vegetables.",
    image: ".jpg"
  },

  {
    name: "Truffle Mushroom",
    price: 24.90,
    description: "Creamy fettuccine tossed with sautéed mushrooms, parmesan, and truffle oil.",
    image: ".jpg"
  },

  {
    name: "Velario Gourmet Burger",
    price: 23.90,
    description: "Premium chicken patty with cheddar, caramelised onions, lettuce, tomato, aioli, and fries.",
    image: ".jpg"
  },

  {
    name: "Velario Gourmet Burger(V)",
    price: 23.90,
    description: "Premium vegie patty with cheddar, caramelised onions, lettuce, tomato, aioli, and fries.",
    image: ".jpg"
  },

  {
    name: "Mediterranean Vegetable Risotto",
    price: 23.90,
    description: "Creamy Arborio rice with roasted vegetables, parmesan, and fresh herbs.",
    image: ".jpg"
  },
]

const DINNER_SPECIALS = [
  {
    name: "Family Dinner Special",
    price: 30.00,
    desciption: "",
    image: ".jpg",
  },

   {
    name: "Date Night Dinner",
    price: 49.90,
    description: "A romantic dinner for two with two mains, one shared dessert, and two signature drinks.",
    image: ".jpg",
  },

   {
    name: "Steak Night Special",
    price: 34.90,
    description: "Premium grilled sirloin steak served with fries, salad, and your choice of drink.",
    image: ".jpg",
  },

   {
    name: "Vegetarian Dinner Special",
    price: 26.90,
    description: "A wholesome vegetarian meal with a main, side salad, and a refreshing drink.",
    image: ".jpg",
  },
]

const DINNER_SPECIALS_DRINK = [
  {
    name: "Sparkling Rose Spritz (Non-Alcoholic)",
    price: 8.90,
    description: "Sparkling water with rose syrup, fresh strawberries, mint, and lemon.",
    image: ".jpg",
  },

  {
    name: "Citrus Sunset",
    price: 8.50,
    description: "Orange, passionfruit, lemon, and sparkling soda served over ice.",
    image: ".jpg",
  },

  {
    name: "Berry Royale",
    price: 7.90,
    description: "Fresh berries blended with cranberry juice and sparkling lemonade.",
    image: ".jpg",
  },

  {
    name: "Tropical Paradise",
    price: 6.60,
    description: "Pineapple, mango, coconut, and lime blended into a refreshing cooler.",
    image: ".jpg",
  },

  {
    name: "Lavender Lemon Fizz",
    price: 8.50,
    description: "Fresh lemonade infused with lavender syrup and sparkling water.",
    image: ".jpg",
  },

{
    name: "Blueberry Mint Cooler",
    price: 8.90,
    description: "Blueberries, fresh mint, lime juice, and sparkling soda.",
    image: ".jpg",
  },

  {
    name: "Midnight Hot Chocolate",
    price: 7.90,
    description: "Rich Belgian hot chocolate topped with whipped cream and chocolate shavings.",
    image: ".jpg",
  },

  {
    name: "After-Dinner Affogato",
    price: 9.90,
    description: "Vanilla bean ice cream with a freshly poured espresso.",
    image: ".jpg",
  },


  {
    name: "Hazelnut Hot Chocolate",
    price: 5.50,
    description: "Creamy hot chocolate flavoured with roasted hazelnut and topped with whipped cream.",
    image: ".jpg",
  },
]

const COFFEE = [
      {
  name: "Esspresso",
  price: 3.00,
  description: "A strong, concentrated coffee made by forcing hot water through finely ground coffee beans.",
  image: ".jpg"
  },
  {
  name: "Cappuccino",
  price: 4.00,
  description: "A coffee drink made with espresso, steamed milk, and milk foam.", 
  image: ".jpg"
  },
  {
    name: "Flat White",
    price: 4.50,
    description: "A coffee drink made with espresso and steamed milk, similar to a latte but with a higher ratio of coffee to milk.",
    image: ".jpg"
  },
  {
    name: "Latte",
    price: 4.50,
    description: "A coffee drink made with espresso and steamed milk, often topped with foam.",
    image: ".jpg"
  },
  { 
    name: "Mocha",
    price: 5.00,
    description: "A coffee drink made with espresso, steamed milk, and chocolate syrup, often topped with whipped cream.",
    image: ".jpg"
  },
  {
    name: "Americano",
    price: 3.50,
    description: "A coffee drink made by diluting espresso with hot water, resulting in a lighter flavor and lower caffeine content.",
    image: ".jpg"
  },
  {
    name: "Iced Coffee",
    price: 4.00,
    description: "A cold coffee drink made by brewing coffee and then chilling it, often served over ice.",
    image: ".jpg"
  },
  {
    name: "Hot Chocolate",
    price: 3.50,
    description: "A warm, sweet drink made with milk and chocolate, often topped with whipped cream.", 
    image: ".jpg"
  },
  {
    name: "Chai Latte",
    price: 4.50,
    description: "A spiced tea drink made with black tea, milk, and a blend of spices such as cinnamon, cardamom, and ginger.",
    image: ".jpg"
  },

  {
    name: "Iced Tea",
    price: 3.50,
    description: "A refreshing cold beverage made by brewing tea and then chilling it, often served over ice.",
    image: ".jpg"
  },

  {
    name: "Double Espresso",
    price: 3.00,
    description: "A strong, concentrated coffee made by forcing hot water through finely ground coffee beans.",
    image: ".jpg"
  },

  {
    name: "Long Black",
    price: 3.50,
    description: "A coffee drink made by pouring hot water over a shot of espresso, resulting in a strong and bold flavor.",
    image: ".jpg"
  },

  {
    name: "Iced Latte",
    price: 4.50,
    description: "A cold coffee drink made with espresso and chilled milk, often served over ice.",
    image: ".jpg"
  },
]

const SIGNATURE_COFFEE = [
 {
  name: "Caramel Macchiato",
  price: 5.00,
  description: "A coffee drink made with espresso, steamed milk, and caramel syrup, often topped with whipped cream.",
  image: ".jpg"
 },
 {
  name: "Vanilla Latte",
  price: 5.00,
  description: "A coffee drink made with espresso, steamed milk, and vanilla syrup, often topped with whipped cream.",
  image: ".jpg"
 },
 {
  name: "Hazelnut Latte",
  price: 5.00,
  description: "A coffee drink made with espresso, steamed milk, and hazelnut syrup, often topped with whipped cream.",
  image: ".jpg"
 },
 {
  name: "Paris Vanilla Latte",
  price: 7.50,
  description: "A coffee with ich espresso with creamy steamed milk and premium French vanilla, creating a smooth and comforting café classic.",
  image: ".jpg"
 },
 {
  name: "Valerio Rose Latte",
  price: 7.20,
  description: "A smooth espresso blended with velvety steamed milk, delicate rose syrup, and a hint of vanilla, finished with dried rose petals.",
  image: ".jpg"
 },
 {
  name: "Honey Cinnamon Latte",
  price: 7.20,
  description: "Fresh espresso sweetened with natural honey and lightly spiced with cinnamon for a warm, comforting flavour.",
  image: ".jpg"
 },
 {
  name: "Salted Caramel Mocha",
  price: 7.50,
  description: "Espresso, Belgian chocolate, steamed milk, and salted caramel syrup, topped with whipped cream and a caramel drizzle.",
  image: ".jpg"
 },
 {
  name: "Orange Mocha",
  price: 7.80,
  descprtion: "Belgian chocolate, espresso, and a subtle hint of orange, inspired by classic French chocolate desserts.",
  image: ".jpg"
 },

 {
  name: "Hazelnut Parline Latte",
  price: 7.80,
  descprtion: "Smooth espresso with roasted hazelnut and praline flavours, topped with lightly frothed milk.",
  image: ".jpg"
 },


]

const DESSERTS = [
  {
    name: "Classic Crème Brûlée",
    price: 10.90,
    description: "Silky vanilla custard finished with a crisp caramelised sugar crust.",
    image: ".jpg"
  },

  {
    name: "Chocolate Lava Cake",
    price: 11.90,
    description: "Warm chocolate cake with a gooey molten centre, served with vanilla bean ice cream.",
    image: ".jpg"
  },

 {
  name: "Strawberry Cheesecake",
  price: 10.90,
  description: "Creamy baked cheesecake topped with fresh strawberries and berry coulis.",
  image: ".jpg",
 },

 {
  name: "Tiramisu",
  price: 10.50,
  description: "Traditional Italian dessert made with espresso-soaked sponge, mascarpone, and cocoa.",
  image: ".jpg"
 },

 {
  name: "Lemon Tart",
  price: 9.90,
  description: "Tangy lemon curd in a buttery pastry shell, finished with whipped cream.",
  image: ".jpg"
 },

 {
  name: "Almond Croissant Bread Pudding",
  price: 10.90,
  description: "Warm buttery croissant pudding with vanilla custard and toasted almonds.",
  image: ".jpg"
 },

 {
  name: "Chocolate Brownie Sundae",
  price: 5.00,
  description: "Warm chocolate brownie topped with vanilla ice cream, chocolate sauce, and whipped cream.",
  image: ".jpg"
 },

 {
  name: "Vanilla Bean Affogato",
  price: 9.90,
  description: "Vanilla bean ice cream topped with a freshly poured shot of hot espresso.",
  image: ".jpg"
 },

 {
  name: "Berry Panna Cotta",
  price: 10.50,
  description: "Smooth vanilla panna cotta served with a mixed berry compote.",
  image: ".jpg"
 },

 {
  name: "Macaron Selection (4 Pieces)",
  price: 10.50,
  description: "A trio of handcrafted French macarons in seasonal flavours.",
  image: ".jpg"
 },
]

const SAVOURY=[
  {
    name: "French Fries",
    price: 4.00,
    img: ".jpg",
  },

{
  name: "Waffle",
  price: 4.50,
  img: ".jpg",
},

{
  name: "Pizza",
  price: 10.00,
  img: ".jpg",
},

{
  name: "Wedges",
  price: 3.50,
  img: ".jpg",
},

{
  name: "Garlic Bread",
  price: 5.00,
  img: ".jpg",
},

{
  name: "Spring N'roll",
  price: 4.00,
  img: ".jpg",
},

{
  name: "Mini-Burger",
  price:5.00,
  img: ".jpg",
},

{
  name: "Dumplings (V)",
  price: 10.00,
  descprtion: "8 pieces of them filled with vegetables with sweet chilli and hot sauce.",
  img: ".jpg",
},

{
  name: "Dumplings (NonV)",
  price: 15.00,
  descprtion: "8 pieces of them filled with chicken and ham with sweet chilli and hot sauce.",
  img: ".jpg",
},
]

const DRINKS = [
 {
    name: "Strawberry Lemonade",
    price: 7.50,
    description: "Fresh strawberries blended with lemon juice and sparkling lemonade.",
    image: ".jpg",
  },

   {
    name: "Mango Passion Refresher",
    price: 7.90,
    description: "A tropical blend of mango, passionfruit, and sparkling water.",
    image: ".jpg",
  },

   {
    name: "Peach Iced Tea",
    price: 7.50,
    description: "Brewed peach tea served chilled with fresh peach slices.",
    image: ".jpg",
  },


 {
    name: "Watermelon Mint Cooler",
    price: 7.90,
    description: "Fresh watermelon, mint, lime, and sparkling water.",
    image: ".jpg",
  },


   {
    name: "Citrus Cooler",
    price: 7.50,
    description: "Orange, lemon, lime, and soda water over ice.",
    image: ".jpg",
  },


   {
    name: "Chocolate Dream",
    price: 8.90,
    description: "Rich chocolate ice cream blended with milk and topped with whipped cream.",
    image: ".jpg",
  },


   {
    name: "Strawberry Bliss",
    price: 8.90,
    description: "Creamy strawberry milkshake made with real strawberries.",
    image: ".jpg",
  },


   {
    name: "Berry Bliss",
    price: 8.90,
    description: "Strawberries, blueberries, raspberries, banana, and yogurt.",
    image: ".jpg",
  },

     {
    name: "Classic Vanilla Bean",
    price: 8.50,
    description: "Smooth vanilla bean ice cream blended to perfection.",
    image: ".jpg",
  },

     {
    name: "Cookies & Cream",
    price: 9.20,
    description: "Vanilla ice cream blended with chocolate sandwich cookies.",
    image: ".jpg",
  },

     {
    name: "Salted Caramel Crunch",
    price: 9.20,
    description: "Creamy caramel milkshake finished with caramel drizzle.",
    image: ".jpg",
  },

     {
    name: "Mango Paradise",
    price: 8.90,
    description: "Mango, pineapple, banana, and orange juice.",
    image: ".jpg",
  },

     {
    name: "Green Glow",
    price: 9.20,
    description: "Spinach, kiwi, apple, banana, and coconut water.",
    image: ".jpg",
  },

     {
    name: "Tropical Sunrise",
    price: 8.90,
    description: "Mango, passionfruit, pineapple, and coconut milk.",
    image: ".jpg",
  },


   {
    name: "Coca-Cola",
    price: 4.50,
    image: ".jpg",
  },

     {
    name: "Sprite",
    price: 4.50,
    image: ".jpg",
  },

     {
    name: "Fanta Orange",
    price: 4.50,
    image: ".jpg",
  },

     {
    name: "Ginger Beer",
    price: 5.50,
    image: ".jpg",
  },

     {
    name: "Lift Lemon",
    price: 4.50,
    image: ".jpg",
  },


     {
    name: "Coca-cola Zero sugar",
    price: 5.00,
    image: ".jpg",
  },

  {
    name: "Water",
    price: 4.50,
    quantity: "500ml",
  },

   {
    name: "Sparkling Water",
    price: 5.50 ,
    quantity: "500ml",
  },
]

const CUSTOMIZE= [

  /**** Coffee *****/
{
  name: "Extra Expresso Shot",
  price: 1.00,
},

{
  name: "Oat Milk",
  price: 0.80,
},

{
  name: "Soy Milk",
  price: 0.80,
},

{
  name: "Vanilla Syrup",
  price: 0.80,
},

{
  name: "Hazelnut Syrup",
  price: 0.80,
},

{
  name: "Caramel Syrup",
  price: 0.80,
},

{
  name: "Whipped Cream",
  price: 1.00,
},

{
  name: "Cinnamon",
  price: 0.50,
},

{
  name: "Cocao Powder",
  price: 0.50,
},
]


/* Breakfast Special Choices */

const CUSTOMIZE_BREAKFAST= [

"Classic Butter Croissant",
"Pain du chocolat",
"Avocado Toast",
"Breakfast Sandwich",
"Granola Parfait",
"French Toast",
]

const CUSTOMIZE_BREAKFAST_DRINK= [

  "Espresso",
  "Americano",
  "Flat White",
  "Hot Chocolate",
  "Chai Latte"
]

/* Lunch Special Choices */

const CUSTOMIZE_LUNCH= [
"Mediterranean Veggie Wrap (V)",
"Mediterranean Chicken Salad",
"Mediterranean Wrap",
"Grilled Cheese Sandwich (V)",
"Chicken Caesar Wrap",
]


const CUSTOMIZE_LUNCH_DRINK= [
  "Espresso",
  "Americano",
  "Mocha",
  "Long Black",
  "Iced Latte",
  "Iced Tea",
  "Lemonade",
]

const CUSTOMIZE_DINNER= [
  "Valerio Gourmet Burger",
  "Valerio Gourmet Burger (V)",
  "Pizza",
  "Steak Frites",
  "Creamy Garlic Chicken",
]

const CUSTOMIZE_DINNER_DRINK= [
  "Tropical Paradise",
  "Lavender Lemon Fizz",
  "Blueberry Mint Cooler",
  "Midnight Hot Chocolate",
  "After-Dinner Affogato",
]

const MENU = [BREAKFAST, BREAKFAST_SPECIALS, BREAKFAST_SPECIALS_DRINK, LUNCH, LUNCH_SPECIALS, LUNCH_SPECIALS_DRINK, DINNER, DINNER_SPECIALS, DINNER_SPECIALS_DRINK, COFFEE, SIGNATURE_COFFEE, DESSERTS, DRINKS, SAVOURY, CUSTOMIZE, CUSTOMIZE_BREAKFAST, CUSTOMIZE_BREAKFAST_DRINK, CUSTOMIZE_LUNCH, CUSTOMIZE_LUNCH_DRINK, CUSTOMIZE_DINNER, CUSTOMIZE_DINNER_DRINK];
  
/***** Functions *****/


function displayMENU(title, menuArray) {
  const MENU_CONTAINER = document.getElementById("menuContainer");

  MENU_CONTAINER.innerHTML += "<h2>" + title + "</h2>";

  for (let i = 0; i < menuArray.length; i++) {

    MENU_CONTAINER.innerHTML +=
      "<div class='menuItem'>" +
      "<img src='" + menuArray[i].image + "'>" +
      "<h3>" + menuArray[i].name + "</h3>" +
      "<p>" + menuArray[i].description + "</p>" +
      "<h4>$" + menuArray[i].price + "</h4>" +
      "<button class='menuButton' onclick='addTocart(" + i + ",\"" + title + "\")'>Add to Cart</button>" +
      "</div>";

  }
}

function searchMenu() {
  let search = SEARCH_BAR.value;
  let found = false;

  for (let i = 0; i < MENU.length; i++) {

  if (search === MENU.name) {
  found = true;
  }
}
if (found) {
  window.location.href = "menu.html";
}
else {
  OUTPUT.innerHTML = "<p>Item not found in menu.</p>";}

}

function addTocart (index, title) {
let menuArray

if (title == "Breakfast") {
  menuArray= BREAKFAST;
}
else if (title == "Breakfast Specials"){
  menuArray = BREAKFAST_SPECIALS;
}
else if (title == "Breakfast Drinks"){
  menuArray= BREAKFAST_SPECIALS_DRINK;
}
else if (title == "Lunch"){
  menuArray= LUNCH;
}
else if (title == "Lunch Specials"){
  menuArray = LUNCH_SPECIALS;
}
else if (title == "Lunch Drinks"){
  menuArray = LUNCH_SPECIALS_DRINK;
}
else if (title == "Dinner"){
  menuArray = DINNER;
}
else if (title == "Dinner Specials"){
  menuArray = DINNER_SPECIALS;
}
else if (title == "Dinner Drinks"){
  menuArray = DINNER_SPECIALS_DRINK;
}
else if (title == "Coffee"){
  menuArray = COFFEE;
}
else if (title == "Signature Coffee"){
  menuArray = SIGNATURE_COFFEE;
}
else if (title == "Desserts"){
  menuArray = DESSERTS;
}
else if (title == "Drinks"){
  menuArray = DRINKS;
}
else if (title == "Savoury"){
  menuArray = SAVOURY;
}

CART.push(menuArray[index]);

localStorage.setItem("cart", JSON.stringify(CART));

OUTPUT.innerHTML = "<p>" + menuArray[index].name + " has been added to your cart!</p>";
};

function displayCART() {
  const CART_CONTAINER = document.getElementById("cartContainer");

  CART_CONTAINER.innerHTML = "";

  for (let i = 0; i < CART.length; i++) {

    CART_CONTAINER.innerHTML += 
      "<div class='menuItem'>" +
      "<img src='" + CART[i].image + "'>" +
      "<h3>" + CART[i].name + "</h3>" +
      "<p>" + CART[i].description + "</p> " +
      "<h4>$" + CART[i].price + "</h4>" +
      "<button class='menuButton' onclick='removeFromCart(" + i + ")'>Remove</button>" +
      "</div>";

  }
}; /** After the user adds their items to cart, thye have a option to remove it if they don't want it. The removeFromCart function will help them remove the item and then iit won't be counted in their order.**/

function removeFromCart(index){
  CART.splice(index,1);

  localStorage.setItem("cart", JSON.stringify(CART));

  displayCART();
}


function getFormInput(){
  let customerName = (NAME_FEILD.value);
  OUTPUT.innerHTML = "<p>User Name: " + customerName + "</p>";
  let paymentMethod = (PAYMENT_METHOD_FIELD.value);
  OUTPUT.innerHTML= "<p>Payment Method: " + paymentMethod + "</p>";
  let pocketMoney = (POCKET_MONEY_FIELD.value);
  OUTPUT.innerHTML += "<p>Pocket Money: " + pocketMoney + "</p>";
}

/**If Statements **/

if (document.getElementById("menuContainer")){
displayMENU("Breakfast", BREAKFAST);
displayMENU("Breakfast Specials", BREAKFAST_SPECIALS);
displayMENU("Breakfast Drinks", BREAKFAST_SPECIALS_DRINK);
displayMENU("Lunch", LUNCH);
displayMENU("Lunch Specials", LUNCH_SPECIALS);
displayMENU("Lunch Drinks", LUNCH_SPECIALS_DRINK);
displayMENU("Dinner", DINNER);
displayMENU("Dinner Specials", DINNER_SPECIALS);
displayMENU("Dinner Drinks", DINNER_SPECIALS_DRINK);
displayMENU("Coffee", COFFEE);
displayMENU("Signature Coffee", SIGNATURE_COFFEE);
displayMENU("Desserts", DESSERTS);
displayMENU("Drinks", DRINKS);
displayMENU("Savoury", SAVOURY);
}

if (document.getElementById("cartContainer")){
  displayCART();
}
