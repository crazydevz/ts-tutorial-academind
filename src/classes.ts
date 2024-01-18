class Product {
	private isListed: boolean;

	constructor(public title: string, public price: number) {
		this.isListed = true;
	}

	printProductDetails() {
		console.log(this.isListed, this.title, this.price);
	}
}

new Product('title', 1300).printProductDetails();
