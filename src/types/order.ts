export interface Option {
    title: string;
    price: number;
}

export interface OptionProps {
    [key: string]: Option;
}

export interface OrderItem {
    id: string;
    totalPrice: number;
    title: string;
    price: number;
    image?: string | undefined;
    quantity: number;
    options: OptionProps;
}

export interface AddItemFunc {
    (item: OrderItem): void;
}

export interface ClearItemsFunc {
    (): void;
}

export interface OrderType {
    orders: OrderItem[];
    addItem: AddItemFunc;
    clearItems: ClearItemsFunc;
}

export interface Order {
    id: number;
    items: OrderItem[];
    date: any;
    totalPrice: number;
}

export interface AddOrderFunc {
    (order: OrderItem[]): void;
}

export interface OrderHistoryType {
    orders: Order[];
    addOrder: AddOrderFunc;
}
