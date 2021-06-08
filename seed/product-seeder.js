const Product = require('../models/product')
const mongoose = require('mongoose')

//mongoose.connect('localhost:27017/shopping')
require('../database/connection')

const products = [
   /* new Product({
    imagePath:'https://s.cdnmpro.com/199601778/p/m/3/cornetti-e-brioches-pandora-grande-sviluppo-irca~2902913.jpg',
    title:'Minecraft video Game',
    description :'Now that is super awesome',
    price:30
}),*/
/*new Product({
    imagePath:'https://www.maisonsalesse.fr/wp-content/uploads/2020/11/brioche_au_sucre-600x450.jpg',
    title:'BRIOCHE AU SUCRE',
    description :'Pâte levée au beurre légère et aérée, cuite avec des petits morceaux de chocolat, qui donne envie d’en manger plus.',
    price:50
}),*/
new Product({
    imagePath:'https://p7.hiclipart.com/preview/847/9/199/pain-au-chocolat-croissant-danish-pastry-viennoiserie-baguette-croissant-thumbnail.jpg',
    title:'Pain au chocolat',
    description :'Ce petit pain au chocolat en qualité premium est l’accompagnement idéal des boissons chaudes.',
    price:40
}),

new Product({
    imagePath:'https://p7.hiclipart.com/preview/546/697/306/pain-au-chocolat-croissant-danish-pastry-viennoiserie-pain-aux-raisins-croissant-dough-thumbnail.jpg',
    title:'Pain aux raisins',
    description :'Conçue avec du beurre de marque typiquement français et des raisins secs savoureux',
    price:40 
}),
new Product({
    imagePath:'https://p7.hiclipart.com/preview/913/312/50/croissant-sausage-roll-pain-au-chocolat-pasty-baguette-%D0%A1roissant-thumbnail.jpg',
    title:'Croissant Sausage roll ',
    description :'Croissants au beurre',
    price:40  
}),
new Product({
    imagePath:'https://p7.hiclipart.com/preview/1019/229/173/donuts-cream-custard-sprinkles-krispy-kreme-sprinkles-thumbnail.jpg',
    title:'Donuts',
    description :'Apportez de la couleur et de la diversité à votre gamme. Ces savoureux donuts à base de pâte levée sont emballés par sorte et prêts à être servis après seulement une heure de décongélation. ',
    price:40  
}),
new Product({
    imagePath:'https://p7.hiclipart.com/preview/85/407/662/donuts-sour-cream-doughnut-bakery-muffin-donut-thumbnail.jpg',
    title:' Donut fourré',
    description :'Notre donut fourré à la crème vanille fait partie des classiques de notre gamme. Ce produit sait convaincre grâce à sa douce consistance, une faible absorption de matière grasse et une fraîcheur extraordinairement longue.',
    price:40    
}),
new Product({
    imagePath:'https://p7.hiclipart.com/preview/778/227/665/muffin-tea-breakfast-bakery-mantecadas-breakfast-breads-thumbnail.jpg',
    title:' Muffin',
    description :'Le savoureux muffin aux pépites de chocolat convient idéalement pour le petit déjeuner, sur un buffet de gâteaux et avec le café à emporter.',
    price:40   
}),
new Product({
    imagePath:'https://p7.hiclipart.com/preview/22/323/767/paris-brest-donuts-danish-pastry-cinnamon-roll-croissant-spice-thumbnail.jpg',
    title:' Paris-Brest Donuts',
    description :'Croissants au beurre',
    price:40  
}),
new Product({
    imagePath:'https://p7.hiclipart.com/preview/684/889/113/belgian-waffle-ice-cream-pancake-belgian-cuisine-ice-cream-thumbnail.jpg',
    title:'Belgian waffle Ice cream',
    description :'La particularité de cette gaufre est que sa surface est bien fine et croustillante tandis que les petites bulles sont tendres et moelleuses.',
    price:40    
}),
new Product({
    imagePath:'https://p7.hiclipart.com/preview/97/406/354/chocolate-chip-cookie-bakery-baking-soft-cookies-thumbnail.jpg',
    title:'Chocolate chip cookie',
    description :'Croustillant à l’extérieur, tendre et moelleux à l’intérieur - agrémenté pépites de chocolat au lait.',
    price:40     
}),
new Product({
    imagePath:'https://p7.hiclipart.com/preview/430/170/332/hot-cross-bun-pain-au-chocolat-fruit-bun-soda-bread-bakery-bun-thumbnail.jpg',
    title:'Pain au chocolat',
    description :'Croissants au beurre',
    price:25 
}),
new Product({
    imagePath:'https://p7.hiclipart.com/preview/632/489/134/bun-hamburger-small-bread-bakery-stock-photography-bun-thumbnail.jpg',
    title:'Petit pain hamburger au sésame',
    description :'Le classique parmi les burgers : le tendre petit pain burger, décoré de sésame, est la base idéale pour de nombreux menus burgers.',
    price:30   
}),
new Product({
    imagePath:'https://p7.hiclipart.com/preview/296/75/631/simit-turkish-cuisine-bakery-bread-pita-bread-thumbnail.jpg',
    title:'Simit Turkish',
    description :'Authentique spécialité turque, ce délicieux pain circulaire à base de pâte levée attirera sans aucun doute tous les regards sur votre vitrine.',
    price:40      
})
]
/**/
var done = 0
for (let i=0; i<products.length; i++){
    products[i].save(function(err,result){
        done++
        if(done === products.length){
            exit()
        }
    })
}
   
function exit(){
    mongoose.disconnect()
}
