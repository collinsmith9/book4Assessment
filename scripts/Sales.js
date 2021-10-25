import { getEntrees, getPurchases, getSides, getVeggies } from "./database.js"

const entrees = getEntrees()
const sides = getSides()
const veggies = getVeggies()

const buildOrderListItem = (order) => {
    const foundEntree = entrees.find(
        (entree) => {
            if (entree.id === order.entreeId) {
                return true
            } 
            return false
        }
    )
    const foundSide = sides.find(
        (side) => {
            if (side.id === order.sideId) {
                return true
            } 
            return false
        }
    )
    const foundVeggie = veggies.find(
        (veggie) => {
            if (veggie.id === order.veggieId) {
                return true
            } 
            return false
        }
    )

    let totalCost = 0
    totalCost += foundEntree.price
    totalCost += foundSide.price
    totalCost += foundVeggie.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Receipt #${order.id} = ${costString}
    </li>
    `   

}

export const Sales = () => {
    const sales = getPurchases()

    let html = `<ul>`

    const listItems = sales.map(buildOrderListItem)

    html += listItems.join("")
    html += `</ul>`
    return html
    
}

