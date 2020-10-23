import React, { createContext, useState, useMemo } from 'react';

import { OrderType, OrderItem } from 'types/order';

const defaultContext: OrderType = {
    orders: [],
    addItem: (item: OrderItem): void => {},
    clearItems: (): void => {},
};

const OrderContext = createContext<OrderType>(defaultContext);

const OrderProvider: React.FC = ({ children }) => {
    const [orders, setOrders] = useState<OrderItem[]>([]);

    const defaultValue: OrderType = useMemo(() => {
        const addItem = (item: OrderItem): void => {
            const updatedOrders: OrderItem[] = [...orders];
            updatedOrders.push(item);

            setOrders(updatedOrders);
        };

        const clearItems = (): void => {
            setOrders([]);
        };

        return {
            orders,
            addItem,
            clearItems,
        };
    }, [orders, setOrders]);

    return <OrderContext.Provider value={defaultValue}>{children}</OrderContext.Provider>;
};

export { OrderContext, OrderProvider };
