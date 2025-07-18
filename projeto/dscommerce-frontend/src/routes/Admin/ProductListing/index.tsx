import editIcon from "../../../assets/edit.svg";
import deleteIcon from "../../../assets/delete.svg";
import "./styles.css";
import * as productService from "../../../services/product-service";
import { useEffect, useState } from "react";
import type { ProductDTO } from "../../../models/product";
import SearchBar from "../../../components/SearchBar";
import ButtonNextPage from "../../../components/ButtonNextPage";
import { DaialogInfo } from "../../../components/DaialogInfo";
import { DaialogConfirmation } from "../../../components/DaialogConfirmation";
import ButtonInverse from "../../../components/ButtonInverse";
import { useNavigate } from "react-router-dom";

type QueryParams = {
  page: number;
  name: string;
};

export default function ProductListing() {
  const [daialogInfoData, setDaialogInfoData] = useState({
    visible: false,
    message: "Operação com sucesso!",
  });

  const [daialogConfirmationData, setDaialogConfirmationData] = useState({
    visible: false,
    id: 0,
    message: "Tem certeza?",
  });

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: "",
  });

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    productService
      .findPageRequest(queryParams.page, queryParams.name)
      .then((response) => {
        const nextPage = response.data.content;
        setProducts(products.concat(nextPage));
        setIsLastPage(response.data.last);
      });
  }, [queryParams]);

  function handleSearch(searchText: string) {
    setProducts([]);
    setQueryParams({ ...queryParams, page: 0, name: searchText });
  }

  function handleNextPageClick() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 });
  }

  function handleDaialogInfoClose() {
    setDaialogInfoData({ ...daialogInfoData, visible: false });
  }

  function handleDeleteClick(id: number) {
    setDaialogConfirmationData({
      ...daialogConfirmationData,
      id: id,
      visible: true,
    });
  }

  function handleUpdateClick(id: number) {
    navigate(`/admin/products/${id}`)
  }

  const navigate = useNavigate()

  function handleNewProductClick() {
    navigate("/admin/products/create")
  }

  function handleDaialogConfirmationAnswer(answer: boolean, id: number) {
    if (answer)
      productService
        .deleteById(id)
        .then(() => {
          setProducts([]);
          setQueryParams({ ...queryParams, page: 0 });
        })
        .catch((error) => {
          setDaialogInfoData({
            visible: true,
            message: `${error.response.data.error}`,
          });
        });

    setDaialogConfirmationData({ ...daialogConfirmationData, visible: false });
  }

  return (
    <>
      <main>
        <section id="product-listing-section" className="dsc-container">
          <h2 className="dsc-section-title dsc-mb20">Cadastro de produtos</h2>

          <div className="dsc-btn-page-container dsc-mb20">
            <div onClick={handleNewProductClick}>
              <ButtonInverse text="Novo" />
            </div>
          </div>

          <SearchBar onSearch={handleSearch} />

          <table className="dsc-table dsc-mb20 dsc-mt20">
            <thead>
              <tr>
                <th className="dsc-tb576">ID</th>
                <th></th>
                <th className="dsc-tb768">Preço</th>
                <th className="dsc-txt-left">Nome</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="dsc-tb576">{product.id}</td>
                  <td>
                    <img
                      className="dsc-product-listing-image"
                      src={product.imgUrl}
                      alt={product.name}
                    />
                  </td>
                  <td className="dsc-tb768">R$ {product.price.toFixed(2)}</td>
                  <td className="dsc-txt-left">{product.name}</td>
                  <td>
                    <img
                    onClick={() => handleUpdateClick(product.id)}
                      className="dsc-product-listing-btn"
                      src={editIcon}
                      alt="Editar"
                    />
                  </td>
                  <td>
                    <img
                      className="dsc-product-listing-btn"
                      src={deleteIcon}
                      alt="Deletar"
                      onClick={() => handleDeleteClick(product.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {!isLastPage && (
            <div onClick={handleNextPageClick}>
              <ButtonNextPage />
            </div>
          )}
        </section>
        {daialogInfoData.visible && (
          <DaialogInfo
            message={daialogInfoData.message}
            onDaialogClose={handleDaialogInfoClose}
          />
        )}

        {daialogConfirmationData.visible && (
          <DaialogConfirmation
            id={daialogConfirmationData.id}
            message={daialogConfirmationData.message}
            onDaialogAnswer={handleDaialogConfirmationAnswer}
          />
        )}
      </main>
    </>
  );
}
