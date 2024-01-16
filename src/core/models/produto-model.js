class Produto{

    constructor(id, name, price, description, sector, stock, created_at, img_path,amount ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.sector = sector;
        this.stock = stock;
        this.created_at = created_at;
        this.img_path = img_path;
        this.amount = amount
      }
}

export default Produto