/***** Variables *****/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const SEARCH_BAR = document.getElementById("searchBar");
let CART=[];
let QUANTITY=[];
if (localStorage.getItem("cart")) {
    CART = JSON.parse(localStorage.getItem("cart"));
};
for (let i= 0; i < 100; i ++){
  QUANTITY[i]= 1;
}

let selectedExtras = "";
let extraCost = 0;
let CURRENT_CHOICES = [];
let ORDERS = [];
if (localStorage.getItem("orders")){
  ORDERS = JSON.parse(localStorage.getItem("orders"));
}
const CUSTOMER_NAME_FIELD = document.getElementById("customerNameField");
const PAYMENT_METHOD_FIELD = document.getElementById("paymentMethodField");
const POCKET_MONEY_FIELD = document.getElementById("pocketMoneyField");


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
    image: "Butter Croisssant.jpg"
  },
  { name: "Pain au Chocolat",
    price: 6.00,
    description: "A classic French pastry filled with rich, dark chocolate.",
    image: "Pain au chocolat.jpg"
  },
  { name: "Almond Croissant",
    price: 6.50,
    description: "A flaky croissant filled with almond cream and topped with sliced almonds.",
    image: "Almond Croissant.jpg"
  },
  { name: "Raspberry Danish",
    price: 5.00,
    description: "A sweet pastry filled with raspberry jam and cream cheese.",
    image: "Rasberry Danish.jpg"
  },
  { name: "Cinnamon Roll",
    price: 4.50,
    description: "A soft, sweet roll filled with cinnamon and sugar, topped with cream cheese icing.",
    image: "Cinanom Roll.jpg"
  },
  { name: "French Toast",
    price: 5.50,
    description: "Slices of bread soaked in a rich egg mixture and cooked to perfection, served with syrup.",
    image: "French Toast.jpg"
  },
  { name: "Eggs Benedict",
    price: 8.00,
    description: "Poached eggs and Canadian bacon on an English muffin, topped with hollandaise sauce.",
    image: "Eggs benedict.jpg"
  },
  {
  name: "Breakfast Burrito",
  price: 7.50,
  description: "A warm tortilla filled with scrambled eggs, cheese, and your choice of bacon or sausage.",
  image: "Breakfast Burrito.jpg"
  },
  {
  name: "Avocado Toast",
  price: 6.00,
  description: "Toasted bread topped with mashed avocado, cherry tomatoes, and a sprinkle of salt and pepper.",
  image: "Avocado Toast.jpg"
  },
  {
    name: "Breakfast Sandwich",
    price: 5.50,
    description: "A toasted English sandwich filled with scrambled eggs, cheese, and your choice of bacon or sausage.",
    image: "Breakfast Sandwich.jpg"
  },
  {
    name: "Granola Parfait",
    price: 4.50,
    description: "Layers of granola, yogurt, and fresh fruit, served in a glass.",
    image: "Granola Parfait.jpg" 
  },
]

const BREAKFAST_SPECIALS = [
  {
    name: "Breakfast Combo Meal",
    price: 16.00,
    description: "A hearty breakfast combo including choice of a pastry, coffee, and juice.",
    image: "Breakfast Combo Meal.jpg"
  },
  {
    name: "Pancake Stack",
    price: 7.00,
    description: "A stack of fluffy pancakes served with butter and syrup.",
    image: "Pancake Stack.jpg"
  },
  {
    name: "Big Breakfast Platter",
    price: 12.00,
    description: "A generous platter including eggs, bacon, sausage, toast, and hash browns.",
    image: "Big Breakfast Platter.jpg"
  },

  {
    name: "Kids Breakfast Special",
    price: 16.00,
    description: "A smaller breakfast option for kids, including a choice of pancake or French toast, and a small drink.",
    image: "Kids Meal.jpg" 
  },

  {
    name: "Family Breakfast Feast",
    price: 60.00,
    description: "A large breakfast platter for the whole family, including a variety of pastries, eggs, bacon, sausage, and toast.",
    image: "Family Breakfast.jpg"
  },

  {
    name: "Healthy Breakfast Bowl",
    price: 10.00,
    description: "A nutritious breakfast option including a bowl of oatmeal, fresh fruit, a coffee of your choice,and a side of yogurt.",
    image: "Healthy Breakfast.jpg"
  },

  {
    name: "Breakfast Vegetarian Special",
    price: 12.00,
    description: "A vegetarian breakfast option including a veggie omelette, toast, and a side of fruit.",
    image: "Breakfast Vegetarian Special.jpg"
  },

  {
    name: "Family Vegetarian Breakfast",
    price: 25.00,
    description: "A vegetarian breakfast option for the whole family, including a variety of veggie omelettes, toast, and a side of fruit.",
    image: " Vegetarian Breakfast.jpg"
  },
];

const BREAKFAST_SPECIALS_DRINK = [
  {
  name: "Espresso",
  price: 3.00,
  description: "A strong, concentrated coffee made by forcing hot water through finely ground coffee beans.",
  image: "images.jpg"
  },
  {
  name: "Cappuccino",
  price: 4.00,
  description: "A coffee drink made with espresso, steamed milk, and milk foam.", 
  image: "Cappuccino.jpg"
  },
  {
    name: "Flat White",
    price: 4.50,
    description: "A coffee drink made with espresso and steamed milk, similar to a latte but with a higher ratio of coffee to milk.",
    image: "Flat White.jpg"
  },
  {
    name: "Latte",
    price: 4.50,
    description: "A coffee drink made with espresso and steamed milk, often topped with foam.",
    image: "Caffe_Latte_cup.jpg"
  },
  { 
    name: "Mocha",
    price: 5.00,
    description: "A coffee drink made with espresso, steamed milk, and chocolate syrup, often topped with whipped cream.",
    image: "Mocha.jpg"
  },
  {
    name : "Americano",
    price: 3.50,
    description: "A coffee drink made by diluting espresso with hot water, resulting in a lighter flavor and lower caffeine content.",
    image: "Americano.jpg"
  },
  {
    name: "Iced Coffee",
    price: 4.00,
    description: "A cold coffee drink made by brewing coffee and then chilling it, often served over ice.",
    image: "Iced coffee.jpg"
  },
  {
    name: "Hot Chocolate",
    price: 3.50,
    description: "A warm, sweet drink made with milk and chocolate, often topped with whipped cream.", 
    image: "Hot chocolate.jpg"
  },
  {
    name: "Chai Latte",
    price: 4.50,
    description: "A spiced tea drink made with black tea, milk, and a blend of spices such as cinnamon, cardamom, and ginger.",
    image: "Chai Latte.jpg"
  },
]

const LUNCH = [
{
  name: "Croque Monsieur",
  price: 8.00,
  description: "A classic French sandwich made with ham, cheese, and béchamel sauce, grilled to perfection.",
  image: "Croque Monsieur.jpg"
},
{
  name: "Croque Madame",
  price: 9.00,
  description: "A variation of the Croque Monsieur, topped with a fried egg.",
  image: "Croque Madame.jpg" 
},
{
  name: "Quiche Lorraine",
  price: 7.50,
  description: "A savory tart filled with eggs, cream, cheese, and bacon.",
  image: "Quiche Lorraine.jpg"
},
{
  name: "Grilled Cheese Sandwich(V)",
  price: 6.00,
  description: "A classic sandwich made with melted cheese between two slices of toasted bread.",
  image: "Grilled Cheese Sandwich(V).jpg"
},
{
  name: "Mushroom and Swiss Panini(V)",
  price: 10.00,
  description: "A juicy beef patty topped with sautéed mushrooms and Swiss cheese, served on a toasted bun.",
  image: "Mushroom and Swiss Panini(V).jpg"
},
{
  name: "Caprese Panini(V)",
  price: 9.00,
  description: "A sandwich made with fresh mozzarella, tomatoes, and basil, served on a toasted baguette.",
  image: "Caprese Panini(V).jpg"
},
{
  name: "Chicken Caesar Wrap",
  price: 8.50,
  description: "A wrap filled with grilled chicken, romaine lettuce, parmesan cheese, and Caesar dressing.", 
  image: "Chicken Caesar Wrap.jpg"
},
{
  name: "Mediterranean Veggie Wrap(V)",
  price: 8.00,
  description: "A wrap filled with hummus, roasted vegetables, feta cheese, and mixed greens.",
  image: "Mediterranean Veggie Wrap(V).jpg"
},
{
  name: "Mediterranean Chicken Salad",
  price: 9.50,
  description: "A salad made with grilled chicken, mixed greens, cherry tomatoes, cucumbers, red onions, and feta cheese, served with a lemon vinaigrette.",
  image: "Mediterranean Chicken Salad.jpg"
},
{
  name: "Mediterranean Wrap",
  price: 9.50,
  description: "A wrap filled with grilled chicken, hummus, roasted vegetables, feta cheese, and mixed greens.",
  image: "Mediterranean Wrap.jpg"
},

]

const LUNCH_SPECIALS = [
  {
    name: "Lunch Combo Meal",
    price: 15.00,
    description: "A hearty lunch combo including a choice of sandwich, salad, and drink.", 
    image: "Lunch Combo Meal.jpg"
  },

  {
    name: "Soup and Sandwich Special",
    price: 12.00,
    description: "A special lunch option including a cup of soup and a half sandwich of your choice.",
    image: "Soup and Sandwich Special.jpg"
  },
  {
    name: "Lunch for Two",
    price: 25.00,
    description: "A special lunch option for two people, including a choice of two sandwiches, two salads, and two drinks.",
    image: "Lunch for Two.jpg"
  },

  {
    name: "Family Lunch Special",
    price: 40.00,
    description: "A special lunch option for the whole family, including a choice of four sandwiches, four salads, and four drinks.",
    image: "Family Lunch Special.jpg"
  },

  {
    name: "Vegetarian Lunch Special",
    price: 12.00,
    description: "A special lunch option for vegetarians, including a choice of vegetarian sandwich, salad, and drink.",
    image: "Vegetarian Lunch Special.jpg"
  },
  {
    name: "Kids Lunch Special",
    price: 10.00,
    description: "A special lunch option for kids, including a choice of sandwich, fruit cup, and small drink.",
    image: "Kids Lunch Special.jpg"
  },
]

const LUNCH_SPECIALS_DRINK = [
    {
  name: "Espresso",
  price: 3.00,
  description: "A strong, concentrated coffee made by forcing hot water through finely ground coffee beans.",
  image: "images.jpg"
  },
  {
  name: "Cappuccino",
  price: 4.00,
  description: "A coffee drink made with espresso, steamed milk, and milk foam.", 
  image: "Cappuccino.jpg"
  },
  {
    name: "Flat White",
    price: 4.50,
    description: "A coffee drink made with espresso and steamed milk, similar to a latte but with a higher ratio of coffee to milk.",
    image: "Flat White.jpg"
  },
  {
    name: "Latte",
    price: 4.50,
    description: "A coffee drink made with espresso and steamed milk, often topped with foam.",
    image: "Caffe_Latte_cup.jpg"
  },
  { 
    name: "Mocha",
    price: 5.00,
    description: "A coffee drink made with espresso, steamed milk, and chocolate syrup, often topped with whipped cream.",
    image: "Mocha.jpg"
  },
  {
    name: "Americano",
    price: 3.50,
    description: "A coffee drink made by diluting espresso with hot water, resulting in a lighter flavor and lower caffeine content.",
    image: "Americano.jpg"
  },
  {
    name: "Iced Coffee",
    price: 4.00,
    description: "A cold coffee drink made by brewing coffee and then chilling it, often served over ice.",
    image: "Iced coffee.jpg"
  },
  {
    name: "Hot Chocolate",
    price: 3.50,
    description: "A warm, sweet drink made with milk and chocolate, often topped with whipped cream.", 
    image: "Hot chocolate.jpg"
  },
  {
    name: "Chai Latte",
    price: 4.50,
    description: "A spiced tea drink made with black tea, milk, and a blend of spices such as cinnamon, cardamom, and ginger.",
    image: "Chai Latte.jpg"
  },

  {
    name: "Iced Tea",
    price: 3.50,
    description: "A refreshing cold beverage made by brewing tea and then chilling it, often served over ice.",
    image: "Iced Tea.jpg"
  },

  {
    name: "Lemonade",
    price: 3.00,
    description: "A sweet and tangy beverage made with fresh lemon juice, water, and sugar.",
    image: "Lemonade.jpg"
  },

  {
    name: "Long Black",
    price: 3.50,
    description: "A coffee drink made by pouring hot water over a shot of espresso, resulting in a strong and bold flavor.",
    image: "Long Black.jpg"
  },

  {
    name: "Iced Latte",
    price: 4.50,
    description: "A cold coffee drink made with espresso and chilled milk, often served over ice.",
    image: "Iced Latte.jpg"
  },
]

const DINNER = [
  {
    name: "Steak Frites",
    price: 31.90,
    description: "Grilled premium sirloin steak served with crispy French fries and herb butter.",
    image: "Steak Frites.jpg"
  },

  {
    name: "Creamy Garlic Chicken",
    price: 27.90,
    description: "Tender grilled chicken breast in a creamy garlic and parmesan sauce, served with seasonal vegetables.",
    image: "Creamy Garlic Chicken.jpg"
  },

  {
    name: "Truffle Mushroom",
    price: 24.90,
    description: "Creamy fettuccine tossed with sautéed mushrooms, parmesan, and truffle oil.",
    image: "Truffle Mushroom.jpg"
  },

  {
    name: "Velario Gourmet Burger",
    price: 23.90,
    description: "Premium chicken patty with cheddar, caramelised onions, lettuce, tomato, aioli, and fries.",
    image: "Velario Gourmet Burger.jpg"
  },

  {
    name: "Velario Gourmet Burger(V)",
    price: 23.90,
    description: "Premium vegie patty with cheddar, caramelised onions, lettuce, tomato, aioli, and fries.",
    image: "Velario Gourmet Burger(V).jpg"
  },

  {
    name: "Mediterranean Vegetable Risotto",
    price: 23.90,
    description: "Creamy Arborio rice with roasted vegetables, parmesan, and fresh herbs.",
    image: "Mediterranean Vegetable Risotto.jpg"
  },
]

const DINNER_SPECIALS = [
  {
    name: "Family Dinner Special",
    price: 30.00,
    desciption: "A comforting family dinner packed with flavour, including grilled meats, fresh seasonal sides, and warm artisan bread, made for sharing.",
    image: "Family Dinner Special.jpg",
  },

   {
    name: "Date Night Dinner",
    price: 49.90,
    description: "A romantic dinner for two with two mains, one shared dessert, and two signature drinks.",
    image: "Date Night Dinner.jpg",
  },

   {
    name: "Steak Night Special",
    price: 34.90,
    description: "Premium grilled sirloin steak served with fries, salad, and your choice of drink.",
    image: "Steak Night Special.jpg",
  },

   {
    name: "Vegetarian Dinner Special",
    price: 26.90,
    description: "A wholesome vegetarian meal with a main, side salad, and a refreshing drink.",
    image: "Vegetarian Dinner Special.jpg",
  },
]

const DINNER_SPECIALS_DRINK = [
  {
    name: "Sparkling Rose Spritz (Non-Alcoholic)",
    price: 8.90,
    description: "Sparkling water with rose syrup, fresh strawberries, mint, and lemon.",
    image: "Sparkling Rose Spritz (Non-Alcoholic).jpg",
  },

  {
    name: "Citrus Sunset",
    price: 8.50,
    description: "Orange, passionfruit, lemon, and sparkling soda served over ice.",
    image: "Citrus Sunset.jpg",
  },

  {
    name: "Berry Royale",
    price: 7.90,
    description: "Fresh berries blended with cranberry juice and sparkling lemonade.",
    image: "Berry Royale.jpg",
  },

  {
    name: "Tropical Paradise",
    price: 6.60,
    description: "Pineapple, mango, coconut, and lime blended into a refreshing cooler.",
    image: "Tropical Paradise.jpg",
  },

  {
    name: "Lavender Lemon Fizz",
    price: 8.50,
    description: "Fresh lemonade infused with lavender syrup and sparkling water.",
    image: "Lavender Lemon Fizz.jpg",
  },

{
    name: "Blueberry Mint Cooler",
    price: 8.90,
    description: "Blueberries, fresh mint, lime juice, and sparkling soda.",
    image: "Blueberry Mint Cooler.jpg",
  },

  {
    name: "Midnight Hot Chocolate",
    price: 7.90,
    description: "Rich Belgian hot chocolate topped with whipped cream and chocolate shavings.",
    image: "Midnight Hot Chocolate.jpg",
  },

  {
    name: "After-Dinner Affogato",
    price: 9.90,
    description: "Vanilla bean ice cream with a freshly poured espresso.",
    image: "After-Dinner Affogato.jpg",
  },


  {
    name: "Hazelnut Hot Chocolate",
    price: 5.50,
    description: "Creamy hot chocolate flavoured with roasted hazelnut and topped with whipped cream.",
    image: "Hazelnut Hot Chocolate.jpg",
  },
]

const COFFEE = [
      {
  name: "Esspresso",
  price: 3.00,
  description: "A strong, concentrated coffee made by forcing hot water through finely ground coffee beans.",
  image: "images.jpg"
  },
  {
  name: "Cappuccino",
  price: 4.00,
  description: "A coffee drink made with espresso, steamed milk, and milk foam.", 
  image: "Cappuccino.jpg"
  },
  {
    name: "Flat White",
    price: 4.50,
    description: "A coffee drink made with espresso and steamed milk, similar to a latte but with a higher ratio of coffee to milk.",
    image: "Flat White.jpg"
  },
  {
    name: "Latte",
    price: 4.50,
    description: "A coffee drink made with espresso and steamed milk, often topped with foam.",
    image: "Caffe_Latte_cup.jpg"
  },
  { 
    name: "Mocha",
    price: 5.00,
    description: "A coffee drink made with espresso, steamed milk, and chocolate syrup, often topped with whipped cream.",
    image:"Mocha.jpg"
  },
  {
    name: "Americano",
    price: 3.50,
    description: "A coffee drink made by diluting espresso with hot water, resulting in a lighter flavor and lower caffeine content.",
    image: "Americano.jpg"
  },
  {
    name: "Iced Coffee",
    price: 4.00,
    description: "A cold coffee drink made by brewing coffee and then chilling it, often served over ice.",
    image: "Iced coffee.jpg"
  },
  {
    name: "Hot Chocolate",
    price: 3.50,
    description: "A warm, sweet drink made with milk and chocolate, often topped with whipped cream.", 
    image: "Hot chocolate.jpg"
  },
  {
    name: "Chai Latte",
    price: 4.50,
    description: "A spiced tea drink made with black tea, milk, and a blend of spices such as cinnamon, cardamom, and ginger.",
    image: "Chai Latte.jpg"
  },

  {
    name: "Iced Tea",
    price: 3.50,
    description: "A refreshing cold beverage made by brewing tea and then chilling it, often served over ice.",
    image: "Iced Tea.jpg"
  },

  {
    name: "Double Espresso",
    price: 3.00,
    description: "A strong, concentrated coffee made by forcing hot water through finely ground coffee beans.",
    image: "Double Espresso.jpg"
  },

  {
    name: "Long Black",
    price: 3.50,
    description: "A coffee drink made by pouring hot water over a shot of espresso, resulting in a strong and bold flavor.",
    image: "Long Black.jpg"
  },

  {
    name: "Iced Latte",
    price: 4.50,
    description: "A cold coffee drink made with espresso and chilled milk, often served over ice.",
    image: "Iced Latte.jpg"
  },
]

const SIGNATURE_COFFEE = [
 {
  name: "Caramel Macchiato",
  price: 5.00,
  description: "A coffee drink made with espresso, steamed milk, and caramel syrup, often topped with whipped cream.",
  image: "Caramel Macchiato.jpg"
 },
 {
  name: "Vanilla Latte",
  price: 5.00,
  description: "A coffee drink made with espresso, steamed milk, and vanilla syrup, often topped with whipped cream.",
  image: "Vanilla Latte.jpg"
 },
 {
  name: "Hazelnut Latte",
  price: 5.00,
  description: "A coffee drink made with espresso, steamed milk, and hazelnut syrup, often topped with whipped cream.",
  image: "Hazelnut Latte.jpg"
 },
 {
  name: "Paris Vanilla Latte",
  price: 7.50,
  description: "A coffee with ich espresso with creamy steamed milk and premium French vanilla, creating a smooth and comforting café classic.",
  image: "Paris Vanilla Latte.jpg"
 },
 {
  name: "Valerio Rose Latte",
  price: 7.20,
  description: "A smooth espresso blended with velvety steamed milk, delicate rose syrup, and a hint of vanilla, finished with dried rose petals.",
  image: "Valerio Rose Latte.jpg"
 },
 {
  name: "Honey Cinnamon Latte",
  price: 7.20,
  description: "Fresh espresso sweetened with natural honey and lightly spiced with cinnamon for a warm, comforting flavour.",
  image: "Honey Cinnamon Latte.jpg"
 },
 {
  name: "Salted Caramel Mocha",
  price: 7.50,
  description: "Espresso, Belgian chocolate, steamed milk, and salted caramel syrup, topped with whipped cream and a caramel drizzle.",
  image: "Salted Caramel Mocha.jpg"
 },
 {
  name: "Orange Mocha",
  price: 7.80,
  descprtion: "Belgian chocolate, espresso, and a subtle hint of orange, inspired by classic French chocolate desserts.",
  image: "Orange Mocha.jpg"
 },

 {
  name: "Hazelnut Parline Latte",
  price: 7.80,
  descprtion: "Smooth espresso with roasted hazelnut and praline flavours, topped with lightly frothed milk.",
  image: "Hazelnut Parline Latte.jpg"
 },


]

const DESSERTS = [
  {
    name: "Classic Crème Brûlée",
    price: 10.90,
    description: "Silky vanilla custard finished with a crisp caramelised sugar crust.",
    image: "Classic Crème Brûlée.jpg"
  },

  {
    name: "Chocolate Lava Cake",
    price: 11.90,
    description: "Warm chocolate cake with a gooey molten centre, served with vanilla bean ice cream.",
    image: "Chocolate Lava Cake.jpg"
  },

 {
  name: "Strawberry Cheesecake",
  price: 10.90,
  description: "Creamy baked cheesecake topped with fresh strawberries and berry coulis.",
  image: "Strawberry Cheesecake.jpg",
 },

 {
  name: "Tiramisu",
  price: 10.50,
  description: "Traditional Italian dessert made with espresso-soaked sponge, mascarpone, and cocoa.",
  image: "Tiramisu.jpg"
 },

 {
  name: "Lemon Tart",
  price: 9.90,
  description: "Tangy lemon curd in a buttery pastry shell, finished with whipped cream.",
  image: "Lemon Tart.jpg"
 },

 {
  name: "Almond Croissant Bread Pudding",
  price: 10.90,
  description: "Warm buttery croissant pudding with vanilla custard and toasted almonds.",
  image: "Almond Bread.jpg"
 },

 {
  name: "Chocolate Brownie Sundae",
  price: 5.00,
  description: "Warm chocolate brownie topped with vanilla ice cream, chocolate sauce, and whipped cream.",
  image: "Chocolate Brownie Sundae.jpg"
 },

 {
  name: "Vanilla Bean Affogato",
  price: 9.90,
  description: "Vanilla bean ice cream topped with a freshly poured shot of hot espresso.",
  image: "Vanilla Bean Affogato.jpg"
 },

 {
  name: "Berry Panna Cotta",
  price: 10.50,
  description: "Smooth vanilla panna cotta served with a mixed berry compote.",
  image: "Berry Panna Cotta.jpg"
 },

 {
  name: "Macaron Selection (4 Pieces)",
  price: 10.50,
  description: "Four handcrafted French macarons in seasonal flavours.",
  image: "Macaron Selection (4 Pieces).jpg"
 },
]

const SAVOURY=[
  {
    name: "French Fries",
    price: 4.00,
    description: "With Mayo and Ketchup",
    image: "French Fries.jpg",
  },

{
  name: "Waffles",
  price: 4.50,
  description: "Waffle with Hershey chocolate syrup and whipped cream",
  image: "Waffle.jpg",
},

{
  name: "Pizza",
  price: 10.00,
  description: "6 slices of Margherita",
  image: "Pizza.jpg",
},

{
  name: "Wedges",
  price: 3.50,
  description: "With Mayo, Tatua Cheese Sauce and Ketchup",
  image: "Wedges.jpg",
},

{
  name: "Garlic Bread",
  price: 5.00,
  description: "Grilled with chesse",
  image: "Garlic Bread.jpg",
},

{
  name: "Spring N'roll",
  price: 4.00,
  description: "Vegetable spring roll (6 pieces)",
  image: "Spring-Roll.jpg",
},

{
  name: "Mini-Burger",
  price:5.00,
  description: "4 pieces with veggie patty.",
  image: "Mini-Burger.jpg",
},

{
  name: "Dumplings (V)",
  price: 10.00,
  description: "8 pieces of them filled with vegetables with sweet chilli and hot sauce.",
  image: "Dumplings (V).jpg",
},

{
  name: "Dumplings (NonV)",
  price: 15.00,
  description: "8 pieces of them filled with chicken and ham with sweet chilli and hot sauce.",
  image: "Dumplings (NonV).jpg",
},
]

const DRINKS = [
 {
    name: "Strawberry Lemonade",
    price: 7.50,
    description: "Fresh strawberries blended with lemon juice and sparkling lemonade.",
    image: "Strawberry Lemonade.jpg",
  },

   {
    name: "Mango Passion Refresher",
    price: 7.90,
    description: "A tropical blend of mango, passionfruit, and sparkling water.",
    image: "Mango Passion Refresher.jpg",
  },

   {
    name: "Peach Iced Tea",
    price: 7.50,
    description: "Brewed peach tea served chilled with fresh peach slices.",
    image: "Peach Iced Tea.jpg",
  },


 {
    name: "Watermelon Mint Cooler",
    price: 7.90,
    description: "Fresh watermelon, mint, lime, and sparkling water.",
    image: "Watermelon Mint Cooler.jpg",
  },


   {
    name: "Citrus Cooler",
    price: 7.50,
    description: "Orange, lemon, lime, and soda water over ice.",
    image: "Citrus Cooler.jpg",
  },


   {
    name: "Chocolate Dream",
    price: 8.90,
    description: "Rich chocolate ice cream blended with milk and topped with whipped cream.",
    image: "Chocolate Dream.jpg",
  },


   {
    name: "Strawberry Bliss",
    price: 8.90,
    description: "Creamy strawberry milkshake made with real strawberries.",
    image: "Strawberry Bliss.jpg",
  },


   {
    name: "Berry Bliss",
    price: 8.90,
    description: "Strawberries, blueberries, raspberries, banana, and yogurt.",
    image: "Berry Bliss.jpg",
  },

     {
    name: "Classic Vanilla Bean",
    price: 8.50,
    description: "Smooth vanilla bean ice cream blended to perfection.",
    image: "Classic Vanilla Bean.jpg",
  },

     {
    name: "Cookies & Cream",
    price: 9.20,
    description: "Vanilla ice cream blended with chocolate sandwich cookies.",
    image: "Cookies & Cream.jpg",
  },

     {
    name: "Salted Caramel Crunch",
    price: 9.20,
    description: "Creamy caramel milkshake finished with caramel drizzle.",
    image: "Salted Caramel Crunch.jpg",
  },

     {
    name: "Mango Paradise",
    price: 8.90,
    description: "Mango, pineapple, banana, and orange juice.",
    image: "Mango Paradise.jpg",
  },

     {
    name: "Green Glow",
    price: 9.20,
    description: "Spinach, kiwi, apple, banana, and coconut water.",
    image: "Green Glow.jpg",
  },

     {
    name: "Tropical Sunrise",
    price: 8.90,
    description: "Mango, passionfruit, pineapple, and coconut milk.",
    image: "Tropical Sunrise.jpg",
  },


   {
    name: "Coca-Cola",
    price: 4.50,
    descprition: "500ml",
    image: "Coca-Cola.jpg",
  },

     {
    name: "Sprite",
    price: 4.50,
    descprition: "500ml",
    image: "Sprite.jpg",
  },
  {
    name: "Sprite Zero-Sugar",
    price: 5.00,
    descprition: "500ml",
    image: "Sprite Zero-Sugar.jpg",
  },

  {
    name: "Fanta Orange",
    price: 4.50,
    descprition: "500ml",
    image: "Fanta Orange.jpg",
  },

     {
    name: "Ginger Beer",
    price: 5.50,
    descprition: "1L",
    image: "Ginger Beer.jpg",
  },

     {
    name: "Lift Lemon",
    price: 4.50,
    descprition: "500ml",
    image: "Lift Lemon.jpg",
  },


     {
    name: "Coca-Cola Zero sugar",
    price: 5.00,
    descprition: "500ml",
    image: "Coke-Football.jpg",
  },

  {
    name: "Water",
    price: 6.00,
    description: "1L",
    image: "Water.jpg",
  },

   {
    name: "Sparkling Water",
    price: 7.50 ,
    description: "1L",
    image: "Sparkling Water.jpg",
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
 
/* Dinner Special Choices */
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

const MENU = [BREAKFAST, BREAKFAST_SPECIALS, BREAKFAST_SPECIALS_DRINK, LUNCH, LUNCH_SPECIALS, LUNCH_SPECIALS_DRINK, DINNER, DINNER_SPECIALS, DINNER_SPECIALS_DRINK, COFFEE, SIGNATURE_COFFEE, DESSERTS, DRINKS, SAVOURY];
  
/***** Functions *****/


function displayMENU(title, menuArray) {
  const MENU_CONTAINER = document.getElementById("menuContainer");

  MENU_CONTAINER.innerHTML += "<h2>" + title + "</h2>";

  for (let i = 0; i < menuArray.length; i++) {

    let customizeButton = "";

    if (
      title == "Breakfast Specials" ||
      title == "Breakfast Drinks" ||
      title == "Lunch Specials" ||
      title == "Lunch Drinks" ||
      title == "Dinner Specials" ||
      title == "Dinner Drinks" ||
      title == "Coffee"
    ) {
      customizeButton =
        "<button class='menuButton' onclick='showCustomize(" + i + ", \"" + title + "\")'>Customize</button>";
    }

    MENU_CONTAINER.innerHTML +=
      "<div class='menuItem'>" +
      "<img src='" + menuArray[i].image + "'>" +
      "<h3>" + menuArray[i].name + "</h3>" +
      "<p>" + menuArray[i].description + "</p>" +
      "<h4>$" + menuArray[i].price + "</h4>" +

      
      "<div class='quantityButton'>"+
      "<button onclick='decreaseQuantity(\"" + title + "\", " + i + ")'>-</button>" +

      "<span id='quantity" + title + i + "'>1</span>" +

      "<button onclick='increaseQuantity(\"" + title + "\", " + i + ")'>+</button>" +
      "</div>" + 
      customizeButton +

      "<button class='menuButton' onclick='addTocart(" + i + ", \"" + title + "\")'>Add to Cart</button>" +
      "</div>";

  }
}

function showCustomize(index, title){

  const CUSTOMIZE_CONTAINER = document.getElementById("customizeContainer");
  const CUSTOMIZE_CONTENT = document.getElementById("customizeContent");

  CUSTOMIZE_CONTAINER.style.display = "block";

  CUSTOMIZE_CONTENT.innerHTML = "<h2>Customize Your Order</h2>";

  CURRENT_CHOICES = [];

  if (title == "Breakfast Specials"){
    CURRENT_CHOICES = CUSTOMIZE_BREAKFAST;
  }
  else if (title == "Breakfast Drinks"){
    CURRENT_CHOICES = CUSTOMIZE_BREAKFAST_DRINK;
  }
  else if (title == "Lunch Specials"){
    CURRENT_CHOICES = CUSTOMIZE_LUNCH;
  }
  else if (title == "Lunch Drinks"){
    CURRENT_CHOICES = CUSTOMIZE_LUNCH_DRINK;
  }
  else if (title == "Dinner Specials"){
    CURRENT_CHOICES = CUSTOMIZE_DINNER;
  }
  else if (title == "Dinner Drinks"){
    CURRENT_CHOICES = CUSTOMIZE_DINNER_DRINK;
  }

  if (CURRENT_CHOICES.length > 0){

    CUSTOMIZE_CONTENT.innerHTML += "<h3>Choose One</h3>";

    for (let i = 0; i < CURRENT_CHOICES.length; i++){

      CUSTOMIZE_CONTENT.innerHTML +=
      "<input type='radio' name='mealChoice' id='choice" + i + "'>" +
      CURRENT_CHOICES[i] +
      "<br>";

    }

  }

  CUSTOMIZE_CONTENT.innerHTML += "<h3>Add Extras</h3>";

  for (let i = 0; i < CUSTOMIZE.length; i++){

    CUSTOMIZE_CONTENT.innerHTML +=
    "<input type='checkbox' id='custom" + i + "'>" +
    CUSTOMIZE[i].name +
    " (+$" + CUSTOMIZE[i].price + ")" +
    "<br>";

  }

  CUSTOMIZE_CONTENT.innerHTML +=
  "<br><button onclick='finishCustomize(" + index + ", \"" + title + "\")'>Save Customization</button>";

  CUSTOMIZE_CONTENT.innerHTML +=
  "<button onclick='closeCustomize()'>Close</button>";

}

function finishCustomize(index, title){
  selectedExtras = "";
  extraCost = 0;

  // Get the selected meal/drink choice 
  let selectedChoice = ""
 for(let i = 0; i < CURRENT_CHOICES.length; i++ ){
  let CHOICE = document.getElementById("choice" + i);

  if (CHOICE.checked){
selectedChoice = CURRENT_CHOICES[i];
  }
}

// Get selected Extras
  for(let i = 0; i < CUSTOMIZE.length; i++ ){
  let CUSTOM_BOX = document.getElementById("custom" + i);

  if (CUSTOM_BOX.checked){
 selectedExtras += CUSTOMIZE [i].name + ",";
 extraCost += CUSTOMIZE[i].price;
  }
}

// Save both choice and Extras
if (selectedChoice != ""){
  selectedExtras= "Choice: " + selectedChoice + "<br> Extras: " + selectedExtras;
}

  OUTPUT.innerHTML =
  "<p><b>Customization Saved!</b></p>" +
  "<p>" + selectedExtras + "</p>" +
  "<p><b>Extra Cost:</b> $" + extraCost + "</p>";

closeCustomize();

}

function closeCustomize() {
  document.getElementById("customizeContainer").style.display = "none";
}

function searchMenu() {

  let search = SEARCH_BAR.value;
  let found = false;

  for (let i = 0; i < MENU.length; i++) {

    for (let j = 0; j < MENU[i].length; j++) {

      if (MENU[i][j].name.toLowerCase() == search) {

        found = true;
        break;

      }

    }

    if (found) {
      break;
    }
  }

  if (found) {

    OUTPUT.innerHTML = "<p>Item found! Opening menu...</p>";

    setTimeout(function () {
      window.location.href = "menu.html";
    }, 1500);

  }
  else {

    OUTPUT.innerHTML = "<p>Item not found in menu.</p>";

  }

}

function addTocart (index, title) {
let menuArray
let found = false;

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

 if (QUANTITY[title + index]== undefined){
    QUANTITY[title + index]= 1;
  }


for (let i = 0; i < CART.length; i++){
  if (CART[i].name === menuArray[index].name){
    if (CART[i].extras == selectedExtras){
    CART[i].quantity += QUANTITY[title + index];
    found=true;
  }
 }

}

if (found == false){
  let item = {
    image: menuArray[index].image,
    name: menuArray[index].name,
    description: menuArray[index].description,
    price: menuArray[index].price,
    quantity: QUANTITY[title + index],
    extras: selectedExtras || "None",
    extraCost : extraCost || 0
  };

  CART.push(item);
}

localStorage.setItem("cart", JSON.stringify(CART));

OUTPUT.innerHTML = "<p>" + menuArray[index].name + " has been added to your cart! </p>"

selectedExtras = "";
extraCost = 0;

QUANTITY[title + index] = 1;

document.getElementById("quantity" + title + index).innerHTML = "1";
}

function displayCART() {
  const CART_CONTAINER = document.getElementById("cartContainer");

  CART_CONTAINER.innerHTML = "";

  for (let i = 0; i < CART.length; i++) {

    CART_CONTAINER.innerHTML += 
      "<div class='menuItem'>" +
      "<img src='" + CART[i].image + "'>" +
      "<h3>" + CART[i].name + "</h3>" +
      "<p><b>Extras: </b>" + CART[i].extras + "</p>" + 
      "<p>" + CART[i].description + "</p> " +
      "<h4>$" + CART[i].price + "</h4>" +
      "<p>Quantity: " + CART[i].quantity + "</p>" +
      "<button class='menuButton' onclick='removeFromCart(" + i + ")'>Remove</button>" 
      "</div>";

  }
}; /** After the user adds their items to cart, they have a option to remove it if they don't want it. The removeFromCart function will help them remove the item and then iit won't be counted in their order.**/

function removeFromCart(index){
  CART.splice(index,1);

  localStorage.setItem("cart", JSON.stringify(CART));

  displayCART();
}


function getFormInput(){
  OUTPUT.innerHTML = "";

  // Get the information from the form
  let customerName = (CUSTOMER_NAME_FIELD.value);
  let paymentMethod = (PAYMENT_METHOD_FIELD.value);
  let pocketMoney = Number(POCKET_MONEY_FIELD.value);

      // Boundary: Cart must have at least 1 item
    if (CART.length == 0){
        OUTPUT.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    // Boundary: Name must be entered
    if (customerName.length == 0){
        OUTPUT.innerHTML = "<p>Please enter your name.</p>";
        return;
    }

    // Boundary: Payment Method must be selected
    if (paymentMethod == ""){
      OUTPUT.innerHTML = "<p> Please select a payment method.</p>";
      return;
    }

    //Boundary: Money must be entered but should only contain numbers
    if (pocketMoney <= 0){
      OUTPUT.innerHTML = "<p> Please enter a valid amount of money. </p>";
      return;
    }

  // Calculate the total
  let itemCount = CART.length;
  let total = 0;
  let receipt = "";

  for (let i = 0; i < CART.length; i ++){
    total += (CART[i].price + CART[i].extraCost)* CART[i].quantity;

// Receipt
  receipt += 
  "<p>" + CART[i].name + 
  "x" + CART[i].quantity +
  "<br>Item: $" + CART[i].price + "x" + CART[i].quantity +
  "= $" + (CART[i].price * CART[i].quantity)+
  "<br>Extras: " + CART[i].extras +
  "<br>Extra Total: $" + CART[i].extraCost + "x" + CART[i].quantity + 
  "= $" + (CART[i].extraCost * CART[i].quantity) +
  "<br><b>Total Item Cost: $" +
  ((CART[i].price + CART[i].extraCost) * CART[i].quantity) + "</b></p>";
  }

  // Check if the user has enough money to pay

  if (pocketMoney < total){
OUTPUT.innerHTML= 
  "<hr>" + "<hr>" +
  "<h2>Receipt </h2>" + 
  "<hr>" + 
 "<p><b>Customer Name: </b>" + customerName + "</p>" + 
"<p><b>Payment Method: </b>" + paymentMethod + "</p>" +
"<p><b>Items Ordered: <b> " + itemCount + "</p>" + 
"<p><b>Total: </b> $ " + total + "</p>" + "<hr>" +  receipt + "<hr>" +
"<p>Your total is $ " + total + "</p>" + "<p>You only have $ " + pocketMoney + "<p/>" + "<h2>Not enough money!</h2>";

    return;
  }

  // Calculate Change
  
  let change= pocketMoney - total;

  // Show receipt

  OUTPUT.innerHTML= 
  "<hr>"+ "<hr>" +
  "<h2>Receipt </h2>" + 
  "<hr>" +
 "<p><b>Customer Name: </b>" + customerName + "</p>" + 
"<p><b>Payment Method: </b>" + paymentMethod + "</p>" +
"<p><b>Items Ordered: <b> " + itemCount + "</p>" + 
"<p><b>Total: </b> $ " + total + "</p>" + "<hr>" +  receipt + "<hr>" +
"<p><b>Money Given: </b> $ " + pocketMoney + "</p>" +  
"<p><b>Change: </b> $ " + change + "</p>";

let order = {
  customer: customerName,
  payment: paymentMethod,
  items: CART,
  total: total,
  money: pocketMoney,
  change: change,
};

ORDERS.push(order);

localStorage.setItem("orders", JSON.stringify(ORDERS));

CART = [];
localStorage.setItem("cart", JSON.stringify(CART));

QUANTITY = [];
for (let i = 0; i < 100; i++){
  QUANTITY[i] = 1;
}

if (document.getElementById("cartContainer")){
  displayCART();
}
}

function increaseQuantity(title, index){
  if (QUANTITY[title + index]== undefined){
    QUANTITY[title + index]= 1;
  }
  QUANTITY[title + index]++;

  document.getElementById("quantity" + title + index).innerHTML = QUANTITY[title + index];
}

function decreaseQuantity(title,index){
   if (QUANTITY[title + index]== undefined){
    QUANTITY[title + index]= 1;
  }

  if (QUANTITY[title + index] > 1){

  QUANTITY[title + index]--;
}

document.getElementById("quantity" + title + index).innerHTML = QUANTITY[title + index];
}

function  resetCART(){
  if (confirm("Are you sure you want to clear your cart?")){

  CART = [];
  QUANTITY = [];

  localStorage.setItem("cart", JSON.stringify(CART));

  displayCART();
 }
}

function displayOrders(){
  const ORDER_CONTAINER = document.getElementById("orderContainer");

  ORDER_CONTAINER.innerHTML = "";

  for (let i = 0; i < ORDERS.length; i++){

    ORDER_CONTAINER.innerHTML +=
    "<div class= 'menuItem'>" +
       "<h2>Order " + (i + 1) + "</h2>" +
        "<p><b>Name:</b> " + ORDERS[i].customer + "</p>" +
        "<p><b>Payment:</b> " + ORDERS[i].payment + "</p>" +
        "<p><b>Total:</b> $" + ORDERS[i].total + "</p>" +
        "<p><b>Money Given:</b> $" + ORDERS[i].money + "</p>" +
        "<p><b>Change:</b> $" + ORDERS[i].change + "</p>" +
        "</div>";
  }
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


if (document.getElementById("orderContainer")){
  displayOrders();
}
