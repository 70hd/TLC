import { PrismaClient } from "@prisma/client";

const database = new PrismaClient();

async function main() {
//   firstLink: {
//     text: "Home",
//     link: "../",
//   },
//   secondLink: {
//     text: "Rewards",
//     link: "/",
//   },
//   thirdLink: {
//     text: "Menu",
//     link: "/menu",
//   },
//   fourthLink: {
//     text: "Contact",
//     link: "/contact",
//   },
//   fifthLink: {
//     text: "Privacy Policy",
//     link: "/Privacy Policy",
//   },
//   sixthLink: {
//     text: "Terms of Service",
//     link: "/Terms of Service",
//   },
// },


  await database.footer.create({
    data: {id: 1}
  })
  // await database.footerText.createMany({
  //   data: [
  //     {name: "About Title", text: "About", homeId: 1},
  //     {name: "About Text 1", text: "About", link: "../about", homeId: 1},
  //     {name: "About Text 2", text: "Catering", link: "https://api.getspoonfed.com/1443/the-little-chihuahua/", homeId: 1},
  //     {name: "About Text 3", text: "Merchandise", target: "_blank", link: "https://shop.thelittlechihuahua.com/", homeId: 1},
  //     {name: "Open House Title", text: "Open House", homeId: 1},
  //     {name: "Open House Text 1", text: "Sunday - Monday", homeId: 1},
  //     {name: "Open House Text 2", text: "8 am - - 10 pm", homeId: 1},
  //     {name: "Locations Title", text: "Locations", homeId: 1}, 
  //     {name: "Locations Text 1", target: "_blank", text: "4123 24th St", link: "https://www.google.com/maps/place/The+Little+Chihuahua/@37.7511236,-122.4372193,17z/data=!3m1!4b1!4m6!3m5!1s0x808f7e1265354ebd:0xd6478909256f9425!8m2!3d37.7511194!4d-122.4346444!16s%2Fg%2F1vq9mj6y?entry=ttu&g_ep=EgoyMDI0MTAwNS4wIKXMDSoASAFQAw%3D%3D", homeId: 1},
  //     {name: "Locations Text 2", target: "_blank", text: "292 Divisidero St", link: "https://www.google.com/maps/place/292+Divisadero+St,+San+Francisco,+CA+94117/@37.7720453,-122.4369716,17z/data=!3m1!4b1!4m6!3m5!1s0x808580af378ebc79:0x8fdeeb526ad13e47!8m2!3d37.7720453!4d-122.4369716!16s%2Fg%2F11c5kh2wz3?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D",homeId: 1},
  //     {name: "Locations Text 3", target: "_blank", text: "1431 Polk St", link: "https://www.google.com/maps/place/The+Little+Chihuahua/@37.7900509,-122.4233217,17z/data=!3m1!4b1!4m6!3m5!1s0x808581cdbb783ceb:0x3ac9d74d950b9281!8m2!3d37.7900467!4d-122.4207468!16s%2Fg%2F11fn9cms4l?entry=ttu&g_ep=EgoyMDI0MTAwNS4wIKXMDSoASAFQAw%3D%3D", homeId: 1},
  //     {name: "Locations Text 4", target: "_blank", text: "Gate B3", link: "https://www.google.com/maps/place/The+Little+Chihuahua/@37.6135948,-122.3875095,17z/data=!3m1!4b1!4m6!3m5!1s0x808f77dd4630e30f:0x958680d5232a3bbc!8m2!3d37.6135948!4d-122.3849346!16s%2Fg%2F11hzkm20jv?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D", homeId: 1},
  //     {name: "Lets Stay Connected Title", text: "Lets Stay Connected", homeId: 1}, 
  //     {name: "Lets Stay Connected CTA", text: "Submit", homeId: 1}, 
  //     {name: "Lets Stay Connected Social Media CTA", text: "Follow us", homeId: 1}, 
  //     {name: "Copywright", text: "© 2024 Company - All Rights Reserved", homeId: 1}, 
  //     {name: "Home Link", text: "Home", link: "../", homeId: 1},
  //     {name: "Rewards Link", text: "Rewards", link: "../rewards", homeId: 1},
  //     {name: "Menu Link", text: "Menu", link: "../", homeId: 1},
  //     {name: "Contact Link", text: "Contact", link: "../contact", homeId: 1},
  //     {name: "Privacy Policy Link", text: "Privacy Policy", link: "../privacy-policy", homeId: 1},
  //     {name: "Terms of Service Link", text: "Terms of Service", link: "../terms-of-service", homeId: 1},

  //   ]
  // })
    // await database.button.createMany({
    //   data: [
    //     {name: "Home Header Button", filled: "true", style: "text-black p2", cta: "DISCOVER OUR MENU" },
    //     {name: "Home Rewards Button", filled: "true", style: "text-black p2", cta: "ORDER ONLINE" },
    //     {name: "Home Order Online Button", filled: "true", style: "text-black p2", cta: "ORDER ONLINE" },
    //     {name: "Home Locations Button", filled: "true", style: "text-black p2", cta: "ORDER ONLINE" },
    //     {name: "Home Menu Button", filled: "true", style: "text-black p2", cta: "ORDER ONLINE" },
    //     {name: "Home Rewards Button 2", filled: "true", style: "text-black p2", cta: "ORDER ONLINE" },
    //     {name: "Home Order Online Button 2", filled: "true", style: "text-black p2", cta: "ORDER ONLINE" },
    //     {name: "Home Locations Button 2", filled: "true", style: "text-black p2", cta: "ORDER ONLINE" },
    //     {name: "Home Menu Button 2", filled: "true", style: "text-black p2", cta: "ORDER ONLINE" },
    //     {name: "Home Banner Button 2", filled: "true", style: "text-black p2", cta: "VIEW MENU" },
        

    //   ]
    // })
    // await database.homeText.createMany({
    //   data: [
    //     {name: "Hero Title", text: "FOR THE WHOLE CREW", homeId: 1},
    //     {name: "Hero Body", text: "The Little Chihuahua Menu offers cheesy, savory dishes perfect for any gathering.", homeId: 1},
    //     {name: "Food 1 Title", text: "Seasonal Agua Frescas", homeId: 1},
    //     {name: "Food 1 Mini Title", text: "HOUSE MADE BEVERAGES", homeId: 1},
    //     {name: "Food 1 Image", text: "Agua Frescas", link:"/agua-fresca.png", homeId: 1},
    //     {name: "Food 2 Title", text: "SAl Pastor Tacos", homeId: 1},
    //     {name: "Food 2 Mini Title", text: "TACOS", homeId: 1},
    //     {name: "Food 2 Image", text: "Tacos", link:"/tacos.png", homeId: 1},
    //     {name: "Food 3 Title", text: "Guac & Chips", homeId: 1},
    //     {name: "Food 3 Mini Title", text: "APERITIVOS", homeId: 1},
    //     {name: "Food 3 Image", text: "Guac & Chips", link:"/guac-chips.png", homeId: 1},
    //     {name: "Food 4 Title", text: "TLC Regular Bowl", homeId: 1},
    //     {name: "Food 4 Mini Title", text: "BOWLS", homeId: 1},
    //     {name: "Food 4 Image", text: "Bowl", link:"/regular-bowl.png", homeId: 1},
    //     {name: "Food 5 Title", text: "Old School Tostada Salad", homeId: 1},
    //     {name: "Food 5 Mini Title", text: "SALADS", homeId: 1},
    //     {name: "Food 5 Image", text: "Salad", link:"/tostada-salad.png", homeId: 1},
    //     {name: "Food 6 Title", text: "Cookies", homeId: 1},
    //     {name: "Food 6 Mini Title", text: "DESSERT", homeId: 1},
    //     {name: "Food 6 Image", text: "Cookie", link:"/cookies.png", homeId: 1},
    //     {name: "Food 7 Title", text: "Kids Nachos", homeId: 1},
    //     {name: "Food 7 Mini Title", text: "KIDS", homeId: 1},
    //     {name: "Food 7 Image", text: "Kids Nachos", link:"/kids-nachos.png", homeId: 1},
    //     {name: "Rewards Title", text: "Rewards", homeId: 1},
    //     {name: "Rewards Body", text: "Rewards. So strong. So light. So Pro", homeId: 1},
    //     {name: "Rewards Image", text: "Rewards", link:"/rewards.png", homeId: 1},
    //     {name: "Order Online Title", text: "Order Online", homeId: 1},
    //     {name: "Order Online Body", text: "Tasty. So heathy. So quick. So Pro", homeId: 1},
    //     {name: "Order Online Image", text: "Order Online", link:"/order-online.png", homeId: 1},
    //     {name: "Visit locations Title", text: "Visit locations", homeId: 1},
    //     {name: "Visit locations Body", text: "Locations. So convenient. So efficient. So Pro", homeId: 1},
    //     {name: "Visit locations Image", text: "Visit Locations", link:"/visit-locations.png", homeId: 1},
    //     {name: "View The Menu Title", text: "View The Menu", homeId: 1},
    //     {name: "View The Menu Body", text: "Menu. So convenient. So efficient. So Pro", homeId: 1},
    //     {name: "View The Menu Image", text: "View The Menu", link:"/view-menu.png", homeId: 1},
    //     {name: "Banner Title", text: "Uncover Delicious New Favorites from Our Kitchen", homeId: 1},
    //     {name: "Banner Body", text: "Discover our full range of mouthwatering dishes and find your new favorites", homeId: 1},
    //     {name: "Rewards CTA Image", text: "Rewards", link:"/Rewards.svg", homeId: 1},
    //     {name: "Rewards CTA Title", text: "Enjoy great savings whenever you dine with us", homeId: 1},
    //     {name: "Rewards CTA Body", text: "Join our rewards program and enjoy great savings every time you dine with us. Treat yourself to delicious meals while earning exclusive discounts!", homeId: 1},

    //   ]
    // })
  // await database.miniProductCategory.createMany({
  //   data: [
  //     { name: "Soups" },
  //     { name: "Aperitivos" },
  //     { name: "Salads" },
  //     { name: "Burritos" },
  //     { name: "Bowls" },
  //     { name: "Tacos" },
  //     { name: "Enchiladas" },
  //     { name: "Kids" },
  //     { name: "Sides" },
  //     { name: "Dessert" },
  //     { name: "Beverages" },
  //     { name: "Sodas" },
  //   ],
  // });

  // await database.miniProductInfo.createMany({
  //   data: [
  //     {
  //       title: "Classic Tortilla Soup",
  //       image: "/Fried-plantain.png",
  //       link: "../product/ClassicTortillaSoup",
  //       miniTitle: "SOUPS",
  //       miniProductCategoryId: 1,
  //     },
  //     {
  //       title: "House-Made Pozole Soup",
  //       image: "/Fried-plantain.png",
  //       link: "../product/HouseMadePozoleSoup",
  //       miniTitle: "SOUPS",
  //       miniProductCategoryId: 1,
  //     },
  //     // Aperitivos
  //     {
  //       title: "Guac & Chips",
  //       image: "/Fried-plantain.png",
  //       link: "../product/GuacAndChips",
  //       miniTitle: "APERITIVOS",
  //       miniProductCategoryId: 2,
  //     },
  //     {
  //       title: "Chips & Salsa",
  //       image: "/Fried-plantain.png",
  //       link: "../product/ChipsAndSalsa",
  //       miniTitle: "APERITIVOS",
  //       miniProductCategoryId: 2,
  //     },
  //     {
  //       title: "Chips TLC",
  //       image: "/Fried-plantain.png",
  //       link: "../product/ChipsTLC",
  //       miniTitle: "APERITIVOS",
  //       miniProductCategoryId: 2,
  //     },
  //     {
  //       title: "TLC Super Nachos",
  //       image: "/Fried-plantain.png",
  //       link: "../product/TLCSuperNachos",
  //       miniTitle: "APERITIVOS",
  //       miniProductCategoryId: 2,
  //     },
  //     {
  //       title: "Fried Plantains",
  //       image: "/Fried-plantain.png",
  //       link: "../product/FriedPlantains",
  //       miniTitle: "APERITIVOS",
  //       miniProductCategoryId: 2,
  //     },
  //     {
  //       title: "Small Fajita Quesadilla",
  //       image: "/Fried-plantain.png",
  //       link: "../product/SmallFajitaQuesadilla",
  //       miniTitle: "APERITIVOS",
  //       miniProductCategoryId: 2,
  //     },
  //     {
  //       title: "Large Fajita Quesadilla",
  //       image: "/Fried-plantain.png",
  //       link: "../product/LargeFajitaQuesadilla",
  //       miniTitle: "APERITIVOS",
  //       miniProductCategoryId: 2,
  //     },
  //     {
  //       title: "Birriaquiles",
  //       image: "/Fried-plantain.png",
  //       link: "../product/Birriaquiles",
  //       miniTitle: "APERITIVOS",
  //       miniProductCategoryId: 2,
  //     },
  //     // Salads
  //     {
  //       title: "Camila's Kale Salad",
  //       image: "/Fried-plantain.png",
  //       link: "../product/CamilasKaleSalad",
  //       miniTitle: "SALADS",
  //       miniProductCategoryId: 3,
  //     },
  //     {
  //       title: "Old School Tostada Salad",
  //       image: "/Fried-plantain.png",
  //       link: "../product/OldSchoolTostadaSalad",
  //       miniTitle: "SALADS",
  //       miniProductCategoryId: 3,
  //     },
  //     {
  //       title: "Old School Tostada Salad - No Protein",
  //       image: "/Fried-plantain.png",
  //       link: "../product/OldSchoolTostadaSaladWithNoProtein",
  //       miniTitle: "SALADS",
  //       miniProductCategoryId: 3,
  //     },
  //     // Burritos
  //     {
  //       title: "TLC Regular Burrito",
  //       image: "/Fried-plantain.png",
  //       link: "../product/TLCRegularBurrito",
  //       miniTitle: "BURRITOS",
  //       miniProductCategoryId: 4,
  //     },
  //     {
  //       title: "TLC Super Burrito",
  //       image: "/Fried-plantain.png",
  //       link: "../product/TLCSuperBurrito",
  //       miniTitle: "BURRITOS",
  //       miniProductCategoryId: 4,
  //     },
  //     {
  //       title: "Fried Plantain & Black Bean Burrito",
  //       image: "/Fried-plantain.png",
  //       link: "../product/FriedPlantainAndBlackBeanBurrito",
  //       miniTitle: "BURRITOS",
  //       miniProductCategoryId: 4,
  //     },
  //     {
  //       title: "Vegan Fried Plantain & Black Bean Burrito",
  //       image: "/Fried-plantain.png",
  //       link: "../product/VeganFriedPlantainAndBeanBurrito",
  //       miniTitle: "BURRITOS",
  //       miniProductCategoryId: 4,
  //     },
  //     {
  //       title: "Steak & Shrimp Al Diablo Burrito",
  //       image: "/Fried-plantain.png",
  //       link: "../product/SteakAndShrimpAlDiabloBurrito",
  //       miniTitle: "BURRITOS",
  //       miniProductCategoryId: 4,
  //     },
  //     {
  //       title: "Al Pastor Burrito",
  //       image: "/Fried-plantain.png",
  //       link: "../product/AlPastorBurrito",
  //       miniTitle: "BURRITOS",
  //       miniProductCategoryId: 4,
  //     },
  //     {
  //       title: "Garlic Shrimp Burrito",
  //       image: "/Fried-plantain.png",
  //       link: "../product/GarlicShrimpBurrito",
  //       miniTitle: "BURRITOS",
  //       miniProductCategoryId: 4,
  //     },
  //     {
  //       title: "Salmon Burrito",
  //       image: "/Fried-plantain.png",
  //       link: "../product/SalmonBurrito",
  //       miniTitle: "BURRITOS",
  //       miniProductCategoryId: 4,
  //     },
  //     {
  //       title: "Grilled Veggie & Soyrizo Burrito",
  //       image: "/Fried-plantain.png",
  //       link: "../product/GrilledVeggieAndSoyrizoBurrito",
  //       miniTitle: "BURRITOS",
  //       miniProductCategoryId: 4,
  //     },
  //     {
  //       title: "Todo Dia Breakfast Burrito",
  //       image: "/Fried-plantain.png",
  //       link: "../product/TodoDiaBreakfastBurrito",
  //       miniTitle: "BURRITOS",
  //       miniProductCategoryId: 4,
  //     },
  //     {
  //       title: "Bean, Rice & Cheese Burrito",
  //       image: "/Fried-plantain.png",
  //       link: "../product/BeanRiceAndCheeseBurrito",
  //       miniTitle: "BURRITOS",
  //       miniProductCategoryId: 4,
  //     },
  //     {
  //       title: "TLC Regular Bowl",
  //       image: "/Fried-plantain.png",
  //       link: "../product/TLCRegularBowl",
  //       miniTitle: "BOWL",
  //       miniProductCategoryId: 5,
  //     },
  //     {
  //       title: "TLC Super Burrito Bowl",
  //       image: "/Fried-plantain.png",
  //       link: "../product/TLCSuperBurrito",
  //       miniTitle: "BOWL",
  //       miniProductCategoryId: 5,
  //     },
  //     {
  //       title: "Fried Plantain Bowl",
  //       image: "/Fried-plantain.png",
  //       link: "../product/FriedPlantainBowl",
  //       miniTitle: "BOWL",
  //       miniProductCategoryId: 5,
  //     },
  //     {
  //       title: "Vegan Fried Plantain Bowl",
  //       image: "/Fried-plantain.png",
  //       link: "../product/VeganFriedPlantainBowl",
  //       miniTitle: "BOWL",
  //       miniProductCategoryId: 5,
  //     },
  //     {
  //       title: "Steak & Shrimp Al Diablo Bowl",
  //       image: "/Fried-plantain.png",
  //       link: "../product/SteakAndShrimpAlDiabloBowl",
  //       miniTitle: "BOWL",
  //       miniProductCategoryId: 5,
  //     },
  //     {
  //       title: "Al Pastor Bowl",
  //       image: "/Fried-plantain.png",
  //       link: "../product/AlPastorBowl",
  //       miniTitle: "BOWL",
  //       miniProductCategoryId: 5,
  //     },
  //     {
  //       title: "Garlic Shrimp Bowl",
  //       image: "/Fried-plantain.png",
  //       link: "../product/GarlicShrimpBowl",
  //       miniTitle: "BOWL",
  //       miniProductCategoryId: 5,
  //     },
  //     {
  //       title: "Grilled Veggie Soyrizo Bowl",
  //       image: "/Fried-plantain.png",
  //       link: "../product/GrilledVeggieSoyrizoBowl",
  //       miniTitle: "BOWL",
  //       miniProductCategoryId: 5,
  //     },
  //     {
  //       title: "Salmon Bowl",
  //       image: "/Fried-plantain.png",
  //       link: "../product/SalmonBowl",
  //       miniTitle: "BOWL",
  //       miniProductCategoryId: 5,
  //     },
  //     {
  //       title: "Breakfast Bowl",
  //       image: "/Fried-plantain.png",
  //       link: "../product/BreakfastBowl",
  //       miniTitle: "BOWL",
  //       miniProductCategoryId: 5,
  //     },

  //     // Tacos (miniProductCategoryId: 6)
  //     {
  //       title: "Fried Plantain & Black Bean Tacos",
  //       image: "/Fried-plantain.png",
  //       link: "../product/FriedPlantainAndBlackbeanTacos",
  //       miniTitle: "TACOS",
  //       miniProductCategoryId: 6,
  //     },
  //     {
  //       title: "Grilled Veggie & Soyrizo Tacos",
  //       image: "/Fried-plantain.png",
  //       link: "../product/GrilledVeggiesAndSoyrizoTacos",
  //       miniTitle: "TACOS",
  //       miniProductCategoryId: 6,
  //     },
  //     {
  //       title: "Garlic Shrimp Tacos",
  //       image: "/Fried-plantain.png",
  //       link: "../product/GrilledVeggiesAndSoyrizoTacos",
  //       miniTitle: "TACOS",
  //       miniProductCategoryId: 6,
  //     },
  //     {
  //       title: "Al Pastor Tacos",
  //       image: "/Fried-plantain.png",
  //       link: "../product/AlPastorTacos",
  //       miniTitle: "TACOS",
  //       miniProductCategoryId: 6,
  //     },
  //     {
  //       title: "Salmon Tacos",
  //       image: "/Fried-plantain.png",
  //       link: "../product/SalmonTacos",
  //       miniTitle: "TACOS",
  //       miniProductCategoryId: 6,
  //     },
  //     {
  //       title: "Steak & Shrimp Al Diablo Tacos",
  //       image: "/Fried-plantain.png",
  //       link: "../product/SteakAndShrimpAlDiabloTaocs",
  //       miniTitle: "TACOS",
  //       miniProductCategoryId: 6,
  //     },
  //     {
  //       title: "TLC Regular Tacos",
  //       image: "/Fried-plantain.png",
  //       link: "../product/TLCRegularTacos",
  //       miniTitle: "TACOS",
  //       miniProductCategoryId: 6,
  //     },
  //     {
  //       title: "Todo Dia Breakfast Tacos",
  //       image: "/Fried-plantain.png",
  //       link: "../product/TodoDiaBeakFastTacos",
  //       miniTitle: "TACOS",
  //       miniProductCategoryId: 6,
  //     },
  //     {
  //       title: "Vegan Fried Plantain & Black Bean Tacos",
  //       image: "/Fried-plantain.png",
  //       link: "../product/VeganFriedPlantainAndBlackBeanTacos",
  //       miniTitle: "TACOS",
  //       miniProductCategoryId: 6,
  //     },

  //     // Enchiladas (miniProductCategoryId: 7)
  //     {
  //       title: "Enchiladas",
  //       image: "/Fried-plantain.png",
  //       link: "../product/Enchiladas",
  //       miniTitle: "ENCHILADAS",
  //       miniProductCategoryId: 7,
  //     },

  //     // Kids (miniProductCategoryId: 8)
  //     {
  //       title: "Kids Nachos",
  //       image: "/Fried-plantain.png",
  //       link: "../product/KidsNachos",
  //       miniTitle: "KIDS",
  //       miniProductCategoryId: 8,
  //     },
  //     {
  //       title: "Kids Taco Plate",
  //       image: "/Fried-plantain.png",
  //       link: "../product/KidsTacoPlate",
  //       miniTitle: "KIDS",
  //       miniProductCategoryId: 8,
  //     },
  //     {
  //       title: "Kids Burrito Bowl",
  //       image: "/Fried-plantain.png",
  //       link: "../product/KidsBurritoBowl",
  //       miniTitle: "KIDS",
  //       miniProductCategoryId: 8,
  //     },
  //     {
  //       title: "Kids Cheese Quesadilla",
  //       image: "/Fried-plantain.png",
  //       link: "../product/KidsCheeseQuesadilla",
  //       miniTitle: "KIDS",
  //       miniProductCategoryId: 8,
  //     },
  //     {
  //       title: "Kids Bean, Rice & Cheese Burrito",
  //       image: "/Fried-plantain.png",
  //       link: "../product/KidsBeanRiceAndCheeseBurrito",
  //       miniTitle: "KIDS",
  //       miniProductCategoryId: 8,
  //     },
  //     {
  //       title: "Kids Rice & Beans",
  //       image: "/Fried-plantain.png",
  //       link: "../product/KidsRiceAndBeans",
  //       miniTitle: "KIDS",
  //       miniProductCategoryId: 8,
  //     },
  //     {
  //       title: "Kids 1/2 Avocado",
  //       image: "/Fried-plantain.png",
  //       link: "../product/KidsHalfAvocado",
  //       miniTitle: "KIDS",
  //       miniProductCategoryId: 8,
  //     },
  //     {
  //       title: "Kids Guacamole",
  //       image: "/Fried-plantain.png",
  //       link: "../product/KidsGuacamole",
  //       miniTitle: "KIDS",
  //       miniProductCategoryId: 8,
  //     },
  //     {
  //       title: "Kids Taco",
  //       image: "/Fried-plantain.png",
  //       link: "../product/KidsTacos",
  //       miniTitle: "KIDS",
  //       miniProductCategoryId: 8,
  //     },
  //     {
  //       title: "Chips TLC",
  //       image: "/Fried-plantain.png",
  //       link: "../product/ChipsTLC",
  //       miniTitle: "SIDES",
  //       miniProductCategoryId: 9,
  //     },
  //     {
  //       title: "To Go Salsa",
  //       image: "/Fried-plantain.png",
  //       link: "../product/ToGoSalsa",
  //       miniTitle: "SIDES",
  //       miniProductCategoryId: 9,
  //     },
  //     {
  //       title: "To Go Guacamole",
  //       image: "/Fried-plantain.png",
  //       link: "../product/ToGoGuacamole",
  //       miniTitle: "SIDES",
  //       miniProductCategoryId: 9,
  //     },
  //     {
  //       title: "Sour Cream",
  //       image: "/Fried-plantain.png",
  //       link: "../product/SourCream",
  //       miniTitle: "SIDES",
  //       miniProductCategoryId: 9,
  //     },
  //     {
  //       title: "Rice",
  //       image: "/Fried-plantain.png",
  //       link: "../product/MexicanRice",
  //       miniTitle: "SIDES",
  //       miniProductCategoryId: 9,
  //     },
  //     {
  //       title: "Beans",
  //       image: "/Fried-plantain.png",
  //       link: "../product/Beans",
  //       miniTitle: "SIDES",
  //       miniProductCategoryId: 9,
  //     },
  //     {
  //       title: "Cookies",
  //       image: "/Fried-plantain.png",
  //       link: "../product/Cookies",
  //       miniTitle: "DESSERT",
  //       miniProductCategoryId: 10,
  //     },
  //     {
  //       title: "Seasonal Agua Frescas",
  //       image: "/Fried-plantain.png",
  //       link: "../product/SeasonalAguaFrescas",
  //       miniTitle: "BEVERAGES",
  //       miniProductCategoryId: 11,
  //     },
  //     {
  //       title: "Horchata",
  //       image: "/Fried-plantain.png",
  //       link: "../product/Horchata",
  //       miniTitle: "BEVERAGES",
  //       miniProductCategoryId: 11,
  //     },
  //     {
  //       title: "Sparkling Limeade",
  //       image: "/Fried-plantain.png",
  //       link: "../product/SparklingLimeade",
  //       miniTitle: "BEVERAGES",
  //       miniProductCategoryId: 11,
  //     },
  //     {
  //       title: "Café Horchata",
  //       image: "/Fried-plantain.png",
  //       link: "../product/CaféHorchata",
  //       miniTitle: "BEVERAGES",
  //       miniProductCategoryId: 11,
  //     },
  //     {
  //       title: "Can Coke",
  //       image: "/Fried-plantain.png",
  //       link: "../product/CanCoke",
  //       miniTitle: "SODAS",
  //       miniProductCategoryId: 12,
  //     },
  //     {
  //       title: "Can Diet Coke",
  //       image: "/Fried-plantain.png",
  //       link: "../product/CanDietCoke",
  //       miniTitle: "SODAS",
  //       miniProductCategoryId: 12,
  //     },
  //     {
  //       title: "Can Sprite",
  //       image: "/Fried-plantain.png",
  //       link: "../product/CanSprite",
  //       miniTitle: "SODAS",
  //       miniProductCategoryId: 12,
  //     },
  //     {
  //       title: "Jarritos Mandarin",
  //       image: "/Fried-plantain.png",
  //       link: "../product/JarritosMandarin",
  //       miniTitle: "SODAS",
  //       miniProductCategoryId: 12,
  //     },
  //     {
  //       title: "Mexican Coke",
  //       image: "/Fried-plantain.png",
  //       link: "../product/MexicanCoke",
  //       miniTitle: "SODAS",
  //       miniProductCategoryId: 12,
  //     },
  //     {
  //       title: "Root Beer",
  //       image: "/Fried-plantain.png",
  //       link: "../product/RootBeer",
  //       miniTitle: "SODAS",
  //       miniProductCategoryId: 12,
  //     },
  //     {
  //       title: "Sparkling Water",
  //       image: "/Fried-plantain.png",
  //       link: "../product/SparklingWater",
  //       miniTitle: "SODAS",
  //       miniProductCategoryId: 12,
  //     },
  //     {
  //       title: "Still Water",
  //       image: "/Fried-plantain.png",
  //       link: "../product/StillWater",
  //       miniTitle: "SODAS",
  //       miniProductCategoryId: 12,
  //     },
  //     {
  //       title: "JS Detox",
  //       image: "/Fried-plantain.png",
  //       link: "../product/JSDtox",
  //       miniTitle: "SODAS",
  //       miniProductCategoryId: 12,
  //     },
  //     {
  //       title: "JS Turmeric",
  //       image: "/Fried-plantain.png",
  //       link: "../product/JSTurmeric",
  //       miniTitle: "SODAS",
  //       miniProductCategoryId: 12,
  //     },
  //   ],
  // });

  console.log("Mock data created successfully!");
}

main()
  .then(async () => {
    await database.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await database.$disconnect();
    process.exit(1);
  });