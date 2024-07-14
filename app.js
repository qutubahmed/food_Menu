const foodItems = [{
    Image: 'image/biryani.jpg',
    name: 'Biryani',
    text: 'Biryani is a mixed rice dish, mainly popular in South Asia. It is made with rice',
    price: 500,
    category: 'Lunch'
},
{
    Image: 'image/images.jpg',
    name: 'Halwa Puri',
    text: 'Poori is a popular deep fried flatbread that’s served for breakfast across Pakistan and India.   In Pakistan poori is part of a popular weekend breakfast called Halwa Puri',
    price: 25,
    category: 'BreakFast'

},
{
    Image: 'image/andaParatha.jpg',
    name: 'Anda Paratha',
    text: 'Paratha is a Pakistani flatbread. You can easily buy from the Pakistani or Indian store or use an uncooked tortilla with some oil for a healthy version',
    price: 80,
    category: 'BreakFast'
},
{
    Image: 'image/mandi.jpg',
    name: 'Mandi',
    text: 'consisting mainly of meat and rice with a special blend of spices, cooked in a pit. It is popular and commonly consumed in most areas of the Arabian Peninsula, especially between the Yemeni people, and even considered a staple dish in many regions.',
    price: 2000,
    category: 'Lunch'
},
{
    Image: 'image/OIP.jpg',
    name: 'Shakes',
    text: 'It is usually prepared by milk, ice cream or iced milk, emulsifier and/or stabilizer, and flavorings or sweeteners (e.g., fruit syrup or chocolate sauce)',
    price: 150,
    category: 'Shakes'
},
{
    Image: 'image/halfFry.jpg',
    name: 'Half Fry',
    text: 'A fried egg is a cooked dish made from one or more eggs which are removed from their shells and placed into a frying pan and fried. They are traditionally eaten for breakfast in many countries but may also be served at other times of the day.',
    price: 40,
    category: 'BreakFast'
},
{
    Image: 'image/images.jfif',
    name: 'bread',
    text: 'bread, baked food product made of flour or meal that is moistened, kneaded, and sometimes fermented. A major food since prehistoric times, it has been made in various forms using a variety of ingredients and methods throughout the world.',
    price: 80,
    category: 'BreakFast'
}]


function categoryHandler(category) {
    const mainContainer = document.querySelector("#merge")


    mainContainer.innerHTML = ''
    if (category == "All") {
        foodItems.forEach((foodItem) => {
            mainContainer.innerHTML += `<div class="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div class="card-div">
                                <div class="image">
                                    <img src=${foodItem.Image} alt="">
                                </div>
            
                                <div class="category">
                                    <div class="price">
                                        <h4>${foodItem.name}</h4>
                                        <p>${foodItem.price}</p>
                                        <div class="line"></div>
                                    </div>
                                    <div class="description">
                                        <p>${foodItem.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>`
        })

    }
    else {
        foodItems.filter((foodItem) =>
            foodItem.category == category).forEach((foodItem) => {

                mainContainer.innerHTML += `<div class="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="card-div">
                            <div class="image">
                                <img src=${foodItem.Image} alt="">
                            </div>
        
                            <div class="category">
                                <div class="price">
                                    <h4>${foodItem.name}</h4>
                                    <p>${foodItem.price}</p>
                                    <div class="line"></div>
                                </div>
                                <div class="description">
                                    <p>${foodItem.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>`

            })

    }



}