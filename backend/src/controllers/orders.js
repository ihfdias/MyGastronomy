import OrdersDataAccess from '../dataAccess/orders.js'
import { ok, serverError } from '../helpers/httpResponse.js'

export default class OrdersControllers {
    constructor() {
        this.dataAcess = new OrdersDataAccess()
    }

    async getOrders() {
        try {
            const orders = await this.dataAcess.getOrders()

            return ok(orders)
        } catch (error) {
            return serverError(error)
        }
    }

        async getOrdersByUserId(userId) {
        try {
            const orders = await this.dataAcess.getOrdersByUserId(userId)

            return ok(orders)
        } catch (error) {
            return serverError(error)
        }
    }

    async addOrder(orderData) {
        try {
            const result = await this.dataAcess.addOrder(orderData)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }


    async deleteOrder(orderId) {
        try {
            const result = await this.dataAcess.deleteOrder(orderId)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

    async updateOrder(userId, orderData) {
        try {
            const result = await this.dataAcess.updateOrder(userId, orderData)

            return ok(result)
        } catch (error) {
            return serverError(error)
        }
    }

}
