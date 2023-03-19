export class ProductModelDomain {
  nameProduct: string;
  priceProduct: number;
  stockProduct: number;

  constructor(name: string, price: number, stock: number) {
    if (price <= 0) {
      throw new Error('Price must be greater than zero.');
    }

    if (stock <= 0) {
      throw new Error('Stock must be greater than zero.');
    }

    if (name.trim().length < 5) {
      throw new Error('Name must be at least 5 characters long.');
    }

    this.nameProduct = name;
    this.priceProduct = price;
    this.stockProduct = stock;
  }
}
