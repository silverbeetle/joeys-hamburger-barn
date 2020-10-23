import React, { createContext, useState, useMemo } from 'react';
import moment from 'moment';

import { OrderHistoryType, Order, OrderItem } from 'types/order';

const defaultContext: OrderHistoryType = {
    orders: [],
    addOrder: (order: OrderItem[]): void => {},
};

const OrderHistoryContext = createContext<OrderHistoryType>(defaultContext);

const OrderHistoryProvider: React.FC = ({ children }) => {
    const [orders, setOrders] = useState<Order[]>([]);

    const defaultValue: OrderHistoryType = useMemo(() => {
        const addOrder = (order: OrderItem[]): void => {
            const updatedOrders: Order[] = [...orders];

            const reducer = (accumulator: number, currentValue: OrderItem) => accumulator + currentValue.totalPrice;
            const totalPrice = order.reduce(reducer, 0);

            const newOrder: Order = {
                id: Date.now(),
                items: order,
                date: moment().format(),
                totalPrice,
            };
            updatedOrders.push(newOrder);

            setOrders(updatedOrders);
        };

        return {
            orders,
            addOrder,
        };
    }, [orders, setOrders]);

    return <OrderHistoryContext.Provider value={defaultValue}>{children}</OrderHistoryContext.Provider>;
};

export { OrderHistoryContext, OrderHistoryProvider };
