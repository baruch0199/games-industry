import httpService from "./httpService";
import { axiosPost } from "./httpService";

export async function createProduct(product) {
  return await axiosPost("/create-product", product);
}

export async function getCartProducts() {
  const products = await httpService.get("/get-user-products");
  return products;
}

export function buyProducts() {
  httpService.delete("/buy-products");
}

export async function deleteOne(productId) {
  console.log("service");
  try {
    await httpService.delete(`/delete-one-user-products/${productId}`);
  } catch (err) {
    console.log(err);
  }
}

const productServiceUser = {
  createProduct,
  getCartProducts,
  buyProducts,
  deleteOne,
};

export default productServiceUser;
