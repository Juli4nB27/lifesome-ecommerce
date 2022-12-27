import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import MessageModal from "../../Components/MessageModal/MessageModal";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Components/utils/firebaseConfig";
import * as yup from "yup";
import { Formik } from "formik";

const Checkout = () => {
    const cart = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const [purchaseID, setpurchaseID] = useState("");

    const sumTotal = () => {
      let totales = cart.items.map((item) => item.total);
      const sumaTotales = totales.reduce(
        (anterior, actual) => anterior + actual,
        0
      );
      setTotal(sumaTotales);
    };
  
    const schemeYup = yup
      .object()
      .shape({
        nombre: yup.string().required("Requerido"),
        apellido: yup.string().required("Requerido"),
        telefono: yup.string().required("Requerido"),
        email: yup.string().email().required("Requerido"),
        confirmacionEmail:yup.string().email().required("Requerido"),
      })
      .required();
  
    const submitHandler = (values, resetForm) => {
      const orden ={
          comprador:{...values},
          productos: cart.items.map((item) => ({
            id: item.id,
            title: item.title,
            count: item.count,
            price: item.price,
          })),    
        };
      const ordenDeCompra = collection(db, "ordenes");
      addDoc(ordenDeCompra, orden).then(({ id }) => setpurchaseID(id));
      resetForm();
    };
    useEffect(() => {
      sumTotal();
    }, [cart]);
   

    return (
        <div className="contentCheckout">
          <div className="contentFormCheck">
            <h3 className="titleForm">Identificacion</h3>
            <Formik
              initialValues={{
                nombre: "",
                apellido: "",
                telefono: "",
                email: "",
                confirmacionEmail:"",
              }}
              onSubmit={(values, { resetForm}) => submitHandler(values, resetForm)}
              validationSchema={schemeYup}
              
            >
              {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isValid
              }) => (
                <div className="contentForm">
                  <form className="contentInputs" onSubmit={handleSubmit}>
                    <input
                      placeholder="Nombre"
                      name="nombre"
                      type="text"
                      onChange={handleChange}
                      value={values.nombre}
                      onBlur={handleBlur}
                      required
                    />
    
                    <input
                      placeholder="Apellidos"
                      name="apellido"
                      type="text"
                      onChange={handleChange}
                      value={values.apellido}
                      onBlur={handleBlur}
                      required
                    />
    
                    <input
                      placeholder="Telefono"
                      name="telefono"
                      type="text"
                      onChange={handleChange}
                      value={values.telefono}
                      onBlur={handleBlur}
                      required
                    />
    
                    <input
                      placeholder="Email"
                      className="email"
                      name="email"
                      type="email"
                      onChange={handleChange}
                      value={values.email}
                      onBlur={handleBlur}
                      required
                    />
                    <input
                      placeholder="Repetir email"
                      className="email"
                      name="confirmacionEmail"
                      type="email"
                      onChange={handleChange}
                      value={values.confirmacionEmail}
                      onBlur={handleBlur}
                      required
                    />
                    <p className={values.email !== values.confirmacionEmail ? 'errorMail' : 'disable'}>
                      Los emails deben ser iguales!
                    </p>
                    <input
                      type="submit"
                      className={values.email !== values.confirmacionEmail ? 'btnComprarAhoraDisable' : 'btnComprarAhora'}
                      value="Comprar ahora"
                      disabled={values.email !== values.confirmacionEmail ? isValid : !isValid}
                      
                    />
                  </form>
                  {purchaseID && <MessageModal purchaseID={purchaseID} />}
                </div>
                )}
                </Formik>
              </div>
              <div className="contentDetalleCheck">
                <h3 className="titleResumenCompra">Resumen de la compra</h3>
                <div className="contentItemsCheck">
                  {cart.items.map((item) => (
                    <div key={item.id} className="itemEnCheckout">
                      <div className="contentImagenCheckout">
                        <img src={item.image} alt="img" className="cartImagenCheckout"/>
                      </div>
                      <div className="contentInfoCheckout">
                        <div className="contentTituloCheckout">
                          <p className="titleCheckout">{item.title}</p>
                        </div>
                        <div className="contentCantAndPrecio">
                          <p className=" pCountCheck">
                            Cantidad: {item.count}
                          </p>
                          <p className="pPriceCheck">
                            SubTotal: ${item.price * item.count}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="contentTotal">
                  <p className="totalCheck">Total: ${total}</p>
                  <Link className="linkVolverProd" onClick={(cart.clearItems)} to='/' ><button  className='btnVolverInicio'>Volver al inicio</button></Link>
                </div>
              </div>
            </div>
          );
        };
        export default Checkout;