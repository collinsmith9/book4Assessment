// import { addPurchase } from "./database.js"
import { addPurchase } from "./database.js"
import { Entree } from "./Entrees.js"
import { Sales } from "./Sales.js"
import { Sides } from "./SideDishes.js"
import { Veggies } from "./Vegetables.js"


document.addEventListener("click", (event) => {
    if (event.target.id === "purchase") {
        addPurchase()
    }
})

export const FoodTruck = () => {
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>






        <article class="choices">
            <section class="choices__base">
                ${Entree()}
            </section>
            <section class="choices__sides">
                ${Sides()}
            </section>
            <section class="choices__veggies">
                ${Veggies()}
            </section>

        </article>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${Sales()}
        </article>

    `
}
