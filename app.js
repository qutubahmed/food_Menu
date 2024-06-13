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
    text: 'Biryani is a mixed rice dish, mainly popular in South Asia. It is made with rice,',
    price: 25,
    category: 'BreakFast'

},
{
    Image: 'image/andaParatha.jpg',
    name: 'Anda Paratha',
    text: 'Biryani is a mixed rice dish, mainly popular in South Asia. It is made with rice,',
    price: 80,
    category: 'BreakFast'
},
{
    Image: 'image/mandi.jpg',
    name: 'Mandi',
    text: 'Biryani is a mixed rice dish, mainly popular in South Asia. It is made with rice,',
    price: 2000,
    category: 'Lunch'
},
{
    Image: 'image/OIP.jpg',
    name: 'Shakes',
    text: 'Biryani is a mixed rice dish, mainly popular in South Asia. It is made with rice,',
    price: 150,
    category: 'Shakes'
},
{
    Image: 'image/halfFry.jpg',
    name: 'Half Fry',
    text: 'Biryani is a mixed rice dish, mainly popular in South Asia. It is made with rice,',
    price: 40,
    category: 'BreakFast'
},
{
    Image : 'image/images.jfif',
    name: 'bread',
    text : 'bread, baked food product made of flour or meal that is moistened, kneaded, and sometimes fermented. ',
    price : 80,
    category : 'BreakFast'
}]


function categoryHandler(category){
    const mainContainer = document.querySelector("#merge")

    
    mainContainer.innerHTML =''
    if(category == "All"){
        foodItems.forEach((foodItem) =>{
            mainContainer.innerHTML +=`<div class="col-12 col-sm-12 col-md-6 col-lg-6">
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
    else{
        foodItems.filter((foodItem) =>
            foodItem.category ==category).forEach((foodItem) =>{
        
            mainContainer.innerHTML +=`<div class="col-12 col-sm-12 col-md-6 col-lg-6">
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