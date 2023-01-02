import httpService from "./httpService";

export function createProductsMainSection(products) {
  httpService.post("/create-products-main-section", products);
}

export async function getProductsMainSection() {
  const products = await httpService.get("/get-products-main-section");
  return products.data;
}

export function deleteProducts() {
  httpService.delete("/delete-products");
}

export async function deleteOneDB(productId) {
  console.log("deleteOneDB");
  try {
    const product = await httpService.delete(
      `/delete-one-main-section/${productId}`
    );

    return product;
  } catch (err) {
    console.log(err);
  }
}

export function editProduct(editedProduct) {
  httpService.put("/edit-product", editedProduct);
}

const productService = {
  createProductsMainSection,
  getProductsMainSection,
  deleteProducts,
  deleteOneDB,
  editProduct,
};

export default productService;
